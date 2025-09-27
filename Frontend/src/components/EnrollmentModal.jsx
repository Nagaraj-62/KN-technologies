
// import React, { useState } from "react";
// // ✨ 1. Import animation components and new icons
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, CheckCircle2 } from 'lucide-react';

// export default function EnrollmentModal({ isOpen, onClose, courseTitle = '', mappedCourse = '' }) {
//   const [submitted, setSubmitted] = useState(false);
//   const inputStyle = "w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all";

//   // ❗ This function is UNTOUCHED, as requested.
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const formActionURL = "https://docs.google.com/forms/d/e/1FAIpQLSfs7zegk0icV56MK2DuNa_VvJW-_LzpQRx1BEl2qZQV1HZfiQ/formResponse";

//     try {
//       await fetch(formActionURL, {
//         method: "POST",
//         body: formData,
//         mode: "no-cors",
//       });
//       setSubmitted(true);
//       setTimeout(() => {
//         onClose();
//         // Reset state after a delay to allow for the exit animation
//         setTimeout(() => setSubmitted(false), 500); 
//       }, 3000);
//     } catch (err) {
//       console.error("Form submission failed", err);
//     }
//   };

//   // Animation variants for the modal
//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
//     exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
//   };

//   return (
//     // ✨ 2. AnimatePresence allows the modal to animate out smoothly
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white rounded-2xl shadow-2xl w-full max-w-2xl relative"
//           >
//             {submitted ? (
//               // ✨ 3. Enhanced "Thank You" screen with an icon
//               <div className="text-center p-8 md:p-12">
//                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
//                     <CheckCircle2 className="w-20 h-20 mx-auto text-green-400 mb-4" />
//                 </motion.div>
//                 <h2 className="text-3xl font-bold mb-2 text-green-400">Thank You!</h2>
//                 <p className="text-blue-200 text-lg">Your enrollment has been received. We will contact you soon.</p>
//               </div>
//             ) : (
//               <div className="p-8">
//                 <button
//                   className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
//                   onClick={onClose}
//                   aria-label="Close modal"
//                 >
//                   <X size={28} />
//                 </button>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <h2 className="text-3xl font-bold text-blue-300 text-center">
//                     {courseTitle ? `Enroll in ${courseTitle}` : "Course Enrollment"}
//                   </h2>
                  
//                   {/* ✨ 4. Improved grid layout for better visual flow */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
//                       <div>
//                         <label className="block mb-2 font-medium">Full Name *</label>
//                         <input type="text" name="entry.2005620554" required className={inputStyle} />
//                       </div>
//                       <div>
//                         <label className="block mb-2 font-medium">Email *</label>
//                         <input type="email" name="entry.1045781291" required className={inputStyle} />
//                       </div>
//                       <div>
//                         <label className="block mb-2 font-medium">Phone Number *</label>
//                         <input type="tel" name="entry.1166974658" required pattern="[0-9]{10}" className={inputStyle} />
//                       </div>
//                       <div>
//                         <label className="block mb-2 font-medium">Passout Year *</label>
//                         <select name="entry.775207927" required className={inputStyle}>
//                             <option value="">Select Year</option>
//                             <option value="2025">2025</option>
//                             <option value="2024">2024</option>
//                             <option value="2023">2023</option>
//                             <option value="2022">2022</option>
//                             <option value="2021">2021</option>
//                         </select>
//                       </div>
//                       {/* Branch and Course are now full-width for better readability */}
//                       <div className="md:col-span-2">
//                           <label className="block mb-2 font-medium">Branch *</label>
//                           <select name="entry.839337160" required className={inputStyle}>
//                               <option value="">Select Branch</option>
//                               <option value="CSE/AI/ML/DS">CSE/AI/ML/DS</option>
//                               <option value="ECE">ECE</option>
//                               <option value="Mech">Mech</option>
//                               <option value="Civil">Civil</option>
//                               <option value="__other_option__">Other</option>
//                           </select>
//                       </div>
//                       <div className="md:col-span-2">
//                         <label className="block mb-2 font-medium">Interested Course *</label>
//                         <select name="entry.1031730528" defaultValue={mappedCourse} required className={inputStyle}>
//                             <option value="">Select a Course</option>
//                             <option value="Basic Python">Basic Python</option>
//                             <option value="Basic Java">Basic Java</option>
//                             <option value="Advanced Python">Advanced Python</option>
//                             <option value="Advanced Java">Advanced Java</option>
//                             <option value="Databases">Databases</option>
//                             <option value="Full Stack Python/Java">Full Stack Python/Java</option>
//                             <option value="Other">Other</option>
//                         </select>
//                       </div>
//                   </div>

