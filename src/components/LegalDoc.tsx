import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { legalEffectiveDate, type LegalBlock } from "@/data/legal";
import { LucideIcon } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  highlight: string;
  icon: LucideIcon;
  sections: LegalBlock[];
  otherLabel: string;
  otherTo: string;
};

const LegalDoc = ({ eyebrow, title, highlight, icon: Icon, sections, otherLabel, otherTo }: Props) => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-navy-gradient">
        <div className="absolute inset-0 brand-dots opacity-[0.12]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-cyan/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-5">
              <Icon size={16} /> {eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-white">
              {title} <span className="text-cyan">{highlight}</span>
            </h1>
            <p className="mt-4 text-white/70">Effective Date: {legalEffectiveDate}</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-border/60 shadow-sm space-y-7">
              {sections.map((s, i) => (
                <div key={i}>
                  {s.h && <h2 className="text-lg md:text-xl font-serif font-bold text-primary mb-2">{s.h}</h2>}
                  {s.p && <p className="text-muted-foreground leading-relaxed">{s.p}</p>}
                  {s.list && (
                    <ul className="mt-2 space-y-2">
                      {s.list.map((li) => (
                        <li key={li} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to={otherTo} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors">
                Read our {otherLabel} →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default LegalDoc;
