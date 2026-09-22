import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import {
  BookOpen, HeartPulse, Leaf, Heart, Target, ArrowRight, Sparkles, Users, User, Camera, Handshake, CheckCircle2, Award
} from "lucide-react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const whatDrivesUs = [
  { 
    icon: BookOpen, 
    title: "Education for the Marginalised", 
    desc: "Every child deserves the chance to learn, dream and grow. We work to bring quality education and meaningful opportunities to underserved communities, so that circumstances never decide potential." 
  },
  { 
    icon: HeartPulse, 
    title: "Women's Health, Focus on Breast Cancer", 
    desc: "Women's health is at the heart of our mission. We prioritise breast cancer awareness, early detection and access to care, because timely knowledge and support can save lives and protect families." 
  },
  { 
    icon: Leaf, 
    title: "Sustainable Development", 
    desc: "We believe progress must be lasting. Our initiatives aim to build stronger communities today without compromising the future, creating value that endures." 
  }
];

const teamMembers = [
  { name: "Shamshad Alam", role: "Founder & CEO", image: "/images/team/shamshad_alam.png", position: "center 15%" },
  { name: "Dr. Anita Singh", role: "Core Team Member", image: "/images/team/anita_singh.jpg", position: "center 20%" },
  { name: "Nupur Shashtri", role: "Core Team Member", image: "/images/team/nupur_shastri.jpg", position: "center 30%" },
  { name: "Vikas Chaudhary", role: "Core Team Member", image: "/images/team/vikas_chaudhary.png", position: "center 25%" },
  { name: "Kajal Singh", role: "Core Team Member", image: "/images/team/kajal_singh.jpg", position: "center 30%" },
  { name: "Lokesh Maurya", role: "Core Team Member", image: "/images/team/lokesh_maurya.png", position: "center 20%" },
];

