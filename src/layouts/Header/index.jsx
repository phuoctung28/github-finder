import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-white via-purple-500 to-pink-500 md:flex md:justify-around md:items-center">
      <div className="flex items-center">
        <Link className="mx-auto" to="/">
          <img
            className="md:w-full w-1/2 mx-auto"
            src="https://img.icons8.com/ios-glyphs/120/000000/github.png"
            alt="github-icon"
          />
        </Link>
        <h1 className="font-bold text-4xl md:block hidden">Github Finder</h1>
      </div>

      <nav className="text-xl space-x-3 md:block hidden font-semibold md:text-2xl">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}; 
