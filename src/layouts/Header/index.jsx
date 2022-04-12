import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-white via-purple-500 to-pink-500 flex justify-around items-center">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-full"
            src="https://img.icons8.com/ios-glyphs/120/000000/github.png"
            alt="github-icon"
          />
        </Link>
        <h1 className="font-bold md:text-4xl text-2xl">Github Finder</h1>
      </div>

      <nav className="text-2xl space-x-3 hidden md:block font-semibold">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};
