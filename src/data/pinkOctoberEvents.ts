export const pinkOctoberScreening = {
  title: "Free Breast Cancer Screening Camp",
  startsAt: "2026-10-10T12:00:00+05:30",
  endsAt: "2026-10-10T17:00:00+05:30",
  date: "Saturday, 10 October 2026",
  time: "12:00 PM - 5:00 PM IST",
  venue: "Max Multi Speciality Centre",
  address: "A-364, Sector 19, Noida",
  partner: "Max Healthcare",
  phone: "+91 9718776830",
  poster: "/images/healthcare/noida-screening-2026-10-10.webp",
  calendar: "/events/noida-screening-2026-10-10.ics",
  source: "https://www.instagram.com/p/DeL1zz4PkD-/",
  services: [
    "Clinical breast examination by qualified doctors",
    "Self-examination training",
    "Awareness session and an opportunity to ask questions",
    "Referral support for further diagnosis, if needed",
  ],
};

export const pinkOctoberRecaps = [
  {
    id: "nsic-2026-10-06",
    title: "Breast health, in conversation",
    venue: "NSIC, Okhla, New Delhi",
    date: "6 October 2026",
    dateTime: "2026-10-06",
    time: "11:30 AM - 12:30 PM IST",
    partner: "Hosted by NSIC",
    description: "Women came together at NSIC to learn about breast health, self-examination, changes to look out for, and when to seek medical advice. An open conversation made space for questions, understanding, and support.",
    source: "https://www.instagram.com/p/DeJolt8mSrV/",
    announcement: "https://www.instagram.com/p/DeHdCC7P8bD/",
    photos: [
      { src: "/images/healthcare/nsic-2026-10-06-1.webp", alt: "Women gathered around a conference table after Ilmeza's awareness session at NSIC" },
      { src: "/images/healthcare/nsic-2026-10-06-2.webp", alt: "A speaker guides the breast health awareness discussion at NSIC" },
    ],
  },
  {
    id: "south-extension-2026-10-03",
    title: "Awareness begins in the community",
    venue: "SDMC Primary School, South Extension Part-I, near Dharm Bhawan, Delhi",
    date: "3 October 2026",
    dateTime: "2026-10-03",
    time: "9:30 AM IST",
    partner: "In association with Ch. Sohananlal-Santosh Charitable Trust",
    description: "Our free community session brought women together for breast health education, self-examination guidance, counselling, and referral support. A morning of learning and conversation encouraged women to notice changes and seek timely medical advice.",
    source: "https://www.instagram.com/p/DeCBcMZmSG_/",
    announcement: "https://www.instagram.com/p/DeCBcMZmSG_/",
    photos: [
      { src: "/images/healthcare/south-extension-2026-10-03-1.webp", alt: "Women raise their hands together at Ilmeza's South Extension awareness session" },
      { src: "/images/healthcare/south-extension-2026-10-03-2.webp", alt: "Community members at the SDMC Primary School awareness session in South Extension" },
    ],
  },
];

export function getScreeningPhase(now = Date.now()) {
  if (now >= Date.parse(pinkOctoberScreening.endsAt)) return "past";
  if (now >= Date.parse(pinkOctoberScreening.startsAt)) return "today";
  return "upcoming";
}
