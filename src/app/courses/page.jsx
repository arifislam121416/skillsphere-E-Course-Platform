import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const res = await fetch(
    "https://skillsphere-e-course-platform.vercel.app/data.json",
    { cache: "no-store" }
  );

  const courses = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        All Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}