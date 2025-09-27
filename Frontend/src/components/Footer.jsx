
// import React from 'react';
// import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// export default function Contact() {
//   return (
//     <footer id="contact" className="py-12 text-white ">
//       <div className="container mx-auto px-6 text-center">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-3">
//           Ready to Start Learning?
//         </h2>

//         {/* Subtitle */}
//         <p className="text-blue-200 mb-6 max-w-xl mx-auto text-sm md:text-base">
//           Have questions or need more information? Feel free to reach out. We're here to help you on your journey into tech.
//         </p>

//         {/* Contact Button */}
//         <a
//           href="mailto:contact@kntechnicaltrainings.com"
//           className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg text-sm md:text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block mb-6"
//         >
//           contact@kntechnicaltrainings.com
//         </a>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-5 mb-6">
//           <a href="#" className="text-blue-200 hover:text-blue-400 transition"><FaLinkedin size={24} /></a>
//           <a href="#" className="text-blue-200 hover:text-blue-400 transition"><FaTwitter size={24} /></a>
//           <a href="#" className="text-blue-200 hover:text-blue-400 transition"><FaGithub size={24} /></a>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-blue-800 pt-3">
//           <p className="text-blue-300 text-sm">&copy; {new Date().getFullYear()} KN Technologies. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';
// ✨ 1. Import your logo to use in the footer
import KNLogo from '../assets/KN Logo.svg';

export default function Footer() {
  const navLinks = [
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const socialLinks = [
    { href: "#", icon: FaLinkedin },
    { href: "#", icon: FaTwitter },
    { href: "#", icon: FaGithub },
  ];

  return (
    // ✨ 2. The main footer element with a consistent background
    <footer id="contact" className="border-t border-blue-800 bg-gradient-to-r bg-blue-950 text-white w-full overflow-hidden ">
      <div className="w-full max-w-6xl mx-auto px-4 " >
        
        {/* ✨ 3. Responsive multi-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col items-center sm:items-start">
            <a href="/" className="mb-4">
              <img src={KNLogo} alt="KN Logo" className="h-14" />
            </a>
            <p className="text-blue-200 text-sm max-w-xs">
              Empowering the next generation of coders with practical, project-based training.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-blue-200 hover:text-blue-400 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal/Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="text-blue-200 hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-blue-200 hover:text-blue-400 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <a 
              href="mailto:kntechnologies.info@gmail.com"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-400 transition"
            >
              <Mail size={18} />
              <span>kntechnologies.info@gmail.com</span>
            </a>
          </div>

        </div>

        {/* ✨ 4. Bottom bar with copyright and social icons */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} KN Technologies. All Rights Reserved.
          </p>
          <div className="flex space-x-5">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="text-blue-200 hover:text-blue-400 transition"
                aria-label={`Follow us on ${social.icon.name.replace('Fa', '')}`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
