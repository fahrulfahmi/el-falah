import { Link } from "react-router-dom";
import type { Article } from "../../data/articles";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {article.excerpt}
        </p>

        <Link
          to={`/articles/${article.id}`}
          className="text-green-600 font-medium hover:underline"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </div>
  );
}