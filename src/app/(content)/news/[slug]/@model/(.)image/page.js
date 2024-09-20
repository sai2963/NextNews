import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImageView({ params }) {
  const newsId = params.slug;
  const allNews = await getAllNews();
  const newsItem = allNews.find(item => item.slug === newsId);
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Intercepted Routes</h1>
      <div className="m-10 p-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl">
        <div className="border-4 border-transparent rounded-lg bg-white p-2">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
