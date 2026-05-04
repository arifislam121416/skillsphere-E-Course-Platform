import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div className="">
      {/* 1 */}
      <Card className="bg-gray-100 rounded-2xl gap-4" variant="transparent">
        <div className="relative w-full aspect-square h-48">
          <Image
            src={course.image}
            fill={true}
           
            alt="course image"
            className="object-cover rounded-xl"
          />
        </div>
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p>{course.instructor}</p>
        <p>⭐{course.rating}</p>
        {/* href={`/courses/${course.id}`} */}
       <Link href={"/signup"}>
       <Button className="mt-2 w-full bg-blue-500 text-white px-3 py-1 rounded-full">View Details</Button>
       </Link>
      </Card>
    </div>
  );
};

export default CourseCard;
