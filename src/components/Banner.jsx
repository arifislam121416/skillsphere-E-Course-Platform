import { Button, Card } from "@heroui/react";
import Image from "next/image";
import CourseCard from "./CourseCard";


const Banner = async() => {
    const res = await fetch("https://skillsphere-e-course-platform.vercel.app/data.json")
    const data = await res.json()
    const courseData = data.slice(0,3)

  return (
 <div>
  <h1>Top Course</h1>
  <div>
    {
      courseData.map(course => <CourseCard key={course.id} course={course}/>)
    }
  </div>
 </div>
  );
};

export default Banner;