import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div data-theme="forest" className="pl-20 pt-10 flex flex-col text-white min-h-[90vh]">
        {/* About Page Main Section */}
        <div className="flex items-center gap-5 mx-10">
          {/* Our Motto Section */}
          <section className="w-full md:w-2/3 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Karate Training
            </h1>
            <p className="text-xl text-gray-200 text-justify">
              Our goal is to provide affordable and quality karate training to individuals of all ages and skill levels. We offer a platform where aspiring karate instructors and students can share their expertise, techniques, and passion. By empowering each other through martial arts, we contribute to personal growth, discipline, and wellness, fostering a global community of strength and resilience.
            </p>
          </section>
        </div>

        {/* Our Services Section */}
        <section className="w-full text-gray-200 space-y-8 mt-16">
          <h2 className="text-4xl text-yellow-500 font-semibold text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl text-yellow-500 font-semibold text-center">Beginner Classes</h3>
              <p className="text-lg text-gray-200 text-center">
                Our beginner classes introduce the basics of karate, focusing on form, technique, and discipline.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl text-yellow-500 font-semibold text-center">Advanced Training</h3>
              <p className="text-lg text-gray-200 text-center">
                Take your skills to the next level with our advanced training sessions, emphasizing sparring and strategy.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl text-yellow-500 font-semibold text-center">Instructor Courses</h3>
              <p className="text-lg text-gray-200 text-center">
                Aspiring instructors can gain certification and knowledge through our specialized courses.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-16">
          <h2 className="text-4xl text-yellow-500 font-semibold text-center mb-8">What Our Students Say</h2>
          <div className="flex justify-center gap-16">
            <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-lg shadow-xl w-full md:w-1/3">
              <p className="text-lg text-gray-200 italic">
                &quot;The training here helped me not just physically, but mentally as well. I’ve learned discipline and focus.&quot;
              </p>
              <cite className="text-xl text-yellow-500">- Araham Abeddin</cite>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-lg shadow-xl w-full md:w-1/3">
              <p className="text-lg text-gray-200 italic">
                &quot;The instructors are knowledgeable and passionate. This is more than just a martial art; it&apos;s a way of life.&quot;
              </p>
              <cite className="text-xl text-yellow-500">- Abhit Roy</cite>
            </div>
          </div>
        </section>

        {/* Top Personalities Quotes Section */}
        <div className="carousel m-auto w-2/3 my-16">
          {/* Bruce Lee's Quote */}
          <div className="flex flex-col items-center text-center space-y-4 p-4 bg-gray-800 rounded-lg shadow-xl">
            <blockquote className="text-xl text-gray-200 italic">
              &quot;Karate is not about being perfect; it&apos;s about being better than you were yesterday.&quot;
            </blockquote>
            <cite className="text-lg text-yellow-500">- Bruce Lee</cite>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
