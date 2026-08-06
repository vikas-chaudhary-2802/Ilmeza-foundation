import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/data/siteConfig";
import {
  PenLine, Sparkles, Send, CheckCircle2, Eye, Users2, Megaphone,
  BadgeCheck, Network, FileText,
} from "lucide-react";

const accepted = [
  "Research Papers", "Review Articles", "Policy Papers", "Case Studies",
  "Opinion Articles", "Field Research", "Project Reports",
  "Community-Based Research", "Educational Resources",
];

const reasons = [
  { icon: Megaphone, text: "Share research with a wider audience beyond academia." },
  { icon: CheckCircle2, text: "Contribute to evidence-based social development." },
  { icon: Users2, text: "Support policymakers, practitioners and community organizations." },
  { icon: Eye, text: "Increase the visibility and accessibility of your work." },
  { icon: Network, text: "Join a growing network of researchers and changemakers." },
];

const steps = [
  { n: "01", title: "Submit", desc: "Send us your manuscript details through the form below." },
  { n: "02", title: "Editorial Review", desc: "Our editorial team reviews for quality, originality and relevance." },
  { n: "03", title: "Publish", desc: "Accepted work is published and shared across our Knowledge Hub." },
];

const types = ["Research Paper", "Review Article", "Policy Paper", "Case Study", "Opinion Article", "Field Research", "Project Report", "Community-Based Research", "Educational Resource"];

const Publish = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", siteConfig.brand.contact.web3formsKey);
    formData.append("subject", "New submission — Ilmeza Knowledge Hub");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Submission Received", description: "Thank you! Our editorial team will review your work and get back to you." });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({ title: "Submission Error", description: data.message || "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Connection Error", description: "Please check your internet and try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[hsl(226,40%,98%)] to-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="section-eyebrow mb-6 justify-center"><PenLine size={16} /> Publish With Us</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight tracking-tight">
              Turn Knowledge into <span className="text-accent">Impact.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ilmeza Foundation welcomes original contributions from researchers, academicians, faculty,
              students, professionals, healthcare experts, legal practitioners, environmentalists and
              policy experts. We invite submissions that promote knowledge, encourage dialogue, and
              contribute to positive social change.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What we accept */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <FadeIn direction="right">
              <span className="section-eyebrow mb-4"><FileText size={16} /> We Accept</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                A Home for <span className="text-accent">Diverse Voices</span> & Evidence
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                All submissions undergo an editorial review to ensure quality, originality, and relevance
                before publication.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {accepted.map((a) => (
                  <span key={a} className="inline-flex items-center gap-2 bg-white border border-border/60 text-primary/80 text-sm font-medium px-4 py-2 rounded-full">
                    <BadgeCheck size={15} className="text-accent" /> {a}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="space-y-4">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-5 p-6 rounded-2xl bg-white border border-border/60 shadow-sm">
                    <span className="text-3xl font-serif font-bold text-accent shrink-0">{s.n}</span>
                    <div>
                      <h3 className="font-serif font-bold text-primary text-lg">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why publish */}
      <section className="py-20 md:py-28 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 brand-dots opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-3">
              <Sparkles size={16} /> Why Publish With Ilmeza?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Your Work, Amplified</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <FadeIn key={r.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="w-10 h-10 rounded-xl bg-cyan/15 text-cyan flex items-center justify-center shrink-0">
                    <r.icon size={20} />
                  </span>
                  <p className="text-white/85 leading-relaxed">{r.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Submission form */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <span className="section-eyebrow mb-4 justify-center"><Send size={16} /> Submit Your Work</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Ready to <span className="text-accent">Contribute?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-border/60 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Full Name</label>
                    <Input name="name" required placeholder="Author name" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Email</label>
                    <Input name="email" type="email" required placeholder="you@example.com" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Affiliation</label>
                    <Input name="affiliation" placeholder="University / organization" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Submission Type</label>
                    <select name="submission_type" required className="w-full h-12 rounded-xl border border-input bg-background px-3 text-sm text-primary">
                      {types.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Title of Your Work</label>
                  <Input name="title" required placeholder="Working title" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Abstract / Summary</label>
                  <Textarea name="abstract" required placeholder="A short summary of your submission (150–300 words)…" className="min-h-[150px] rounded-xl resize-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Manuscript Link <span className="text-muted-foreground font-normal">(Google Drive / Dropbox / URL)</span></label>
                  <Input name="manuscript_link" placeholder="https://…" className="h-12 rounded-xl" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 rounded-xl font-bold text-base">
                  {isSubmitting ? "Submitting…" : "Submit for Review"} <Send size={18} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  You can also email your manuscript directly to{" "}
                  <a href={`mailto:${siteConfig.brand.email}`} className="text-accent font-medium">{siteConfig.brand.email}</a>.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Publish;
