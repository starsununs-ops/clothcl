import { useState } from 'react';
import { X, Heart, ShoppingBag, Check, Sparkles, ShieldCheck, Ruler } from 'lucide-react';

export default function QuickViewModal({ dress, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
  if (!dress) return null;

  const colors = dress.colors || [
    { name: 'Original Look', hex: '#dcd0ea', filter: 'none' },
    { name: 'Rose Blush', hex: '#f2ccd8', filter: 'hue-rotate(320deg) saturate(1.2)' },
    { name: 'Emerald Glaze', hex: '#2d6a4f', filter: 'hue-rotate(90deg) saturate(1.4)' },
    { name: 'Ivory Pearl', hex: '#fdfbf7', filter: 'grayscale(0.8) brightness(1.1)' }
  ];

  const sizes = dress.sizes || ['XS', 'S', 'M', 'L'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1] || 'S');
  const [selectedLength, setSelectedLength] = useState('Standard');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  const handleAddToCart = () => {
    onAddToCart({
      ...dress,
      selectedColor: selectedColor.name,
      selectedColorHex: selectedColor.hex,
      selectedSize,
      selectedLength,
      quantity
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#faf8f5] w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-none shadow-2xl border border-[#d8d3c9] relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Left: Garment Photo with Live Color Filter */}
        <div className="w-full md:w-1/2 relative bg-[#f0eae1] flex items-center justify-center overflow-hidden min-h-[380px] md:min-h-[520px]">
          <div 
            className="w-full h-full relative cursor-zoom-in"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img 
              src={dress.image} 
              alt={dress.name}
              style={{ filter: selectedColor.filter }}
              className={`w-full h-full object-cover transition-all duration-500 ease-out ${isZoomed ? 'scale-125' : 'scale-100 hover:scale-105'}`}
            />
            {/* Color Overlay Tint (Subtle glow) */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-color opacity-30 transition-colors duration-500"
              style={{ backgroundColor: selectedColor.hex !== '#none' ? selectedColor.hex : 'transparent' }}
            />
          </div>

          {/* Quick Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
            <span className="bg-[#8b7355] text-white text-[9px] tracking-widest uppercase px-2.5 py-1 font-semibold">
              {dress.mood || 'DESIGNER PIECE'}
            </span>
            <span className="bg-white/90 text-[#2b2725] text-[9px] tracking-wider px-2 py-0.5 font-serif italic backdrop-blur-xs">
              Live Color: {selectedColor.name}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] text-gray-600 bg-white/85 backdrop-blur-xs px-3 py-1.5 rounded-sm">
            <span>Click image to {isZoomed ? 'reset' : 'zoom'} details</span>
            <span className="text-[#8b7355] font-semibold">100% Original Cut</span>
          </div>
        </div>

        {/* Right: Interactive Configuration & Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] tracking-widest uppercase text-[#8b7355] font-semibold">
                Style Ur Mood Atelier
              </span>
              <button 
                onClick={() => onToggleWishlist(dress)}
                className={`p-2 rounded-full border transition-colors cursor-pointer ${isWishlisted ? 'border-red-400 text-red-500 bg-red-50' : 'border-gray-300 text-gray-500 hover:text-black'}`}
                title="Save to Wishlist"
              >
                <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-[#2b2725] mb-2 leading-tight">
              {dress.name}
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-serif text-[#2b2725] font-semibold">{dress.price}</span>
              <span className="text-xs text-gray-500 border-l border-gray-300 pl-3">
                Fabric: <strong className="text-gray-700">{dress.fabric || 'Luxury Textile'}</strong>
              </span>
            </div>

            <p className="text-gray-600 text-xs md:text-sm font-serif italic mb-6 leading-relaxed">
              {dress.desc}
            </p>

            {/* Interactive Color Swatch Picker */}
            <div className="mb-5">
              <div className="flex justify-between text-xs mb-2">
                <span className="tracking-widest uppercase text-[10px] text-gray-600 font-semibold">
                  Select Colorway: <span className="text-[#8b7355] font-normal">{selectedColor.name}</span>
                </span>
                <span className="text-[10px] text-gray-400 italic">Live interactive dress tint</span>
              </div>
              <div className="flex gap-2.5 items-center">
                {colors.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(c)}
                    className={`w-7 h-7 rounded-full border-2 transition-all relative flex items-center justify-center cursor-pointer ${selectedColor.name === c.name ? 'scale-115 border-[#8b7355] shadow-md ring-2 ring-[#8b7355]/30' : 'border-gray-300 hover:scale-105'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor.name === c.name && (
                      <Check size={12} className={c.hex === '#fdfbf7' || c.hex === '#faf7f0' ? 'text-black' : 'text-white'} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Size Selector */}
            <div className="mb-5">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="tracking-widest uppercase text-[10px] text-gray-600 font-semibold">
                  Size (Tailored Fit): <span className="text-[#8b7355] font-normal">{selectedSize}</span>
                </span>
                <button className="text-[10px] text-gray-500 hover:text-[#8b7355] flex items-center gap-1 cursor-pointer">
                  <Ruler size={11} /> Size Guide
                </button>
              </div>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`flex-1 py-2 text-xs font-semibold tracking-wider transition-all border cursor-pointer ${selectedSize === s ? 'bg-[#2b2725] text-white border-[#2b2725]' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Length Preference */}
            <div className="mb-6">
              <span className="tracking-widest uppercase text-[10px] text-gray-600 font-semibold block mb-2">
                Length Cut:
              </span>
              <div className="flex gap-2">
                {['Petite / Mini', 'Standard', 'Tall / Maxi'].map((len) => (
                  <button
                    key={len}
                    onClick={() => setSelectedLength(len)}
                    className={`flex-1 py-1.5 text-[11px] tracking-wide border transition-all cursor-pointer ${selectedLength === len ? 'bg-[#8b7355] text-white border-[#8b7355]' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`}
                  >
                    {len}
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs for Details */}
            <div className="border-t border-gray-200 pt-3 mb-4">
              <div className="flex gap-4 border-b border-gray-200 pb-1 text-xs">
                <button 
                  onClick={() => setActiveTab('details')}
                  className={`pb-1 font-semibold tracking-wider text-[10px] uppercase cursor-pointer ${activeTab === 'details' ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : 'text-gray-400 hover:text-gray-700'}`}
                >
                  Features
                </button>
                <button 
                  onClick={() => setActiveTab('style')}
                  className={`pb-1 font-semibold tracking-wider text-[10px] uppercase cursor-pointer ${activeTab === 'style' ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : 'text-gray-400 hover:text-gray-700'}`}
                >
                  Styling Notes
                </button>
                <button 
                  onClick={() => setActiveTab('care')}
                  className={`pb-1 font-semibold tracking-wider text-[10px] uppercase cursor-pointer ${activeTab === 'care' ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : 'text-gray-400 hover:text-gray-700'}`}
                >
                  Care & Delivery
                </button>
              </div>

              <div className="py-2.5 text-[11px] text-gray-600 leading-relaxed font-sans min-h-[50px]">
                {activeTab === 'details' && (
                  <ul className="list-disc list-inside space-y-1">
                    {(dress.details || ['Hand-finished seams', 'Premium breathable textile', 'Tailored drape']).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'style' && (
                  <p className="italic font-serif">
                    "Style with neutral strappy sandals for sunny days or a tailored blazer for evening events. Moves effortlessly with your mood."
                  </p>
                )}
                {activeTab === 'care' && (
                  <p>
                    Dry clean or hand wash delicate cycle with eco-friendly detergent. Crafted on demand to eliminate waste.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-gray-200 flex items-center gap-3">
            <div className="flex items-center border border-gray-300 bg-white">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 py-2 text-xs font-semibold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#8b7355] hover:bg-[#725e45] text-white py-3 px-6 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <ShoppingBag size={15} /> ADD TO BAG ({dress.price})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
