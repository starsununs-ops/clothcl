import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const fabrics = [
    { name: 'BOLD', desc: 'Wear your confidence.', img: '/images/hero_fabric_0.jpg' },
    { name: 'WILD', desc: 'A little unexpected. A lot of you.', img: '/images/hero_fabric_1.jpg' },
    { name: 'SOFT', desc: 'Let the details whisper.', img: '/images/hero_fabric_2.jpg' },
    { name: 'SHY', desc: 'Quiet presence. Beautifully expressed.', img: '/images/hero_fabric_3.jpg' },
    { name: 'IN COMMAND', desc: 'A sharper kind of calm.', img: '/images/hero_fabric_4.jpg' },
    { name: 'AT EASE', desc: 'Slow days. Thoughtful style.', img: '/images/hero_fabric_5.jpg' }
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
      
      {/* Center Displays (Mannequin Dresses) */}
      <div className="w-full lg:w-1/2 flex gap-2 md:gap-4 order-2 lg:order-2 h-[300px] md:h-[400px] lg:h-[450px]">
        <div className="flex-1 overflow-hidden mt-6 md:mt-12">
          <img src="/images/hero_model_1.jpg" alt="Blue patterned suit on mannequin" className="w-full h-full object-cover object-top" />
        </div>
        <div className="flex-1 overflow-hidden">
          <img src="/images/hero_model_2.jpg" alt="Cream wrap dress on mannequin" className="w-full h-full object-cover object-top" />
        </div>
        <div className="flex-1 overflow-hidden mt-4 md:mt-8">
          <img src="/images/hero_model_3.jpg" alt="Brown suit on mannequin" className="w-full h-full object-cover object-top" />
        </div>
      </div>
      
      {/* Right Explore by Mood */}
      <div className="w-full lg:w-1/4 flex flex-col order-3 lg:order-3">
        <h2 className="font-serif text-xl md:text-2xl mb-4 text-center lg:text-left">EXPLORE BY MOOD</h2>
        <div className="flex-1 flex gap-1 h-[200px] md:h-[300px] lg:h-[400px]">
          {fabrics.map((fabric, idx) => (
            <div key={idx} className="flex-1 relative group cursor-pointer overflow-hidden bg-gray-200">
              <img src={fabric.img} alt={fabric.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-1 md:p-2 text-white">
                <span className="text-[7px] md:text-[9px] tracking-wider mb-1 font-semibold text-center leading-tight">{fabric.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
