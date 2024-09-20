import News_List from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestPage() {
  const LatestNews = await getLatestNews();
  return (
    <div>
      <div className="text-center">
        <span className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500">
          Latest News
        </span>
      </div>

      <News_List news={LatestNews} />
    </div>
  );
}
