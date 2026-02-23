import FadeIn from "@/components/FadeIn";
import { BookOpen, Users, Heart, Stethoscope, Home, AlertTriangle, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const programs = siteConfig.programs;

const iconMap: Record<string, any> = {
  BookOpen,
  Users,
  Heart,
  Stethoscope,
  Home,
  AlertTriangle,
};

const Programs = () => {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-10 scale-105" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <p className="text-sm font-sans-body font-bold tracking-[0.2em] uppercase text-accent mb-6">Our Work</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground leading-tight tracking-tight">
              Impact Through <span className="text-gradient-gold">Action.</span>
            </h1>
            <p className="mt-8 text-xl text-primary-foreground/70 font-sans-body leading-relaxed max-w-2xl mx-auto font-light">
              Each program is designed with care, backed by research, and driven by community needs for sustainable outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {programs.map((prog, i) => (
              <FadeIn key={prog.title} delay={i * 0.1}>
                <div className="group glass-card p-10 md:p-14 rounded-[2.5rem] border-white/40 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      {(() => {
                        const Icon = iconMap[prog.iconName] || BookOpen;
                        return <Icon className="w-8 h-8" strokeWidth={1.5} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{prog.title}</h3>
                      <p className="text-sm font-sans-body font-bold text-accent uppercase tracking-widest mb-4">Goal: {prog.goal}</p>
                      <p className="text-foreground font-light leading-relaxed mb-8 italic">
                        "{prog.desc}"
                      </p>
                      <div className="space-y-4">
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider">What we do:</p>
                        <ul className="grid grid-cols-1 gap-3">
                          {prog.points.map((point) => (
                            <li key={point} className="flex items-start gap-3 group/item">
                              <ChevronRight className="w-4 h-4 text-accent mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                              <span className="text-sm text-foreground/80 font-medium">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Goals Banner */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6 underline underline-offset-[12px] decoration-accent/30">Commitment to Global Goals</h2>
            <p className="text-lg text-muted-foreground font-light italic leading-relaxed">
              "We align our initiatives with sustainable development goals, ensuring that every effort resonates with the global vision for a better planet."
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Programs;
