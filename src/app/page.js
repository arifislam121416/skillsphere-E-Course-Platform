import CourseCard from "@/components/CourseCard";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";

export default async function Home() {

  const res = await fetch(
    "https://skillsphere-e-course-platform.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const courses = await res.json();


  const popular = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  
  const trending = [...courses].slice(3, 6);

  return (
    <div className="max-w-7xl mx-auto px-4">

    
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Upgrade Your Skills Today 🚀
        </h1>

        <p className="text-gray-500 mt-4">
          Learn from industry experts and grow your career
        </p>
      </div>

    
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          🔥 Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {popular.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>

    
      <TrendingCourses courses={trending} />

    
      <div className="mt-20">
        <LearningTips />
      </div>

    
      <div className="mt-20 mb-20">
        <TopInstructors />
      </div>

    </div>
  );
}

// import CourseCard from "@/components/CourseCard";
// import LearningTips from "@/components/LearningTips";
// import TopInstructors from "@/components/TopInstructors";
// import TrendingCourses from "@/components/TrendingCourses";



// export default async function Home() {
//       const res = await fetch("https://skillsphere-e-course-platform.vercel.app/data.json")
     
//     const courses = await res.json()
//       const popular = [...courses]
//     .sort((a, b) => b.rating - a.rating)
//     .slice(0, 3);
    
//   return (
//    <div>
//     <div className="items-center">
      
//       <div className="text-center py-10">
//         <h1 className="text-4xl font-bold">
//           Upgrade Your Skills Today 🚀
//         </h1>
//       </div>

      
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl md:text-3xl font-bold">🔥 Popular Courses</h2>
//       <TrendingCourses/>
//       </div>

//       <div className="grid md:grid-cols-3 gap-4">
//         {popular.map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//     <LearningTips/>
//     <TopInstructors/>
    
//    </div>
//   );
// }
