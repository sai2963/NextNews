import Image from "next/image";
import Link from "next/link";;

export default function NewsList({ news }) {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((newsitem) => (
          <li
            key={newsitem.id}
            className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/news/${newsitem.slug}`}>
              <div className="relative">
                <Image
                  src={`/images/news/${newsitem.image}`}
                  alt={newsitem.title}
                  width={400}
                  height={250}
                  className="rounded-t-lg object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-t-lg"></div>
              </div>
              <span className="block mt-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-400 to-purple-600 ">
                {newsitem.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
