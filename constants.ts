import { Skill, PortfolioItem, SocialLink, ReelItem } from '@/types';

export const skills: Skill[] = [
  { name: 'Adobe Illustrator', icon: 'Ai' },
  { name: 'Basic Photoshop', icon: 'Ps' },
  { name: 'Video Editing', icon: '🎬' },
  { name: 'Canva', icon: 'C' },
  { name: 'Print Design', icon: '📄' },
  { name: 'Social Media Graphics', icon: '📱' },
  { name: 'Team Collaboration', icon: '🤝' },
];

export const instagramPosts: PortfolioItem[] = [
  { id: 1, imageUrl: '/Assets/jp1.jpg', caption: 'Social Media Graphic Design' },
  { id: 2, imageUrl: '/Assets/jp2.jpg', caption: 'Promotional Ad Campaign' },
  { id: 3, imageUrl: '/Assets/jp3.jpg', caption: 'Creative Brand Illustration' },
  { id: 4, imageUrl: '/Assets/jp4.jpg', caption: 'Promotional Poster Design' },
  { id: 5, imageUrl: '/Assets/jp5.jpg', caption: 'Engaging Post for Socials' },
  { id: 6, imageUrl: '/Assets/jp6.jpg', caption: 'Marketing Material Layout' },
];

export const videoReels: ReelItem[] = [
    { id: 1, thumbUrl: '/Assets/jr1_thumb.png', videoUrl: '/Assets/jr1.mp4', instagramUrl: 'https://www.instagram.com/reel/DL6ot2bs-QG/' },
    { id: 2, thumbUrl: '/Assets/jr2_thumb.png', videoUrl: '/Assets/jr2.mp4', instagramUrl: 'https://www.instagram.com/reel/DJn2hChPFfi/' },
    { id: 3, thumbUrl: '/Assets/jr3_thumb.png', videoUrl: '/Assets/jr3.mp4', instagramUrl: 'https://www.instagram.com/reel/DG2mSNovIca/' },
    { id: 4, thumbUrl: '/Assets/jr4_thumb.png', videoUrl: '/Assets/jr4.mp4', instagramUrl: 'https://www.instagram.com/reel/DLZPUk9R87F/' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'Behance',
    url: 'https://behance.net',
    iconPath: 'M22,5.7c-0.5-0.9-1.3-1.6-2.3-2c-1-0.4-2.1-0.6-3.2-0.6H7.3C7.1,3.1,7,3.1,6.8,3.2C6.1,3.3,5.4,3.6,4.8,4.1c-0.6,0.5-1,1.1-1.2,1.8C3.3,6.6,3.2,7.4,3.2,8.2v7.6c0,0.8,0.1,1.5,0.4,2.2c0.3,0.7,0.7,1.3,1.2,1.8c0.6,0.5,1.2,0.8,2,1c0.8,0.2,1.6,0.3,2.4,0.3h6.8c1.1,0,2.1-0.2,3.2-0.6s1.9-1,2.5-1.8c0.6-0.8,1-1.8,1-2.9h-4.8c-0.5,0-0.9-0.2-1.3-0.5c-0.4-0.3-0.5-0.8-0.5-1.3c0-0.5,0.2-0.9,0.5-1.3c0.4-0.3,0.8-0.5,1.3-0.5h4.8c-0.1-1.1-0.4-2-1-2.9c-0.6-0.8-1.4-1.5-2.5-1.8c-1-0.4-2.1-0.6-3.2-0.6H9.5v3.4h2.2c0.5,0,0.9,0.2,1.3,0.5c0.4,0.3,0.5,0.8,0.5,1.3c0-0.5-0.2,0.9-0.5,1.3c-0.4,0.3-0.8,0.5-1.3-0.5H9.5v4.2h3.4c1.7,0,3.1-0.4,4.2-1.3c1.1-0.9,1.7-2.1,1.7-3.7C18.8,11.3,18.5,10.6,18,10z M14,3.1h-2.2v3.4H14c0.8,0,1.5-0.2,2-0.5c0.5-0.3,0.8-0.8,0.8-1.5C16.8,3.8,15.7,3.1,14,3.1z',
  },
];