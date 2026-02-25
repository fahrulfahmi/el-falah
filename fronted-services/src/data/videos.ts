export interface Video {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Kajian Tauhid Dasar",
    description: "Memahami dasar-dasar tauhid dalam kehidupan sehari-hari.",
    youtubeUrl: "https://youtu.be/Ciz7gN9n6Nk?si=NrNHjQ35ZxiYN6V-",
    date: "22 Februari 2026"
  },
  {
    id: 2,
    title: "Pentingnya Menjaga Akhlak",
    description: "Akhlak adalah cerminan keimanan seorang muslim.",
    youtubeUrl: "https://youtu.be/ZhuAtUqXqA0?si=7AiPGkMK6elYr5-1",
    date: "18 Februari 2026"
  },
  {
    id: 3,
    title: "Keutamaan Shalat Berjamaah",
    description: "Keutamaan dan manfaat shalat berjamaah.",
    youtubeUrl: "https://youtu.be/GzVkZ3kPWBI?si=fOR7t0AxgaOOSD4D",
    date: "15 Februari 2026"
  }
];