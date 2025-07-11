
import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { socialLinks } from '@/constants';

const Contact: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div ref={ref} className={`container mx-auto px-6 text-center reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Let's Create Together
        </h2>
        <div className="w-24 h-1 bg-[#c7a17a] mx-auto mb-8"></div>
        <p className="text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Have a project in mind or just want to say hello? I'd love to hear from you.
          Feel free to reach out via email or connect with me on social media.
        </p>
        <a 
          href="mailto:diyaantala2004@gmail.com"
          className="inline-block bg-[#c7a17a] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          diyaantala2004@gmail.com
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#c7a17a] transition-colors duration-300"
              aria-label={link.name}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                {link.iconPath}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;