//                   <button 
//                     type="submit" 
//                     className="w-full bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 py-3 rounded-xl font-bold text-lg text-white mt-4 shadow-lg shadow-blue-600/30"
//                   >
//                     Submit Enrollment
//                   </button>
//                 </form>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }




import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

export default function EnrollmentModal({ isOpen, onClose, courseTitle = '', mappedCourse = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputStyle = "w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all";

  // This function is the one that was working for you previously
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const formActionURL = "https://docs.google.com/forms/d/e/1FAIpQLSfs7zegk0icV56MK2DuNa_VvJW-_LzpQRx1BEl2qZQV1HZfiQ/formResponse";

    try {
      await fetch(formActionURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => setSubmitted(false), 500);
      }, 3000);
    } catch (err) {
      console.error("Form submission failed", err);
      alert("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          {/* ✨ FIX: Reduced max-width and padding for a more compact modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white rounded-2xl shadow-2xl w-full max-w-xl relative"
          >
            {submitted ? (
              <div className="text-center p-8 md:p-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
                    <CheckCircle2 className="w-20 h-20 mx-auto text-green-400 mb-4" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-2 text-green-400">Thank You!</h2>
                <p className="text-blue-200 text-lg">Your enrollment has been received.</p>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <X size={28} />
                </button>
                {/* ✨ FIX: Reduced vertical spacing in the form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-300 text-center">
                    {courseTitle ? `Enroll in ${courseTitle}` : "Course Enrollment"}
                  </h2>
                  
                  {/* ✨ FIX: A consistent 2-column grid on all screen sizes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block mb-1.5 font-medium text-sm">Full Name *</label>
                        <input type="text" name="entry.2005620554" required className={inputStyle} />
                      </div>
                      <div>
                        <label className="block mb-1.5 font-medium text-sm">Email *</label>
                        <input type="email" name="entry.1045781291" required className={inputStyle} />
                      </div>
                      <div>
                        <label className="block mb-1.5 font-medium text-sm">Phone Number *</label>
                        <input type="tel" name="entry.1166974658" required pattern="[0-9]{10}" className={inputStyle} />
                      </div>
                       <div>
                        <label className="block mb-1.5 font-medium text-sm">Passout Year *</label>
                        <select name="entry.775207927" required className={inputStyle}>
                            <option value="">Select Year</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                          <label className="block mb-1.5 font-medium text-sm">Branch *</label>
                          <select name="entry.839337160" required className={inputStyle}>
                              <option value="">Select Branch</option>
                              <option value="CSE/AI/ML/DS">CSE/AI/ML/DS</option>
                              <option value="ECE">ECE</option>
                              <option value="Mech">Mech</option>
                              <option value="Civil">Civil</option>
                              <option value="__other_option__">Other</option>
                          </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block mb-1.5 font-medium text-sm">Interested Course *</label>
                        <select name="entry.1031730528" defaultValue={mappedCourse} required className={inputStyle}>
                            <option value="">Select a Course</option>
                            <option value="Basic Python">Basic Python</option>
                            <option value="Basic Java">Basic Java</option>
                            <option value="Advanced Python">Advanced Python</option>
                            <option value="Advanced Java">Advanced Java</option>
                            <option value="Databases">Databases</option>
                            <option value="Full Stack Python/Java">Full Stack Python/Java</option>
                            <option value="Other">Other</option>
                        </select>
                      </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 py-3 rounded-xl font-bold text-lg text-white mt-4 disabled:bg-gray-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


