import NewsList from "@/components/news-list";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch("http://localhost:8080/news");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function NewsPage() {
  let newsContent;
  try {
    const news = await getData();
    newsContent = <NewsList news={news} />;
  } catch (error) {
    console.error("Error fetching news:", error);
    newsContent = <p>Failed to load news. Please try again later.</p>;
  }

  return (
    <div className="text-white min-h-screen p-6">
      <nav className="text-center">
        <span className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-600 to-amber-900">
          News Headlines
        </span>
      </nav>

      {newsContent}
    </div>
  );
}
