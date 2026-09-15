import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Copy,
  CreditCard,
  Heart,
  IndianRupee,
  Landmark,
  Loader2,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/siteConfig";
import { useToast } from "@/hooks/use-toast";
import { loadRazorpayCheckout, type RazorpayPaymentResponse } from "@/lib/razorpay";

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

type PaymentResult = {
  amount: number;
  paymentId: string;
  captured: boolean;
};

const formatRupees = (amount: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);

const Donate = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("1000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [copied, setCopied] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null);

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.brand.donate.upiId);
      setCopied(true);
      toast({
        title: "UPI ID copied",
        description: "You can paste it into any UPI payment app.",
      });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Could not copy automatically",
        description: `UPI ID: ${siteConfig.brand.donate.upiId}`,
        variant: "destructive",
      });
    }
  };

  const handlePayment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const donationAmount = Number(amount);

    if (!Number.isFinite(donationAmount) || donationAmount < 10) {
      toast({
        title: "Enter a valid donation amount",
        description: "The minimum online donation is INR 10.",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);

    try {
      const [checkoutLoaded, orderResponse] = await Promise.all([
        loadRazorpayCheckout(),
        fetch("/api/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: donationAmount, name, email, contact }),
        }),
      ]);

      if (!checkoutLoaded || !window.Razorpay) {
        throw new Error("Secure checkout could not load. Please check your connection and try again.");
      }

      const orderData = await orderResponse.json().catch(() => ({}));
      if (!orderResponse.ok) {
        throw new Error(orderData.error || "We could not start the payment. Please try again.");
      }
      if (!orderData.keyId || !orderData.orderId || typeof orderData.amount !== "number") {
        throw new Error("Online donations are being configured. Please use the UPI option for now.");
      }

      const RazorpayCheckout = window.Razorpay;
      const checkout = new RazorpayCheckout({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: "INR",
        name: siteConfig.brand.name,
        description: "Supporting education, health and community care",
        image: `${window.location.origin}${siteConfig.brand.logoPath}`,
        order_id: orderData.orderId,
        prefill: {
          name: name.trim() || undefined,
          email: email.trim() || undefined,
          contact: contact.trim() || undefined,
        },
        notes: { purpose: `Donation to ${siteConfig.brand.name}` },
        theme: { color: "#b43fc3" },
        retry: { enabled: true },
        modal: {
          ondismiss: () => setProcessing(false),
        },
        handler: async (razorpayResponse: RazorpayPaymentResponse) => {
          try {
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(razorpayResponse),
            });
            const verifyData = await verifyResponse.json().catch(() => ({}));

            if (!verifyResponse.ok || !verifyData.verified) {
              setPaymentResult({
                amount: donationAmount,
                paymentId: razorpayResponse.razorpay_payment_id,
                captured: false,
              });
              toast({
                title: "Payment received, confirmation pending",
                description: `Please keep payment ID ${razorpayResponse.razorpay_payment_id}.`,
              });
              return;
            }

            setPaymentResult({
              amount: verifyData.amount / 100,
              paymentId: verifyData.paymentId,
              captured: verifyData.captured,
            });
            toast({
              title: "Thank you for your donation",
              description: "Your Razorpay payment has been securely verified.",
            });
          } catch {
            setPaymentResult({
              amount: donationAmount,
              paymentId: razorpayResponse.razorpay_payment_id,
              captured: false,
            });
          } finally {
            setProcessing(false);
          }
        },
      });

      checkout.on("payment.failed", (failure) => {
        setProcessing(false);
        toast({
          title: "Payment was not completed",
          description: failure.error?.description || "No amount was charged. Please try again.",
          variant: "destructive",
        });
      });

      checkout.open();
    } catch (error) {
      setProcessing(false);
      toast({
        title: "Razorpay is not available yet",
        description: error instanceof Error ? error.message : "Please use the UPI option below.",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[hsl(226,40%,98%)] pt-20">
      <section className="relative overflow-hidden bg-navy-gradient text-white">
        <div className="absolute inset-0 brand-dots opacity-10" />
        <div className="absolute inset-y-0 right-0 w-1/2 border-l border-white/5 bg-white/[0.02]" />

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-20">
          <FadeIn direction="right">
            <Link
              to="/"
              className="mb-10 flex w-fit items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-cyan"
            >
              <ArrowLeft size={17} /> Back to Home
            </Link>

            <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              <Heart className="h-4 w-4 fill-current" /> Support Our Mission
            </span>
            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
              A small act can shape a lifetime.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Your contribution helps Ilmeza Foundation bring education, preventive healthcare and
              opportunity to communities that need them most.
            </p>

            <div className="mt-9 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
              <div className="bg-primary/70 p-4">
                <ShieldCheck className="mb-2 h-5 w-5 text-cyan" />
                <p className="text-sm font-semibold">Secure checkout</p>
                <p className="mt-1 text-xs text-white/55">Powered by Razorpay</p>
              </div>
              <div className="bg-primary/70 p-4">
                <Landmark className="mb-2 h-5 w-5 text-cyan" />
                <p className="text-sm font-semibold">Direct support</p>
                <p className="mt-1 text-xs text-white/55">To the foundation</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.12}>
            <div className="mx-auto max-w-xl rounded-2xl border border-white/15 bg-white p-6 text-primary shadow-2xl md:p-9">
              {paymentResult ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                    <Check className="h-10 w-10" strokeWidth={3} />
                  </div>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {paymentResult.captured ? "Donation confirmed" : "Payment received"}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-primary">Thank you for standing with us.</h2>
                  <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                    Your contribution of INR {formatRupees(paymentResult.amount)} helps turn care and
                    opportunity into real, lasting change.
                  </p>
                  {!paymentResult.captured && (
                    <p className="mt-4 max-w-sm rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
                      Razorpay is completing the final confirmation. Keep the payment ID below for your records.
                    </p>
                  )}
                  <div className="mt-7 w-full max-w-sm rounded-lg border border-border bg-muted/60 px-4 py-3 text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Payment ID</p>
                    <p className="mt-1 break-all font-mono text-sm font-semibold text-primary">{paymentResult.paymentId}</p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-7 h-11 border-primary/20 px-6 font-bold text-primary hover:bg-primary hover:text-white"
                    onClick={() => setPaymentResult(null)}
                  >
                    Make another donation
                  </Button>
                </div>
              ) : (
                <form onSubmit={handlePayment}>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Donate securely</p>
                      <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">Choose your contribution</h2>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                      <LockKeyhole className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {PRESET_AMOUNTS.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(String(preset))}
                        className={`h-12 rounded-md border text-sm font-bold transition-colors ${
                          amount === String(preset)
                            ? "border-accent bg-accent text-white shadow-md shadow-accent/20"
                            : "border-border bg-white text-primary hover:border-accent/50 hover:bg-accent/5"
                        }`}
                      >
                        INR {formatRupees(preset)}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5">
                    <Label htmlFor="donation-amount" className="text-sm font-bold text-primary">
                      Or enter another amount
                    </Label>
                    <div className="relative mt-2">
                      <IndianRupee className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="donation-amount"
                        type="number"
                        inputMode="numeric"
                        min="10"
                        max="500000"
                        step="1"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        className="h-12 pl-10 text-base font-semibold"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="donor-name" className="text-sm font-semibold text-primary">Name</Label>
                      <Input
                        id="donor-name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="mt-2 h-11"
                        autoComplete="name"
                        placeholder="Your full name"
                        maxLength={80}
                      />
                    </div>
                    <div>
                      <Label htmlFor="donor-email" className="text-sm font-semibold text-primary">Email</Label>
                      <Input
                        id="donor-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="mt-2 h-11"
                        autoComplete="email"
                        placeholder="you@example.com"
                        maxLength={254}
                      />
                    </div>
                    <div>
                      <Label htmlFor="donor-phone" className="text-sm font-semibold text-primary">Phone</Label>
                      <Input
                        id="donor-phone"
                        type="tel"
                        value={contact}
                        onChange={(event) => setContact(event.target.value)}
                        className="mt-2 h-11"
                        autoComplete="tel"
                        placeholder="10-digit number"
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={processing}
                    className="mt-7 w-full bg-accent px-6 py-6 text-base font-bold text-white shadow-lg shadow-accent/20 hover:bg-accent/90"
                  >
                    {processing ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Opening secure checkout</>
                    ) : (
                      <><LockKeyhole className="h-5 w-5" /> Donate INR {formatRupees(Number(amount) || 0)}</>
                    )}
                  </Button>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5" /> UPI</span>
                    <span className="inline-flex items-center gap-1.5"><CreditCard className="h-3.5 w-3.5" /> Cards</span>
                    <span className="inline-flex items-center gap-1.5"><Landmark className="h-3.5 w-3.5" /> Netbanking</span>
                  </div>
                  <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
                    Payments are processed by Razorpay. Ilmeza Foundation never receives or stores your card or UPI PIN.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_0.75fr]">
            <FadeIn direction="right">
              <span className="section-eyebrow">Prefer paying directly?</span>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">Scan and donate with any UPI app.</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                The foundation's existing UPI option remains available. Scan the official QR code or copy the UPI ID below.
              </p>

              <button
                type="button"
                onClick={copyUpi}
                className="mt-7 flex w-full max-w-md items-center justify-between rounded-lg border border-border bg-white p-4 text-left shadow-sm transition-colors hover:border-accent/40"
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-muted-foreground">Official UPI ID</span>
                  <span className="mt-1 block font-mono text-sm font-bold text-primary">{siteConfig.brand.donate.upiId}</span>
                </span>
                {copied ? <CheckCircle2 className="h-5 w-5 text-cyan" /> : <Copy className="h-5 w-5 text-accent" />}
              </button>

              <div className="mt-7 flex items-start gap-3 text-sm text-primary/75">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                <p>
                  Before confirming, verify that your payment app shows the foundation's official {siteConfig.brand.donate.bankName} account.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="mx-auto max-w-sm rounded-2xl border border-border bg-white p-6 shadow-xl shadow-primary/10">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <img src={siteConfig.brand.logoPath} alt={siteConfig.brand.name} className="h-9 w-auto object-contain" />
                  <img src={siteConfig.brand.donate.bankLogo} alt={siteConfig.brand.donate.bankName} className="h-6 w-auto object-contain" />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg border border-border bg-white p-3">
                  <img src={siteConfig.brand.donate.qrPath} alt="Ilmeza Foundation donation QR code" className="h-full w-full object-contain" />
                </div>
                <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Scan to support our work
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
