import { useState } from 'react';
import { ArrowRight, PencilRuler, FileText, Ruler, Check } from 'lucide-react';
import { customizableDesigns, fabricDetails } from '../data/fashionData';

export default function Features({ onOpenCustomizer, onOpenQuickView }) {
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);

  const handleDesignClick = (index) => {
    setSelectedDesignIndex(index);
    if (onOpenCustomizer) {
      onOpenCustomizer(index);
    }
  };

  const handleFabricClick = (index) => {
    const f = fabricDetails[index];
    if (f && onOpenQuickView) {
      onOpenQuickView({
        id: `fabric-${index}`,
        name: f.name,
        price: 'Atelier Fabric',
        image: f.image,
        mood: f.tag,
        desc: f.desc,
        fabric: f.name,
        colors: [
          { name: 'Original Texture', hex: '#ede5d8', filter: 'none' },
          { name: 'Rosewater Tint', hex: '#f0cdd6', filter: 'hue-rotate(320deg)' },
          { name: 'Emerald Weave', hex: '#265440', filter: 'hue-rotate(110deg)' }
        ],
        sizes: ['Bespoke Cut', 'Custom Bolt'],
        details: ['High tensile strength', 'Breathable natural fibers', 'Crafted by heritage European mills']
      });
    }
  };

  return (
    <section id="features-section" className="px-4 md:px-8 py-8 md:py-12 flex flex-col xl:flex-row gap-8">
      {/* Left Block (Details that move with you) */}
      <div className="w-full xl:w-[45%] flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 flex flex-col justify-between">
          <div className="mb-6 md:mb-8 text-center sm:text-left">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-[#2b2725]">
              DETAILS<br className="hidden md:block"/>THAT MOVE<br className="hidden md:block"/>WITH YOU.
            </h2>
            <p className="text-gray-600 text-xs md:text-sm font-serif italic mb-6 md:mb-8 max-w-[200px] mx-auto sm:mx-0">
              Lace, denim, tailoring, prints and more.<br className="hidden md:block"/>
              Thoughtful combinations for every version of you.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button 
                onClick={() => handleFabricClick(0)}
                className="bg-[#8b7355] hover:bg-[#725e45] text-white px-4 md:px-6 py-3 text-[9px] md:text-[10px] tracking-widest flex items-center gap-2 transition-colors cursor-pointer shadow-xs hover:shadow-md"
              >
                DISCOVER FABRICS <ArrowRight size={14} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-auto">
            <div 
              onClick={() => handleFabricClick(0)}
              className="relative group cursor-pointer overflow-hidden bg-gray-100"
              title="Handcrafted Lace & Ruffles"
            >
              <img 
                src="/images/dress_10.jpg" 
                alt="Embroidered Floral Lace" 
                className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-white text-[8px] font-serif">
                Floral Lace Detail
              </div>
            </div>

            <div 
              onClick={() => handleFabricClick(1)}
              className="relative group cursor-pointer overflow-hidden bg-gray-100"
              title="Pearl Buckle & Suiting Twill"
            >
              <img 
                src="/images/dress_11.jpg" 
                alt="Tailoring and Pearl Buckle" 
                className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-white text-[8px] font-serif">
                Tailoring Details
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2 grid grid-cols-2 gap-2 h-full">
          <div 
            onClick={() => handleFabricClick(2)}
            className="relative group cursor-pointer overflow-hidden bg-gray-100"
            title="Parisian Architecture & Balcony"
          >
            <img 
              src="/images/dress_12.jpg" 
              alt="Parisian Atelier Facade" 
              className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-white text-[8px] font-serif">
              Atelier Heritage
            </div>
          </div>

          <div 
            onClick={() => handleFabricClick(3)}
            className="relative group cursor-pointer overflow-hidden bg-gray-100"
            title="Organza & Silk Ribbon"
          >
            <img 
              src="/images/dress_13.jpg" 
              alt="Garden Organza Texture" 
              className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-white text-[8px] font-serif">
              Organza Weave
            </div>
          </div>

          <div 
            onClick={() => handleFabricClick(4)}
            className="w-full h-40 md:h-56 object-cover col-span-2 relative group cursor-pointer overflow-hidden bg-gray-100"
            title="Mulberry Silk & Tulle Ruffles"
          >
            <img 
              src="/images/dress_14.jpg" 
              alt="Silk and Tulle Drapes" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[9px] font-serif">
              Mulberry Silk & Ballerina Tulle Ruffles
            </div>
          </div>
        </div>
      </div>

      {/* Right Block (One Piece Many Moods) */}
      <div className="w-full xl:w-[55%] bg-[#f3efea] p-6 md:p-8 flex flex-col justify-between border border-[#e8e2d8]">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6 md:mb-8 text-center sm:text-left gap-4">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-2 md:mb-4 text-[#2b2725]">
              ONE PIECE.<br className="hidden sm:block"/>MANY MOODS.
            </h2>
            <p className="text-gray-600 text-sm font-serif italic mb-2">
              Your favourite design. Made for you.
            </p>
            <p className="text-gray-600 text-[11px] md:text-xs max-w-xs mx-auto sm:mx-0">
              Choose from 6 designs. Share your details, size and measurements. We'll create your chosen piece for you.
            </p>
          </div>
          <button 
            onClick={() => onOpenCustomizer && onOpenCustomizer(selectedDesignIndex)}
            className="bg-[#8b7355] hover:bg-[#725e45] text-white px-4 md:px-6 py-3 text-[9px] md:text-[10px] tracking-widest transition-colors whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer shadow-xs hover:shadow-md"
          >
            CUSTOMISE YOUR DESIGN <ArrowRight size={14} />
          </button>
        </div>

        {/* 6 Numbered Designs with Active Selection */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
          {customizableDesigns.map((d, idx) => (
            <div 
              key={idx} 
              onClick={() => handleDesignClick(idx)}
              className="relative pt-6 cursor-pointer group"
            >
              <span className={`absolute top-0 left-1/2 -translate-x-1/2 text-xs font-serif transition-colors ${selectedDesignIndex === idx ? 'text-[#8b7355] font-bold underline' : 'text-gray-600'}`}>
                {d.number}
              </span>
              <div className={`h-32 md:h-40 bg-gray-200 overflow-hidden relative transition-all duration-300 border-2 ${selectedDesignIndex === idx ? 'border-[#8b7355] ring-2 ring-[#8b7355]/30 shadow-md' : 'border-transparent group-hover:border-gray-400'}`}>
                <img 
                  src={d.image} 
                  alt={d.name} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                />
                {selectedDesignIndex === idx && (
                  <div className="absolute top-1 right-1 bg-[#8b7355] text-white p-0.5 rounded-full shadow-xs">
                    <Check size={10} />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1 text-white text-[7px] font-sans font-semibold truncate">
                  {d.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Step Process Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#d8d3c9] pt-6 gap-4">
          <div 
            onClick={() => handleDesignClick(selectedDesignIndex)}
            className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start cursor-pointer hover:text-[#8b7355] transition-colors"
          >
            <PencilRuler className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-[#8b7355] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1 font-semibold">1</span>
              <span>Choose<br className="hidden sm:block"/>design ({customizableDesigns[selectedDesignIndex]?.number || '01'})</span>
            </div>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={16} />
          
          <div 
            onClick={() => onOpenCustomizer && onOpenCustomizer(selectedDesignIndex)}
            className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start cursor-pointer hover:text-[#8b7355] transition-colors"
          >
            <FileText className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">2</span>
              <span>Your<br className="hidden sm:block"/>details</span>
            </div>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={16} />

          <div 
            onClick={() => onOpenCustomizer && onOpenCustomizer(selectedDesignIndex)}
            className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start cursor-pointer hover:text-[#8b7355] transition-colors"
          >
            <Ruler className="text-gray-500 hidden sm:block" />
            <div className="text-xs text-center sm:text-left flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
              <span className="bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] mb-1">3</span>
              <span>Size &<br className="hidden sm:block"/>measurements</span>
            </div>
          </div>
          
          <button 
            onClick={() => onOpenCustomizer && onOpenCustomizer(selectedDesignIndex)}
            className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-3 text-[10px] tracking-widest transition-colors w-full sm:w-auto sm:ml-4 mt-4 sm:mt-0 cursor-pointer shadow-xs hover:shadow-md uppercase font-semibold"
          >
            SEND REQUEST
          </button>
        </div>
      </div>
    </section>
  );
}
