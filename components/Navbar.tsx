"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={
        isOpen
          ? "sticky mx-auto p-6 bg-white top-0 z-50"
          : "sticky mx-auto p-6 bg-white shadow-md top-0 z-50"
      }
    >
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="navbar-link">
            CS128 LIVE
          </Link>
        </div>
        {/* nav links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/lectures" className="navbar-link">
            {" "}
            Lectures{" "}
          </Link>
          <Link href="/assignments" className="navbar-link">
            {" "}
            Assignments{" "}
          </Link>
          <Link href="/quizzes" className="navbar-link">
            {" "}
            Quizzes{" "}
          </Link>
          <Link href="/syllabus" className="navbar-link">
            {" "}
            Syllabus{" "}
          </Link>
          <Link href="/coursebook" className="navbar-link">
            {" "}
            Course Book{" "}
          </Link>
          <Link href="/support" className="navbar-link">
            {" "}
            Support{" "}
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          id="burger-btn"
          className={
            isOpen ? "open" : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden w-full">
        <div
          id="burger-menu"
          className={
            isOpen
              ? "flex absolute flex-col items-center self-end py-8 space-y-6 bg-white sm:w-auto sm:self-center left-0 right-0 mt-2 drop-shadow-md"
              : "hidden"
          }
        >
          <Link href="/lectures" className="navbar-link">
            {" "}
            Lectures{" "}
          </Link>
          <Link href="/assignments" className="navbar-link">
            {" "}
            Assignments{" "}
          </Link>
          <Link href="/quizzes" className="navbar-link">
            {" "}
            Quizzes{" "}
          </Link>
          <Link href="/syllabus" className="navbar-link">
            {" "}
            Syllabus{" "}
          </Link>
          <Link href="/course-book" className="navbar-link">
            {" "}
            Course Book{" "}
          </Link>
          <Link href="/support" className="navbar-link">
            {" "}
            Support{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
