import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoodsGrid from './components/MoodsGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import BespokeCustomizerModal from './components/BespokeCustomizerModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'soft-1',
      name: 'Garden Greenhouse Sky Embroidered Dress',
      price: '$195',
      image: '/images/dress_27.jpg',
      selectedColor: 'Sky Meadow Blue',
      selectedColorHex: '#a8c5da',
      selectedSize: 'S',
      quantity: 1
    }
  ]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [activeQuickViewDress, setActiveQuickViewDress] = useState(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizerDesignIndex, setCustomizerDesignIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Auto-dismiss toast after 4s
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (title, message) => {
    setToast({ title, message });
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (p) => p.id === item.id && p.selectedSize === item.selectedSize && p.selectedColor === item.selectedColor
      );
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx].quantity = (copy[existingIdx].quantity || 1) + (item.quantity || 1);
        return copy;
      }
      return [...prev, item];
    });

    showToast('Added to Shopping Bag', `${item.name} (${item.selectedSize || 'S'}, ${item.selectedColor || 'Standard'}) added.`);
    setActiveQuickViewDress(null);
  };

  const handleToggleWishlist = (item) => {
    setWishlistItems((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      if (exists) {
        showToast('Removed from Wishlist', `${item.name} removed from your saved pieces.`);
        return prev.filter((p) => p.id !== item.id);
      } else {
        showToast('Saved to Wishlist', `${item.name} added to your style moodboard.`);
        return [...prev, item];
      }
    });
  };

  const handleUpdateQuantity = (index, qty) => {
    setCartItems((prev) => {
      const copy = [...prev];
      copy[index].quantity = qty;
      return copy;
    });
  };

  const handleRemoveCartItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Item Removed', 'Piece removed from your bag.');
  };

  const handleOpenCustomizer = (designIndex = 0) => {
    setCustomizerDesignIndex(designIndex);
    setIsCustomizerOpen(true);
  };

  const handleSubmitCustomOrder = (customOrder) => {
    const customCartItem = {
      id: `bespoke-${Date.now()}`,
      name: `Bespoke ${customOrder.designName}`,
      price: customOrder.price,
      image: '/images/models/customizer_base.jpg',
      selectedColor: customOrder.color.name,
      selectedColorHex: customOrder.color.hex,
      selectedSize: `${customOrder.size} (Custom Fitted)`,
      quantity: 1
    };

    setCartItems((prev) => [...prev, customCartItem]);
    setIsCustomizerOpen(false);
    showToast('Bespoke Request Saved!', `Your custom ${customOrder.designName} has been crafted and added to your bag.`);
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    showToast('Order Received', 'Thank you! Zahwa Akhtar Atelier will begin tailoring your chosen pieces.');
    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2b2725] selection:bg-[#c3a073] selection:text-white">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
        wishlistCount={wishlistItems.length}
        onOpenUser={() => showToast('Style Profile', 'Welcome to Style Ur Mood. Sizing: S | Favorite Mood: Soft & Bold')}
      />

      <main>
        <Hero 
          onOpenQuickView={(dress) => setActiveQuickViewDress(dress)}
        />
        
        <MoodsGrid 
          onOpenQuickView={(dress) => setActiveQuickViewDress(dress)}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />

        <Features 
          onOpenCustomizer={handleOpenCustomizer}
          onOpenQuickView={(dress) => setActiveQuickViewDress(dress)}
        />
      </main>

      <Footer />

      {/* Interactive Modals and Drawers */}
      <QuickViewModal 
        dress={activeQuickViewDress}
        onClose={() => setActiveQuickViewDress(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={activeQuickViewDress ? wishlistItems.some((i) => i.id === activeQuickViewDress.id) : false}
      />

      {isCustomizerOpen && (
        <BespokeCustomizerModal 
          initialDesignIndex={customizerDesignIndex}
          onClose={() => setIsCustomizerOpen(false)}
          onSubmitCustomOrder={handleSubmitCustomOrder}
        />
      )}

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />

      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={(id) => setWishlistItems((prev) => prev.filter((i) => i.id !== id))}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDress={(dress) => setActiveQuickViewDress(dress)}
      />

      <Toast 
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}

export default App;
