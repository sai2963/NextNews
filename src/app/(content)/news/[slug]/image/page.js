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
    <div className="m-10">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={800}
        height={450}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  );
}
