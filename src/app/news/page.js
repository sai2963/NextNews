import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import News_List from "@/components/news-list";

export default function NewsPage() {
  return (
    <div className=" text-white min-h-screen p-6">
      <nav className="text-center">
        <span className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-600 to-amber-900">
          News Headlines 
        </span>
      </nav>

      <News_List news={DUMMY_NEWS} />
    </div>
  );
}
