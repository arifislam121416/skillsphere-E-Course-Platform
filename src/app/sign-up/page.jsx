"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    try {
      await authClient.signUp.email({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      });

      toast.success("Register successful ✅");
      router.push("/login");
    } catch {
      toast.error("Registration failed ❌");
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto bg-gray-100 p-6 rounded-2xl mt-10">
      <h1 className="text-2xl mb-4 text-center">Register</h1>
<h1 className="text-2xl">Name</h1>
      <input
        name="name"
        placeholder="Your Name"
        className="border rounded-full p-2 w-full mb-3"
        required
      />
<h1 className="text-2xl">Email</h1>
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="border rounded-full p-2 w-full mb-3"
        required
      />
<h1 className="text-2xl">Password</h1>
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border rounded-full p-2 w-full mb-3"
        required
      />

     <Link href={"/sign-in"}>
      <button className="bg-blue-500 text-white p-2 w-full rounded-full">
        Register
      </button>
     </Link>

      <button
        type="button"
        onClick={() =>
          authClient.signIn.social({ provider: "google" })
        }
        className="border rounded-full p-2 w-full mt-2"
      >
        Continue with Google
      </button>

      <p className="mt-3 text-center">
        Already have an account?{" "}
        <Link href="/sing-in" className="text-blue-500">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterPage;