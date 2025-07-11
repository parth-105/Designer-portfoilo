
import React from 'react';
import { skills } from '@/constants';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div ref={ref} className={`container mx-auto px-6 reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              A Passion for Visual Storytelling
            </h2>
            <div className="w-24 h-1 bg-[#c7a17a] mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-300 font-light leading-relaxed">
              I am a creative and detail-oriented Graphic Designer with hands-on experience in branding, social media, and marketing. Passionate about delivering visually impactful designs and enhancing brand identity, I'm eager to contribute my skills and grow with a dynamic team.
            </p>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">My Toolkit</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`reveal ${isVisible ? 'visible' : ''} bg-[#2a2a2a] text-gray-200 py-2 px-5 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-[#c7a17a] hover:text-black hover:shadow-lg hover:-translate-y-1`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
