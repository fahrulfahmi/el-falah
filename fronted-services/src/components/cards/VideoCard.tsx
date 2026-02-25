import type { Video } from "../../data/videos";
import { extractYoutubeId } from "../../utils/extractYoutubeId";

interface Props {
  video: Video;
}

export default function VideoCard({ video }: Props) {
  const videoId = extractYoutubeId(video.youtubeUrl);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          allowFullScreen
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {video.description}
        </p>
      </div>
    </div>
  );
}