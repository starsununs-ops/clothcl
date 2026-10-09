import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-8 md:py-12 relative border-t border-[#e5e0d8] mt-4 md:mt-8 overflow-hidden">
      {/* Decorative Plant */}
      <img src="/images/optimized/plant_bottom_right.jpg" className="absolute bottom-0 -right-10 w-48 md:w-64 opacity-60 mix-blend-multiply pointer-events-none z-0" alt="" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto items-center text-center md:text-left relative z-10">
        
        {/* About */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="font-serif text-xl md:text-2xl mb-4 text-[#2b2725]">About Style Ur Mood</h3>
          <p className="text-gray-600 text-sm mb-6 font-serif italic max-w-md">
            Every mood has a style. Bold, wild, soft or shy - Style Ur Mood is a wardrobe of expression. Thoughtful silhouettes, beautiful textures and unexpected details give you room to dress for the way you feel.
          </p>
          <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-2 text-[10px] tracking-widest transition-colors flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200">
            OUR STORY <ArrowRight size={14} />
          </button>
        </div>

        {/* Designer */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="font-serif text-xl md:text-2xl mb-1 text-[#2b2725]">Zahwa Akhtar</h3>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-4">Designer & Creative Director</p>
          <p className="text-gray-600 text-sm mb-6 font-serif italic max-w-md">
            For Zahwa Akhtar, clothing begins with a feeling. Her creative vision brings together structure and softness, familiar shapes and unexpected details. Through Style Ur Mood, she explores a simple idea: every mood deserves its own expression.
          </p>
          <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-2 text-[10px] tracking-widest transition-colors flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200">
            MEET THE DESIGNER <ArrowRight size={14} />
          </button>
        </div>

        {/* Tools image */}
        <div className="flex-1 w-full flex justify-center md:justify-end overflow-hidden rounded-lg group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-500">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <img src="/images/optimized/footer_sketch.jpg" alt="Sewing sketches and tools" className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>

      <div className="mt-8 md:mt-12 text-center border-t border-[#e5e0d8] pt-6 relative z-10">
        <p className="font-serif text-lg md:text-xl italic text-gray-600 cursor-default hover:text-brand-gold transition-colors duration-300">Your mood. Your style.</p>
      </div>
    </footer>
  );
}
