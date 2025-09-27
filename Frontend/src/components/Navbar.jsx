// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import KNLogo from '../assets/KN Logo.svg';
// import EnrollmentModal from "./EnrollmentModal"; // 1. Import the modal

// export default function Navbar() {
//   const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile nav
//   const [isModalOpen, setIsModalOpen] = useState(false); // 2. Add state for the modal

//   const navLinks = [
//     { href: "#courses", label: "Courses" },
//     { href: "#about", label: "About" },
//     { href: "#testimonials", label: "Testimonials" },
//     { href: "#contact", label: "Contact" },
//   ];

//   // Function to handle opening the modal and closing the nav if it's open
//   const handleEnrollClick = () => {
//     setIsModalOpen(true);
//     setIsNavOpen(false); // Close mobile nav when opening modal
//   };

//   return (
//     <>
//       <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-blue-900 via-blue-950 to-black text-white shadow-lg">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-20">
          
//           {/* Logo */}
//           <a href="/" className="flex items-center space-x-3 cursor-pointer">
//             <img src={KNLogo} alt="KN Technical Trainings Logo" className="h-12 w-auto" />
//             <span className="hidden md:block text-sm text-blue-300 font-medium">
//               Empowering Coders with Real Projects
//             </span>
//           </a>

//           {/* Desktop Nav + Enroll */}
//           <div className="flex items-center space-x-6">
//             <ul className="hidden md:flex space-x-6 lg:space-x-10 font-medium text-base">
//               {navLinks.map(link => (
//                 <li key={link.href}>
//                   <a href={link.href} className="hover:text-blue-400 transition duration-300">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="hidden md:block">
//               {/* 3. Add onClick to the desktop button */}
//               <button 
//                 onClick={handleEnrollClick}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
//               >
//                 Enroll Now
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-blue-400 focus:outline-none"
//             onClick={() => setIsNavOpen(!isNavOpen)}
//           >
//             {isNavOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {isNavOpen && (
//           <div className="md:hidden px-6 py-4 space-y-4 text-base border-t border-blue-800">
//             {navLinks.map(link => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="block hover:text-blue-400 transition"
//                 onClick={() => setIsNavOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//             {/* 4. Add onClick to the mobile button */}
//             <button 
//               onClick={handleEnrollClick}
//               className="w-full bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
//             >
//               Enroll Now
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* 5. Render the modal component */}
//       <EnrollmentModal 
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   );
// }

import { useState } from "react";
import { Menu, X } from "lucide-react";
import KNLogo from "../assets/KN Logo.svg";
import EnrollmentModal from "./EnrollmentModal";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const handleEnrollClick = () => {
    setIsModalOpen(true);
    setIsNavOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-blue-900 via-blue-950 to-black text-white shadow-lg overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer overflow-hidden"
          >
            <img
              src={KNLogo}
              alt="KN Logo"
              className="h-12 w-auto max-w-full "
            />
            {/* Hide long text unless screen is wide enough */}
            <span className="hidden lg:block text-sm text-blue-300 font-medium truncate max-w-[240px]">
              Empowering Coders with Real Projects
            </span>
          </a>

          {/* Desktop Nav + Enroll */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-medium text-base">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={handleEnrollClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-blue-400 focus:outline-none p-2"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label={
                isNavOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {isNavOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-blue-950/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
            isNavOpen ? "translate-y-0" : "-translate-y-[150%]"
          }`}
        >
          <div className="px-6 pt-4 pb-6 space-y-4 text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-lg font-medium hover:text-blue-400 transition"
                onClick={() => setIsNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleEnrollClick}
              className="w-full bg-blue-600 text-white px-4 py-3 mt-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
