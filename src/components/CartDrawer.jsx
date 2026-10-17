import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + numericPrice * (item.quantity || 1);
  }, 0);

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
              <ShoppingBag size={18} className="text-[#8b7355]" />
              <h2 className="font-serif text-xl text-[#2b2725] tracking-wide">Your Shopping Bag</h2>
              <span className="text-xs text-gray-500 font-sans">({cartItems.length})</span>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-black p-1 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <ShoppingBag size={48} className="text-gray-300 mb-4 stroke-1" />
                <h3 className="font-serif text-lg text-gray-700 mb-2">Your Bag is Empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  Explore our modern atelier clothing collection to discover silhouettes tailored to your mood.
                </p>
                <button 
                  onClick={onClose}
                  className="bg-[#8b7355] text-white text-[10px] tracking-widest uppercase px-6 py-2.5 transition-colors hover:bg-[#725e45] cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex gap-4 p-3 bg-white border border-[#e5e0d8] shadow-xs">
                  <div className="w-20 h-28 bg-gray-100 shrink-0 overflow-hidden relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    {item.selectedColorHex && (
                      <span 
                        className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border border-white shadow-xs" 
                        style={{ backgroundColor: item.selectedColorHex }}
                      />
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm text-[#2b2725] leading-snug line-clamp-2">{item.name}</h4>
                        <button 
                          onClick={() => onRemoveItem(index)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <p className="text-xs text-[#8b7355] font-semibold mt-0.5">{item.price}</p>
                      <div className="text-[11px] text-gray-500 mt-1 flex gap-2">
                        <span>Size: <strong>{item.selectedSize || 'S'}</strong></span>
                        {item.selectedColor && <span>Color: <strong>{item.selectedColor}</strong></span>}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center border border-gray-300">
                        <button 
                          onClick={() => onUpdateQuantity(index, Math.max(1, (item.quantity || 1) - 1))}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-semibold">{item.quantity || 1}</span>
                        <button 
                          onClick={() => onUpdateQuantity(index, (item.quantity || 1) + 1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-xs font-serif font-semibold text-[#2b2725]">
                        ${((parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0) * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#e5e0d8] bg-[#f5f1eb]">
              <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                <span>Complimentary Express Shipping</span>
                <span className="text-green-700 font-semibold uppercase text-[10px]">Free</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif text-base text-[#2b2725]">Estimated Subtotal</span>
                <span className="font-serif text-xl font-semibold text-[#2b2725]">${subtotal.toFixed(2)}</span>
              </div>

              <button 
                onClick={onCheckout}
                className="w-full bg-[#8b7355] hover:bg-[#725e45] text-white py-3.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
              >
                PROCEED TO CHECKOUT <ArrowRight size={14} />
              </button>
              <p className="text-[10px] text-center text-gray-500 mt-2 italic font-serif">
                Crafted consciously • Tailored on demand
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
