import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { HandHeart, Handshake, Heart, CheckCircle2 } from "lucide-react";
import InteractiveImage from "@/components/InteractiveImage";
import { siteConfig } from "@/data/siteConfig";

const opportunities = {
  volunteer: [
    "Teaching & mentoring",
    "Field volunteering",
    "Campaign support",
    "Digital volunteering",
    "Fundraising & mobilization",
  ],
  partner: [
    "Corporates (CSR Initiatives)",
    "Educational institutions",
    "NGOs & Social Enterprises",
    "Foundations & Philanthropists",
    "Government bodies & Local Authorities",
  ],
};

const GetInvolved = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4428ad6575?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <FadeIn>
            <p className="text-sm font-sans-body font-bold tracking-[0.2em] uppercase text-accent mb-6">Take Part</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground leading-tight">
              Be the <span className="text-gradient-gold italic">Change</span>
            </h1>
            <p className="mt-8 text-xl text-primary-foreground/70 font-sans-body leading-relaxed max-w-2xl mx-auto font-light">
              Join our passionate community and contribute your time, skills, and energy to transform thousands of lives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn direction="right">
              <InteractiveImage
                images={siteConfig.getInvolved.volunteer.images}
                alt={siteConfig.getInvolved.volunteer.title}
                className="aspect-square"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8">
                  <HandHeart className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">{siteConfig.getInvolved.volunteer.title}</h2>
                <p className="text-lg text-foreground leading-relaxed mb-8 font-light italic">
                  {siteConfig.getInvolved.volunteer.description}
                </p>
                <div className="space-y-4 mb-10">
                  <p className="text-sm font-bold text-foreground uppercase tracking-widest">Opportunities:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {opportunities.volunteer.map((v) => (
                      <div key={v} className="flex items-center gap-3 p-4 glass-card rounded-2xl border-accent/5">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm font-medium text-foreground">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-body text-base font-bold px-10 py-7 rounded-full transition-all duration-300 hover:scale-105">
                    Apply to Volunteer
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-24 md:py-32 bg-cream/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn direction="right" className="lg:order-2">
              <InteractiveImage
                images={siteConfig.getInvolved.partner.images}
                alt={siteConfig.getInvolved.partner.title}
                className="aspect-square"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <Handshake className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">{siteConfig.getInvolved.partner.title}</h2>
                <p className="text-lg text-foreground leading-relaxed mb-8 font-light italic">
                  {siteConfig.getInvolved.partner.description}
                </p>
                <div className="space-y-4 mb-10">
                  <p className="text-sm font-bold text-foreground uppercase tracking-widest">Global Collaborations:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {opportunities.partner.map((p) => (
                      <div key={p} className="flex items-center gap-3 p-4 glass-card rounded-2xl border-navy/5">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm font-medium text-foreground">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-body text-base font-bold px-10 py-7 rounded-full transition-all duration-300 hover:scale-105">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-24 md:py-40 bg-primary relative overflow-hidden text-center">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <FadeIn>
            <div className="w-20 h-20 rounded-3xl bg-accent/20 flex items-center justify-center text-accent mx-auto mb-10 scale-110">
              <Heart className="w-10 h-10" fill="currentColor" />
            </div>
            <h2 className="text-5xl font-serif font-bold text-primary-foreground mb-8">Fuel the Mission</h2>
            <p className="text-xl text-primary-foreground/70 leading-relaxed font-light mb-12 italic">
              "Your financial contribution directly funds education, healthcare, and empowerment programs. Every rupee creates ripples of lasting change."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body text-xl font-bold px-14 py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                Donate Now
              </Button>
            </div>
            <p className="mt-8 text-sm text-primary-foreground/40 font-sans-body uppercase tracking-[0.3em]">Secure & Direct Impact</p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
