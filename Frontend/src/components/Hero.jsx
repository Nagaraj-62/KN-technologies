
// import React from 'react';

// export default function Hero() {
//   return (
//     <section className=" text-white">
//       <div className="container mx-auto px-6 text-center">
        
//         {/* Heading */}
//         <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
//           Master In-Demand Tech Skills
//         </h2>
        
//         {/* Subtitle */}
//         <p className="text-lg text-blue-300 mb-8 max-w-3xl mx-auto">
//           From Python to React, our hands-on courses are designed to help you
//           launch or advance your career in technology. Taught by industry experts.
//         </p>
        
//         {/* Call to Action */}
//         <a
//           href="#courses"
//           className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block shadow-lg"
//         >
//           View All Courses
//         </a>
//       </div>
//     </section>
//   );
// }

// src/components/Hero.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative text-white min-h-screen flex flex-col justify-center items-center w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-blue-950 via-black to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:14px_24px]"></div>
      </div>

      {/* Content wrapper — changed container to max-w */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="pt-2 pb-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Master In-Demand Skills in <br />
            <span className="text-blue-400">
              <Typewriter
                words={["Python", "Java", "React", "Fullstack", "Databases"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Our hands-on courses are designed to help you launch or advance
            your career in technology. Taught by industry experts.
          </p>

          <a
            href="#courses"
            className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block shadow-lg shadow-blue-600/40"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
}
