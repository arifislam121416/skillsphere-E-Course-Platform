"use client";

import { useState } from "react";
import TrendingCourses from "./TrendingCourses";
import PopularCourses from "./PopularCourses";

const CoursesSection = ({ courses }) => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="mt-10">
      
      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-8">
        
        <button
          onClick={() => setActiveTab("popular")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            activeTab === "popular"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          🔥 Popular Courses
        </button>

        <button
          onClick={() => setActiveTab("trending")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            activeTab === "trending"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          🚀 Trending Courses
        </button>
      </div>

      {/* Conditional Render */}
      {activeTab === "popular" ? (
        <PopularCourses courses={courses} />
      ) : (
        <TrendingCourses courses={courses} />
      )}
    </div>
  );
};

export default CoursesSection;