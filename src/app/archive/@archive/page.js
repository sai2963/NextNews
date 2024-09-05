import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();
  return (
    <div>
      <header>
        <nav>
          <ul className="flex justify-center space-x-8">
            {links.map((link) => (
              <li key={link}>
                <span className=" block text-center ">
                  <Link
                    href={`/archive/${link}`}
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500"
                  >
                    {link}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
