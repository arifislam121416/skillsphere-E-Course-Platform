"use client";


import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const MyProfile = () => {
  const { data: session, isLoading } = useSession()

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg">Loading profile...</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">You are not logged in</h1>
        <Link
          href="/sign-in"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center gap-4">

        {/* Avatar */}
        <Image
          src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold">{user.name}</h2>

        {/* Email */}
        <p className="text-gray-600">{user.email}</p>

        {/* Extra Info Card */}
        <div className="w-full mt-4 border rounded-lg p-4 text-sm text-gray-700">
          <p><span className="font-semibold">User ID:</span> {user.id}</p>
          <p><span className="font-semibold">Role:</span> {user.role || "user"}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <Link
            href="/courses"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Browse Courses
          </Link>

          <Link
            href="/"
            className="px-4 py-2 border rounded"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;