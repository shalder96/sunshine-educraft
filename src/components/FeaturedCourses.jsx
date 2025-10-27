import React from "react";
import { Link } from "react-router-dom";
import {courseData} from "../data/courseData";
import CourseCard from "./CourseCard";

const FeaturedCourses = () => {
  const featuredCourses = courseData.filter((course) => course.featured);

  return (
    <section className="px-6 py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-800">
          🌟 Featured Courses
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Learn from top instructors with these specially curated courses to boost your skills.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Link
          to="/courses"
          className="inline-block px-8 py-3 text-lg font-medium text-white transition-transform duration-300 bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:scale-105"
        >
          View All Courses →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCourses;
