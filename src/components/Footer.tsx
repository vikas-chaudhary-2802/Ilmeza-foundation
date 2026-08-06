import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Youtube, Facebook, ShieldCheck, Award, Navigation } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Exact office pin (Ilmeza Foundation, Noida). "Get Directions" opens the Google
// Maps place; the embed shows a precise marker at these coordinates.
const MAPS_URL = "https://maps.app.goo.gl/bE9gVMM8jwW5Xs5UA";
const MAPS_EMBED = "https://www.google.com/maps?q=28.5904257,77.3318151&z=16&hl=en&output=embed";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/health-care", label: "Women's Health" },
  { to: "/events", label: "Events" },
  { to: "/knowledge-hub", label: "Knowledge Hub" },
  { to: "/join", label: "Join Us" },
  { to: "/publish", label: "Publish" },
];

const socials = [
  { icon: Instagram, href: siteConfig.brand.socials.instagram },
  { icon: Linkedin, href: siteConfig.brand.socials.linkedin },
  { icon: Youtube, href: siteConfig.brand.socials.youtube },
  { icon: Facebook, href: siteConfig.brand.socials.facebook },
];

const Footer = () => {
  return (
    <footer className="relative bg-navy-gradient text-white overflow-hidden">
      <div className="absolute inset-0 brand-dots opacity-[0.08] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gradient" />

      <div className="container mx-auto px-6 lg:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* About Us */}
          <div className="space-y-5">
            <div className="bg-white inline-block rounded-xl px-4 py-3">
              <img src={siteConfig.brand.logoPath} alt={siteConfig.brand.name} className="h-11 w-auto" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              A registered not-for-profit creating sustainable social impact through education, health,
              environment and legal awareness — empowering communities to learn, live with dignity, and lead.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-accent hover:border-accent transition-all">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-cyan mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3.5">
              {quickLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-cyan mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="leading-relaxed">{siteConfig.brand.contact.address}</span>
              </a>
              <a href={`mailto:${siteConfig.brand.contact.email}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Mail size={16} className="text-accent shrink-0" /> {siteConfig.brand.contact.email}
              </a>
              <a href={`tel:${siteConfig.brand.contact.phone}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone size={16} className="text-accent shrink-0" /> {siteConfig.brand.contact.phone}
              </a>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="Ilmeza Foundation location on Google Maps"
                src={MAPS_EMBED}
                width="100%"
                height="150"
                style={{ border: 0, filter: "grayscale(0.15)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-xs font-semibold px-4 py-2.5 rounded-md hover:bg-white/10 transition-colors">
                <Navigation size={14} className="text-cyan" /> Get Directions
              </a>
              <Link to="/donate" className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-4 py-2.5 rounded-md hover:bg-accent/90 transition-colors">
                Donate Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Legal & Certifications */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-cyan mb-6">Legal &amp; Certifications</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                <ShieldCheck size={18} className="text-cyan shrink-0" />
                <span className="text-sm text-white/70">Registered Section-8 Non-Profit</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                <Award size={18} className="text-cyan shrink-0" />
                <span className="text-sm text-white/70">80G Tax-Exemption (as applicable)</span>
              </div>
            </div>
            <nav className="flex flex-col gap-2.5 pt-1">
              <Link to="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-white/60 hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Made with care in India · www.ilmeza.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
