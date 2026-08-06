import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/data/siteConfig";
import {
  HandHeart, GraduationCap, Users, Handshake, ArrowRight, Send,
  Sparkles, CheckCircle2, Network, Award, Leaf,
} from "lucide-react";

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer With Us",
    desc: "Make a direct impact in communities. Support our educational programs, health awareness campaigns, environmental initiatives, legal literacy drives, and community outreach activities.",
    ideal: "Students, professionals, educators, healthcare workers, retirees, and anyone passionate about social change.",
    cta: "Become a Volunteer",
    role: "Volunteer",
  },
  {
    icon: GraduationCap,
    title: "Internship Program",
    desc: "Kick-start your career while making a meaningful difference. Gain hands-on experience in social development, project management, communications, research, and community engagement.",
    ideal: "College students, recent graduates, and young professionals.",
    cta: "Apply for Internship",
    role: "Internship",
  },
  {
    icon: Users,
    title: "Become a Member",
    desc: "Join the Ilmeza Foundation family and contribute to our long-term vision. Members stay connected with initiatives, participate in events, share ideas, and support our mission.",
    ideal: "Individuals who wish to stay actively involved in our journey and create lasting social impact.",
    cta: "Join as a Member",
    role: "Membership",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    desc: "Collaboration creates greater impact. We welcome partnerships with institutions, healthcare organizations, NGOs, corporate CSR teams, government agencies, and community groups.",
    ideal: "Institutions, corporations, government bodies, nonprofits, and community organizations.",
    cta: "Partner With Us",
    role: "Partnership",
  },
];

const benefits = [
  { icon: Leaf, text: "Contribute to meaningful and sustainable social change." },
  { icon: HandHeart, text: "Empower underserved communities across education, health, environment & law." },
  { icon: Award, text: "Develop valuable leadership, communication, and engagement skills." },
  { icon: Network, text: "Network with professionals, volunteers, and changemakers." },
  { icon: Sparkles, text: "Be part of a growing movement for a more inclusive India." },
];

const JoinUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState("Volunteer");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", siteConfig.brand.contact.web3formsKey);
    formData.append("subject", `New "${role}" application — Ilmeza Foundation`);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Application Received", description: "Thank you for stepping forward! Our team will reach out to you shortly." });
        (e.target as HTMLFormElement).reset();
        setRole("Volunteer");
      } else {
        toast({ title: "Submission Error", description: data.message || "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Connection Error", description: "Please check your internet and try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (r: string) => {
    setRole(r);
    document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery/community-meet.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-gradient opacity-[0.66]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(226,60%,10%)]/85 via-[hsl(226,60%,12%)]/25 to-[hsl(226,60%,10%)]/55" />
          <div className="absolute inset-0 brand-dots opacity-10" />
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-6">
              <HandHeart size={16} /> Join Our Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white leading-tight tracking-tight">
              Together, We Can Create <span className="text-cyan">Lasting Change.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/80 leading-relaxed">
              Whether you wish to contribute your time, skills, expertise, or resources, there is a
              place for you in our mission. Join us in creating a future with access to quality
              education, better healthcare, a cleaner environment, and greater legal awareness.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ways to join */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto">
            {ways.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.1}>
                <div className="card-lift h-full bg-white rounded-3xl p-8 border border-border/60 shadow-sm flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center text-white shadow-lg mb-6">
                    <w.icon size={26} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
                  <p className="mt-4 text-sm text-primary/70"><span className="font-semibold text-primary">Ideal for:</span> {w.ideal}</p>
                  <button
                    onClick={() => scrollToForm(w.role)}
                    className="mt-6 inline-flex items-center gap-2 self-start bg-accent/10 text-accent hover:bg-accent hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    {w.cta} <ArrowRight size={16} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20 md:py-28 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 brand-dots opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-3">
              <Sparkles size={16} /> Why Join Ilmeza Foundation?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Every Contribution Matters</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <FadeIn key={b.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="w-10 h-10 rounded-xl bg-cyan/15 text-cyan flex items-center justify-center shrink-0">
                    <b.icon size={20} />
                  </span>
                  <p className="text-white/85 leading-relaxed">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="join-form" className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <FadeIn direction="right">
              <span className="section-eyebrow mb-4"><CheckCircle2 size={16} /> Get Started</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                Ready to Become a <span className="text-accent">Catalyst for Change?</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Fill in the form and let us know how you'd like to get involved. Whether you volunteer
                for a day, intern for a few months, become a lifelong member, or partner with us on a
                larger mission — your support helps transform lives.
              </p>
              <div className="mt-8 space-y-3">
                {ways.map((w) => (
                  <button
                    key={w.role}
                    onClick={() => setRole(w.role)}
                    className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl border text-left transition-all ${
                      role === w.role
                        ? "border-accent bg-accent/5 text-primary shadow-sm"
                        : "border-border/60 text-primary/70 hover:border-accent/40"
                    }`}
                  >
                    <w.icon size={20} className={role === w.role ? "text-accent" : "text-muted-foreground"} />
                    <span className="font-semibold">{w.role}</span>
                    {role === w.role && <CheckCircle2 size={18} className="ml-auto text-accent" />}
                  </button>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-border/60 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="Application Type" value={role} />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Full Name</label>
                      <Input name="name" required placeholder="Your name" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Email</label>
                      <Input name="email" type="email" required placeholder="you@example.com" className="h-12 rounded-xl" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Phone</label>
                      <Input name="phone" placeholder="+91 …" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">City</label>
                      <Input name="city" placeholder="Your city" className="h-12 rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Organization <span className="text-muted-foreground font-normal">(if applicable)</span></label>
                    <Input name="organization" placeholder="Company / institution" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Why do you want to join as a <span className="text-accent">{role}</span>?</label>
                    <Textarea name="message" required placeholder="Tell us about your interest, skills, and availability…" className="min-h-[140px] rounded-xl resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 rounded-xl font-bold text-base">
                    {isSubmitting ? "Submitting…" : `Submit ${role} Application`} <Send size={18} className="ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your information is handled in line with our Privacy Policy and never shared.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;
