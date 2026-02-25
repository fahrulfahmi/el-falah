import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim (demo mode)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Hubungi Kami
          </h2>
          <p className="text-gray-600">
            Silakan hubungi kami untuk pertanyaan, kerja sama dakwah,
            atau informasi kegiatan terbaru.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* INFO + MAP */}
          <div className="space-y-8">

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Walang Barat No.6b, Koja, Jakarta Utara
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  info@elfalah.id
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Telepon / WhatsApp</h3>
                <p className="text-gray-600">
                  +62 812 3456 7890
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Jam Operasional</h3>
                <p className="text-gray-600">
                  Senin – Jumat, 08.00 – 17.00 WIB
                </p>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Chat via WhatsApp
            </a>

            {/* GOOGLE MAP */}
            <div className="rounded-xl overflow-hidden shadow-md mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7934.050367685785!2d106.90456008985643!3d-6.127313295040648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1ffb8def5a37%3A0xbd7a9589d8379e56!2sJl.%20Walang%20Bar.%20No.6b%2C%20RT.4%2FRW.12%2C%20Tugu%20Utara%2C%20Kec.%20Koja%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014260!5e0!3m2!1sid!2sid!4v1771993028540!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Elfalah"
              />
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Kirim Pesan
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}