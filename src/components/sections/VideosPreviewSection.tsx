import { Link } from "react-router-dom";
import { videos } from "../../data/videos";
import VideoCard from "../cards/VideoCard";

export default function VideosPreviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            Kajian Terbaru
          </h2>

          <Link
            to="/videos"
            className="text-green-700 font-semibold hover:underline"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.slice(0, 3).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </section>
  );
}