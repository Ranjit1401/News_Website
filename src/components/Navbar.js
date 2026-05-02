"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link href="/">
          <h1 className="text-xl font-bold dark:text-white cursor-pointer">
            NewsHub
          </h1>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-black dark:text-white">
          <Link href="/">Home</Link>
          <Link href="/category/tech">Tech</Link>
          <Link href="/category/sports">Sports</Link>
          <Link href="/category/politics">Politics</Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md border text-sm bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-black dark:text-white"
          />
        </div>
      </div>
    </nav>
  );
}