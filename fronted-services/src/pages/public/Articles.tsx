import { articles } from "../../data/articles";
import ArticleCard from "../../components/cards/ArticleCard";

export default function Articles() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Artikel
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}