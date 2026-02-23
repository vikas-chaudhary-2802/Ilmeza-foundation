import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={siteConfig.brand.logoPath} alt={siteConfig.brand.name} className="h-14 w-auto drop-shadow-sm" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {siteConfig.home.hero.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans-body font-semibold tracking-widest uppercase text-primary-foreground/50">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Our Programs" },
                { to: "/impact", label: "Impact & Stories" },
                { to: "/get-involved", label: "Get Involved" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans-body font-semibold tracking-widest uppercase text-primary-foreground/50">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{siteConfig.brand.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>{siteConfig.brand.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>{siteConfig.brand.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Support & Connect */}
          <div className="space-y-6">
            <h4 className="text-sm font-sans-body font-semibold tracking-widest uppercase text-primary-foreground/50">Support & Connect</h4>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm group hover:border-accent/30 transition-all duration-500">
              <div className="w-16 h-16 bg-white p-1 rounded-xl shrink-0 overflow-hidden">
                <img
                  src={siteConfig.brand.donate.qrPath}
                  alt="Donate QR"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-tighter mb-1">Scan to Donate</p>
                <Link to="/donate" className="text-[10px] text-primary-foreground/60 hover:text-white flex items-center gap-1 transition-colors">
                  Details <Heart size={10} className="text-accent fill-accent" />
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={siteConfig.brand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a
                href={siteConfig.brand.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40 font-sans-body">
            © {new Date().getFullYear()} Ilmeza Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40 font-sans-body">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
