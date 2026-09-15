import { randomUUID } from "node:crypto";

const MIN_DONATION_RUPEES = 10;
const MAX_DONATION_RUPEES = 500_000;

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: Record<string, unknown>) => unknown;
};

type RazorpayOrder = {
  id?: string;
  amount?: number;
  currency?: string;
  error?: { code?: string };
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

const cleanText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method not allowed." });
  }

  const keyId = process.env.RAZORPAY_KEY_ID?.trim();
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();

  if (!keyId || !keySecret) {
    return sendJson(response, 503, {
      error: "Online donations are being configured. Please use the UPI option for now.",
    });
  }

  const body = getBody(request);
  const amount = Number(body.amount);

  if (!Number.isFinite(amount) || amount < MIN_DONATION_RUPEES || amount > MAX_DONATION_RUPEES) {
    return sendJson(response, 400, {
      error: `Donation amount must be between INR ${MIN_DONATION_RUPEES} and INR ${MAX_DONATION_RUPEES}.`,
    });
  }

  const amountInPaise = Math.round(amount * 100);
  const donorName = cleanText(body.name, 80);
  const donorEmail = cleanText(body.email, 254);
  const donorContact = cleanText(body.contact, 20).replace(/[^\d+]/g, "");
  const receipt = `don_${Date.now()}_${randomUUID().slice(0, 8)}`;

  const notes: Record<string, string> = { purpose: "Donation to Ilmeza Foundation" };
  if (donorName) notes.donor_name = donorName;
  if (donorEmail) notes.donor_email = donorEmail;
  if (donorContact) notes.donor_contact = donorContact;

  try {
    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt,
        notes,
      }),
    });

    const order = (await razorpayResponse.json()) as RazorpayOrder;
    if (!razorpayResponse.ok) {
      console.error("Razorpay order creation failed", razorpayResponse.status, order?.error?.code);
      return sendJson(response, 502, {
        error: "We could not start the secure payment. Please try again or use UPI.",
      });
    }

    if (!order.id || typeof order.amount !== "number" || order.currency !== "INR") {
      console.error("Razorpay returned an incomplete order response");
      return sendJson(response, 502, {
        error: "We could not start the secure payment. Please try again or use UPI.",
      });
    }

    return sendJson(response, 200, {
      keyId,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Razorpay order request failed", error);
    return sendJson(response, 502, {
      error: "The payment service is temporarily unavailable. Please try again or use UPI.",
    });
  }
}
