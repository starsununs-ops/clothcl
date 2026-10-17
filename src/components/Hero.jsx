import { useState } from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { heroDisplays, moodsData } from '../data/fashionData';

export default function Hero({ onOpenQuickView }) {
  const [activeMoodIndex, setActiveMoodIndex] = useState(null);

  const fabrics = [
    { name: 'BOLD', desc: 'Wear your confidence.', img: '/images/dress_1.jpg', moodId: 'bold' },
    { name: 'WILD', desc: 'A little unexpected. A lot of you.', img: '/images/dress_2.jpg', moodId: 'wild' },
    { name: 'SOFT', desc: 'Let the details whisper.', img: '/images/dress_3.jpg', moodId: 'soft' },
    { name: 'SHY', desc: 'Quiet presence. Beautifully expressed.', img: '/images/dress_4.jpg', moodId: 'shy' },
    { name: 'IN COMMAND', desc: 'A sharper kind of calm.', img: '/images/dress_5.jpg', moodId: 'in-command' },
    { name: 'AT EASE', desc: 'Slow days. Thoughtful style.', img: '/images/dress_6.jpg', moodId: 'at-ease' }
  ];

  // Helper to open quickview with hero item
  const handleHeroClick = (itemIndex) => {
    const item = heroDisplays[itemIndex];
    if (item && onOpenQuickView) {
      onOpenQuickView({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        mood: item.mood,
        desc: item.desc,
        fabric: 'Haute Couture Silk & Embroidered Organza',
        colors: [
          { name: 'Artisan Palette', hex: '#ede5d8', filter: 'none' },
          { name: 'Rosewater Mist', hex: '#f0cdd6', filter: 'hue-rotate(320deg)' },
          { name: 'Sage Garden', hex: '#b5cbb7', filter: 'hue-rotate(110deg)' },
          { name: 'Midnight Noir', hex: '#222222', filter: 'grayscale(0.8) brightness(0.6)' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        details: ['Handcrafted ruffles', 'Fine organza embroidery', 'Tailored waist', 'Lined with soft silk']
      });
    }
  };

  const scrollToMoods = () => {
    const el = document.getElementById('moods-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="flex flex-col lg:flex-row px-4 md:px-8 py-8 md:py-12 gap-8 lg:gap-8 items-stretch">
      {/* Left Text */}
      <div className="w-full lg:w-1/4 flex flex-col justify-center text-center lg:text-left order-1 lg:order-1">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-[#2b2725]">
          STYLE UR <br className="hidden lg:block" />MOOD.
        </h1>
        <p className="text-gray-700 mb-6 md:mb-8 font-serif text-base md:text-lg italic">
          You don't feel the same every day.<br className="hidden lg:block" />
          Why should your wardrobe?
        </p>
        <div className="flex justify-center lg:justify-start">
          <button 
            onClick={scrollToMoods}
            className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-3 text-[10px] md:text-xs tracking-widest flex items-center gap-3 transition-colors cursor-pointer shadow-md hover:shadow-lg"
          >
            EXPLORE THE LOOKBOOK <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Center Displays (Modern Girl Models & Dresses) */}
      <div className="w-full lg:w-1/2 flex gap-2 md:gap-4 order-2 lg:order-2 h-[300px] md:h-[400px] lg:h-[500px]">
        {/* Left Arch: Parisian Balcony Floral Dress */}
        <div 
          onClick={() => handleHeroClick(0)}
          className="flex-1 overflow-hidden mt-6 md:mt-12 rounded-t-full relative group cursor-pointer shadow-md border border-[#e5e0d8] bg-gray-100"
        >
          <img 
            src="/images/dress_7.jpg" 
            alt="Balcony Bloom Dress on Girl Model" 
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
            <span className="text-[9px] uppercase tracking-widest font-semibold text-[#c3a073]">At Ease</span>
            <span className="font-serif text-xs leading-snug">Balcony Bloom Gown</span>
            <span className="text-[10px] mt-1 flex items-center gap-1 text-white/90">
              <Eye size={12} /> Click to Inspect
            </span>
          </div>
        </div>

        {/* Center Display: Silk & Tulle Party Duet */}
        <div 
          onClick={() => handleHeroClick(1)}
          className="flex-1 overflow-hidden rounded-lg relative group cursor-pointer shadow-md border border-[#e5e0d8] bg-gray-100"
        >
          <img 
            src="/images/dress_8.jpg" 
            alt="Modern Girls in Silk and Tulle Dresses" 
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
            <span className="text-[9px] uppercase tracking-widest font-semibold text-[#c3a073]">Wild & Soft</span>
            <span className="font-serif text-xs leading-snug">Silk & Tulle Party Duet</span>
            <span className="text-[10px] mt-1 flex items-center gap-1 text-white/90">
              <Eye size={12} /> Click to Inspect
            </span>
          </div>
        </div>

        {/* Right Arch: Ethereal Blossom Couture */}
        <div 
          onClick={() => handleHeroClick(2)}
          className="flex-1 overflow-hidden mt-4 md:mt-8 rounded-t-full relative group cursor-pointer shadow-md border border-[#e5e0d8] bg-gray-100"
        >
          <img 
            src="/images/dress_9.jpg" 
            alt="Ethereal Blossom Couture on Girl Model" 
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
            <span className="text-[9px] uppercase tracking-widest font-semibold text-[#c3a073]">Soft</span>
            <span className="font-serif text-xs leading-snug">Blossom Ruffle Gown</span>
            <span className="text-[10px] mt-1 flex items-center gap-1 text-white/90">
              <Eye size={12} /> Click to Inspect
            </span>
          </div>
        </div>
      </div>
      
      {/* Right Explore by Mood */}
      <div className="w-full lg:w-1/4 flex flex-col order-3 lg:order-3">
        <h2 className="font-serif text-xl md:text-2xl mb-4 text-center lg:text-left">EXPLORE BY MOOD</h2>
        <div className="flex-1 flex gap-1 h-[200px] md:h-[300px] lg:h-[400px]">
          {fabrics.map((fabric, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setActiveMoodIndex(idx)}
              onMouseLeave={() => setActiveMoodIndex(null)}
              onClick={() => {
                const el = document.getElementById(`mood-card-${fabric.moodId}`);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex-1 relative group cursor-pointer overflow-hidden bg-gray-200 transition-all duration-300 ${activeMoodIndex === idx ? 'flex-[1.5]' : 'flex-1'}`}
            >
              <img 
                src={fabric.img} 
                alt={`${fabric.name} girl model`} 
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex flex-col justify-end p-1 md:p-2 text-white">
                <span className="text-[7px] md:text-[9px] tracking-wider mb-1 font-semibold text-center leading-tight writing-vertical-rl md:writing-horizontal-tb transform rotate-180 md:rotate-0">
                  {fabric.name}
                </span>
                <span className="hidden md:block text-[8px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">
                  {fabric.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
