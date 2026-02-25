import { useParams } from "react-router-dom";
import { articles } from "../../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();

  const article = articles.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Artikel tidak ditemukan</h2>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          {article.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {article.date} • {article.author}
        </p>

        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-80 object-cover rounded-lg mb-8"
        />

        <p className="text-gray-700 leading-relaxed">
          {article.content}
        </p>
      </div>
    </section>
  );
}