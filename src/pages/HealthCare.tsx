import { siteConfig } from "@/data/siteConfig";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart, Stethoscope, Users, CheckCircle2, ArrowRight, ShieldCheck,
  HandHeart, Megaphone, Handshake, Ribbon,
} from "lucide-react";

const involveIcons = [Users, Handshake, Heart, Megaphone];
const focusPhotos = ["/images/gallery/health-awareness.jpg", "/images/gallery/women-seated.jpg"];

const HealthCare = () => {
  const { healthCare } = siteConfig;

  return (
    <main className="pt-20 bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[hsl(226,40%,98%)]">
        <div className="absolute top-10 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-[0.18em] text-accent uppercase bg-accent/10 rounded-full">
                <Ribbon className="w-4 h-4" /> Ilmeza Women Health Initiative
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-primary leading-[1.1]">
                {healthCare.title}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {healthCare.subtitle}
              </p>
              <p className="mt-5 text-primary/80 leading-relaxed max-w-xl">{healthCare.mission}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/join">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-7 rounded-md text-base font-bold shadow-md">
                    <HandHeart size={18} className="mr-2" /> Volunteer With Us
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="outline" className="h-12 px-7 rounded-md text-base font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white">
                    Support This Cause
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img src="/images/gallery/women-listening.jpg" alt="Women at an Ilmeza health awareness session" className="w-full h-[360px] md:h-[440px] object-cover" />
                </div>
                <div className="absolute -bottom-5 left-6 bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3">
                  <ShieldCheck className="w-9 h-9 text-accent" />
                  <p className="text-sm font-semibold text-primary leading-tight">Early detection<br />saves lives.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="right" className="lg:col-span-6">
              <img src="/images/gallery/health-session.jpg" alt="Community health session" className="rounded-3xl w-full h-[380px] object-cover shadow-lg" />
            </FadeIn>
            <FadeIn direction="left" className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Why This Matters</span>
              <h2 className="mt-3 text-2xl md:text-4xl font-serif font-bold text-primary leading-tight">
                {healthCare.importance.title}
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{healthCare.importance.description}</p>
              <div className="mt-6 border-l-4 border-accent bg-[hsl(226,40%,98%)] rounded-r-xl p-5">
                <p className="text-primary font-medium italic">{healthCare.importance.highlight}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Focus areas ── */}
      <section className="py-16 md:py-24 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Our Focus</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-primary">
              Two Cancers. One Preventable Story.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Breast and cervical cancer are among the leading causes of death among women in India —
              yet both are highly treatable when caught early. Here's where we focus.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {healthCare.focusAreas.map((area, index) => (
              <div key={area.id} className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                    <img src={focusPhotos[index] || area.image} alt={area.title} className="w-full h-[320px] md:h-[400px] object-cover" />
                    <span className="absolute top-4 left-4 bg-white/95 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                      Focus 0{index + 1}
                    </span>
                  </div>
                </FadeIn>

                <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">{area.title}</h3>
                  <div className="w-16 h-1.5 bg-accent rounded-full mt-4 mb-6" />
                  <div className="space-y-3">
                    {area.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 w-6 h-6 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <span className="text-primary/80 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {area.id === "breast-cancer" && area.extraImage && (
                    <div className="mt-8 bg-white rounded-2xl p-6 border border-border/60 shadow-sm">
                      <h4 className="text-primary font-serif font-bold flex items-center gap-2 mb-4">
                        <Stethoscope className="w-5 h-5 text-accent" /> Breast Self-Examination Guide
                      </h4>
                      <img src={area.extraImage} alt="Breast self-examination guide" className="w-full rounded-xl border border-border/60" />
                      <p className="mt-3 text-sm text-muted-foreground text-center italic">
                        Recommended monthly — a few minutes that can make all the difference.
                      </p>
                    </div>
                  )}
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <FadeIn className="lg:col-span-1">
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">How We Work</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">{healthCare.approach.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{healthCare.approach.description}</p>
            </FadeIn>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {healthCare.approach.items.map((item, index) => (
                <FadeIn key={index} delay={index * 0.08}>
                  <div className="card-lift h-full bg-white rounded-2xl p-6 border border-border/60 shadow-sm flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Stethoscope className="w-5 h-5" />
                    </span>
                    <p className="text-primary/85 font-medium leading-relaxed">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact vision ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-navy-gradient p-10 md:p-16">
            <div className="absolute inset-0 brand-dots opacity-15" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="right">
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-cyan">{healthCare.impact.title}</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                  The Change We're Working Toward
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  A community where women feel confident, informed, and supported in every step of their health journey.
                </p>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <div className="space-y-4">
                  {healthCare.impact.items.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl p-5">
                      <span className="w-11 h-11 rounded-xl bg-cyan/15 text-cyan flex items-center justify-center shrink-0 font-serif font-bold">
                        {index + 1}
                      </span>
                      <p className="text-white/90 leading-snug font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get involved ── */}
      <section className="py-16 md:py-24 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">{healthCare.getInvolved.title}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-primary">Be Part of This Life-Saving Work</h2>
            <p className="mt-4 text-muted-foreground">{healthCare.getInvolved.description}</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {healthCare.getInvolved.items.map((item, index) => {
              const Icon = involveIcons[index % involveIcons.length];
              return (
                <FadeIn key={index} delay={index * 0.08}>
                  <div className="card-lift h-full bg-white rounded-2xl p-7 border border-border/60 shadow-sm text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-primary mb-1.5">{item.label}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">{item.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="text-center">
            <p className="text-lg font-serif font-semibold text-primary italic mb-7 max-w-2xl mx-auto">
              {healthCare.getInvolved.footer}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 rounded-md text-base font-bold">
                  Get Involved <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" className="h-12 px-8 rounded-md text-base font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white">
                  <Heart size={18} className="mr-2 fill-current" /> Donate Now
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default HealthCare;
