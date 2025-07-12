
import React from 'react';
import { instagramPosts, videoReels } from '@/constants';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { ReelItem } from '@/types';

const PortfolioCard: React.FC<{ item: { id: number; imageUrl: string; caption: string; }, delay: number }> = ({ item, delay }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-lg shadow-lg reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center p-4">
        <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-light">
          {item.caption}
        </p>
      </div>
    </div>
  );
};

const ReelCard: React.FC<{ item: ReelItem, delay: number }> = ({ item, delay }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  const handleClick = () => {
    window.open(item.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      ref={ref}
      onClick={handleClick}
      className={`relative group bg-black rounded-xl overflow-hidden shadow-2xl reveal aspect-[9/16] cursor-pointer hover:scale-105 transition-transform duration-300 ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <video 
        src={item.videoUrl} 
        poster={item.thumbUrl}
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
    </div>
  );
};


const Portfolio: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 reveal ${isTitleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            My Creative Work
          </h2>
          <div className="w-24 h-1 bg-[#c7a17a] mx-auto"></div>
        </div>

        {/* Instagram Posts Section */}
        <h3 className="text-3xl font-serif text-white/90 mb-8 text-center md:text-left">Graphic Design</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {instagramPosts.map((post, index) => (
            <PortfolioCard key={post.id} item={post} delay={index * 100} />
          ))}
        </div>

        {/* Video Reels Section */}
        <h3 className="text-3xl font-serif text-white/90 mb-12 text-center md:text-left">Video Editing</h3>
        <div className="flex justify-center">
            <div className="w-full max-w-sm md:max-w-6xl p-4 bg-[#1f1f1f] rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {videoReels.map((reel, index) => (
                        <ReelCard key={reel.id} item={reel} delay={index * 150} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;