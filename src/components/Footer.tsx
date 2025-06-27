import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Darshan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">V G</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-stack developer passionate about creating innovative solutions and building scalable systems. 
              Always learning, always growing.
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 text-gray-400 mb-8">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className="text-primary-500" />
            <span>and lots of</span>
            <Coffee size={16} className="text-amber-500" />
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Darshan V G. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
                <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
                <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;