import React from "react";
import { GraduationCap, Users, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="min-h-screen px-6 py-16 shadow-inner bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-blue-800">About EduCraft</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          EduCraft is a next-generation learning platform built to help students
          and professionals master digital skills through practical, interactive
          courses. We believe in learning that’s hands-on, affordable, and truly transformative.
        </p>
      </div>

      <div className="grid max-w-5xl gap-10 mx-auto text-center sm:grid-cols-3">
        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <GraduationCap className="w-10 h-10 mx-auto mb-3 text-blue-600" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Quality Education
          </h3>
          <p className="text-sm text-gray-600">
            Learn from industry professionals with real-world experience.
          </p>
        </div>

        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <Users className="w-10 h-10 mx-auto mb-3 text-blue-600" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Growing Community
          </h3>
          <p className="text-sm text-gray-600">
            Join a vibrant community of learners, mentors, and creators.
          </p>
        </div>

        <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-xl">
          <Target className="w-10 h-10 mx-auto mb-3 text-blue-600" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Goal-Oriented Learning
          </h3>
          <p className="text-sm text-gray-600">
            We focus on outcomes — building skills that matter in real life.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-blue-700">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          To make quality education accessible to everyone, everywhere.
          EduCraft empowers learners to shape their careers through affordable,
          flexible, and engaging digital learning experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
