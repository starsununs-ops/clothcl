import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export default function WishlistDrawer({ isOpen, onClose, wishlistItems, onAddToCart, onRemoveWishlist }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col border-l border-[#d8d3c9]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#e5e0d8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-red-500 fill-red-500" />
              <h2 className="font-serif text-xl text-[#2b2725] tracking-wide">Saved Mood Pieces</h2>
              <span className="text-xs text-gray-500 font-sans">({wishlistItems.length})</span>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-black p-1 transition-colors cursor-pointer"
              aria-label="Close wishlist"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <Heart size={48} className="text-gray-300 mb-4 stroke-1" />
                <h3 className="font-serif text-lg text-gray-700 mb-2">No Saved Items Yet</h3>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  Click the heart icon on any garment to curate your personal style moodboard.
                </p>
                <button 
                  onClick={onClose}
                  className="bg-[#8b7355] text-white text-[10px] tracking-widest uppercase px-6 py-2.5 transition-colors hover:bg-[#725e45] cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-white border border-[#e5e0d8] shadow-xs">
                  <div className="w-20 h-28 bg-gray-100 shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm text-[#2b2725] leading-snug line-clamp-2">{item.name}</h4>
                        <button 
                          onClick={() => onRemoveWishlist(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-[#8b7355] font-semibold mt-0.5">{item.price}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5 font-serif italic">{item.fabric || item.mood}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <button 
                        onClick={() => {
                          onAddToCart({ ...item, quantity: 1, selectedSize: 'S', selectedColor: 'Standard' });
                          onRemoveWishlist(item.id);
                        }}
                        className="w-full bg-[#2b2725] hover:bg-black text-white text-[10px] tracking-widest uppercase py-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag size={12} /> MOVE TO BAG
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
