import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";

export default function NewsDetailPage({ params }) {
  const newsId = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <article className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <header className="mb-6">
          <Link href={`/news/${newsItem.slug}/image`}> 
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={800}
              height={450}
              className="w-full h-auto rounded-lg object-cover"
            />
          </Link>

          <h1 className="text-3xl font-bold mt-6">{newsItem.title}</h1>
          <time dateTime={newsItem.date} className="block mt-2 text-gray-400">
            {newsItem.date}
          </time>
        </header>
        <p className="text-lg leading-relaxed">{newsItem.content}</p>
      </article>
    </div>
  );
}
