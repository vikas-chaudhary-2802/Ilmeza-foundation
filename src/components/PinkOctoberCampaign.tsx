import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, BookOpen,
  CalendarDays, HandHeart, Mail, MapPin, Phone, Ribbon, Route,
  Stethoscope, Users, ZoomIn,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/data/siteConfig";
import styles from "./PinkOctoberCampaign.module.css";

const serviceIcons = [Stethoscope, Users, BookOpen, HandHeart, Route];

export default function PinkOctoberCampaign() {
  const campaign = siteConfig.healthCare.pinkOctober;
  const contact = siteConfig.brand.contact;
  const reduceMotion = useReducedMotion();
  const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent("Pink October 2026 camp enquiry")}`;

  return (
    <section id="pink-october-2026" aria-labelledby="pink-october-title" className={styles.campaign}>
      <div className={styles.inner}>
        <div className={styles.masthead}>
          <span><Ribbon size={18} aria-hidden="true" /> Ilmeza Women Health Initiative</span>
          <span className={styles.edition}>October 2026 <span aria-hidden="true">/</span> Delhi NCR</span>
        </div>

        <div className={styles.feature}>
          <motion.div
            className={styles.story}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <p className={styles.eyebrow}>A month of awareness. A lifetime of care.</p>
            <h2 id="pink-october-title" className={styles.title}>
              <span>Pink</span> October<span className={styles.period}>.</span>
            </h2>
            <p className={styles.tagline}>{campaign.tagline}</p>
            <p className={styles.description}>{campaign.description}</p>

            <div className={styles.commitment}>
              <span className={styles.campCount}>{campaign.campCount}</span>
              <div>
                <h3>Free breast cancer<br />screening camps</h3>
                <p><MapPin size={15} aria-hidden="true" /> Across Delhi NCR</p>
              </div>
            </div>

            <div className={styles.actions}>
              <Dialog>
                <DialogTrigger asChild>
                  <button className={styles.primaryAction}>
                    Enquire about a camp <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </DialogTrigger>
                <DialogContent className={styles.dialog}>
                  <Ribbon size={28} className={styles.pinkIcon} aria-hidden="true" />
                  <p className={styles.eyebrow}>{campaign.label}</p>
                  <DialogTitle className={styles.dialogTitle}>A little care starts with a conversation.</DialogTitle>
                  <DialogDescription>
                    Contact the Ilmeza team for camp dates, locations, and participation details.
                  </DialogDescription>
                  <div className={styles.enquiryDetails}>
                    <span><CalendarDays size={17} aria-hidden="true" /> October 2026</span>
                    <span><MapPin size={17} aria-hidden="true" /> Delhi NCR, based in Noida</span>
                  </div>
                  <a className={styles.primaryAction} href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                    <Phone size={18} aria-hidden="true" /> {contact.phone}
                  </a>
                  <a className={styles.emailAction} href={emailHref}>
                    <Mail size={18} aria-hidden="true" /> {contact.email}
                  </a>
                </DialogContent>
              </Dialog>
              <a className={styles.textAction} href="#pink-october-care">
                Explore the initiative <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.supportingNote}>For women. For families. For healthier communities.</p>
          </motion.div>

          <motion.figure
            className={styles.posterFigure}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.posterHeading}>
              <span>The Pink October campaign</span><span>2026</span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className={styles.posterButton} aria-label="View full Pink October campaign poster">
                  <img
                    src={campaign.poster}
                    alt="Ilmeza Pink October 2026: 10 free breast cancer screening camps in Delhi NCR"
                    width={1024}
                    height={1536}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.zoomIcon}><ZoomIn size={20} aria-hidden="true" /></span>
                </button>
              </DialogTrigger>
              <DialogContent className={`${styles.dialog} ${styles.posterDialog}`}>
                <DialogTitle className="sr-only">{campaign.label} campaign poster</DialogTitle>
                <DialogDescription className="sr-only">{campaign.title}</DialogDescription>
                <img src={campaign.poster} alt="Full Pink October 2026 campaign poster" width={1024} height={1536} />
                <a className={styles.textAction} href={campaign.poster} download="Ilmeza-Pink-October-2026.jpg">
                  <ArrowDownToLine size={17} aria-hidden="true" /> Download poster
                </a>
              </DialogContent>
            </Dialog>
            <figcaption className={styles.posterCaption}>
              <span>Know. Screen. Act.</span>
              <a href={campaign.poster} download="Ilmeza-Pink-October-2026.jpg" aria-label="Download Pink October campaign poster" title="Download campaign poster">
                <ArrowDownToLine size={18} aria-hidden="true" />
              </a>
            </figcaption>
          </motion.figure>
        </div>

        <dl className={styles.facts}>
          {campaign.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div id="pink-october-care" className={styles.care}>
        <div className={styles.inner}>
          <div className={styles.careHeading}>
            <div>
              <p className={styles.eyebrow}>Care that goes beyond screening</p>
              <h3>Awareness. Guidance. <em>Support.</em></h3>
            </div>
            <p>{campaign.promise}</p>
          </div>
          <ul className={styles.services}>
            {campaign.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <li key={service}>
                  <div className={styles.serviceTop}>
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                    <span aria-hidden="true">0{index + 1}</span>
                  </div>
                  <h4>{service}</h4>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.invitation}>
        <div className={`${styles.inner} ${styles.invitationInner}`}>
          <div>
            <p className={styles.eyebrow}>Together for a healthier tomorrow</p>
            <h3>Because every <em>woman matters.</em></h3>
          </div>
          <div className={styles.invitationActions}>
            <Link to="/join"><HandHeart size={18} aria-hidden="true" /> Volunteer with us <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link to="/contact">Partner with the campaign <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link to="/donate">Support Pink October <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
