import { Search, User, ShoppingBag, Menu, Heart } from 'lucide-react';

export default function Navbar({ onOpenCart, onOpenWishlist, onOpenSearch, cartCount = 0, wishlistCount = 0, onOpenUser }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-6 uppercase text-xs tracking-widest border-b border-[#e5e0d8] sticky top-0 bg-[#faf8f5]/95 backdrop-blur-md z-40 transition-all">
      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center w-1/3 gap-3">
        <button 
          onClick={onOpenSearch} 
          className="hover:text-brand-gold transition-colors cursor-pointer"
          aria-label="Open search"
        >
          <Search size={19} strokeWidth={1.5} />
        </button>
      </div>

      {/* Desktop Left Links */}
      <div className="hidden md:flex gap-8 w-1/3">
        <button 
          onClick={() => scrollTo('hero-section')} 
          className="hover:text-brand-gold transition-colors cursor-pointer text-left uppercase text-xs tracking-widest"
        >
          New In
        </button>
        <button 
          onClick={() => scrollTo('moods-section')} 
          className="hover:text-brand-gold transition-colors cursor-pointer text-left uppercase text-xs tracking-widest"
        >
          Lookbook
        </button>
        <button 
          onClick={() => scrollTo('moods-section')} 
          className="hover:text-brand-gold transition-colors cursor-pointer text-left uppercase text-xs tracking-widest"
        >
          Shop By Mood
        </button>
      </div>
      
      {/* Center Logo */}
      <div className="w-1/3 flex flex-col items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <h1 className="font-serif text-3xl md:text-4xl normal-case tracking-normal mb-1">SM</h1>
        <p className="text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] text-gray-500 whitespace-nowrap">STYLE UR MOOD</p>
      </div>
      
      {/* Right Icons & Links */}
      <div className="flex gap-4 md:gap-8 items-center justify-end w-1/3">
        <button 
          onClick={() => scrollTo('features-section')} 
          className="hidden md:block hover:text-brand-gold transition-colors cursor-pointer uppercase text-xs tracking-widest"
        >
          Our Story
        </button>
        <button 
          onClick={() => scrollTo('footer-section')} 
          className="hidden md:block hover:text-brand-gold transition-colors cursor-pointer uppercase text-xs tracking-widest"
        >
          The Designer
        </button>

        <div className="flex gap-3 md:gap-4 ml-0 md:ml-4 items-center">
          <button 
            onClick={onOpenSearch} 
            className="hover:text-brand-gold transition-colors cursor-pointer relative"
            title="Search collection"
            aria-label="Search collection"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>

          <button 
            onClick={onOpenWishlist}
            className="hover:text-brand-gold transition-colors cursor-pointer relative"
            title="Saved items"
            aria-label="Saved items"
          >
            <Heart size={18} strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#8b7355] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {wishlistCount}
              </span>
            )}
          </button>

          <button 
            onClick={onOpenUser}
            className="hidden sm:block hover:text-brand-gold transition-colors cursor-pointer"
            title="Style Profile"
            aria-label="Style Profile"
          >
            <User size={18} strokeWidth={1.5} />
          </button>

          <button 
            onClick={onOpenCart} 
            className="hover:text-brand-gold transition-colors cursor-pointer relative"
            title="Shopping bag"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#2b2725] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
