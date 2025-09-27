// import React from 'react';

// const testimonialData = [
//   {
//     name: "Priya Singh",
//     quote:
//       "The Python full-stack course was a turning point for me. The real projects gave me the confidence to crack interviews and land my first developer role.",
//     avatar: "https://i.pravatar.cc/150?img=1",
//   },
//   {
//     name: "Rohan Kumar",
//     quote:
//       "I struggled with Java before, but the instructor at KN Technologies explained every concept so clearly. Now I can solve problems with confidence.",
//     avatar: "",
//   },
//   {
//     name: "Ananya Rao",
//     quote:
//       "The database training was very practical. I learned how to design schemas and write queries that I now use daily in my job.",
//     avatar: "https://i.pravatar.cc/150?img=5",
//   },
//   {
//     name: "Rohan Kumar",
//     quote:
//       "I struggled with Java before, but the instructor at KN Technologies explained every concept so clearly. Now I can solve problems with confidence.",
//     avatar: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     name: "Rohan Kumar",
//     quote:
//       "I struggled with Java before, but the instructor at KN Technologies explained every concept so clearly. Now I can solve problems with confidence.",
//     avatar: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     name: "Rohan Kumar",
//     quote:
//       "I struggled with Java before, but the instructor at KN Technologies explained every concept so clearly. Now I can solve problems with confidence.",
//     avatar: "https://i.pravatar.cc/150?img=3",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="py-20  text-white"
//     >
//       <div className="container mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-300 mb-12">
//           What Our Students Say
//         </h2>

//         {/* Testimonials Grid */}
//         <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
//           {testimonialData.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white/10 p-8 rounded-xl shadow-md hover:shadow-blue-700/30 transition-all flex-1 flex flex-col items-center text-center"
//             >
//               <img
//                 src={testimonial.avatar}
//                 alt={testimonial.name}
//                 className="w-20 h-20 rounded-full mb-4 border-2 border-blue-400"
//               />
//               <p className="text-blue-200 italic mb-4">"{testimonial.quote}"</p>
//               <p className="font-semibold text-white">- {testimonial.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { FaQuoteLeft, FaUserGraduate } from 'react-icons/fa'; // ✨ 1. Import a fallback icon
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// ✨ 2. Removed 'avatar' and added more unique, realistic testimonials
const testimonialData = [
  {
    name: "Candhu",
    role: "Software Engineer",
    quote: "The Python full-stack course was a turning point. The real-world projects gave me the confidence to crack interviews and land my first developer role.",
  },
  {
    name: "Rohan Kumar",
    role: "Java Developer",
    quote: "I struggled with Java concepts before, but the instructor explained everything so clearly. Now I can solve complex problems with confidence.",
  },
  {
    name: "Ananya Reddy",
    role: "Data Analyst",
    quote: "The database training was incredibly practical. I learned how to design schemas and write efficient queries that I now use daily in my job.",
  },
  {
    name: "Vikram Reddy",
    role: "Frontend Developer",
    quote: "The React course was top-notch. I went from knowing the basics to building complex, stateful applications. Highly recommended!",
  },
  {
    name: "Alam Sheik",
    role: "Student, CSE",
    quote: "As a student, the hands-on approach was invaluable. The projects I built here were the main highlight of my resume.",
  },
];

// ✨ 3. Helper function to get initials from a name
const getInitials = (name) => {
  if (!name) return '';
  const names = name.split(' ');
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return names[0].charAt(0).toUpperCase() + names[names.length - 1].charAt(0).toUpperCase();
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 text-white w-full overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300">
            What Our Students Say
          </h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
            Real feedback from students who have completed our courses and advanced their careers.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, FreeMode]}
          loop={testimonialData.length > 2} // Loop only if there are enough slides
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }}
          className="mySwiper !pb-12"
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg h-full flex flex-col text-center transition-all duration-300">
                <FaQuoteLeft className="text-blue-500 text-3xl mb-4 mx-auto" />
                <p className="text-blue-200 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className='mt-auto'>
                  
                  {/* ✨ 4. Replaced the <img> tag with a div for initials */}
                  <div className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400 mx-auto flex items-center justify-center bg-blue-900/50">
                    <span className="text-2xl font-bold text-white">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>

                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
