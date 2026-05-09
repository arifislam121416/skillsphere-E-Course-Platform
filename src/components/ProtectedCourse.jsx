"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedCourse({ children, id }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/signin?redirect=/courses/${id}`);
    }
  }, [session, isPending, id]);

  if (isPending || !session?.user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return children;
}