import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ProtectedCourse from "@/components/ProtectedCourse";

export default async function Details({ params }) {


  const cookieStore = await cookies();

  const session = cookieStore.get(
    "better-auth.session_token"
  );

 
  if (!session) {
    redirect(`/signin?redirect=/courses/${params.id}`);
  }

 
  const res = await fetch(
    "https://skillsphere-e-course-platform.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const courses = await res.json();


  const course = courses.find(
    (c) => c.id === Number(params.id)
  );


  if (!course) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Course Not Found 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

    
      <div className="border rounded-2xl shadow-sm p-6">

  
        <Image
          src={course.image}
          alt={course.title}
          width={1000}
          height={500}
          className="w-full h-72 object-cover rounded-xl"
        />

   
        <h1 className="text-3xl font-bold mt-6">
          {course.title}
        </h1>

   
        <p className="text-gray-600 mt-3">
          {course.description}
        </p>

     
        <div className="flex flex-wrap gap-5 mt-5 text-sm text-gray-700">
          <p>👨‍🏫 {course.instructor}</p>
          <p>⏱ {course.duration}</p>
          <p>⭐ {course.rating}</p>
          <p>📊 {course.level}</p>
        </div>
      </div>

  
      <div className="mt-6 border rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          📚 Course Curriculum
        </h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>HTML Basics</li>
          <li>CSS Fundamentals</li>
          <li>JavaScript Core</li>
          <li>React Basics</li>
          <li>Next.js Introduction</li>
          <li>Backend with Node.js</li>
          <li>Final Project</li>
        </ul>
      </div>
    <ProtectedCourse id={params.id}>
      <div>
        <h1>{course.title}</h1>
      </div>
    </ProtectedCourse>
    </div>
    

    
  );
}

