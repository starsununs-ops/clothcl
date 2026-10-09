import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const fabrics = [
    { name: 'BOLD', desc: 'Wear your confidence.', img: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?w=400&q=80' },
    { name: 'WILD', desc: 'A little unexpected. A lot of you.', img: 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?w=400&q=80' },
    { name: 'SOFT', desc: 'Let the details whisper.', img: 'https://images.unsplash.com/photo-1462524500090-89443873e2b4?w=400&q=80' },
    { name: 'SHY', desc: 'Quiet presence. Beautifully expressed.', img: 'https://images.unsplash.com/photo-1506804886640-394747ebfd1c?w=400&q=80' },
    { name: 'IN COMMAND', desc: 'A sharper kind of calm.', img: 'https://images.unsplash.com/photo-1416879598555-081cbbfcb31e?w=400&q=80' },
    { name: 'AT EASE', desc: 'Slow days. Thoughtful style.', img: 'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?w=400&q=80' }
  ];

  return (
    <section className="flex flex-col lg:flex-row px-4 md:px-8 py-8 md:py-12 gap-8 lg:gap-8 items-stretch">
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
          <button className="bg-[#8c7457] hover:bg-[#725e45] text-white px-6 py-3 text-[10px] md:text-xs tracking-widest flex items-center gap-3 transition-colors">
            EXPLORE THE LOOKBOOK <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Center Displays (Nature/Leaves) */}
      <div className="w-full lg:w-1/2 flex gap-2 md:gap-4 order-2 lg:order-2 h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="flex-1 overflow-hidden mt-6 md:mt-12 rounded-t-full bg-[#e8e4db]">
          <img src="https://images.unsplash.com/photo-1466692476877-622ce7a1f595?w=800&q=80" alt="Green leaf" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 overflow-hidden rounded-lg bg-[#e8e4db]">
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80" alt="Monstera leaf" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 overflow-hidden mt-4 md:mt-8 rounded-t-full bg-[#e8e4db]">
          <img src="https://images.unsplash.com/photo-1542314831-c6a4d14eff40?w=800&q=80" alt="Palm leaf shadows" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Right Explore by Mood */}
      <div className="w-full lg:w-1/4 flex flex-col order-3 lg:order-3">
        <h2 className="font-serif text-xl md:text-2xl mb-4 text-center lg:text-left">EXPLORE BY MOOD</h2>
        <div className="flex-1 flex gap-1 h-[200px] md:h-[300px] lg:h-[400px]">
          {fabrics.map((fabric, idx) => (
            <div key={idx} className="flex-1 relative group cursor-pointer overflow-hidden bg-[#e8e4db]">
              <img src={fabric.img} alt={fabric.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex flex-col justify-end p-1 md:p-2 text-white">
                <span className="text-[7px] md:text-[9px] tracking-wider mb-1 font-semibold text-center leading-tight writing-vertical-rl md:writing-horizontal-tb transform rotate-180 md:rotate-0">{fabric.name}</span>
                <span className="hidden md:block text-[8px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">{fabric.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
