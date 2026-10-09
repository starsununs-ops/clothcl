import { ArrowRight, PencilRuler, FileText, Ruler } from 'lucide-react';

export default function Features() {
  const designs = [
    '/images/dress_15.jpg',
    '/images/dress_16.jpg',
    '/images/dress_17.jpg',
    '/images/dress_18.jpg',
    '/images/dress_19.jpg',
    '/images/dress_20.jpg'
  ];

  return (
    <section className="px-4 md:px-8 py-8 md:py-12 flex flex-col xl:flex-row gap-8">
      {/* Left Block */}
      <div className="w-full xl:w-[45%] flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 flex flex-col justify-between">
          <div className="mb-6 md:mb-8 text-center sm:text-left">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-[#2b2725]">DETAILS<br className="hidden md:block"/>THAT MOVE<br className="hidden md:block"/>WITH YOU.</h2>
            <p className="text-gray-600 text-xs md:text-sm font-serif italic mb-6 md:mb-8 max-w-[200px] mx-auto sm:mx-0">
              Lace, denim, tailoring, prints and more.<br className="hidden md:block"/>
              Thoughtful combinations for every version of you.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-4 md:px-6 py-3 text-[9px] md:text-[10px] tracking-widest flex items-center gap-2 transition-colors">
                DISCOVER FABRICS <ArrowRight size={14} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-auto">
            <img src="/images/dress_10.jpg" alt="Fabric 1" className="w-full h-32 md:h-40 object-cover" />
            <img src="/images/dress_11.jpg" alt="Fabric 2" className="w-full h-32 md:h-40 object-cover" />
          </div>
        </div>
        
        <div className="w-full sm:w-1/2 grid grid-cols-2 gap-2 h-full">
          <img src="/images/dress_12.jpg" alt="Fabric 3" className="w-full h-32 md:h-48 object-cover" />
          <img src="/images/dress_13.jpg" alt="Fabric 4" className="w-full h-32 md:h-48 object-cover" />
          <img src="/images/dress_14.jpg" alt="Fabric 5" className="w-full h-40 md:h-56 object-cover col-span-2" />
        </div>
      </div>

      {/* Right Block */}
      <div className="w-full xl:w-[55%] bg-[#f3efea] p-6 md:p-8 flex flex-col justify-between">
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
          <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-4 md:px-6 py-3 text-[9px] md:text-[10px] tracking-widest transition-colors whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto">
            CUSTOMISE YOUR DESIGN <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
          {designs.map((img, idx) => (
            <div key={idx} className="relative pt-6">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-serif">{String(idx+1).padStart(2, '0')}</span>
              <div className="h-32 md:h-40 bg-gray-200">
                <img src={img} alt={`Design ${idx+1}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#d8d3c9] pt-6 gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <PencilRuler className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">1</span>
              <span>Choose<br className="hidden sm:block"/>design</span>
            </div>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={16} />
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <FileText className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">2</span>
              <span>Your<br className="hidden sm:block"/>details</span>
            </div>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={16} />

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <Ruler className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">3</span>
              <span>Size &<br className="hidden sm:block"/>measurements</span>
            </div>
          </div>
          
          <button className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-3 text-[10px] tracking-widest transition-colors w-full sm:w-auto sm:ml-4 mt-4 sm:mt-0">
            SEND REQUEST
          </button>
        </div>
      </div>
    </section>
  );
}
