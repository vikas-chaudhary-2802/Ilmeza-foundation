import FadeIn from "@/components/FadeIn";
import { MessageSquare, Quote, Star, Users } from "lucide-react";

const testimonials = [
  {
    quote: "The vocational training program changed my life. I now have a steady income and can support my family with dignity.",
    author: "Priya S.",
    role: "Skill Development Beneficiary",
  },
  {
    quote: "My children are finally getting the quality education they deserve. The scholarships was a blessing for us.",
    author: "Rajesh K.",
    role: "Parent of Student",
  },
  {
    quote: "The healthcare camps reach people like us who live in remote areas. Their compassion is truly inspiring.",
    author: "Meera D.",
    role: "Community Member",
  },
];

const Impact = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <p className="text-sm font-sans-body font-bold tracking-[0.2em] uppercase text-accent mb-6">Our Legacy</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground leading-tight tracking-tight">
              Evidence of <span className="text-gradient-gold italic">Change.</span>
            </h1>
            <p className="mt-8 text-xl text-primary-foreground/70 font-sans-body leading-relaxed max-w-2xl mx-auto font-light">
              Thousands of stories of hope and resilience, made possible by our community of supporters and partners.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground">Voices of Impact</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-card p-10 rounded-[2rem] border-accent/5 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2">
                  <div>
                    <Quote className="w-10 h-10 text-accent/20 mb-6" />
                    <p className="text-lg text-muted-foreground font-light leading-relaxed italic mb-8">"{t.quote}"</p>
                  </div>
                  <div>
                    <div className="flex gap-1 text-gold mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="font-serif font-bold text-foreground">{t.author}</p>
                    <p className="text-xs font-sans-body text-accent/70 uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Placeholder */}
      <section className="py-24 md:py-32 bg-cream/50 overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto p-12 md:p-20 glass-card rounded-[3rem] border-white text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary mx-auto mb-10">
                <Users className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Detailed Success Stories</h2>
              <p className="text-xl text-muted-foreground font-light mb-10 leading-relaxed max-w-2xl mx-auto">
                We are currently documenting the quantitative and qualitative impact of our latest programs. Detailed case studies will be published here soon.
              </p>
              <div className="inline-flex py-2 px-6 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-widest uppercase">
                Coming Soon to Inspire
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Impact;
