
import CourseCard from "@/components/CourseCard";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";
import { ToastContainer } from "react-toastify";


export default async function Home() {
      const res = await fetch("https://skillsphere-e-course-platform.vercel.app/data.json")
     
    const courses = await res.json()
      const popular = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
    
  return (
   <div>
    <div className="items-center">
      
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Upgrade Your Skills Today 🚀
        </h1>
      </div>

      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold">🔥 Popular Courses</h2>
      <TrendingCourses/>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {popular.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
    <LearningTips/>
    <TopInstructors/>
    <ToastContainer />
   </div>
  );
}
