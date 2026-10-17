import { ArrowRight, Eye, Heart } from 'lucide-react';
import { moodsData } from '../data/fashionData';

export default function MoodsGrid({ onOpenQuickView, onToggleWishlist, wishlistItems = [] }) {
  const isWishlisted = (id) => wishlistItems.some((item) => item.id === id);

  return (
    <section id="moods-section" className="px-4 md:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
        <h2 className="font-serif text-2xl md:text-3xl text-center text-[#2b2725]">what's ur mood</h2>
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
      </div>
      
      {/* 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {moodsData.map((mood) => (
          <div 
            key={mood.id} 
            id={`mood-card-${mood.id}`}
            className="bg-[#f3efea] p-4 flex flex-row items-center shadow-xs hover:shadow-md transition-shadow gap-2 border border-transparent hover:border-[#e2dcce]"
          >
            {/* Left Info */}
            <div className="w-1/3 flex flex-col justify-between h-full py-1">
              <div>
                <h3 className="font-serif text-lg lg:text-xl mb-1 text-[#2b2725] tracking-wide">{mood.name}</h3>
                <p className="text-gray-600 text-[10px] lg:text-xs whitespace-pre-line mb-4 font-serif italic leading-tight">
                  {mood.desc}
                </p>
              </div>
              <button 
                onClick={() => onOpenQuickView && onOpenQuickView(mood.dresses[0])}
                className="text-[8px] lg:text-[9px] tracking-widest uppercase flex items-center gap-1 hover:text-[#8b7355] transition-colors cursor-pointer font-semibold text-gray-700"
              >
                VIEW ALL <ArrowRight size={12} />
              </button>
            </div>
            
            {/* Right Images (3 interactive dresses) */}
            <div className="w-2/3 h-24 lg:h-32 flex gap-1">
              {mood.dresses.map((dress, i) => (
                <div 
                  key={dress.id || i} 
                  onClick={() => onOpenQuickView && onOpenQuickView(dress)}
                  className="flex-1 bg-gray-200 relative group cursor-pointer overflow-hidden"
                  title={`${dress.name} (${dress.price})`}
                >
                  <img 
                    src={dress.image} 
                    alt={`${mood.name} style ${i+1}`} 
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500" 
                  />
                  
                  {/* Interactive Hover Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-1 text-white">
                    <div className="flex justify-end">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onToggleWishlist) onToggleWishlist(dress);
                        }}
                        className="p-1 hover:scale-120 transition-transform cursor-pointer"
                        title="Save item"
                      >
                        <Heart 
                          size={11} 
                          className={isWishlisted(dress.id) ? 'text-red-400 fill-red-400' : 'text-white'} 
                        />
                      </button>
                    </div>

                    <div className="text-center">
                      <span className="text-[7px] block font-semibold truncate leading-tight">{dress.name}</span>
                      <span className="text-[7px] text-[#c3a073] font-serif font-bold">{dress.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
