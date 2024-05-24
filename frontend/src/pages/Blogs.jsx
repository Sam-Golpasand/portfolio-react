import React, { useState, useEffect } from 'react';
import Blog from "../components/Blog.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-32">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 m-4">
          {blogs.map(blog => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </ol>
      </div>
    </>
  );
}