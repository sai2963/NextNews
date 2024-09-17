"use client";
import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();
  useEffect(() => {
    async function fetchnews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response) {
        setIsLoading(false);
        setError("Failed to Fetch news");
      }
      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchnews();
  }, []);
  if (isLoading) {
    return <p>Loading......</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <div className=" text-white min-h-screen p-6">
      <nav className="text-center">
        <span className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-600 to-amber-900">
          News Headlines
        </span>
      </nav>

      {newsContent}
    </div>
  );
}
