"use client";


import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

import { toast } from "react-toastify";

const RegisterPage =  () => {
  const onSubmit =async (e) => {
    e.preventDefault();
   const name = e.target.name.value;
   const image = e.target.image.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
    
const {data,error} = await authClient.signUp.email({
  name,
  image,
  email,
  password

})


   toast.success(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Form className="flex mx-auto mt-10 bg-gray-100 p-6 rounded-2xl justify-center w-105 flex-col gap-4" onSubmit={onSubmit}>
     
     <TextField isRequired className="w-full " name="fullName"
     type="text">
      <Label>Your Name</Label>
      <Input placeholder="your name" />
      <Description>This field is required</Description>
    </TextField>
     
     <TextField isRequired className="w-full " name="image"
     type="text">
      <Label>Image URL</Label>
      <Input placeholder="Image URL" />
      <Description>This field is required</Description>
    </TextField>
     
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="your email" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex justify-center gap-2">
        <Button type="submit" variant="primary" className="w-full">
          
          Register
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default RegisterPage;