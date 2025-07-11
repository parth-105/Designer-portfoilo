
import React from 'react';

const Footer: React.FC = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-500 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Diya Antala. All Rights Reserved.</p>
        <button onClick={backToTop} className="group flex items-center space-x-2 text-sm hover:text-white transition-colors duration-300">
          <span>Back to Top</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;