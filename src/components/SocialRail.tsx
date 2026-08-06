import { Instagram, Linkedin, Youtube, Facebook, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const links = [
  { icon: Facebook, href: siteConfig.brand.socials.facebook, label: "Facebook", hoverBg: "hover:bg-[#1877F2]" },
  { icon: Instagram, href: siteConfig.brand.socials.instagram, label: "Instagram", hoverBg: "hover:bg-[#E4405F]" },
  { icon: Linkedin, href: siteConfig.brand.socials.linkedin, label: "LinkedIn", hoverBg: "hover:bg-[#0A66C2]" },
  { icon: Youtube, href: siteConfig.brand.socials.youtube, label: "YouTube", hoverBg: "hover:bg-[#FF0000]" },
  {
    icon: MessageCircle,
    href: `https://wa.me/${siteConfig.brand.contact.phone.replace(/[^\d]/g, "")}`,
    label: "WhatsApp",
    hoverBg: "hover:bg-[#25D366]",
  },
];

const SocialRail = () => {
  return (
    <aside
      aria-label="Social media"
      className="hidden 2xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col bg-white rounded-2xl border border-border/60 shadow-xl overflow-hidden"
    >
      <div className="bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.3em] uppercase py-3 px-1.5 [writing-mode:vertical-rl] rotate-180 text-center">
        Follow Us
      </div>
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`w-11 h-11 flex items-center justify-center text-primary border-t border-border/40 transition-colors duration-200 hover:text-white ${social.hoverBg}`}
        >
          <social.icon className="w-4 h-4" />
        </a>
      ))}
    </aside>
  );
};

export default SocialRail;
