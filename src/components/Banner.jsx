import { Button, Card } from "@heroui/react";
import Image from "next/image";
import CourseCard from "./CourseCard";


const Banner = async() => {
    const res = await fetch("https://skillsphere-e-course-platform.vercel.app/data.json")
    const data = await res.json()
    const courseData = data.slice(0,3)

  return (
 <div className="container mx-auto">
  <h1 className="text-4xl font-bold my-4">Top Course</h1>
  <div className="gap-4 mt-4 bg-gray-200 py-10 grid lg:grid-cols-3 md:grid-cols-2">
    {
      courseData.map(course => <CourseCard key={course.id} course={course}/>)
    }
  </div>
 </div>
  );
};

export default Banner;