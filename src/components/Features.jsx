import { ArrowRight, PencilRuler, FileText, Ruler } from 'lucide-react';

export default function Features() {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 flex flex-col xl:flex-row gap-8 relative overflow-hidden">
      {/* Decorative Plants */}
      <img src="/images/optimized/plant_mid_left.jpg" className="absolute top-1/2 -translate-y-1/2 -left-10 w-24 md:w-32 opacity-60 mix-blend-multiply pointer-events-none z-0" alt="" />
      
      {/* Left Block */}
      <div className="w-full xl:w-[45%] flex flex-col sm:flex-row gap-6 items-stretch relative z-10">
        <div className="w-full sm:w-1/2 flex flex-col justify-between">
          <div className="mb-6 md:mb-8 text-center sm:text-left">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-[#2b2725]">DETAILS<br className="hidden md:block"/>THAT MOVE<br className="hidden md:block"/>WITH YOU.</h2>
            <p className="text-gray-600 text-xs md:text-sm font-serif italic mb-6 md:mb-8 max-w-[200px] mx-auto sm:mx-0">
              Lace, denim, tailoring, prints and more.<br className="hidden md:block"/>
              Thoughtful combinations for every version of you.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-4 md:px-6 py-3 text-[9px] md:text-[10px] tracking-widest flex items-center gap-2 transition-colors hover:scale-105 active:scale-95 duration-200">
                DISCOVER FABRICS <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2 flex justify-end overflow-hidden rounded-lg group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-500">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <img src="/images/optimized/features_fabrics_mosaic.jpg" alt="Fabric details" className="w-full h-64 sm:h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>

      {/* Right Block */}
      <div className="w-full xl:w-[55%] bg-[#f3efea] p-6 md:p-8 flex flex-col justify-between relative z-10 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6 md:mb-8 text-center sm:text-left gap-4">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-2 md:mb-4">ONE PIECE.<br className="hidden sm:block"/>MANY MOODS.</h2>
            <p className="text-gray-600 text-sm font-serif italic mb-2">
              Your favourite design. Made for you.
            </p>
            <p className="text-gray-600 text-[11px] md:text-xs max-w-xs mx-auto sm:mx-0">
              Choose from 6 designs. Share your details, size and measurements. We'll create your chosen piece for you.
            </p>
          </div>
          <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-4 md:px-6 py-3 text-[9px] md:text-[10px] tracking-widest transition-colors whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 active:scale-95 duration-200">
            CUSTOMISE YOUR DESIGN <ArrowRight size={14} />
          </button>
        </div>

        <div className="mb-6 md:mb-8 flex justify-center overflow-hidden rounded-lg group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-500 max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <img src="/images/optimized/features_custom_dresses.jpg" alt="6 Custom Designs" className="w-full h-48 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#d8d3c9] pt-6 gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start hover:text-brand-gold transition-colors cursor-default">
            <PencilRuler className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">1</span>
              <span>Choose<br className="hidden sm:block"/>design</span>
            </div>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={16} />
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start hover:text-brand-gold transition-colors cursor-default">
            <FileText className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">2</span>
              <span>Your<br className="hidden sm:block"/>details</span>
            </div>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={16} />

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start hover:text-brand-gold transition-colors cursor-default">
            <Ruler className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">3</span>
              <span>Size &<br className="hidden sm:block"/>measurements</span>
            </div>
          </div>
          
          <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-3 text-[10px] tracking-widest transition-colors w-full sm:w-auto sm:ml-4 mt-4 sm:mt-0 hover:scale-105 active:scale-95 duration-200">
            SEND REQUEST
          </button>
        </div>
      </div>
    </section>
  );
}
