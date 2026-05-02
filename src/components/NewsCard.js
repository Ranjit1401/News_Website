import Link from "next/link";

export default function NewsCard({ id, title, description, image }) {
  return (
    <Link href={`/article/${id}`}>
      <div className="cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt="news"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 dark:text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}