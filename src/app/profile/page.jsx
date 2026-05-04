"use client";


import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const ProfilePage = () => {
  const { user, isLoading } = useUder
  const router = useRouter();

  // 🔒 Protected
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login?redirect=/profile");
    }
  }, [user, isLoading]);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-2xl text-center">
      
      {/* Profile Image */}
      <Image
      alt="Image"
        src={user.image || "https://i.pravatar.cc/150"}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      {/* Name */}
      <h1 className="text-2xl font-bold">{user.name}</h1>

      {/* Email */}
      <p className="text-gray-600">{user.email}</p>

      {/* Update Button */}
      <Link href="/profile/update">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
          Update Profile
        </button>
      </Link>
    </div>
  );
};

export default ProfilePage;