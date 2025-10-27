import React from "react";
import {courseData} from "../data/courseData";
import CourseCard from "../components/CourseCard";

const Courses = () => {


  return (
    <div className="max-w-[100%] p-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-center text-blue-700">
        Explore Our Courses
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[100%]">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
