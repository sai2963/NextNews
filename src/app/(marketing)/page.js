import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news"; // Assume you're importing this

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
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

      {/* Latest News Highlights */}
      <section className="py-16 px-4 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500">
          Latest Headlines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_NEWS.slice(0, 6).map((newsitem) => (
            <div key={newsitem.id} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/news/${newsitem.slug}`}>
                <Image
                  src={`/images/news/${newsitem.image}`}
                  alt={newsitem.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover"
                />
                <h3 className="text-2xl font-semibold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                  {newsitem.title}
                </h3>
                <p className="mt-2 text-gray-400">
                  {newsitem.excerpt}
                </p>
              </Link>
            </div>
          ))}
        </div>
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
