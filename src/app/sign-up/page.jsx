"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
      callbackURL: "/sign-in"
    });
 

    if (error) {
     toast.error(error);
      return;
    }

    window.location.href = "/sign-in";
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
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

        <div className="flex gap-2">
        <Link href={"/sign-in"}>
          <Button>
           
            Submit
          </Button>
        </Link>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>

        <Link href="/sign-in" className="text-center text-blue-500">
          Already have account? Login
        </Link>
      </Form>
    </Card>
  );
}