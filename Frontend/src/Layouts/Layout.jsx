// src/layouts/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className=" text-white min-h-screen">
      <Navbar />
      <main className="pt-20 bg-gradient-to-t bg-blue-950 ">
       {children}
      </main>

      <Footer />
    </div>
  );
}
