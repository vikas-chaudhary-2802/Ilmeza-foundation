import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import InteractiveImage from "@/components/InteractiveImage";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import {
  BookOpen, HeartPulse, Leaf, Scale, Heart, Shield, Lightbulb, Users,
  CheckCircle2, Target, ArrowRight, Sparkles, Calendar, Stethoscope, TreePine,
} from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Education", desc: "Expanding access to quality education, digital literacy, skill development, career guidance, scholarships, and lifelong learning for children and youth." },
  { icon: HeartPulse, title: "Health", desc: "Promoting preventive healthcare, medical camps, health awareness campaigns, women's health initiatives, and community wellness programs." },
  { icon: Leaf, title: "Environment", desc: "Encouraging stewardship through tree plantation drives, cleanliness campaigns, waste management, water conservation, and climate action." },
  { icon: Scale, title: "Legal Awareness", desc: "Empowering citizens with knowledge of constitutional rights, welfare schemes, women's & children's rights, consumer rights, cyber safety, and access to justice." },
];

const values = [
  { icon: Heart, title: "Compassion & Humanity", desc: "Driven by empathy for every individual we serve." },
  { icon: Users, title: "Inclusion & Equality", desc: "Equal opportunity regardless of background." },
  { icon: Shield, title: "Integrity & Transparency", desc: "Complete transparency in all our operations." },
  { icon: Lightbulb, title: "Social Responsibility", desc: "Our commitment to the betterment of society." },
  { icon: Target, title: "Sustainable Development", desc: "Creating long-term impact through sustainable efforts." },
  { icon: CheckCircle2, title: "Community Partnership", desc: "Working hand-in-hand with those we serve." },
];

const ourWork = [
  { icon: BookOpen, title: "Our Programs", desc: "Education, skilling, women empowerment & community development.", to: "/programs", img: "/images/hero_education.png" },
  { icon: Stethoscope, title: "Women's Health", desc: "Breast & cervical cancer awareness and early detection.", to: "/health-care", img: "/images/hero_women.png" },
  { icon: TreePine, title: "Tree-Volution", desc: "Our grassroots environment and green-cover movement.", to: "/tree-volution", img: "/images/Tree-volution/1092e30e-9aaf-489f-8660-01e88e6b1376.JPG" },
  { icon: Calendar, title: "Events", desc: "Camps, drives, workshops and awareness campaigns.", to: "/events", img: "/images/impact_community.png" },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[hsl(226,40%,98%)] to-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="section-eyebrow mb-6 justify-center"><Sparkles size={16} /> About Ilmeza Foundation</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight tracking-tight">
              Creating Opportunities, <span className="text-accent">Transforming Lives.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ilmeza Foundation is a registered not-for-profit organization dedicated to creating
              sustainable social impact by empowering individuals and strengthening communities —
              guided by the belief that every person deserves equal opportunities to learn, live with
              dignity, and realize their potential.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn direction="right">
              <InteractiveImage images={siteConfig.about.story.images} alt={siteConfig.about.story.title} className="aspect-[4/5]" />
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <span className="section-eyebrow mb-4"><Sparkles size={16} /> Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                A Movement Built on <span className="text-accent">Belief.</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  We are committed to fostering inclusive development by promoting education, improving
                  public health, protecting the environment, and enhancing legal awareness. Our approach
                  combines grassroots engagement, strategic partnerships, and innovative solutions to
                  create lasting and measurable change.
                </p>
                <p>
                  Through collaboration with government institutions, educational organizations,
                  healthcare professionals, corporate partners, volunteers, and civil society, we strive
                  to build resilient communities and contribute to a more equitable, inclusive, and
                  sustainable India.
                </p>
                <p className="text-primary font-medium italic">
                  Together, we are creating opportunities, transforming lives, and building a better tomorrow.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 md:py-28 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow mb-4 justify-center"><Heart size={16} /> Our Focus</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Four Core Areas of <span className="text-accent">Impact</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="card-lift bg-white rounded-3xl p-8 border border-border/60 shadow-sm h-full flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center text-white shrink-0 shadow-lg">
                    <p.icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 brand-dots opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn>
              <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                <p className="text-xs font-bold tracking-widest uppercase text-cyan mb-5">{siteConfig.about.vision.title}</p>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{siteConfig.about.vision.heading}</h3>
                <p className="text-white/80 leading-relaxed">{siteConfig.about.vision.description}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                <p className="text-xs font-bold tracking-widest uppercase text-cyan mb-5">{siteConfig.about.mission.title}</p>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{siteConfig.about.mission.heading}</h3>
                <p className="text-white/80 leading-relaxed">{siteConfig.about.mission.description}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow mb-4 justify-center"><Shield size={16} /> The Foundation</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Our Core Values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="card-lift p-8 rounded-3xl border border-border/60 bg-white shadow-sm h-full">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 text-accent">
                    <v.icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 md:py-28 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow mb-4 justify-center"><Sparkles size={16} /> Explore Our Work</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Where Change <span className="text-accent">Happens</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourWork.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.1}>
                <Link to={w.to} className="group block h-full">
                  <div className="card-lift h-full bg-white rounded-3xl overflow-hidden border border-border/60 shadow-sm">
                    <div className="relative h-40 overflow-hidden">
                      <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center text-accent">
                        <w.icon size={20} />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif font-bold text-primary group-hover:text-accent transition-colors">{w.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-gradient p-10 md:p-14 text-center">
            <div className="absolute inset-0 brand-dots opacity-20" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Be Part of the Change</h2>
              <p className="mt-4 text-white/85">
                Every contribution matters. Volunteer, partner, or support our mission of building
                stronger, more equitable communities.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/join">
                  <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 rounded-full font-bold">
                    Join Our Mission <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 rounded-full font-bold border border-white/20">
                    <Heart size={16} className="mr-2 fill-current" /> Donate
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
