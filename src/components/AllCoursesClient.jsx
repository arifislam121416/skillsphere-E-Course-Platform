"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";

const AllCoursesClient = ({ courses }) => {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-2">
      
      <input
        type="text"
        placeholder="Search courses..."
        className="border p-3 w-full mb-6 rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />

      
      <div className="gap-4 mt-4 py-6 grid lg:grid-cols-3 md:grid-cols-2">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

     
      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No courses found 😢
        </p>
      )}
    </div>
  );
};

export default AllCoursesClient;