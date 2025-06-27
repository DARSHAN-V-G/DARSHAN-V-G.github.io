import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Github, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full-stack developer | Problem-solver | ML Enthusiast';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200/10 to-accent-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-800 dark:text-white">DV</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Darshan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">V G</span>
            </h1>
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                {displayText}
                <span className="animate-blink border-r-2 border-primary-500 ml-1"></span>
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Pre-final year B.E. CSE (AI & ML) student at PSG Tech with strong skills in full-stack web development, 
            machine learning, and core CS fundamentals. Passionate about building scalable, real-time systems and 
            solving challenging problems.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg">
              <MapPin size={18} className="text-primary-500" />
              <span className="text-gray-700 dark:text-gray-300">Coimbatore</span>
            </div>
            <a 
              href="mailto:darshan@example.com" 
              className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} className="text-primary-500" />
              <span className="text-gray-700 dark:text-gray-300">Email</span>
            </a>
            <a 
              href="https://github.com/darshan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Github size={18} className="text-primary-500" />
              <span className="text-gray-700 dark:text-gray-300">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/darshan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={18} className="text-primary-500" />
              <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;