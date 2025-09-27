// // src/pages/HomePage.jsx

// import viteLogo from '/vite.svg'
// import '../App.css'
// import React from 'react';
// import Hero from '../components/Hero';
// import About from '../components/About';
// import Courses from '../components/Courses';
// import Testimonials from '../components/Testimonials';

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Courses />
//       <Testimonials />
//     </>
//   );
// }



import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, CheckSquare, Award } from 'lucide-react';

// Import all your page sections
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

// Assuming your logos are in 'src/assets/company_logos/'
import googleLogo from '../assets/company_logos/google.svg';
import amazonLogo from '../assets/company_logos/amazon.svg';
import microsoftLogo from '../assets/company_logos/microsoft.svg';
import siemensLogo from '../assets/company_logos/siemens.svg';
import capgeminiLogo from '../assets/company_logos/capgemini.svg';
import flipkartLogo from '../assets/company_logos/flipkart.svg';
import salesforceLogo from '../assets/company_logos/salesforce.svg';
import wiproLogo from '../assets/company_logos/wipro.svg';
import tcsLogo from '../assets/company_logos/tcs.svg';


const StatsBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, end: 200, label: 'Students Trained', suffix: '+' },
    { icon: CheckSquare, end: 50, label: 'Projects Completed', suffix: '+' },
    { icon: Award, end: 10, label: 'Industry Experts', suffix: '+' },
  ];

  return (
    <div ref={ref} className="py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-4xl lg:text-5xl font-extrabold text-white">
                {inView && <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />}
              </div>
              <p className="text-blue-200 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HiringPartners = () => {
  const logos = [
    { src: googleLogo, alt: 'Google' },
    { src: amazonLogo, alt: 'Amazon' },
    { src: microsoftLogo, alt: 'Microsoft' },
    { src: siemensLogo, alt: 'Siemens' },
    { src: capgeminiLogo, alt: 'Capgemini' },
    { src: flipkartLogo, alt: 'Flipkart' },
    { src: salesforceLogo, alt: 'Salesforce' },
    { src: wiproLogo, alt: 'Wipro' },
    { src: tcsLogo, alt: 'TCS' },
  ];
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-blue-200 text-sm font-semibold uppercase tracking-wider mb-10">
          Our Alumni Work At Top Tech Companies
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <li key={index} className="flex-shrink-0 list-none">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-10 object-contain transition-transform duration-300 transform hover:scale-110" 
              />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HiringPartners />
      <Courses />
      <About />
      <Testimonials />
    </>
  );
}

