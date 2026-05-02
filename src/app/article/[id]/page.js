import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import news from "@/data/news";

export default async function ArticlePage({ params }) {
  // 🔥 FIX: await params
  const { id } = await params;

  const article = news.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl text-red-500">Article not found</h1>
        <p>URL ID: {id}</p>
        <p>Available: {news.map((n) => n.id).join(", ")}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <img
          src={article.image}
          alt="article"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          {article.title}
        </h1>

        <p className="text-gray-700 dark:text-gray-300">
          {article.content}
        </p>
      </div>

      <Footer />
    </div>
  );
}