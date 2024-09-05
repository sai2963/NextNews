import News_List from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const FilterNews = getNewsForYear(newsYear);
  return (
    <div>
      <News_List news={FilterNews} />
    </div>
  );
}
