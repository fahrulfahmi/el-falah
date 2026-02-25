import { Link } from "react-router-dom";
import { articles } from "../../data/articles";
import ArticleCard from "../cards/ArticleCard";

export default function ArticlesPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            Artikel Terbaru
          </h2>

          <Link
            to="/articles"
            className="text-green-700 font-semibold hover:underline"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
}