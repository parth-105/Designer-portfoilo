
export interface Skill {
  name: string;
  icon: string; // Using string for simple text icons like Ps, Ai, etc.
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  caption: string;
}

export interface ReelItem {
    id: number;
    thumbUrl: string;
    videoUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconPath: string; // SVG path data
}
