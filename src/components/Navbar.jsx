"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    `transition ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-black"
    }`;

    const handleSignOut = async () =>{
      await authClient.signOut()
    }

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

      
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

        
        <div>
        {!user && <div className="hidden md:flex gap-4 text-sm">
           <Link
            href={"/signup"}
            className={linkClass("/signup")}
          >
            Register
          </Link>
          <Link
            href="/signin"
            className={linkClass("/signin")}
          >
            Login
          </Link>
         </div>}

         {
          user && <div className="flex gap-3">
            <Avatar size="sm">
        <Avatar.Image sizes="sm"
          alt="Blue"
          src={user.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
      <Button onClick={handleSignOut} variant="danger">SignOut</Button>
          </div>
         }
        </div>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

     
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
            href="/signup"
            onClick={() => setOpen(false)}
            className={linkClass("/signup")}
          >
            Register
          </Link>

          <Link
            href="/sign-in"
            onClick={() => setOpen(false)}
            className={linkClass("/signin")}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;