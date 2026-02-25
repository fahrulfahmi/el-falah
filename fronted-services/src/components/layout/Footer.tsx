import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-20">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Elfalah
          </h3>
          <p className="text-sm leading-relaxed">
            Lembaga dakwah yang berkomitmen menyebarkan ilmu dan
            akhlak Islam berdasarkan Al-Qur’an dan Sunnah.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/articles" className="hover:text-white">Artikel</Link></li>
            <li><Link to="/videos" className="hover:text-white">Video</Link></li>
            <li><Link to="/contact" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Kontak
          </h3>
          <p className="text-sm">
            📍 Jakarta, Indonesia
          </p>
          <p className="text-sm">
            ✉️ info@elfalah.id
          </p>
          <p className="text-sm">
            📞 +62 812 3456 7890
          </p>
        </div>
      </div>

      <div className="border-t border-green-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Elfalah. All rights reserved.
      </div>
    </footer>
  );
}