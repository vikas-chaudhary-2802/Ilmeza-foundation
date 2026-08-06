import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

type NavChild = { to: string; label: string; desc?: string };
type NavItem = { to?: string; label: string; children?: NavChild[] };

const navLinks: NavItem[] = [
  {
    label: "About Us",
    to: "/about",
    children: [
      { to: "/about", label: "Who We Are", desc: "Our story, vision & mission" },
      { to: "/programs", label: "Our Programs", desc: "Education, health, environment & law" },
      { to: "/health-care", label: "Women's Health", desc: "Awareness & early detection" },
      { to: "/events", label: "Events", desc: "Camps, drives & workshops" },
    ],
  },
  { to: "/join", label: "Join Us" },
  { to: "/knowledge-hub", label: "Knowledge Hub" },
  { to: "/publish", label: "Publish" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const location = useLocation();

  const isActive = (to?: string) =>
    !!to && (location.pathname === to || (to !== "/" && location.pathname.startsWith(to)));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={siteConfig.brand.logoPath}
              alt={siteConfig.brand.name}
              className="h-11 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group py-6">
                  <Link
                    to={link.to || "#"}
                    className={`flex items-center gap-1 text-[14.5px] font-semibold tracking-wide transition-colors ${
                      isActive(link.to) ? "text-accent" : "text-primary/85 hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={15} className="mt-0.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    <div className="rounded-2xl bg-white shadow-xl border border-border/60 overflow-hidden p-2">
                      {link.children.map((c) => (
                        <Link key={c.to} to={c.to} className="block rounded-xl px-4 py-3 hover:bg-muted transition-colors group/item">
                          <span className="block text-sm font-semibold text-primary group-hover/item:text-accent transition-colors">{c.label}</span>
                          {c.desc && <span className="block text-xs text-muted-foreground mt-0.5">{c.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className={`relative py-2 text-[14.5px] font-semibold tracking-wide transition-colors group ${
                    isActive(link.to) ? "text-accent" : "text-primary/85 hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-accent transition-transform duration-300 origin-left ${
                      isActive(link.to) ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              )
            )}
            <Link to="/donate">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm px-7 rounded-md shadow-md shadow-accent/25 transition-all duration-300 hover:scale-105 active:scale-95">
                <Heart size={16} className="mr-1.5 fill-current" /> Donate Now
              </Button>
            </Link>
          </div>

          <button className="lg:hidden text-primary p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-border/60 animate-in slide-in-from-top-2 max-h-[75vh] overflow-y-auto">
            <div className="container mx-auto px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileAbout(!mobileAbout)}
                      className="w-full flex items-center justify-between py-3 text-base font-semibold text-primary"
                    >
                      {link.label}
                      <ChevronDown size={18} className={`transition-transform ${mobileAbout ? "rotate-180" : ""}`} />
                    </button>
                    {mobileAbout && (
                      <div className="pl-4 pb-2 flex flex-col border-l-2 border-accent/30 ml-1">
                        {link.children.map((c) => (
                          <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-primary/70 hover:text-accent">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to!}
                    onClick={() => setOpen(false)}
                    className={`py-3 text-base font-semibold border-b border-border/40 ${isActive(link.to) ? "text-accent" : "text-primary/80"}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/donate" onClick={() => setOpen(false)} className="mt-4">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-md py-6">
                  <Heart size={16} className="mr-1.5 fill-current" /> Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
