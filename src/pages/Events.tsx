import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2, Sparkles, Heart, HandHeart, Stethoscope, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import breastCancerPhoto1 from "@/assets/breast-cancer-conference-1.jpeg";
import breastCancerPhoto2 from "@/assets/breast-cancer-conference-2.jpeg";
import breastCancerPhoto3 from "@/assets/breast-cancer-conference-3.jpeg";
import breastCancerPhoto4 from "@/assets/breast-cancer-conference-4.jpeg";

const events = [
  {
    icon: Stethoscope,
    tag: "Women's Health",
    title: "Regional Breast Cancer Awareness & Community Health Conference",
    date: "24 July 2026",
    time: "11:00 AM onwards",
    venue: "Chokhraj Tulsyan Kids Valley, Siswa Bazar, Maharajganj, Uttar Pradesh",
    status: "Successfully Concluded",
    body: "Organized under our Health Initiative, this conference brought together government officials, healthcare professionals, medical practitioners, NGOs, educators and community leaders to promote breast cancer awareness, early detection, and community participation in improving women's health. We showcased our journey of awareness campaigns and training sessions, and unveiled our roadmap of medical camps and community-driven healthcare initiatives.",
    theme: "\"Building a Healthier Community Through Awareness, Early Detection & Collective Action.\"",
    photos: [breastCancerPhoto1, breastCancerPhoto2, breastCancerPhoto3, breastCancerPhoto4],
  },
  {
    icon: Heart,
    tag: "Women's Health",
    title: "Women's Health Awareness Camp",
    date: "Community Program",
    time: "Ongoing",
    venue: "Community halls & schools across partner districts",
    status: "Recurring",
    body: "Our grassroots awareness sessions bring women together to learn about breast and cervical cancer, self-examination, and preventive care in their own language and setting. Local health workers and volunteers guide open, judgement-free conversations that break stigma and encourage timely screening.",
    theme: "\"A healthy woman builds a healthy family, and a healthy family builds a strong nation.\"",
    photos: [
      "/images/gallery/health-awareness.jpg",
      "/images/gallery/women-listening.jpg",
      "/images/gallery/women-group.jpg",
      "/images/gallery/women-seated.jpg",
    ],
  },
  {
    icon: HandHeart,
    tag: "Community Outreach",
    title: "Ration & Relief Distribution Drive",
    date: "Community Program",
    time: "Ongoing",
    venue: "Streets, markets & bus stops",
    status: "Recurring",
    body: "Our volunteers take to the streets to distribute food packets, ration kits and essentials to daily-wage workers, the elderly, and families in need. Small acts, repeated with consistency, that restore dignity and remind people they are not alone.",
    theme: "\"Every contribution matters — together we transform lives.\"",
    photos: [
      "/images/gallery/outreach-3.jpg",
      "/images/gallery/outreach-5.jpg",
      "/images/gallery/outreach-4.jpg",
      "/images/gallery/outreach-2.jpg",
    ],
  },
];

const galleryAll = [
  "/images/gallery/health-awareness.jpg",
  "/images/gallery/women-listening.jpg",
  "/images/gallery/health-session.jpg",
  "/images/gallery/community-meet.jpg",
  "/images/gallery/women-group.jpg",
  "/images/gallery/women-seated.jpg",
  "/images/gallery/welcome-guests.jpg",
  "/images/gallery/portrait-1.jpg",
  "/images/gallery/portrait-2.jpg",
  "/images/gallery/outreach-2.jpg",
  "/images/gallery/outreach-3.jpg",
  "/images/gallery/outreach-5.jpg",
  "/images/Tree-volution/072da783-f60a-4330-b317-47a158b4679f.JPG",
  "/images/Tree-volution/341cbe32-fa37-4619-858f-3f74129e16fd.JPG",
  "/images/Tree-volution/1092e30e-9aaf-489f-8660-01e88e6b1376.JPG",
  "/images/Tree-volution/376c9024-d1aa-4a3d-afac-2b7216a6b9a4.JPG",
];

export default function Events() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery/health-awareness.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-gradient opacity-90" />
          <div className="absolute inset-0 brand-dots opacity-10" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-cyan text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md mb-6">
              <Calendar className="w-3.5 h-3.5" /> Our Initiatives & Events
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Impact <span className="text-cyan">in Action</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
              Real moments from our health camps, awareness sessions and community drives — the people
              and places behind every program.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Event recaps */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-24">
          {events.map((ev, idx) => (
            <FadeIn key={ev.title}>
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* photo grid */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-2.5 rounded-[2rem] overflow-hidden shadow-xl">
                    {ev.photos.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => setLightbox(p as string)}
                        className="relative group overflow-hidden h-44 md:h-52"
                      >
                        <img src={p as string} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* content */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                      <ev.icon size={13} /> {ev.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-cyan/10 text-cyan text-xs font-bold px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={13} /> {ev.status}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary leading-snug">{ev.title}</h2>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Calendar size={15} className="text-accent" /> {ev.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={15} className="text-accent" /> {ev.time}</span>
                  </div>
                  <p className="inline-flex items-start gap-1.5 text-sm text-muted-foreground"><MapPin size={15} className="text-accent mt-0.5 shrink-0" /> {ev.venue}</p>
                  <p className="text-muted-foreground leading-relaxed">{ev.body}</p>
                  <p className="text-primary font-serif italic text-lg border-l-4 border-accent/40 pl-4">{ev.theme}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Full gallery */}
      <section className="py-20 md:py-28 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow mb-4 justify-center"><Sparkles size={16} /> Photo Gallery</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Moments That <span className="text-accent">Matter</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Tap any photo to view it larger.</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryAll.map((src, i) => (
              <FadeIn key={src + i} delay={(i % 4) * 0.06}>
                <button onClick={() => setLightbox(src)} className="group relative block w-full overflow-hidden rounded-2xl shadow-sm aspect-square">
                  <img src={src} alt="Ilmeza Foundation event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-colors" />
                </button>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Want to Be at the Next One?</h2>
              <p className="mt-4 text-white/85">Volunteer with us or support a camp — and help bring the next event to a community that needs it.</p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/join">
                  <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 rounded-full font-bold">
                    <HandHeart size={16} className="mr-2" /> Join Us
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

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-primary/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <button className="absolute top-6 right-6 text-white/80 hover:text-white" aria-label="Close">
            <X size={32} />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
