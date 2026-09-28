import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Navbar />
        {/* Page content area kept completely blank as requested */}
        <main className="flex-1 bg-white">
          <Routes>
            <Route path="/" element={null} />
            <Route path="/why-us" element={null} />
            <Route path="/services/*" element={null} />
            <Route path="/location/*" element={null} />
            <Route path="/blog" element={null} />
            <Route path="/contact" element={null} />
            <Route path="*" element={null} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
