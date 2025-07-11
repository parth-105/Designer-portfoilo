
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/hero-bg/1920/1080" alt="Abstract background" className="w-full h-full object-cover blur-sm scale-110"/>
      </div>

      <div className="relative z-20 px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 animate-fade-in-down">
          Diya Antala
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-widest uppercase mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Graphic Designer & Video Editor
        </p>
        <button
          onClick={scrollToPortfolio}
          className="bg-transparent border-2 border-[#c7a17a] text-[#c7a17a] font-semibold py-3 px-8 rounded-full hover:bg-[#c7a17a] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          View My Work
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <style>{`
        @keyframes animate-fade-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes animate-fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: animate-fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: animate-fade-in-up 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;