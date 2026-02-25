import { videos } from "../../data/videos";
import VideoCard from "../../components/cards/VideoCard";

export default function Videos() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Kajian Video
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kumpulan kajian dan ceramah yang dapat disimak kapan saja
            untuk menambah ilmu dan memperbaiki akhlak.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </section>
  );
}