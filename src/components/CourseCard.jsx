import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const CourseCard = ({ course }) => {
  const isFeatured = course.featured;

  return (
    <div
      className={`relative p-6 text-center transition-all duration-300 rounded-2xl shadow-md hover:shadow-2xl 
      ${isFeatured 
        ? "bg-gradient-to-br from-gray-600 via-gray-500 to-gray-600 text-white scale-[1.02]" 
        : "bg-white text-gray-800 hover:scale-[1.02]"}`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute flex items-center gap-1 px-3 py-1 text-sm font-semibold text-gray-800 bg-yellow-400 rounded-full shadow-md top-4 right-4">
          <Star size={14} className="fill-yellow-500" />
          Featured
        </div>
      )}

      {/* Image Section */}
      {course.image && (
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full mb-4 h-44 rounded-xl"
        />
      )}

      {/* Title & Info */}
      <h3
        className={`mb-2 text-xl font-semibold ${
          isFeatured ? "text-white" : "text-gray-800"
        }`}
      >
        {course.title}
      </h3>
      <p
        className={`mb-1 ${
          isFeatured ? "text-blue-100" : "text-gray-600"
        }`}
      >
        👩‍🏫 {course.instructor}
      </p>
      <p
        className={`mb-4 font-bold ${
          isFeatured ? "text-yellow-300" : "text-blue-600"
        }`}
      >
        {course.price}
      </p>

      {/* Button */}
      <Link
        to={`/courses/${course.id}`}
        className={`inline-block px-4 py-2 rounded-lg font-medium transition 
          ${isFeatured 
            ? "bg-white text-blue-700 hover:bg-gray-100" 
            : "bg-blue-600 text-white hover:bg-blue-700"}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
