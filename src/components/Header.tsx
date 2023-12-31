import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 ">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-white text-xl font-bold">
          My Blog
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href="/blog" className="text-white hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/api/auth/signin"
              className="text-white hover:underline"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
