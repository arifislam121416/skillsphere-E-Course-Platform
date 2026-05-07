"use client";


import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CourseDetailsPage = ({ params }) => {
  const { data: session, isLoading } = useSession()
  const router = useRouter();

  // 🔒 Protect Route
  useEffect(() => {
    if (!isLoading && !session?.user) {
      router.push(`/sign-in?redirect=/courses/${params.id}`);
    }
  }, [session, isLoading, router, params.id]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session?.user) return null;

  // 🔥 Static course data (demo)
  const course = {
    id: params.id,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    description:
      "Learn full-stack web development from scratch with real projects.",
    level: "Beginner",
    duration: "20 hours",
    rating: 4.8,
    curriculum: [
      "HTML Basics",
      "CSS Fundamentals",
      "JavaScript Core",
      "React Basics",
      "Next.js Introduction",
      "Backend with Node.js",
      "Final Project"
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Course Info */}
      <div className="border rounded-xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold">{course.title}</h1>

        <p className="text-gray-600 mt-2">{course.description}</p>

        <div className="flex gap-4 mt-4 text-sm text-gray-700">
          <p>👨‍🏫 {course.instructor}</p>
          <p>⏱ {course.duration}</p>
          <p>⭐ {course.rating}</p>
          <p>📊 {course.level}</p>
        </div>
      </div>

      {/* Curriculum */}
      <div className="mt-6 border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">
          Course Curriculum
        </h2>

        <ul className="list-disc pl-5 space-y-2">
          {course.curriculum.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsPage;