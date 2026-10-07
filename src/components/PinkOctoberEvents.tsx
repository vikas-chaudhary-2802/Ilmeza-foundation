import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check,
  CheckCircle2, Clock3, Instagram, MapPin, Phone, Ribbon, ZoomIn,
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { siteConfig } from "@/data/siteConfig";
import { getScreeningPhase, pinkOctoberRecaps, pinkOctoberScreening } from "@/data/pinkOctoberEvents";
import styles from "./PinkOctoberEvents.module.css";

type EventPhoto = { src: string; alt: string };

function EventPhotos({ photos, title }: { photos: EventPhoto[]; title: string }) {
  const [index, setIndex] = useState(0);
  return (
    <Dialog onOpenChange={(open) => { if (open) setIndex(0); }}>
      <DialogTrigger asChild>
        <button className={styles.photoButton} aria-label={`View photos from ${title}`}>
          <img src={photos[0].src} alt={photos[0].alt} loading="lazy" width={1440} height={1440} />
          <span className={styles.photoLabel}><ZoomIn size={17} aria-hidden="true" /> View {photos.length} photos</span>
        </button>
      </DialogTrigger>
      <DialogContent className={styles.photoDialog}>
        <DialogTitle className={styles.photoTitle}>{title}</DialogTitle>
        <DialogDescription className="sr-only">Photographs from Ilmeza's Pink October campaign.</DialogDescription>
        <img className={styles.fullPhoto} src={photos[index].src} alt={photos[index].alt} />
        <div className={styles.photoControls}>
          <button onClick={() => setIndex((index - 1 + photos.length) % photos.length)} aria-label="Previous photo" title="Previous photo"><ArrowLeft size={20} /></button>
          <span aria-live="polite">{index + 1} / {photos.length}</span>
          <button onClick={() => setIndex((index + 1) % photos.length)} aria-label="Next photo" title="Next photo"><ArrowRight size={20} /></button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PinkOctoberNotice() {
  const camp = pinkOctoberScreening;
  const isPast = getScreeningPhase() === "past";
  return (
    <aside className={styles.notice} aria-label="Pink October campaign announcement">
      <div className={styles.noticeInner}>
        <Ribbon className={styles.noticeIcon} size={30} aria-hidden="true" />
        <div>
          <p className={styles.kicker}>Ilmeza Foundation / PINK 1000</p>
          <p className={styles.noticeTitle}>{isPast ? "Pink October: awareness in action" : "Free breast cancer screening in Noida"}</p>
          <p className={styles.noticeDetail}>{isPast ? "Explore our October campaign and community sessions." : `${camp.date} · ${camp.time} · With ${camp.partner}`}</p>
        </div>
        <a className={styles.noticeLink} href="/events#pink-october-events">{isPast ? "Explore the campaign" : "View camp details"}<ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </aside>
  );
}

export default function PinkOctoberEvents() {
  const camp = pinkOctoberScreening;
  const phase = getScreeningPhase();
  const isPast = phase === "past";
  const { hash } = useLocation();
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${camp.venue}, ${camp.address}`)}`;
  const hostEmail = `mailto:${siteConfig.brand.contact.email}?subject=${encodeURIComponent("Host a Pink October awareness session")}`;

  useEffect(() => {
    if (hash !== "#pink-october-events") return;
    const frame = requestAnimationFrame(() => document.getElementById("pink-october-events")?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <section id="pink-october-events" aria-labelledby="pink-october-events-title" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.kicker}><Ribbon size={16} aria-hidden="true" /> This Pink October / PINK 1000</p>
            <h2 id="pink-october-events-title">From awareness <em>to action.</em></h2>
          </div>
          <a href={siteConfig.brand.socials.instagram} target="_blank" rel="noopener noreferrer" className={styles.textLink}><Instagram size={17} aria-hidden="true" /> Campaign updates <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>

        <article className={styles.screening} aria-labelledby="noida-screening-title">
          <div className={styles.campStory}>
            <p className={styles.status}><CalendarDays size={15} aria-hidden="true" />{isPast ? "Past scheduled camp" : phase === "today" ? "Happening today" : "Upcoming camp"}<span>All services free</span></p>
            <h3 id="noida-screening-title">{camp.title}</h3>
            <p className={styles.partner}>Ilmeza Foundation, in association with <strong>{camp.partner}</strong></p>
            <dl className={styles.details}>
              <div><CalendarDays size={19} aria-hidden="true" /><div><dt>Date</dt><dd><time dateTime={camp.startsAt}>{camp.date}</time></dd></div></div>
              <div><Clock3 size={19} aria-hidden="true" /><div><dt>Time</dt><dd>{camp.time}</dd></div></div>
              <div className={styles.venue}><MapPin size={19} aria-hidden="true" /><div><dt>Venue</dt><dd>{camp.venue}<span>{camp.address}</span></dd></div></div>
            </dl>
            <ul className={styles.campServices}>{camp.services.map((service) => <li key={service}><Check size={17} aria-hidden="true" />{service}</li>)}</ul>
            <p className={styles.walkIns}>{isPast ? "The advertised camp date has passed. Follow Ilmeza for new camp announcements." : "Walk-ins welcome. Bring your mother, sister, or a friend."}</p>
            <div className={styles.campActions}>
              {!isPast && <a className={styles.primaryAction} href={`tel:${camp.phone.replace(/\s/g, "")}`}><Phone size={17} aria-hidden="true" />Call to enquire</a>}
              <a className={styles.textLink} href={isPast ? camp.source : mapsHref} target="_blank" rel="noopener noreferrer">{isPast ? <Instagram size={17} aria-hidden="true" /> : <MapPin size={17} aria-hidden="true" />}{isPast ? "View announcement" : "Get directions"}<ArrowUpRight size={16} aria-hidden="true" /></a>
              {!isPast && <a className={styles.textLink} href={camp.calendar} download><CalendarDays size={17} aria-hidden="true" />Add to calendar</a>}
            </div>
            {!isPast && <p className={styles.booking}>Enquiries: <a href={`tel:${camp.phone.replace(/\s/g, "")}`}>{camp.phone}</a><span>To reserve a slot, <a href="https://www.instagram.com/ilmezaa/" target="_blank" rel="noopener noreferrer">message @ilmezaa <ArrowUpRight size={13} aria-hidden="true" /></a>.</span></p>}
          </div>
          <figure className={styles.campPoster}>
            <Dialog>
              <DialogTrigger asChild><button className={styles.posterButton} aria-label="View full Noida screening camp poster"><img src={camp.poster} width={1440} height={1799} alt="Free breast cancer screening camp with Max Healthcare, 10 October 2026, 12 PM to 5 PM, Sector 19, Noida" loading="lazy" /><span className={styles.posterZoom}><ZoomIn size={19} aria-hidden="true" /></span></button></DialogTrigger>
              <DialogContent className={styles.photoDialog}>
                <DialogTitle className={styles.photoTitle}>Noida screening camp</DialogTitle>
                <DialogDescription className="sr-only">Official announcement for the 10 October 2026 camp.</DialogDescription>
                <img className={styles.fullPhoto} src={camp.poster} alt="Full Noida screening camp announcement" />
                <a className={styles.textLink} href={camp.poster} download="Ilmeza-Noida-Screening-10-October-2026.webp">Download poster <ArrowRight size={17} aria-hidden="true" /></a>
              </DialogContent>
            </Dialog>
            <figcaption><a href={camp.source} target="_blank" rel="noopener noreferrer">Official announcement <ArrowUpRight size={14} aria-hidden="true" /></a></figcaption>
          </figure>
        </article>

        <div className={styles.recapHeading}><p className={styles.kicker}>On the ground</p><h3>Conversations that make a difference.</h3></div>
        <div className={styles.recaps}>
          {pinkOctoberRecaps.map((event) => (
            <article className={styles.recap} key={event.id} aria-labelledby={`${event.id}-title`}>
              <EventPhotos photos={event.photos} title={event.venue} />
              <div className={styles.recapBody}>
                <div className={styles.recapMeta}><time dateTime={event.dateTime}>{event.date}</time><span><CheckCircle2 size={14} aria-hidden="true" />Completed session</span></div>
                <h4 id={`${event.id}-title`}>{event.title}</h4>
                <p className={styles.recapVenue}><MapPin size={16} aria-hidden="true" />{event.venue}</p>
                <p className={styles.recapTime}><Clock3 size={14} aria-hidden="true" />{event.time}</p>
                <p className={styles.recapDescription}>{event.description}</p>
                <p className={styles.recapPartner}>{event.partner}</p>
                <a className={styles.textLink} href={event.source} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden="true" />Read the event recap<ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.host}>
          <div><h3>Bring the conversation to your community.</h3><p>Request a free awareness session at your school, college, office, or community across Delhi NCR.</p></div>
          <a href={hostEmail} className={styles.textLink}>Host a session<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
