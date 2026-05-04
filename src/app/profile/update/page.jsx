"use client";

import { useUser } from "better-auth/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  if (!user) {
    router.push("/login");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    try {
      await authClient.updateUser({
        name: form.get("name"),
        image: form.get("image"),
      });

      toast.success("Profile updated ✅");
      router.push("/profile");
    } catch {
      toast.error("Update failed ❌");
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-2xl"
    >
      <h1 className="text-2xl mb-4 text-center">Update Profile</h1>

      <input
        name="name"
        defaultValue={user.name}
        placeholder="Your Name"
        className="border p-2 w-full mb-3 rounded"
      />

      <input
        name="image"
        defaultValue={user.image}
        placeholder="Photo URL"
        className="border p-2 w-full mb-3 rounded"
      />

      <button className="bg-green-500 text-white p-2 w-full rounded">
        Update
      </button>
    </form>
  );
};

export default UpdateProfile;