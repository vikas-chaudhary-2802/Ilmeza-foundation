import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/data/siteConfig";
import { ShieldCheck, ArrowLeft, ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);

    const copyUpi = () => {
        navigator.clipboard.writeText(siteConfig.brand.donate.upiId);
        setCopied(true);
        toast({
            title: "UPI ID Copied",
            description: "You can now paste it in your payment app.",
        });
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-primary pt-28 pb-20 overflow-hidden relative">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-navy-light rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors mb-12 group">
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <FadeIn direction="right">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6">
                                    Support Our Mission
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-8">
                                    Your Contribution <br />
                                    <span className="text-gradient-gold italic">Changes Lives.</span>
                                </h1>
                                <p className="text-xl text-primary-foreground/70 font-light leading-relaxed mb-10 max-w-lg">
                                    Every donation directly funds our education, healthcare, and skill development programs. Together, we can build a more just and inclusive society.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-6 glass-card border-white/10 rounded-2xl bg-white/5">
                                        <ShieldCheck className="text-accent w-8 h-8 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">Secure & Transparent</h3>
                                            <p className="text-primary-foreground/60 text-sm">Your donations go directly to the foundation's official {siteConfig.brand.donate.bankName} account.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative">
                                {/* QR Display Card */}
                                <div className="p-1 glass-card rounded-[3rem] border-white/20 bg-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="bg-white p-8 rounded-[2.5rem] relative z-10">
                                        <div className="flex justify-between items-center mb-6">
                                            <img src={siteConfig.brand.logoPath} alt="Ilmeza" className="h-8 object-contain" />
                                            <img src={siteConfig.brand.donate.bankLogo} alt="Federal Bank" className="h-4 object-contain opacity-50" />
                                        </div>

                                        <div className="relative aspect-square mb-8 rounded-2xl overflow-hidden border-2 border-slate-100 p-4">
                                            <img
                                                src={siteConfig.brand.donate.qrPath}
                                                alt="Donation QR Code"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <div
                                                onClick={copyUpi}
                                                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-all group/upi"
                                            >
                                                <div>
                                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">UPI ID</p>
                                                    <p className="font-mono text-sm font-bold text-slate-800">{siteConfig.brand.donate.upiId}</p>
                                                </div>
                                                {copied ? (
                                                    <CheckCircle2 size={18} className="text-green-500" />
                                                ) : (
                                                    <Copy size={18} className="text-slate-400 group-hover/upi:text-accent transition-colors" />
                                                )}
                                            </div>

                                            <div className="text-center pt-2">
                                                <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">Scan to pay with any app</p>
                                                <div className="flex justify-center gap-4 mt-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" className="h-4" alt="UPI" />
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" className="h-4" alt="GPay" />
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png" className="h-4" alt="Paytm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Counterpart for mobile hint */}
                                <p className="text-center mt-6 text-primary-foreground/40 text-sm font-light italic">
                                    Take a screenshot and scan from your gallery in any UPI app.
                                </p>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Donate;
