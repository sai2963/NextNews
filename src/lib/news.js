import { DUMMY_NEWS } from "@/dummy-news";

async function getData() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch("http://localhost:8080/news");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return DUMMY_NEWS; // Fallback to dummy data if fetch fails
  }
}

export async function getAllNews() {
  return getData();
}

export async function getLatestNews() {
  const News = await getData();
  return News.slice(0, 3);
}

export async function getAvailableNewsYears() {
  const News = await getData();
  return News.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export async function getAvailableNewsMonths(year) {
  const News = await getData();
  return News.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => a - b);
}

export async function getNewsForYear(year) {
  const News = await getData();
  return News.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export async function getNewsForYearAndMonth(year, month) {
  const News = await getData();
  return News.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}