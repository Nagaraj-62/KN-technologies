import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function TermsOfService() {
  return (
    <div className="bg-gradient-to-b  text-white min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-500 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">Terms of Service</h1>
          <p className="text-blue-200 mb-6">Last updated: September 26, 2025</p>

          <div className="space-y-6 text-blue-200">
             <p>
              <strong>Disclaimer:</strong> This is a template and is not legal advice. Please consult with a legal professional.
            </p>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">1. Agreement to Terms</h2>
            <p>
              By enrolling in a course on KN Technologies, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">2. Courses and Enrollment</h2>
            <p>
              We provide online training courses in various technology subjects. Enrollment is confirmed upon completion of the registration process. We reserve the right to change course content or instructors at any time.
            </p>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">3. Enrollment and Refunds</h2>
            <p>
              Course enrollment fees are non-refundable once the course has commenced. Refund policies for specific circumstances will be handled on a case-by-case basis.
            </p>
             <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">4. Limitation of Liability</h2>
            <p>
              Our liability is limited to the amount you paid for the course. We are not responsible for any indirect or consequential damages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

