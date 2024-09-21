import News_List from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = [];

  const availableNewsYears = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = await getAvailableNewsMonths(selectedYear);
  } else if (!selectedYear && !selectedMonth) {
    links = availableNewsYears;
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  // Validate selected year and month
  if (selectedYear && !availableNewsYears.includes(parseInt(selectedYear))) {
    throw new Error('No News found  for selected Year');
  }

  if (selectedYear && selectedMonth) {
    const availableMonths = await getAvailableNewsMonths(selectedYear);
    if (!availableMonths.includes(parseInt(selectedMonth))) {
      throw new Error('No News found  for selected month');
    }
  }

  let newsContent ;
  if (news && news.length > 0) {
    newsContent = <News_List news={news} />;
  }
  

  return (
    <div>
      <header id="archive-header">
        <nav>
          <ul className="flex justify-center space-x-8">
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              
              return (
                <li key={link}>
                  <span className="block text-center m-8">
                    <Link
                      href={href}
                      className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500"
                    >
                      {link}
                    </Link>
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </div>
  );
}