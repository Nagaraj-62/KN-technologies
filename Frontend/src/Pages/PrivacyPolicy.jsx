import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b  text-white min-h-screen pt-28 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-500 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">Privacy Policy</h1>
          <p className="text-white mb-6">Last updated: September 11, 2024</p>
          
          <div className="space-y-6 text-blue-200">
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">1. Introduction</h2>
            <p>
              Welcome to KN Technologies. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">2. Information We Collect</h2>
            <p>
              When you enroll in a course, we may collect personal information such as your name, email address, phone number, and payment information. This information is processed securely through our payment partner, Razorpay.
            </p>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to process your enrollment, communicate with you about your course, and improve our services. We do not sell or share your personal data with third parties for marketing purposes.
            </p>
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-800 pb-2">4. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:kntechnologies.info@gmail.com" className="text-blue-400 hover:underline">kntechnologies.info@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
