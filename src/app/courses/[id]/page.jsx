import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Details({ params }) {
  // 🔐 Auth Check (simple)
  const cookieStore = cookies();
  const session = cookieStore.get("better-auth.session"); // depends on your auth setup

  if (!session) {
    redirect(`/login?redirect=/courses/${params.id}`);
  }

  // 📦 Fetch Data (server-side)
  const res = await fetch(
    "https://skillsphere-e-course-platform.vercel.app/data.json",
    { cache: "no-store" }
  );

  const courses = await res.json();

  const course = courses.find((c) => c.id == params.id);

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p>{course.description}</p>

      <h2 className="mt-4 font-bold">{course.instructor}</h2>

      <ul className="mt-2">
        <li>⏱ {course.duration}</li>
        <li>⭐ {course.rating}</li>
        <li>📊 {course.level}</li>
      </ul>
    </div>
  );
}