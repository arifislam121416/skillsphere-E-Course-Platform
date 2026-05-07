"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Input,
  Label,
  TextField,
  Toast,
} from "@heroui/react";

import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignUpPage() {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

    if (error) {
      toast.error("Signup failed ❌");
      return;
    }

    toast.success("Account created successfully ✅");

    // 🔥 signup এর পরে signin page এ নিয়ে যাবে
    router.push("/signin");
  };

  return (
    <Card className="border mx-auto w-96 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <form
        className="flex w-80 mx-auto flex-col gap-4 mt-4"
        onSubmit={onSubmit}
      >
        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input />
        </TextField>

        <TextField isRequired name="image">
          <Label>Image URL</Label>
          <Input />
        </TextField>

        <TextField isRequired name="email">
          <Label>Email</Label>
          <Input />
        </TextField>

        <TextField isRequired name="password">
          <Label>Password</Label>
          <Input type="password" />
        </TextField>

        <Button type="submit" className="bg-blue-500 text-white">
          Submit
        </Button>

        <Button type="reset" variant="secondary">
          Reset
        </Button>

        <Link href="/signin" className="text-center text-blue-500">
          Already have account? Login
        </Link>
      </form>
    </Card>
  );
}