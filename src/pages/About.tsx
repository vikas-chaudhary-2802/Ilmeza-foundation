import FadeIn from "@/components/FadeIn";
import { Target, Eye, Heart, Shield, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import InteractiveImage from "@/components/InteractiveImage";
import { siteConfig } from "@/data/siteConfig";

const values = [
  { icon: Heart, title: "Compassion & Humanity", desc: "Driven by empathy for every individual we serve." },
  { icon: Users, title: "Inclusion & Equality", desc: "Equal opportunity regardless of background." },
  { icon: Shield, title: "Integrity & Transparency", desc: "Complete transparency in all our operations." },
  { icon: Lightbulb, title: "Social Responsibility", desc: "Our commitment to the betterment of society." },
  { icon: Target, title: "Sustainable Development", desc: "Creating long-term social impact through sustainable efforts." },
  { icon: CheckCircle2, title: "Community Partnership", desc: "Working hand-in-hand with those we serve." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cream -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <FadeIn>
            <p className="text-sm font-sans-body font-bold tracking-[0.2em] uppercase text-accent mb-6">Our Brand Story</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight">
              A Journey of <span className="text-gradient-gold italic">Purpose.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-foreground/80 leading-relaxed font-light font-sans-body italic">
              "True development begins when opportunity reaches the last person in line."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <FadeIn direction="right">
              <InteractiveImage
                images={siteConfig.about.story.images}
                alt={siteConfig.about.story.title}
                className="aspect-[4/5]"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-8">{siteConfig.about.story.title}</h2>
                <div className="space-y-6 text-lg text-foreground font-light leading-relaxed">
                  <p>
                    {siteConfig.about.story.description1}
                  </p>
                  <p>
                    {siteConfig.about.story.description2}
                  </p>
                  <p>
                    {siteConfig.about.story.description3}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/50 opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeIn>
              <div className="p-12 glass-card rounded-[2rem] border-white/10 h-full bg-white/10 backdrop-blur-2xl">
                <p className="text-sm font-sans-body font-bold tracking-widest uppercase text-accent mb-6">{siteConfig.about.vision.title}</p>
                <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-6">{siteConfig.about.vision.heading}</h3>
                <p className="text-lg text-white font-medium leading-relaxed">
                  {siteConfig.about.vision.description}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-12 glass-card rounded-[2rem] border-white/10 h-full bg-white/10 backdrop-blur-2xl">
                <p className="text-sm font-sans-body font-bold tracking-widest uppercase text-accent mb-6">{siteConfig.about.mission.title}</p>
                <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-6">{siteConfig.about.mission.heading}</h3>
                <p className="text-lg text-white font-medium leading-relaxed">
                  {siteConfig.about.mission.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-sm font-sans-body font-bold tracking-widest uppercase text-accent mb-4">The Foundation</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Our Core Values</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 text-accent">
                    <v.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ilmeza */}
      <section className="py-24 md:py-40 bg-cream relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <FadeIn>
            <p className="text-sm font-sans-body font-bold tracking-widest uppercase text-accent mb-8">The Challenge</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 italic">Why Ilmeza Foundation?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-12">
              Despite rapid development, millions still struggle with lack of access to quality education, unemployment, poor healthcare, and social exclusion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto pb-12">
              {[
                "Educational Inequality",
                "Unemployment & Skill Gaps",
                "Poor Healthcare & Nutrition",
                "Gender Inequality",
                "Social Exclusion",
                "Economic Marginalization"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-white">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground font-medium mt-12">
              Ilmeza Foundation works to bridge these gaps through <span className="text-accent underline underline-offset-8">grassroots intervention</span>, capacity building, and community empowerment.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default About;
