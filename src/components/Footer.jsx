import { ArrowRight } from 'lucide-react';

export default function Footer({ onOpenAbout, onOpenDesigner }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="px-4 md:px-8 py-8 md:py-12 relative border-t border-[#e5e0d8] mt-4 md:mt-8 bg-[#fdfbf7]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto items-center text-center md:text-left">
        
        {/* About */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="font-serif text-xl md:text-2xl mb-4 text-[#2b2725]">About Style Ur Mood</h3>
          <p className="text-gray-600 text-sm mb-6 font-serif italic max-w-md">
            Every mood has a style. Bold, wild, soft or shy - Style Ur Mood is a wardrobe of expression for modern girls. Thoughtful silhouettes, beautiful textures and unexpected details give you room to dress for the way you feel.
          </p>
          <button 
            onClick={() => scrollTo('hero-section')}
            className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-2.5 text-[10px] tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            OUR STORY <ArrowRight size={14} />
          </button>
        </div>

        {/* Designer */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="font-serif text-xl md:text-2xl mb-1 text-[#2b2725]">Zahwa Akhtar</h3>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-4">Designer & Creative Director</p>
          <p className="text-gray-600 text-sm mb-6 font-serif italic max-w-md">
            For Zahwa Akhtar, girls' clothing begins with a feeling. Her creative vision brings together structure and softness, familiar shapes and unexpected details. Through Style Ur Mood, she explores a simple idea: every mood deserves its own expression.
          </p>
          <button 
            onClick={() => scrollTo('features-section')}
            className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-2.5 text-[10px] tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            MEET THE DESIGNER <ArrowRight size={14} />
          </button>
        </div>

        {/* Tools image */}
        <div className="flex-1 w-full h-48 md:h-64 flex justify-center md:justify-end bg-gray-100 overflow-hidden shadow-xs border border-[#e5e0d8]">
          <img 
            src="/images/dress_39.jpg" 
            alt="Designer sketches, shears and fabric swatches" 
            className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
          />
        </div>
      </div>

      <div className="mt-8 md:mt-12 text-center border-t border-[#e5e0d8] pt-6 flex flex-col items-center justify-center gap-1">
        <p className="font-serif text-lg md:text-xl italic text-gray-600">Your mood. Your style.</p>
        <p className="text-[10px] text-gray-400 tracking-wider uppercase font-sans">
          © {new Date().getFullYear()} Style Ur Mood Atelier • Modern Girls Haute Fashion • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
