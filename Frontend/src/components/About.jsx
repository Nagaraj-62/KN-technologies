// import React from 'react';
// import { Target, Zap, Award } from 'lucide-react';

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-20  text-white"
//     >
//       <div className="container mx-auto px-6 text-center">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
//           Why KN Technologies?
//         </h2>

//         {/* Subtitle */}
//         <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-12">
//           At <span className="font-semibold text-white">KN Technologies</span>, 
//           we don’t just teach theory. We provide practical, hands-on training that helps 
//           you build real-world applications and accelerate your career in tech.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
//           {/* Card 1 */}
//           <div className="p-6 bg-white/10 rounded-xl shadow-md hover:shadow-blue-700/30 transition-all">
//             <Award size={48} className="mx-auto text-blue-400 mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">Expert-Led Training</h3>
//             <p className="text-blue-200 text-sm">
//               Learn directly from experienced instructors working at leading tech companies.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="p-6 bg-white/10 rounded-xl shadow-md hover:shadow-blue-700/30 transition-all">
//             <Zap size={48} className="mx-auto text-blue-400 mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">Practical Approach</h3>
//             <p className="text-blue-200 text-sm">
//               Gain skills by working on real projects that strengthen your portfolio.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="p-6 bg-white/10 rounded-xl shadow-md hover:shadow-blue-700/30 transition-all">
//             <Target size={48} className="mx-auto text-blue-400 mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">Career Focused</h3>
//             <p className="text-blue-200 text-sm">
//               Get guidance, mentorship, and resources to help you land your dream job in tech.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Target, Zap, Award } from 'lucide-react';
// ✨ 1. Import motion for animations
import { motion } from 'framer-motion';
// ✨ 2. Import the image you just added
import aboutImage from '../assets/about-us-image.jpg';

export default function About() {
  // Animation variants for the columns
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <section id="about" className="py-20 text-white w-full overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        
        {/* ✨ 3. Main grid for the two-column layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* Left Column: Image */}
          <motion.div variants={slideInFromLeft}>
            <img 
              src={aboutImage} 
              alt="Team collaborating on code"
              className="rounded-xl shadow-2xl shadow-blue-900/20 w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={slideInFromRight}>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
                Why KN Technologies?
              </h2>
              <p className="text-lg text-blue-200 mb-10">
                At <span className="font-semibold text-white">KN Technologies</span>, 
                we don’t just teach theory. We provide practical, hands-on training that helps 
                you build real-world applications and accelerate your career in tech.
              </p>
            </div>
            
            {/* ✨ 4. Vertically stacked feature cards */}
            <div className="space-y-8">
              
              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/50 p-3 rounded-full">
                  <Award size={28} className="text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Expert-Led Training</h3>
                  <p className="text-blue-200 text-sm">
                    Learn directly from experienced instructors working at leading tech companies.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/50 p-3 rounded-full">
                  <Zap size={28} className="text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Practical Approach</h3>
                  <p className="text-blue-200 text-sm">
                    Gain skills by working on real projects that strengthen your portfolio.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/50 p-3 rounded-full">
                  <Target size={28} className="text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Career Focused</h3>
                  <p className="text-blue-200 text-sm">
                    Get guidance, mentorship, and resources to help you land your dream job in tech.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}