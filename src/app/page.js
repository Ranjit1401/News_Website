import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import news from "@/data/news";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      <Navbar />

      <Hero />

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Trending News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      <CategorySection />
      <Footer />
    </div>
  );
}