import News_List from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = [];

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear); // Make sure this returns an array
  } else if (!selectedYear && !selectedMonth) {
    links = getAvailableNewsYears(); // Invoke the function to return years as an array
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No News Found for Selected Period</p>;
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
                  <span className=" block text-center m-8 ">
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
