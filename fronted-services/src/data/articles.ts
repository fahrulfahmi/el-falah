export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  thumbnail: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "keutamaan-menuntut-ilmu",
    title: "Keutamaan Menuntut Ilmu dalam Islam",
    excerpt:
      "Menuntut ilmu adalah kewajiban bagi setiap muslim. Islam sangat memuliakan orang-orang yang berilmu dan menjadikan ilmu sebagai cahaya dalam kehidupan.",
    content: `
Menuntut ilmu merupakan salah satu ibadah yang sangat agung dalam Islam. Rasulullah ﷺ bersabda bahwa menuntut ilmu itu wajib bagi setiap muslim.

Ilmu adalah cahaya yang menerangi hati dan membimbing seseorang dalam menjalani kehidupan. Tanpa ilmu, seseorang mudah terjerumus dalam kebodohan dan kesalahan.

Allah سبحانه وتعالى berfirman dalam Al-Qur’an bahwa Allah akan meninggikan derajat orang-orang yang beriman dan berilmu beberapa derajat.

Oleh karena itu, mari kita senantiasa memperbaiki niat dalam menuntut ilmu, bukan untuk kebanggaan dunia, tetapi semata-mata untuk mencari ridha Allah.
    `,
    date: "23 Februari 2026",
    author: "Ustadz Zaki",
    category: "Aqidah",
    thumbnail:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200",
  },
  {
    id: 2,
    slug: "pentingnya-akhlak-dalam-kehidupan",
    title: "Pentingnya Akhlak dalam Kehidupan Seorang Muslim",
    excerpt:
      "Akhlak adalah cerminan keimanan seseorang. Islam tidak hanya mengajarkan ibadah ritual, tetapi juga adab dan perilaku dalam kehidupan sehari-hari.",
    content: `
Akhlak merupakan inti dari ajaran Islam. Rasulullah ﷺ diutus untuk menyempurnakan akhlak manusia.

Seorang muslim yang baik bukan hanya rajin beribadah, tetapi juga memiliki akhlak yang mulia dalam berbicara, bersikap, dan berinteraksi dengan sesama.

Akhlak yang baik akan membawa kedamaian dalam keluarga, masyarakat, dan lingkungan sekitar. Sebaliknya, akhlak yang buruk dapat merusak hubungan dan menimbulkan permusuhan.

Mari kita jadikan akhlak Rasulullah ﷺ sebagai teladan dalam kehidupan kita sehari-hari.
  `,
    date: "20 Februari 2026",
    author: "Ami Ali",
    category: "Akhlak",
    thumbnail:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200",
  },
  {
    id: 3,
    slug: "makna-ikhlas-dalam-beramal",
    title: "Makna Ikhlas dalam Setiap Amal Perbuatan",
    excerpt:
      "Ikhlas adalah syarat diterimanya amal. Tanpa keikhlasan, amal sebesar apapun tidak bernilai di sisi Allah.",
    content: `
Ikhlas berarti memurnikan niat hanya untuk Allah سبحانه وتعالى. Amal yang dilakukan dengan niat riya atau ingin dipuji manusia tidak akan bernilai di sisi-Nya.

Dalam kehidupan sehari-hari, menjaga keikhlasan bukan perkara mudah. Hati manusia mudah tergelincir dalam keinginan untuk mendapatkan pengakuan.

Oleh karena itu, penting bagi kita untuk selalu memperbaiki niat sebelum, ketika, dan setelah beramal.

Semoga Allah menjadikan kita termasuk hamba-hamba-Nya yang ikhlas dalam setiap amal.
    `,
    date: "18 Februari 2026",
    author: "Ustadz Zaki",
    category: "Tazkiyah",
    thumbnail:
      "https://images.unsplash.com/photo-1581090700227-1e8d1c33e9c0?w=1200",
  },
];
