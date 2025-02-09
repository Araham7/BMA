import { useState, useEffect } from 'react';
import Layout from "../Layout/Layout";
import { Link } from 'react-router-dom';

const ExploreCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data fetch (Replace with API call)
  useEffect(() => {
    setTimeout(() => {
      setCourses([
        { 
          id: 1, 
          title: 'Karate Basics', 
          description: 'A beginner-friendly course designed to introduce you to the fundamental principles of Karate. Learn key stances, strikes, and basic techniques to build a solid foundation for further martial arts progression.' 
        },
        { 
          id: 2, 
          title: 'Advanced Karate Training', 
          description: 'Take your Karate skills to the next level by mastering advanced techniques, including complex combinations, self-defense strategies, and kata. Perfect for intermediate practitioners aiming to refine their skills and enhance their performance.' 
        },
        { 
          id: 3, 
          title: 'Instructor Training', 
          description: 'Designed for martial arts enthusiasts who want to become certified instructors, this course covers various teaching strategies, communication skills, leadership techniques, and classroom management. Ideal for those looking to impart their knowledge, lead successful training sessions, and inspire others in their martial arts journey.' 
        },
      ]);
      
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Layout>
    <div className="p-4 bg-gray-100 min-h-screen " >
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Explore Our Martial Arts Courses</h1>
      {loading ? (
        <p className="text-center text-xl text-gray-600">Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link to="/contact">
              <button className="bg-yellow-500 px-5 py-3 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
              Enroll Now
              </button>
            </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    </Layout>
  );
};

export default ExploreCourse;
