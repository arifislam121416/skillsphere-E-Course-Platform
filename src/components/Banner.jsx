import CourseCard from "./CourseCard";


const Banner = async () => {
  const res = await fetch(
    "https://skillsphere-e-course-platform.vercel.app/data.json",
    { cache: "no-store" }
  );
  const data = await res.json();

  const courseData = data.slice(0, 3);

  

  return (
    <div className="container mx-auto px-4">
      <h1 className="md:text-3xl text-2xl font-bold">Top Course</h1>
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 bg-gray-200 py-10">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      
    </div>
  );
};

export default Banner;

