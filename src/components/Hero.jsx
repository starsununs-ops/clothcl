import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  const fabrics = [
    { name: 'BOLD', desc: 'Wear your confidence.', img: 'https://images.unsplash.com/photo-1521459467264-802e2ef3141f?w=600&q=80' },
    { name: 'WILD', desc: 'A little unexpected. A lot of you.', img: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?w=600&q=80' },
    { name: 'SOFT', desc: 'Let the details whisper.', img: 'https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?w=600&q=80' },
    { name: 'SHY', desc: 'Quiet presence. Beautifully expressed.', img: 'https://images.unsplash.com/photo-1528459105426-b9548367069b?w=600&q=80' },
    { name: 'IN COMMAND', desc: 'A sharper kind of calm.', img: 'https://images.unsplash.com/photo-1534593963832-01c3595183bd?w=600&q=80' },
    { name: 'AT EASE', desc: 'Slow days. Thoughtful style.', img: 'https://images.unsplash.com/photo-1541323421480-68513be3d209?w=600&q=80' }
  ];

  return (
    <section className="flex flex-col lg:flex-row px-4 md:px-8 py-8 md:py-12 gap-8 lg:gap-8 items-stretch relative">
      {/* Elegant Leaf Decoration */}
      <Leaf className="absolute -top-10 -left-10 w-48 md:w-80 h-48 md:h-80 opacity-[0.03] text-[#2b2725] pointer-events-none z-0 transform -rotate-45" strokeWidth={1} />
      
      {/* Left Text */}
      <div className="w-full lg:w-1/4 flex flex-col justify-center text-center lg:text-left order-1 lg:order-1 relative z-20 pl-4 md:pl-8">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-[#2b2725] tracking-tight">
          STYLE UR <br className="hidden lg:block" />MOOD.
        </h1>
        <p className="text-gray-600 mb-8 font-serif text-lg md:text-xl italic max-w-sm mx-auto lg:mx-0">
          You don't feel the same every day.<br className="hidden lg:block" />
          Why should your wardrobe?
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-[#8c7457] hover:bg-[#725e45] text-white px-8 py-4 text-xs tracking-[0.2em] flex items-center gap-3 transition-all hover:scale-105 active:scale-95 duration-300 shadow-md hover:shadow-lg">
            EXPLORE THE LOOKBOOK <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Center Displays (Mannequin/Clothing) */}
      <div className="w-full lg:w-1/2 flex gap-3 md:gap-5 order-2 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] relative z-10">
        <div className="flex-1 overflow-hidden mt-12 md:mt-24 rounded-t-full cursor-pointer group shadow-xl">
          <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80" alt="Clothing rack" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="flex-1 overflow-hidden rounded-t-full cursor-pointer group shadow-xl">
          <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80" alt="Stylish clothing rack" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="flex-1 overflow-hidden mt-6 md:mt-12 rounded-t-full cursor-pointer group shadow-xl">
          <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=800&q=80" alt="Boutique clothing" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>
      
      {/* Right Explore by Mood */}
      <div className="w-full lg:w-1/4 flex flex-col order-3 lg:order-3 relative z-10">
        <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center lg:text-left text-[#2b2725]">EXPLORE BY MOOD</h2>
        <div className="flex-1 flex gap-1 h-[250px] md:h-[350px] lg:h-full">
          {fabrics.map((fabric, idx) => (
            <div key={idx} className="flex-1 relative group cursor-pointer overflow-hidden bg-[#e5e0d8] shadow-inner">
              <img src={fabric.img} alt={fabric.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2 text-white">
                <span className="text-[9px] md:text-[11px] tracking-widest mb-1 font-semibold text-center leading-tight writing-vertical-rl md:writing-horizontal-tb transform rotate-180 md:rotate-0">{fabric.name}</span>
                <span className="hidden md:block text-[9px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden text-gray-200">{fabric.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
