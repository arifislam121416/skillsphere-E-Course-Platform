import { Card } from "@heroui/react";
import Image from "next/image";

const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div className="">
      {/* 1 */}
      <Card className="bg-gray-100 rounded-2xl gap-4" variant="transparent">
        <div className="relative w-full h-48">
          <Image
            src={course.image}
            height={200}
            width={300}
            alt="course image"
            className="object-cover rounded-xl"
          />
        </div>
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p>{course.instructor}</p>
        <p>{course.level}</p>
        <p>{course.rating}</p>
      </Card>
    </div>
  );
};

export default CourseCard;
