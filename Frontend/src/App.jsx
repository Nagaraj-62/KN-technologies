import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import HomePage from './Pages/HomePage';
import CourseDetailPage from './Pages/CourseDetailPage';
import EnrollPage from './Pages/EnrollPage';

import './App.css';
function App() {
  return (
    <div className="w-full overflow-x-hidden">
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
     </div>
  );
}

export default App;