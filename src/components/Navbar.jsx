import { Search, User, ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-6 uppercase text-xs tracking-widest border-b border-[#e5e0d8]">
      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center w-1/3">
        <button className="hover:text-brand-gold transition-colors"><Menu size={20} strokeWidth={1.5} /></button>
      </div>

      {/* Desktop Left Links */}
      <div className="hidden md:flex gap-8 w-1/3">
        <a href="#" className="hover:text-brand-gold transition-colors">New In</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Lookbook</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Shop By Mood</a>
      </div>
      
      {/* Center Logo */}
      <div className="w-1/3 flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl md:text-4xl normal-case tracking-normal mb-1">SM</h1>
        <p className="text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] text-gray-500 whitespace-nowrap">STYLE UR MOOD</p>
      </div>
      
      {/* Right Icons & Links */}
      <div className="flex gap-4 md:gap-8 items-center justify-end w-1/3">
        <a href="#" className="hidden md:block hover:text-brand-gold transition-colors">Our Story</a>
        <a href="#" className="hidden md:block hover:text-brand-gold transition-colors">The Designer</a>
        <div className="flex gap-3 md:gap-4 ml-0 md:ml-4">
          <button className="hover:text-brand-gold transition-colors"><Search size={18} strokeWidth={1.5} /></button>
          <button className="hidden sm:block hover:text-brand-gold transition-colors"><User size={18} strokeWidth={1.5} /></button>
          <button className="hover:text-brand-gold transition-colors"><ShoppingBag size={18} strokeWidth={1.5} /></button>
        </div>
      </div>
    </nav>
  );
}
