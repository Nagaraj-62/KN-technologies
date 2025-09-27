// // src/pages/CourseDetailPage.jsx

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { coursesData } from "../Data/courses";
// import { FaArrowLeft } from "react-icons/fa";
// import EnrollmentModal from "../components/EnrollmentModal.jsx"; // Ensure .jsx extension if you renamed it

// export default function CourseDetailPage() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   // Ensure you import any icons you might dynamically use here if they aren't directly in coursesData
//   // For example, if you want a default icon for "Other" courses:
//   // import { FaQuestionCircle } from 'react-icons/fa';

//   const course = coursesData.find(c => c.id === courseId);
//   const [showModal, setShowModal] = useState(false);

//   if (!course) {
//     return (
//       <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-blue-950 to-black text-white px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Course Not Found</h1>
//       </div>
//     );
//   }

//   const discountPercentage = Math.round(((parseInt(course.originalPrice) - parseInt(course.price)) / parseInt(course.originalPrice)) * 100);

//   const courseOptionMap = {
//     "Core Python Programming": "Basic Python",
//     "Core Java Programming": "Basic Java",
//     "Python Fullstack Development": "Full Stack Python/Java",
//     "Java Fullstack Development": "Full Stack Python/Java",
//     "Python with Django Framework": "Advanced Python",
//     "Database Fundamentals": "Databases",
//   };
//   const mappedCourse = courseOptionMap[course.title] || "Other";

//   // Get the Icon Component directly from course.icon
//   const CourseIcon = course.icon; // This will be FaPython, FaJava, etc.

//   return (
//     <>
//       <div className="bg-gradient-to-b from-black via-blue-950 to-black text-white min-h-screen py-12">
//         <div className="container mx-auto px-6">
//           <div
//             className="inline-flex items-center text-blue-400 hover:text-blue-500 mb-8 cursor-pointer"
//             onClick={() => navigate(-1)}
//           >
//             <FaArrowLeft className="mr-2" /> Back to All Courses
//           </div>

//           <div className="mb-12">
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-300">{course.title}</h1>
//             <p className="text-blue-200 text-lg">{course.description}</p>
//           </div>

//           <h2 className="text-3xl font-bold text-blue-300 mb-6 border-b border-blue-400 pb-2">Syllabus</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {course.syllabus.map(item => (
//               <div key={item.week} className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-blue-700/40 transition-all">
//                 <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
//                   Week {item.week}: {item.topic}
//                 </h3>
//                 <p className="text-blue-200">{item.content}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white/10 p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-center mb-12">
            
//             {/* ✨ CHANGED: Render the React Icon Component instead of <img> */}
//             {CourseIcon && ( // Only render if an icon is defined
//               <CourseIcon className=" text-8xl mx-auto mb-6" /> // Adjust size (text-8xl) and color as needed
//             )}
//             {/* If no icon is provided, you might want a fallback, e.g., <FaQuestionCircle className="text-gray-400 text-8xl mx-auto mb-6" /> */}
            
