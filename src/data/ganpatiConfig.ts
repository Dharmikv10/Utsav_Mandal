// Central configuration — edit invitation details here without touching components.

export interface ScheduleEvent {
  id: string;
  title: string;
  titleMr: string;
  detail: string;
}

export interface CelebrationCard {
  id: string;
  icon: "diya" | "flower" | "dhol" | "music" | "prasad" | "community";
  titleMr: string;
  titleEn: string;
  description: string;
}

export const ganpatiConfig = {
  mandalName: "उत्सव मंडळ",
  mandalNameEn: "Utsav Mandal",

  buildingName: "कपोल निवास",
  buildingNameEn: "Kapol Niwas",

  aagman: {
    dateLabel: "13 September",
    dateLabelMr: "१३ सप्टेंबर",
    time: "7:00 PM",
    venue: "Kapol Niwas",
  },

  aarti: {
    morning: "10:00 AM",
    night: "9:30 PM",
    note: "Everyday, throughout the festival",
  },

  mahaprasad: {
    dateLabel: "19 September",
    dateLabelMr: "१९ सप्टेंबर",
    title: "Satyanarayan Pooja, Mahaprasad & Cultural Programs",
  },

  celebrationCards: [
    {
      id: "aarti",
      icon: "diya",
      titleMr: "आरती",
      titleEn: "Aarti",
      description: "Morning 10:00 AM & Night 9:30 PM, every single day of the festival.",
    },
    {
      id: "darshan",
      icon: "flower",
      titleMr: "दर्शन",
      titleEn: "Darshan",
      description: "Open darshan for all residents and families throughout the celebration.",
    },
    {
      id: "dhol",
      icon: "dhol",
      titleMr: "ढोल ताशा",
      titleEn: "Dhol Tasha",
      description: "Rhythmic dhol-tasha welcome as Bappa arrives at Kapol Niwas.",
    },
    {
      id: "cultural",
      icon: "music",
      titleMr: "सांस्कृतिक कार्यक्रम",
      titleEn: "Cultural Programs",
      description: "An evening of performances by our residents on 19th September.",
    },
    {
      id: "mahaprasad",
      icon: "prasad",
      titleMr: "महाप्रसाद",
      titleEn: "Satyanarayan Pooja & Mahaprasad",
      description: "Satyanarayan Pooja followed by Mahaprasad for the entire community.",
    },
    {
      id: "community",
      icon: "community",
      titleMr: "एकता",
      titleEn: "Community Celebration",
      description: "Every resident, every family — celebrating together as one.",
    },
  ] as CelebrationCard[],

  schedule: [
    { id: "aagman", title: "Ganpati Aagman", titleMr: "गणपती आगमन", detail: "13 September · 7:00 PM" },
    { id: "aarti-daily", title: "Daily Aarti", titleMr: "नित्य आरती", detail: "10:00 AM & 9:30 PM, every day" },
    { id: "darshan", title: "Darshan", titleMr: "दर्शन", detail: "Open through the festival" },
    { id: "cultural", title: "Cultural Program", titleMr: "सांस्कृतिक कार्यक्रम", detail: "19 September" },
    { id: "mahaprasad", title: "Satyanarayan Pooja & Mahaprasad", titleMr: "सत्यनारायण पूजा व महाप्रसाद", detail: "19 September" },
  ] as ScheduleEvent[],
};

export type GanpatiConfig = typeof ganpatiConfig;
