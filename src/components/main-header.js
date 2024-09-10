import Link from 'next/link';
import NavLink from './nav-link';


export default function Mainheader() {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-blue-600 p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className=" text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Link href="/">NextNews</Link>
        </div>
        <ul className="flex space-x-8 text-gr text-lg font-semibold">
          
        <li className="hover:text-gray-300 transition duration-300">
          <NavLink href="/news">News</NavLink>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
          <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}