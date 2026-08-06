import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { siteConfig } from "@/data/siteConfig";
import {
  BookOpen, HeartPulse, Leaf, Scale, ArrowRight, Heart, HandHeart,
  Users, Sparkles, Quote, Stethoscope, TreePine, ArrowUpRight,
} from "lucide-react";

/* ── Core focus areas (Ilmeza's four pillars) ── */
const focusAreas = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Quality education, digital literacy, skill development, career guidance and scholarships for children and youth.",
    img: "/images/hero_education.png",
    to: "/programs",
  },
  {
    icon: HeartPulse,
    title: "Health",
    desc: "Preventive healthcare, medical camps, women's health awareness and community wellness programs.",
    img: "/images/gallery/health-awareness.jpg",
    to: "/health-care",
  },
  {
    icon: Leaf,
    title: "Environment",
    desc: "Tree plantation drives, cleanliness campaigns, water conservation and climate action initiatives.",
    img: "/images/Tree-volution/1092e30e-9aaf-489f-8660-01e88e6b1376.JPG",
    to: "/tree-volution",
  },
  {
    icon: Scale,
    title: "Legal Awareness",
    desc: "Constitutional rights, welfare schemes, women's & children's rights, consumer rights and cyber safety.",
    img: "/images/gallery/outreach-2.jpg",
    to: "/programs",
  },
];

const causes = [
  {
    tag: "Women's Health",
    title: "Women's Health Awareness Camp",
    desc: "Community sessions on breast & cervical cancer awareness, early detection and preventive care for women.",
    img: "/images/gallery/health-awareness.jpg",
    to: "/health-care",
    icon: Stethoscope,
  },
  {
    tag: "Community Outreach",
    title: "Ration & Relief Drive",
    desc: "Volunteers distributing food packets and essentials to families and daily-wage workers on the street.",
    img: "/images/gallery/outreach-3.jpg",
    to: "/events",
    icon: HandHeart,
  },
  {
    tag: "Environment",
    title: "Tree-Volution Movement",
    desc: "A community-led green drive planting and nurturing trees across neighbourhoods and schools.",
    img: "/images/Tree-volution/072da783-f60a-4330-b317-47a158b4679f.JPG",
    to: "/tree-volution",
    icon: TreePine,
  },
];

/* Real photographs from our programs on the ground */
const galleryPhotos = [
  { src: "/images/gallery/women-listening.jpg", cap: "Women's health awareness session" },
  { src: "/images/gallery/health-session.jpg", cap: "Community health camp" },
  { src: "/images/gallery/outreach-5.jpg", cap: "Street relief distribution" },
  { src: "/images/gallery/community-meet.jpg", cap: "Community gathering" },
  { src: "/images/gallery/welcome-guests.jpg", cap: "Welcoming our guests" },
  { src: "/images/gallery/outreach-4.jpg", cap: "Volunteers on the ground" },
  { src: "/images/gallery/women-group.jpg", cap: "Participants of our workshop" },
  { src: "/images/gallery/health-awareness.jpg", cap: "Awareness drive in progress" },
];

const heroSlides = [
  {
    img: "/images/gallery/health-awareness.jpg",
    eyebrow: "Women's Health Initiative",
    title: "Every Woman Deserves Awareness,",
    highlight: "Dignity & Timely Care.",
    text: "We bring breast & cervical cancer awareness, screening and preventive care to communities that need it most.",
  },
  {
    img: "/images/gallery/women-listening.jpg",
    eyebrow: "Learn to Lead",
    title: "Empowering Communities,",
    highlight: "Transforming Lives.",
    text: "Education, health, environment and legal awareness — grassroots work that helps people learn, live with dignity, and lead.",
  },
  {
    img: "/images/gallery/outreach-3.jpg",
    eyebrow: "Community Outreach",
    title: "Small Acts, Repeated,",
    highlight: "Change Everything.",
    text: "From ration drives to street relief, our volunteers show up — restoring dignity, one family at a time.",
  },
];

function StatBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
      {siteConfig.home.stats.slice(0, 4).map((s, i) => (
        <Stat key={s.label} end={s.value} label={s.label} start={inView} delay={i * 150} />
      ))}
    </div>
  );
}

