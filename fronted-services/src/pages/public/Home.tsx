import { Link } from "react-router-dom";
import ArticlesPreviewSection from "../../components/sections/ArticlesPreviewSection";
import ContactSection from "../../components/sections/ContactSection";
import VideosPreviewSection from "../../components/sections/VideosPreviewSection";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Menebarkan Ilmu dan Akhlak <br /> untuk Umat
          </h1>

          <p className="text-lg md:text-xl text-green-100 mb-10">
            Elfalah hadir sebagai wadah dakwah dan pembelajaran Islam
            yang berlandaskan Al-Qur’an dan Sunnah,
            dengan pendekatan yang ilmiah dan relevan untuk semua kalangan.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/articles"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Baca Artikel
            </Link>

            <Link
              to="/videos"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition"
            >
              Lihat Kajian
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Tentang Elfalah
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Elfalah adalah lembaga dakwah yang berkomitmen menyebarkan
            nilai-nilai Islam berdasarkan Al-Qur’an dan Sunnah.
            Kami berupaya menghadirkan kajian yang mencerahkan,
            membangun akhlak, serta memperkuat keimanan umat.
          </p>
        </div>
      </section>

      <ArticlesPreviewSection />
      <VideosPreviewSection />
      <ContactSection />
    </>
  );
}