
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
  return (
    <div 
      ref={ref}
      className={`relative group bg-black rounded-xl overflow-hidden shadow-2xl reveal aspect-[9/16] ${isVisible ? 'visible' : ''}`}
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