function Stat({ end, label, start, delay }: { end: number; label: string; start: boolean; delay: number }) {
  const val = useCountUp(end, 2000, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay / 1000 }}
      className="text-center px-2"
    >
      <p className="text-4xl md:text-5xl font-serif font-bold text-white">
        {val.toLocaleString()}
        <span className="text-cyan">+</span>
      </p>
      <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wider text-white/70">{label}</p>
    </motion.div>
  );
}

const Index = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const cur = heroSlides[slide];

  return (
    <main className="overflow-hidden">
      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-[88vh] flex items-center pt-32 pb-16 overflow-hidden">
        {heroSlides.map((s, i) => (
          <div key={s.img} className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}>
            <img src={s.img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(226,60%,10%)]/95 via-[hsl(226,58%,16%)]/85 to-[hsl(226,58%,16%)]/40" />
        <div className="absolute inset-0 brand-dots opacity-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div key={slide} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-5">
              <Sparkles size={16} /> {cur.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white leading-[1.05] tracking-tight">
              {cur.title}{" "}
              <span className="text-cyan">{cur.highlight}</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">{cur.text}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/donate">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 rounded-md text-base font-bold shadow-lg shadow-accent/30 hover:scale-105 transition-all">
                  <Heart size={18} className="mr-2 fill-current" /> Donate Now
                </Button>
              </Link>
              <Link to="/join">
                <Button className="h-14 px-8 rounded-md text-base font-bold bg-white/10 text-white border border-white/40 hover:bg-white hover:text-primary backdrop-blur-sm transition-all">
                  <HandHeart size={18} className="mr-2" /> Become a Volunteer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 flex gap-2.5 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === slide ? "w-8 bg-cyan" : "w-2.5 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      </section>

      {/* Quick stat strip */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { icon: Users, v: "10,000+", l: "Lives touched" },
            { icon: Heart, v: "5,000+", l: "Students supported" },
            { icon: HandHeart, v: "800+", l: "Volunteers engaged" },
            { icon: Sparkles, v: "150+", l: "Communities impacted" },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-3 justify-center py-6 px-2 text-center">
              <s.icon size={22} className="text-cyan shrink-0 hidden sm:block" />
              <div>
                <p className="text-xl md:text-2xl font-serif font-bold leading-none">{s.v}</p>
                <p className="text-[11px] md:text-xs text-white/60 mt-1">{s.l}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── ABOUT PREVIEW ───────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/gallery/community-meet.jpg" alt="Community gathering" className="rounded-3xl h-64 w-full object-cover mt-8" />
                  <img src="/images/gallery/health-session.jpg" alt="Health awareness session" className="rounded-3xl h-64 w-full object-cover" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white rounded-2xl px-7 py-4 text-center shadow-xl">
                  <p className="text-3xl font-serif font-bold">4</p>
                  <p className="text-[11px] uppercase tracking-wider text-white/70">Core Focus Areas</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <span className="section-eyebrow mb-4"><Sparkles size={16} /> Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                Dedicated to Building a More <span className="text-accent">Equitable India.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Ilmeza Foundation works to address some of society's most pressing challenges through
                meaningful, community-led initiatives. We foster inclusive development by promoting
                education, improving public health, protecting the environment, and enhancing legal awareness.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Grassroots engagement rooted in local communities",
                  "Strategic partnerships with institutions & experts",
                  "Innovative, measurable and lasting social change",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                      <ArrowRight size={12} />
                    </span>
                    <p className="text-primary/80">{p}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-block mt-8">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-full h-12 px-7 font-semibold">
                  More About Us <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────────── WHAT WE DO ───────────── */}
      <section className="py-20 md:py-28 bg-[hsl(226,40%,98%)] relative">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow mb-4 justify-center"><HandHeart size={16} /> Our Fields of Work</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Four Pillars of <span className="text-accent">Lasting Change</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every program we run is designed to empower people with knowledge, opportunity, and the
              confidence to shape their own future.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <Link to={f.to} className="group block h-full">
                  <div className="card-lift h-full bg-white rounded-2xl p-8 border border-border/60 shadow-sm text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <f.icon size={30} strokeWidth={1.6} />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors">{f.title}</h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Learn More <ArrowUpRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── IMPACT STATS ───────────── */}
      <section className="py-20 md:py-24 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 brand-dots opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-3">
              <Sparkles size={16} /> Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Change You Can Measure
            </h2>
          </FadeIn>
          <StatBlock />
        </div>
      </section>

      {/* ───────────── CAUSES ───────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="section-eyebrow mb-4"><Heart size={16} /> Our Initiatives</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Making a Difference Through <span className="text-accent">Our Causes</span>
              </h2>
            </div>
            <Link to="/programs">
              <Button variant="outline" className="rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white h-12 px-6 font-semibold">
                View All Programs <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-7">
            {causes.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.12}>
                <Link to={c.to} className="group block h-full">
                  <article className="card-lift h-full bg-white rounded-3xl overflow-hidden border border-border/60 shadow-sm">
                    <div className="relative h-52 overflow-hidden">
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                        <c.icon size={13} className="text-accent" /> {c.tag}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors">{c.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        Learn More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── GALLERY / OUR WORK IN PICTURES ───────────── */}
      <section className="py-20 md:py-28 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="section-eyebrow mb-4"><Sparkles size={16} /> On the Ground</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Our Work in <span className="text-accent">Pictures</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Real moments from our health camps, awareness sessions and community drives across the country.
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white h-12 px-6 font-semibold">
                See All Events <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryPhotos.map((p, i) => (
              <FadeIn key={p.src} delay={(i % 4) * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl shadow-sm aspect-[4/3]">
                  <img src={p.src} alt={p.cap} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{p.cap}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── LATEST STORIES ───────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="section-eyebrow mb-4"><Sparkles size={16} /> Latest Updates</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Stories from <span className="text-accent">the Field</span>
              </h2>
            </div>
            <Link to="/knowledge-hub">
              <Button variant="outline" className="rounded-md border-2 border-primary/20 text-primary hover:bg-primary hover:text-white h-12 px-6 font-semibold">
                Read the Knowledge Hub <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { img: "/images/gallery/health-awareness.jpg", tag: "Health", title: "Women's Health Camp Reaches Hundreds of Women", excerpt: "Our latest awareness session brought screening and open conversation to a community hall full of women.", to: "/events" },
              { img: "/images/gallery/outreach-3.jpg", tag: "Outreach", title: "Ration & Relief Drive Supports Families in Need", excerpt: "Volunteers distributed food packets and essentials to daily-wage workers across the city.", to: "/events" },
              { img: "/images/Tree-volution/341cbe32-fa37-4619-858f-3f74129e16fd.JPG", tag: "Environment", title: "Tree-Volution Greens Another Neighbourhood", excerpt: "A single plantation drive grows into a self-sustaining community movement.", to: "/tree-volution" },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link to={s.to} className="group block h-full">
                  <article className="card-lift h-full bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <span className="absolute top-4 left-4 bg-white/95 text-accent text-xs font-bold px-3 py-1.5 rounded-full">{s.tag}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-serif font-bold text-primary leading-snug group-hover:text-accent transition-colors">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        Read More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── QUOTE / MISSION ───────────── */}
      <section className="py-16 md:py-20 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <Quote size={44} className="mx-auto text-accent/30 mb-6" />
            <p className="text-2xl md:text-3xl font-serif font-medium text-primary leading-relaxed italic">
              "Real transformation begins when communities are empowered with knowledge, opportunity,
              and the confidence to shape their own future."
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-accent">— Ilmeza Foundation</p>
          </FadeIn>
        </div>
      </section>

      {/* ───────────── GET INVOLVED CTA ───────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-gradient p-10 md:p-16">
            <div className="absolute inset-0 brand-dots opacity-20" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                  Together, We Can Create Lasting Change.
                </h2>
                <p className="mt-4 text-white/85 leading-relaxed max-w-lg">
                  Whether you contribute your time, skills, expertise, or resources — there is a place
                  for you in our mission. Join us today and become a catalyst for positive change.
                </p>
              </FadeIn>
              <FadeIn delay={0.15} className="flex flex-wrap gap-4 md:justify-end">
                <Link to="/join">
                  <Button className="bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-full font-bold text-base shadow-lg">
                    <HandHeart size={18} className="mr-2" /> Join Us
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button className="bg-primary text-white hover:bg-primary/90 h-14 px-8 rounded-full font-bold text-base border border-white/20">
                    <Heart size={18} className="mr-2 fill-current" /> Donate
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