const getInitials = (name: string) => {
  return name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
};

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero - Ultra Premium */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[hsl(226,40%,98%)]">
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10 mix-blend-overlay pointer-events-none" />
        
        {/* Animated glowing orbs */}
        <div className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-cyan/20 rounded-full blur-[100px] animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative z-10 pt-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-border shadow-sm mb-10 card-lift">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-bold tracking-widest uppercase text-primary">A Section 8 Non-Profit</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary leading-[1.1] tracking-tight mb-8">
              Born from a <br className="hidden md:block" />
              <span className="text-gradient-brand relative inline-block mt-2">
                Purpose.
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-brand-gradient rounded-full opacity-50 blur-sm" />
              </span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Founded in 2025 with a simple, unyielding belief: <br className="hidden md:block" />
              <strong className="font-semibold text-primary">Real success is measured by the lives we lift along the way.</strong>
            </p>
          </FadeIn>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center opacity-50 hidden md:flex">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Scroll</span>
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32 relative bg-white overflow-hidden">
        <div className="absolute inset-0 brand-dots opacity-[0.03]" />
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="relative rounded-[3rem] bg-white border border-border/50 shadow-2xl p-8 md:p-14 overflow-hidden group hover:shadow-brand transition-shadow duration-700">
            {/* Decorative background blurs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10 flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
              {/* Founder Image Portrait */}
              <FadeIn direction="right" className="shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20 shadow-xl" />
                <div className="absolute inset-0 bg-white rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 shadow-md" />
                <div className="w-56 h-56 md:w-72 md:h-72 relative z-10 bg-[hsl(226,40%,98%)] rounded-[2.5rem] overflow-hidden shadow-lg border border-border">
                  <img
                    src="/images/team/shamshad_alam.png"
                    alt="Shamshad Alam"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 15%' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.fallback-avatar')?.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback-avatar hidden absolute inset-0 bg-brand-gradient flex items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-white drop-shadow-md">SA</span>
                  </div>
                </div>

                {/* Floating Recognition Pill */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden sm:flex items-center gap-3 absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-border/80 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Award size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-primary">Founder & CEO</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Edunachal & Inspire India Talk</p>
                  </div>
                </motion.div>
              </FadeIn>

              {/* Founder Text */}
              <FadeIn direction="left" delay={0.15} className="flex-1 text-center md:text-left">
                <span className="section-eyebrow mb-4 justify-center md:justify-start"><Users size={16} /> Our Founder</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  Shamshad <span className="text-accent">Alam.</span>
                </h2>
                <p className="text-sm font-bold tracking-widest text-accent uppercase mb-8">Founder & CEO</p>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Already running a successful venture as the Founder & CEO of Edunachal and Inspire India Talk, he asked what more he could give back to the society that shaped him.
                  </p>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative mt-8 p-6 bg-[hsl(226,40%,98%)] rounded-2xl border border-border/60 overflow-hidden cursor-default"
                  >
                    <div className="absolute -top-6 -left-2 text-8xl text-primary/5 font-serif leading-none select-none">"</div>
                    <p className="text-primary font-medium italic relative z-10 text-lg md:text-xl">
                      Ilmeza Foundation is the answer: a platform built to turn compassion into action and opportunity into lasting change.
                    </p>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-eyebrow mb-6 justify-center"><Target size={16} /> What Drives Us</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
              Where the need is greatest, the <span className="text-gradient-brand">support is thinnest.</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {whatDrivesUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15} direction="up">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative h-full bg-white rounded-[2.5rem] p-10 lg:p-12 border border-border/50 hover:shadow-2xl hover:border-accent/30 transition-all duration-500 group overflow-hidden flex flex-col cursor-pointer"
                >
                  {/* Background flare on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gradient rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700" />
                  
                  <div className="w-16 h-16 rounded-[1.5rem] bg-[hsl(226,40%,98%)] border border-border shadow-sm flex items-center justify-center text-accent shrink-0 mb-8 transform group-hover:-translate-y-2 group-hover:rotate-6 transition-transform duration-500">
                    <item.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-lg">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our People & Team */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="absolute inset-0 brand-dots opacity-[0.03]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto mb-20">
            <span className="section-eyebrow mb-6 justify-center"><Users size={16} /> Our People</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">A Dedicated Team of 30+ Members</h2>
            <p className="text-muted-foreground leading-relaxed text-xl font-light">
              Ilmeza Foundation is powered by medical professionals, educators, and passionate change-makers. We combine professional expertise with grassroots commitment so that every initiative is <strong className="font-semibold text-primary">thoughtful, credible and impactful.</strong>
            </p>
          </FadeIn>

          <div className="mt-16 bg-[hsl(226,40%,98%)] rounded-[3rem] p-8 md:p-16 border border-border shadow-lg relative overflow-hidden">
             {/* Decorative top border */}
             <div className="absolute top-0 right-0 w-full h-2 bg-brand-gradient" />

             <FadeIn className="text-center mb-16">
               <h3 className="text-3xl font-serif font-bold text-primary">Our Core Team</h3>
               <div className="w-12 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
             </FadeIn>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
               {teamMembers.map((member, i) => (
                 <FadeIn key={member.name} delay={i * 0.1}>
                   <motion.div 
                     whileHover={{ y: -8 }}
                     transition={{ type: "spring", stiffness: 300, damping: 18 }}
                     className="text-center group flex flex-col items-center cursor-pointer"
                   >
                     <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full mb-6 overflow-hidden border-4 border-white shadow-xl relative transition-all duration-500 group-hover:shadow-2xl ring-4 ring-transparent group-hover:ring-accent/30">
                       {member.image ? (
                           <img 
                               src={member.image} 
                               alt={member.name} 
                               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115" 
                               style={{ objectPosition: member.position }}
                           />
                       ) : (
                           <div className="absolute inset-0 bg-brand-gradient opacity-90 flex items-center justify-center transition-transform duration-700 group-hover:scale-115">
                               <span className="text-3xl md:text-4xl font-serif font-bold text-white drop-shadow-sm">
                                   {getInitials(member.name)}
                               </span>
                           </div>
                       )}
                     </div>
                     <h4 className="font-serif font-bold text-primary text-lg leading-tight mb-2 group-hover:text-accent transition-colors duration-300">{member.name}</h4>
                     <p className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-widest font-bold bg-white px-3 py-1.5 rounded-full inline-block shadow-sm group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                        {member.role}
                     </p>
                   </motion.div>
                 </FadeIn>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Our Journey So Far & Impact Stats */}
      <section className="py-24 md:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 brand-dots opacity-15" />
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <FadeIn>
                    <span className="section-eyebrow mb-8 justify-center text-cyan bg-cyan/10 border border-cyan/20 px-6 py-2 rounded-full backdrop-blur-sm shadow-lg">
                        <Sparkles size={16} /> The Impact So Far
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        The Journey Has Just <span className="text-gradient-brand">Started.</span>
                    </h2>
                    <div className="space-y-6 text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        <p>
                            In a short span of time, Ilmeza Foundation has already made a mark. It has earned trust, built partnerships and touched lives across communities.
                        </p>
                    </div>
                </FadeIn>
            </div>
            
            {/* Impact Stats Grid with Animated Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {[
                  { target: 50, suffix: "K+", label: "Lives Touched", icon: Heart },
                  { target: 200, suffix: "+", label: "Volunteers", icon: Users },
                  { target: 150, suffix: "+", label: "Camps Hosted", icon: Target },
                  { target: 50, suffix: "+", label: "Partnerships", icon: Handshake }
                ].map((stat, i) => (
                  <FadeIn key={stat.label} delay={i * 0.15} direction="up">
                     <motion.div 
                       whileHover={{ y: -8, scale: 1.03 }}
                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
                       className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 text-center hover:bg-white/10 transition-colors duration-500 group shadow-2xl cursor-default"
                     >
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-gradient flex items-center justify-center mb-6 text-white group-hover:-translate-y-2 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                          <stat.icon size={28} />
                        </div>
                        <h4 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
                          <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                        </h4>
                        <p className="text-sm font-bold tracking-widest text-cyan uppercase">{stat.label}</p>
                     </motion.div>
                  </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* Join Us (CTA) */}
      <section className="py-24 md:py-32 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-white border border-border/50 shadow-2xl p-10 md:p-20 text-center max-w-5xl mx-auto card-lift">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="section-eyebrow mb-6 justify-center"><Heart size={16} /> Join Us</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                Change is never the work of <span className="text-accent relative inline-block">one person.<div className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full opacity-30" /></span>
              </h2>
              <p className="mt-4 text-muted-foreground text-xl mb-10 max-w-2xl mx-auto font-light">
                Whether you are a volunteer, a partner or a well-wisher, there is a place for you in this movement.
                <br /><br />
                <strong className="font-semibold text-primary italic text-2xl">Together, let's build a healthier, more educated and more sustainable tomorrow.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Link to="/get-involved">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full sm:w-auto bg-brand-gradient text-white hover:opacity-90 h-16 px-10 rounded-full font-bold text-lg shadow-xl hover:shadow-brand transition-all">
                      Join Our Movement <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/donate">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-white h-16 px-12 rounded-full font-bold text-lg transition-all">
                      Support Us
                    </Button>
                  </motion.div>
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
