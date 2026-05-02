import CourseCard from '@/components/CourseCard';
import React from 'react';

const CoursesPage =async () => {
     const res = await fetch("https://skillsphere-e-course-platform.vercel.app/data.json")
    const course = await res.json()
    return (
        <div>
            <h1>All Course</h1>
            <div>
                {
                    course.map(d => <CourseCard key={course.id} course={course}/>)
                }
            </div>
        </div>
    );
};

export default CoursesPage;