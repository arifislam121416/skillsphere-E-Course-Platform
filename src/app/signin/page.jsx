"use client";

import { authClient } from "@/lib/auth-client";
import { google } from "better-auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    try {
      await authClient.signIn.email({
        email: form.get("email"),
        password: form.get("password"),
        
      });

      toast.success("Login successful ✅");

      router.push(redirect);
    } catch (error) {
      console.error(error);
      toast.error("Login failed ❌");
    }
  };

 const handleGoogleSignin = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
    });

    router.push(redirect);
  } catch (error) {
    toast.error("Google login failed ❌");
  }
};
  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto bg-gray-100 p-6 rounded-2xl mt-10"
    >
      <h1 className="text-2xl mb-4 text-center">Login</h1>

      <h1 className="text-xl">Email</h1>
      <input
        name="email"
        type="email"
        className="border rounded-full p-2 w-full mb-3"
        required
      />

      <h1 className="text-xl">Password</h1>
      <input
        name="password"
        type="password"
        className="border rounded-full p-2 w-full mb-3"
        required
      />

      <button className="bg-blue-500 text-white p-2 w-full rounded-full">
        Login
      </button>
<p className="text-2xl my-2 text-center">Or,</p>
      <button
        type="button"
        onClick={handleGoogleSignin}
        className="border rounded-full p-2 w-full mt-2"
      >
        Continue with Google
      </button>

      <p className="mt-3 text-center">
        Don’t have an account?{" "}
        <Link href={"/signup"} className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginPage;