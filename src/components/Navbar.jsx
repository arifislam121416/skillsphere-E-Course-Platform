"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    `transition ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/skillsphare.png"}
            alt="logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className={linkClass("/courses")}>
              Courses
            </Link>
          </li>
          <li>
            <Link href="/myprofile" className={linkClass("/myprofile")}>
              My Profile
            </Link>
          </li>
        </ul>

        {/* Auth */}
        <div className="hidden md:flex gap-4 text-sm">
          <Link
            href="/sign-up"
            className={linkClass("/sign-up")}
          >
            Register
          </Link>
          <Link
            href="/sign-in"
            className={linkClass("/sign-in")}
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={linkClass("/")}
          >
            Home
          </Link>

          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className={linkClass("/courses")}
          >
            Courses
          </Link>

          <Link
            href="/myprofile"
            onClick={() => setOpen(false)}
            className={linkClass("/myprofile")}
          >
            My Profile
          </Link>

          <hr />

          <Link
            href="/sign-up"
            onClick={() => setOpen(false)}
            className={linkClass("/sign-up")}
          >
            Register
          </Link>

          <Link
            href="/sign-in"
            onClick={() => setOpen(false)}
            className={linkClass("/sign-in")}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;