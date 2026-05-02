import Link from "next/link";

export default function CategorySection() {
  const categories = ["Tech", "Sports", "Politics", "Business", "Health"];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-10">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
        Categories
      </h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/category/${cat.toLowerCase()}`}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 dark:bg-white dark:text-black"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}