//             <div className="flex items-baseline justify-center gap-4 mb-4">
//               <h3 className="text-4xl font-bold text-blue-300">₹{course.price}</h3>
//               <span className="text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
//               <span className="text-sm text-green-400 font-semibold">{discountPercentage}% OFF</span>
//             </div>
//             <div className="space-y-2 text-blue-200 mb-6">
//               <p><strong>Instructor:</strong> {course.instructor}</p>
//               <p><strong>Duration:</strong> {course.duration}</p>
//             </div>
//             <button
//               onClick={() => setShowModal(true)}
//               className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-blue-700 transition transform hover:scale-105"
//             >
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <EnrollmentModal
//         isOpen={showModal}
//         onClose={() => setShowModal(false)}
//         courseTitle={course.title}
//         mappedCourse={mappedCourse}
//       />
//     </>
//   );
// }


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../Data/courses";
import { FaArrowLeft, FaUserGraduate, FaClock, FaTags, FaChevronDown } from "react-icons/fa";
import EnrollmentModal from "../components/EnrollmentModal.jsx";
import { motion } from 'framer-motion';

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(c => c.id === courseId);

  // ✨ 1. State for the accordion, with the first week open by default
  const [openWeek, setOpenWeek] = useState(course ? course.syllabus[0].week : null);
  const [showModal, setShowModal] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-blue-950 to-black text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Course Not Found</h1>
        <button
          className="inline-flex items-center text-blue-400 hover:text-blue-500 mt-4"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft className="mr-2" /> Back to Homepage
        </button>
      </div>
    );
  }

  // Find the discount percentage
  const discountPercentage = Math.round(
    ((parseInt(course.originalPrice.replace(/,/g, '')) - parseInt(course.price.replace(/,/g, ''))) /
      parseInt(course.originalPrice.replace(/,/g, ''))) * 100
  );

  // Map course title for the form
  const courseOptionMap = {
    "Core Python Programming": "Basic Python",
    "Core Java Programming": "Basic Java",
    "Python Fullstack Development": "Full Stack Python/Java",
    "Java Fullstack Development": "Full Stack Python/Java",
    "Python with Django Framework": "Advanced Python",
    "Database Fundamentals": "Databases",
  };
  const mappedCourse = courseOptionMap[course.title] || "Other";

  return (
    <>
      <div className="bg-gradient-to-b  bg-blue-950  text-white min-h-screen pt-12 pb-12 w-full overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4">
          <button
            className="inline-flex items-center text-blue-400 hover:text-blue-500 mb-8"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="mr-2" /> Back to All Courses
          </button>
          
          {/* ✨ 2. Main two-column grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            
            {/* Left Column: Course Info & Syllabus */}
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-300">{course.title}</h1>
                <p className="text-blue-200 text-lg mb-10">{course.description}</p>
              </motion.div>

              <h2 className="text-3xl font-bold text-blue-300 mb-6">Syllabus</h2>
              {/* ✨ 3. Syllabus Accordion */}
              <div className="space-y-4">
                {course.syllabus.map((item, index) => (
                  <motion.div 
                    key={item.week}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <button
                      className="w-full flex justify-between items-center text-left p-5"
                      onClick={() => setOpenWeek(openWeek === item.week ? null : item.week)}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-blue-400">
                        Week {item.week}: {item.topic}
                      </h3>
                      <FaChevronDown className={`transform transition-transform duration-300 ${openWeek === item.week ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openWeek === item.week ? 'max-h-96' : 'max-h-0'}`}>
                      <p className="text-blue-200 p-5 pt-0">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ✨ 4. Right Column: Sticky Enrollment Card */}
            <div className="lg:sticky lg:top-28 h-fit">
              <motion.div 
                className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl shadow-blue-900/20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-baseline justify-center gap-3 mb-4">
                  <h3 className="text-4xl font-bold text-blue-300">₹{course.price}</h3>
                  <span className="text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
                </div>
                <div className="text-center text-green-400 font-semibold mb-6 bg-green-900/30 py-1 rounded-md">
                  {discountPercentage}% OFF - Limited Time Offer!
                </div>
                
                <div className="space-y-4 text-blue-200 mb-6 text-sm">
                  <div className="flex items-center gap-3"><FaUserGraduate className="text-blue-400" /><span><strong>Instructor:</strong> {course.instructor}</span></div>
                  <div className="flex items-center gap-3"><FaClock className="text-blue-400" /><span><strong>Duration:</strong> {course.duration}</span></div>
                  <div className="flex items-center gap-3"><FaTags className="text-blue-400" /><span><strong>Level:</strong> {course.level}</span></div>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg shadow-blue-600/30"
                >
                  Enroll Now
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        courseTitle={course.title}
        mappedCourse={mappedCourse}
      />
    </>
  );
}
