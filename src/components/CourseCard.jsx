import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const CourseCard = ({course}) => {

    return (
        <div className="col-span-12 flex flex-col gap-2 md:col-span-4 md:justify-between md:gap-0 md:py-2">
            {/* 1 */}
            <Card className="flex flex-row gap-3 p-1" variant="transparent">
              <div className=' '>
                <Image 
                src={course.image}
                width={200}
                height={200}
                alt='Course Image'
                />
              </div>

              <h1>{course.title}</h1>

             
            </Card>
            {/* 2 */}
            <Card className="flex flex-row gap-3 p-1" variant="transparent">
             
              <div className="flex flex-1 flex-col justify-center gap-1">
                <Card.Title className="text-sm">Avocado Hackathon</Card.Title>
                <Card.Description className="text-xs">Wed, 4:30 PM</Card.Description>
              </div>
            </Card>
            {/* 3 */}
            <Card className="flex flex-row gap-3 p-1" variant="transparent">
            
              <div className="flex flex-1 flex-col justify-center gap-1">
                <Card.Title className="text-sm">Sound Electro | Beyond art</Card.Title>
                <Card.Description className="text-xs">Fri, 8:00 PM</Card.Description>
              </div>
            </Card>
          </div>
    );
};

export default CourseCard;