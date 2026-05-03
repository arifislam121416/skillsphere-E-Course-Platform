
import CourseCard from "@/components/CourseCard";
import { ToastContainer } from "react-toastify";


export default async function Home() {
      const res = await fetch("https://skillsphere-e-course-platform.vercel.app/data.json")
      console.log(res,"res ashse go");
    const courses = await res.json()
      const popular = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
    
  return (
   <div>
    <div>
      
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Upgrade Your Skills Today 🚀
        </h1>
      </div>

      
      <h2 className="text-2xl mb-4">🔥 Popular Courses</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {popular.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
    <ToastContainer />
   </div>
  );
}
