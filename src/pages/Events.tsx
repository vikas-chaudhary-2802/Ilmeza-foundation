import { Calendar, Sprout, ArrowRight, MapPin, Clock, HeartPulse, ShieldCheck, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TreeVolutionShowcase from "@/components/TreeVolutionShowcase";
import breastCancerEventImg from "@/assets/breast-cancer-event.jpeg";

export default function Events() {
  return (
    <main className="overflow-x-hidden pt-20">
      
      {/* Events Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-primary overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5" /> Our Initiatives & Events
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Impact <span className="text-gradient-gold italic">In Action</span>
          </h1>
          <p className="text-lg text-primary-foreground/75 font-sans-body font-light max-w-2xl mx-auto">
            Explore our flagship initiatives and upcoming events. Join us in making a tangible difference.
          </p>
        </div>
      </section>

      {/* Upcoming Event Section: Breast Cancer Awareness */}
      <section className="py-24 bg-white relative overflow-hidden" id="upcoming">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-50/40 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="text-xs font-sans-body font-bold tracking-[0.25em] uppercase text-rose-600">
              Upcoming Event
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              Regional Breast Cancer Awareness & Community Health Conference 2026
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Panel */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 rounded-3xl border border-rose-100 translate-x-3 translate-y-3 -z-10 hidden md:block transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-white border border-rose-50">
                <img 
                  src={breastCancerEventImg} 
                  alt="Breast Cancer Awareness Event"
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating contribution callout */}
                <div className="absolute top-6 left-6 py-2 px-5 rounded-full bg-rose-600 text-white font-sans-body font-bold text-sm shadow-xl flex items-center gap-2 border border-rose-500">
                   <HeartPulse className="w-4 h-4" /> Health Initiative
                </div>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="glass-card p-6 rounded-2xl border border-rose-100/50 shadow-sm bg-rose-50/20 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-sm shrink-0">
                       <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs font-sans-body text-muted-foreground font-bold tracking-widest uppercase">Date</p>
                       <p className="text-base font-semibold text-foreground">24 July 2026</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-sm shrink-0">
                       <Clock className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs font-sans-body text-muted-foreground font-bold tracking-widest uppercase">Time</p>
                       <p className="text-base font-semibold text-foreground">11:00 AM Onwards</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 sm:col-span-2">
                    <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-sm shrink-0">
                       <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs font-sans-body text-muted-foreground font-bold tracking-widest uppercase">Venue</p>
                       <p className="text-base font-semibold text-foreground">Chokhraj Tulsyan Kids Valley, Siswa Bazar, Maharajganj, Uttar Pradesh</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-4 text-foreground/80 font-sans-body font-light text-base leading-relaxed">
                <p>
                  Organized by <strong>Ilmeza Foundation</strong> under its Health Initiative, this conference is a collaborative platform dedicated to promoting breast cancer awareness, early detection, and community participation in improving women's health.
                </p>
                <p>
                  The conference brings together government officials, healthcare professionals, medical practitioners, NGOs, educators, social activists, media representatives, and community leaders to discuss the importance of preventive healthcare and strengthen partnerships for future health initiatives.
                </p>
                <p>
                  We will showcase Ilmeza Foundation's journey in conducting awareness campaigns, training sessions, and community outreach programmes, while unveiling our future roadmap: medical camps, capacity-building programmes, and community-driven healthcare initiatives.
                </p>
                <p className="font-medium text-rose-900 bg-rose-50 p-4 rounded-xl border-l-4 border-rose-400">
                  Together, we aim to build a healthier, more informed, and compassionate society where every woman has access to awareness, timely screening, and quality healthcare.
                </p>
              </div>

              <div className="pt-2">
                <span className="inline-block py-1 px-3 rounded-md bg-rose-100/50 text-rose-800 text-[10px] font-bold uppercase tracking-widest font-sans-body mb-2 border border-rose-200">
                   Conference Theme
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary italic leading-snug">
                  "Building a Healthier Community Through Awareness, Early Detection & Collective Action."
                </h3>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TreeVolution Section */}
      <TreeVolutionShowcase />

    </main>
  );
}
