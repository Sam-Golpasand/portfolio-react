import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Blog from './pages/Blogs.jsx';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/blog' element={<Blog />} />
      </Routes>
    </Router>
  );
}
