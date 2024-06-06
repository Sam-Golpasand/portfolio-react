import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-darkBlue text-white">
      <div class="max-w-7xl mx-auto px-4 py-8">
        {/* Top row for social icons or any other content */}
        <div class="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com/samgolpasand/" class="hover:text-gray-300 transition duration-200">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/sam-golpasand-417413209/" class="hover:text-gray-300 transition duration-200">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/samgolpasand" class="hover:text-gray-300 transition duration-200">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://discord.gg/YMAy6nMEvP" class="hover:text-gray-300 transition duration-200">
            <i class="fab fa-discord"></i>
          </a>
        </div>

        {/* Middle row for navigation links */}
        <div class="flex justify-center space-x-6 mb-6">
          <a href="/#about" class="hover:text-gray-300 transition duration-200">About</a>
          <a href="/#work" class="hover:text-gray-300 transition duration-200">Work</a>
          <a href="/#service" class="hover:text-gray-300 transition duration-200">Services</a>
          <a href="/#contact" class="hover:text-gray-300 transition duration-200">Contact</a>
          <a href="/blog" class="hover:text-gray-300 transition duration-200">Blog</a>
        </div>

        {/* Bottom row for copyright and imprint */}
        <div class="text-center">
          <p>© 2023 Sam Golpasand</p>
          <a href="/#contact" class="hover:text-gray-300 text-sm transition duration-200">CONTACT ME</a>
        </div>
      </div>
    </footer>
  )
}
