// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import KNLogo from "../assets/KN Logo.svg";
// import EnrollmentModal from "./EnrollmentModal";

// export default function Navbar() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const navLinks = [
//     { href: "#courses", label: "Courses" },
//     { href: "#about", label: "About" },
//     { href: "#testimonials", label: "Testimonials" },
//     { href: "#contact", label: "Contact" },
//   ];

//   const handleEnrollClick = () => {
//     setIsModalOpen(true);
//     setIsNavOpen(false);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-blue-950 via-black to-blue-900 text-white shadow-lg">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
//           {/* Logo */}
//           <a
//             href="/"
//             className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
//           >
//             <img
//               src={KNLogo}
//               alt="KN Logo"
//               className="h-12 w-auto " // Assuming you want the white logo
//             />
//             {/* ✨ FIX: Tagline now appears on medium screens (md) to match the nav links */}
//             <span className="hidden md:block text-sm text-blue-300 font-medium truncate max-w-[200px] lg:max-w-[240px]">
//               Empowering Coders with Real Projects
//             </span>
//           </a>

//           {/* Desktop Nav + Enroll */}
//           <div className="hidden md:flex items-center flex-shrink-0">
//             {/* ✨ FIX: Added responsive spacing for better fit on tablets */}
//             <ul className="flex items-center space-x-4 lg:space-x-8 font-medium text-base">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     className="hover:text-blue-400 transition duration-300"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={handleEnrollClick}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md ml-4 lg:ml-8"
//             >
//               Enroll Now
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               className="text-blue-400 focus:outline-none p-2"
//               onClick={() => setIsNavOpen(!isNavOpen)}
//               aria-label={
//                 isNavOpen ? "Close navigation menu" : "Open navigation menu"
//               }
//             >
//               {isNavOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown */}
//         <div
//           className={`md:hidden absolute top-20 left-0 w-full bg-blue-950/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
//             isNavOpen ? "translate-y-0" : "-translate-y-[150%]"
//           }`}
//         >
//           <div className="px-6 pt-4 pb-6 space-y-4 text-base">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="block text-lg font-medium hover:text-blue-400 transition"
//                 onClick={() => setIsNavOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//             <button
//               onClick={handleEnrollClick}
//               className="w-full bg-blue-600 text-white px-4 py-3 mt-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
//             >
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Modal */}
//       <EnrollmentModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   );
// }


import { useState } from "react";
import { Menu, X } from "lucide-react";
// ✨ 1. Import Link and useLocation from react-router-dom
import { Link, useLocation } from "react-router-dom";
import KNLogo from "../assets/KN Logo.svg";
import EnrollmentModal from "./EnrollmentModal";

// ✨ 2. Create a "smart" link component
const SmartNavLink = ({ href, label, onClick }) => {
  const location = useLocation();
  const isOnHomePage = location.pathname === '/';

  // If we are on the homepage, use a regular anchor tag for smooth scrolling
  if (isOnHomePage) {
    return (
      <a href={href} className="hover:text-blue-400 transition duration-300" onClick={onClick}>
        {label}
      </a>
    );
  }

  // If we are on any other page, use a React Router Link to go back to the homepage first
  return (
    <Link to={`/${href}`} className="hover:text-blue-400 transition duration-300" onClick={onClick}>
      {label}
    </Link>
  );
};


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
      <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-blue-950 via-black to-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img
              src={KNLogo}
              alt="KN Logo"
              className="h-12 w-auto "
            />
            <span className="hidden md:block text-sm text-blue-300 font-medium ">
              Empowering Coders with Real Projects
            </span>
          </Link>

          {/* Desktop Nav + Enroll */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <ul className="flex items-center space-x-4 lg:space-x-8 font-medium text-base">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {/* ✨ 3. Use the new SmartNavLink component */}
                  <SmartNavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
            <button
              onClick={handleEnrollClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md ml-4 lg:ml-8"
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
              // ✨ 4. Also use the SmartNavLink component in the mobile menu
              <SmartNavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setIsNavOpen(false)}
              />
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

