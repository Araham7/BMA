import { Link } from "react-router-dom";
import HomePageImage from "./karate.png"; // Use correct image path here
import Layout from "../Layout/Layout";

function HomePage() {
  return (
    <Layout>
      {/* Main container with a night theme and flex layout */}
      <div
        data-theme="coffee"
        className="pl-20 pt-20 flex flex-row text-white min-h-[90vh]"
      >

        {/* Left side - Main content */}
        <div className="w-2/3 space-y-6 px-5">
          {/* HomePage Heading */}
          <h1 className="text-5xl font-semibold">
            Welcome to {" "}
            <span className="text-yellow-500 font-bold">
              Bishal Martial Arts
            </span>
          </h1>

          {/* HomePage Main content "font-bold" */}
          <p className="text-3xl text-gray-200">
            At Bishal Martial Arts, we empower individuals through the
            <b> discipline</b>, <b> strength</b>, and <b> confidence</b> of karate. Whether you're a
            beginner or an experienced practitioner, our academy offers a
            supportive environment for all ages and skill levels.
          </p>

          <div className="space-x-6">
            {/* 1. Explore Courses */}
            <Link to="/courses">
              <button className="bg-yellow-500 px-5 py-3 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Courses
              </button>
            </Link>

            {/* 2. Contact Us */}
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/3 flex items-center justify-center">
          <img alt="Karate demonstration" src={HomePageImage} className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
