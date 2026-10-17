import { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { moodsData } from '../data/fashionData';

export default function SearchModal({ isOpen, onClose, onSelectDress }) {
  const [query, setQuery] = useState('');

  // Collect all dresses
  const allDresses = useMemo(() => {
    return moodsData.flatMap((m) => m.dresses.map((d) => ({ ...d, moodName: m.name })));
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allDresses.slice(0, 6);
    const q = query.toLowerCase();
    return allDresses.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.moodName.toLowerCase().includes(q) ||
        d.fabric.toLowerCase().includes(q) ||
        d.desc.toLowerCase().includes(q)
    );
  }, [allDresses, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#faf8f5] w-full max-w-2xl shadow-2xl border border-[#d8d3c9] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#e5e0d8] flex items-center gap-3">
          <Search size={18} className="text-[#8b7355]" />
          <input 
            type="text" 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dresses, moods, fabrics (e.g. linen, blazer, soft, lilac)..."
            className="flex-1 text-sm bg-transparent border-none outline-none font-sans text-[#2b2725] placeholder:text-gray-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-400 hover:text-black">
              <X size={16} />
            </button>
          )}
          <button onClick={onClose} className="text-xs uppercase tracking-wider text-gray-500 hover:text-black ml-2 font-semibold">
            Close
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-[#f4efe8] flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-gray-400 uppercase text-[9px] tracking-widest font-semibold">Popular:</span>
          {['Linen Wrap', 'Blazer Dress', 'Floral Organza', 'Tulle', 'Emerald Trench', 'Pleated'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-white px-2.5 py-1 text-gray-700 hover:border-[#8b7355] border border-gray-200 rounded-sm whitespace-nowrap cursor-pointer transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {filtered.length === 0 ? (
            <p className="text-center py-8 text-sm text-gray-500 font-serif italic">
              No matching pieces found for "{query}". Try searching by mood or fabric.
            </p>
          ) : (
            filtered.map((dress) => (
              <div 
                key={dress.id}
                onClick={() => {
                  onSelectDress(dress);
                  onClose();
                }}
                className="flex items-center gap-4 p-2 hover:bg-white transition-colors cursor-pointer border border-transparent hover:border-[#e5e0d8] group"
              >
                <div className="w-14 h-18 bg-gray-100 overflow-hidden shrink-0">
                  <img src={dress.image} alt={dress.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8b7355]">{dress.moodName}</span>
                    <span className="text-[10px] text-gray-400">•</span>
                    <span className="text-[10px] text-gray-500">{dress.fabric}</span>
                  </div>
                  <h4 className="font-serif text-sm text-[#2b2725] group-hover:text-[#8b7355] transition-colors">{dress.name}</h4>
                  <p className="text-xs font-semibold text-gray-800">{dress.price}</p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-[#8b7355] transition-colors mr-2" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
