// import React from 'react';
// import { Link } from 'react-router-dom';
// import { coursesData } from '../Data/courses';
// // It's good practice to import any fallback icons you might use
// import { FaLaptopCode } from "react-icons/fa";

// export default function Courses() {
//   return (
//     <section id="courses" className="py-20 text-white">
//       <div className="container mx-auto px-6">
        
//         {/* Heading */}
//         <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-300 mb-12">
//           Our Popular Courses
//         </h3>
        
//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {coursesData.map((course) => {
//             // ✨ FIX: Define CourseIcon inside the map loop
//             const CourseIcon = course.icon || FaLaptopCode; // Use the course icon or a fallback

//             return (
//               <Link to={`/course/${course.id}`} key={course.id}>
//                 {/* Ensure the card flexbox layout is vertical to properly space elements */}
//                 <div className="bg-white/10 rounded-xl shadow-md hover:shadow-blue-700/30 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  
//                   {/* Icon Wrapper for centering and consistent height */}
//                   <div className="flex-grow flex items-center justify-center pt-8 pb-4">
//                     <CourseIcon className="text-blue-400 text-7xl" />
//                   </div>
                  
//                   <div className="p-6 pt-2 text-center">
//                     <h4 className="text-xl font-semibold mb-2 text-white">{course.title}</h4>
//                     <p className="text-blue-200 text-sm mb-4 line-clamp-3">{course.description}</p>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../Data/courses';
import { FaLaptopCode, FaClock, FaStar } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
// ✨ 1. Import motion from framer-motion
import { motion } from 'framer-motion';

export default function Courses() {
  // ✨ 2. Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make each child animate 0.2s after the previous one
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
   <section id="courses" className="py-20 text-white w-full overflow-hidden">
  {/* Wrapper */}
  <div className="w-full max-w-6xl mx-auto px-4">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-4xl font-bold text-blue-300">
        Our Popular Courses
      </h3>
      <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
        Choose from a selection of our most popular courses, designed to equip you with the skills needed in today's tech industry.
      </p>
    </div>

    {/* Grid */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {coursesData.map((course) => {
        const CourseIcon = course.icon || FaLaptopCode;
        return (
          <motion.div key={course.id} variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } } }}>
            <Link to={`/course/${course.id}`} className="block h-full">
              <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-lg hover:shadow-blue-700/30 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col p-6">
                
                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute top-0 right-0 mt-4 mr-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FaStar />
                    <span>FEATURED</span>
                  </div>
                )}

                {/* Card Content */}
                <div className="flex-grow flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-900/30 rounded-full mb-4">
                    <CourseIcon className="text-blue-300 text-5xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{course.title}</h4>
                  <p className="text-blue-200 text-sm mb-4 line-clamp-3 flex-grow">{course.description}</p>
                </div>

                {/* Details */}
                <div className="mt-auto pt-4 border-t border-white/10 flex justify-around text-xs text-blue-200">
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiLevelsdotfyi />
                    <span>{course.level}</span>
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

  );
}