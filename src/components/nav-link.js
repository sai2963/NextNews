"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? "text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400"
            : undefined
        }
      >
        {children}
      </Link>
    </div>
  );
}
