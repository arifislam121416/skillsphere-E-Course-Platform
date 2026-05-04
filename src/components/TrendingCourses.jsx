import React from "react";
import CourseCard from "./CourseCard";
import { Link } from "@heroui/react";


const TrendingCourses = ({ courses }) => {
  return (
    <section className=" px-4 md:px-10">
     
      <div className="text-center  mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            🔥 Trending Courses
          </h2>
          <p className="text-gray-500 text-sm">
            Most popular & newly released courses
          </p>
        </div>

        <Link href="/courses">
        <button className="text-blue-600 font-semibold text-xl hover:underline">
          View All
        </button>
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {courses?.map((course) => (
          <div
            key={course.id}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCourses;