import CourseCard from '@/components/CourseCard';
import React from 'react';

const CoursesPage =async () => {
     const res = await fetch("https://skillsphere-e-course-platform.vercel.app/data.json")
    const AllCourse = await res.json()
    return (
        <div className='bg-gray-200 p-3 rounded'>
            <h1 className='text-4xl font-bold'>All Course</h1>
            <div className="gap-4 mt-4  py-10 grid lg:grid-cols-3 md:grid-cols-2">
{
    AllCourse.map(course => <CourseCard key={course.id} course={course}/>)
}
            </div>
        </div>
    );
};

export default CoursesPage;