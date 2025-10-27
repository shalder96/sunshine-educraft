import React from "react";
import { useParams, Link } from "react-router-dom";
import {courseData} from "../data/courseData";
import { ArrowLeft } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600">
        <p className="mb-4 text-lg">Course not found 😢</p>
        <Link
          to="/courses"
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="relative max-w-4xl p-8 mx-auto bg-white shadow-lg rounded-2xl">
        {/* Back Button */}
        <Link
          to="/courses"
          className="absolute flex items-center gap-2 text-blue-600 top-6 left-6 hover:underline"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* Course Image */}
        {course.image && (
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-64 mb-6 rounded-xl"
          />
        )}

        {/* Course Info */}
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          {course.title}
        </h1>
        <p className="mb-4 text-gray-600">👩‍🏫 Instructor: {course.instructor}</p>
        <p className="mb-6 text-lg font-semibold text-blue-600">
          Price: {course.price}
        </p>

        {/* Description Placeholder */}
        <p className="mb-8 leading-relaxed text-gray-700">
          Welcome to <strong>{course.title}</strong>! In this course, you’ll learn everything from the basics
          to advanced concepts. Get ready to explore practical lessons, real-world projects,
          and quizzes that test your understanding.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="#"
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Start Learning
          </Link>
          <Link
            to="#"
            className="px-6 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Download PDF
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
