import { createHmac, timingSafeEqual } from "node:crypto";

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: Record<string, unknown>) => unknown;
};

type RazorpayPayment = {
  id?: string;
  order_id?: string;
  amount?: number;
  currency?: string;
  status?: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const sendJson = (response: ApiResponse, status: number, body: Record<string, unknown>) => {
  response.setHeader("Cache-Control", "no-store");
  return response.status(status).json(body);
};

const getBody = (request: ApiRequest): Record<string, unknown> => {
  if (typeof request.body === "string") {
    try {
      const parsed: unknown = JSON.parse(request.body);
      return isRecord(parsed) ? parsed : {};
    } catch {
      return {};
    }
  }
  return isRecord(request.body) ? request.body : {};
};

const safeSignatureMatch = (expected: string, received: string) => {
  const expectedBuffer = Buffer.from(expected, "hex");
  const receivedBuffer = Buffer.from(received, "hex");
  return expectedBuffer.length === receivedBuffer.length && timingSafeEqual(expectedBuffer, receivedBuffer);
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method not allowed." });
  }

  const keyId = process.env.RAZORPAY_KEY_ID?.trim();
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();
  if (!keyId || !keySecret) {
    return sendJson(response, 503, { error: "Payment verification is not configured." });
  }

  const body = getBody(request);
  const orderId = typeof body.razorpay_order_id === "string" ? body.razorpay_order_id : "";
  const paymentId = typeof body.razorpay_payment_id === "string" ? body.razorpay_payment_id : "";
  const signature = typeof body.razorpay_signature === "string" ? body.razorpay_signature : "";

  if (!orderId || !paymentId || !signature) {
    return sendJson(response, 400, { error: "Incomplete payment verification details." });
  }

  const expectedSignature = createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  if (!safeSignatureMatch(expectedSignature, signature)) {
    console.warn("Rejected payment with invalid Razorpay signature", { orderId, paymentId });
    return sendJson(response, 400, { error: "Payment verification failed." });
  }

  try {
    const paymentResponse = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      },
    });
    const payment = (await paymentResponse.json()) as RazorpayPayment;

    if (
      !paymentResponse.ok ||
      !payment.id ||
      typeof payment.amount !== "number" ||
      payment.order_id !== orderId ||
      payment.currency !== "INR"
    ) {
      console.error("Razorpay payment lookup did not match", paymentResponse.status, { orderId, paymentId });
      return sendJson(response, 502, {
        error: "Your payment was received, but confirmation is pending. Please keep the payment ID.",
      });
    }

    return sendJson(response, 200, {
      verified: true,
      captured: payment.status === "captured",
      status: payment.status,
      paymentId: payment.id,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error("Razorpay payment verification lookup failed", error);
    return sendJson(response, 502, {
      error: "Your payment was received, but confirmation is pending. Please keep the payment ID.",
    });
  }
}
