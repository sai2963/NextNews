import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news"; // Assume you're importing this
import NewsList from "@/components/news-list";

export default async function HomePage() {
  const response= await fetch('http://localhost:8080/news');
  if(!response){
    throw new error('Failed to fetch news')
  }
  const news=await response.json()
  return (
    <div className="min-h-screen bg-black text-white">
     
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
            Welcome to NextNews
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Stay Updated with the Latest News
          </p>
          <Link href="/news" className="mt-6 inline-block bg-gradient-to-r from-purple-400 to-red-500 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transform transition">
            Explore News
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500">
          Latest Headlines
        </h2>
        
          <NewsList news={news}/>
        
        <div className="text-center mt-8">
          <Link href="/archive" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transform transition">
            View All Latest News
          </Link>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-center">
        <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-green-500">
          &copy; {new Date().getFullYear()} NextNews. All Rights Reserved.
        </div>
        <div className="mt-4 text-gray-500">
          <Link href="/about" className="hover:text-white">About Us</Link> | <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
