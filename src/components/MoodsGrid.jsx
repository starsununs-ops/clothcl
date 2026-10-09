import { ArrowRight } from 'lucide-react';

export default function MoodsGrid() {
  const moods = [
    {
      name: 'BOLD',
      desc: 'Wear your\nconfidence.',
      images: [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
        'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&q=80',
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80'
      ]
    },
    {
      name: 'WILD',
      desc: 'A little unexpected.\nA lot of you.',
      images: [
        'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?w=600&q=80',
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80'
      ]
    },
    {
      name: 'SOFT',
      desc: 'Let the details\nwhisper.',
      images: [
        'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=600&q=80',
        'https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=600&q=80',
        'https://images.unsplash.com/photo-1589810635656-320c156f7e8f?w=600&q=80'
      ]
    },
    {
      name: 'SHY',
      desc: 'Quiet presence.\nBeautifully\nexpressed.',
      images: [
        'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&q=80',
        'https://images.unsplash.com/photo-1434389670869-c8c7385477da?w=600&q=80',
        'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=600&q=80'
      ]
    },
    {
      name: 'IN COMMAND',
      desc: 'A sharper\nkind of calm.',
      images: [
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
        'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?w=600&q=80',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80'
      ]
    },
    {
      name: 'AT EASE',
      desc: 'Slow days.\nThoughtful style.',
      images: [
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
        'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=600&q=80'
      ]
    }
  ];

  return (
    <section className="px-4 md:px-8 py-12 md:py-16 bg-[#fdfcfb]">
      <div className="flex items-center justify-center gap-6 mb-10 md:mb-16">
        <div className="h-px bg-[#d8d3c9] w-16 md:w-40"></div>
        <h2 className="font-serif text-3xl md:text-4xl text-center text-[#2b2725]">what's ur mood</h2>
        <div className="h-px bg-[#d8d3c9] w-16 md:w-40"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {moods.map((mood, idx) => (
          <div key={idx} className="bg-white p-5 flex flex-row items-center shadow-sm hover:shadow-xl transition-all duration-300 gap-4 cursor-pointer group border border-[#f3efea] rounded-sm">
            <div className="w-1/3 flex flex-col justify-between h-full py-2">
              <div>
                <h3 className="font-serif text-xl lg:text-2xl mb-2 text-[#2b2725] group-hover:text-[#8b7355] transition-colors">{mood.name}</h3>
                <p className="text-gray-500 text-[11px] lg:text-xs whitespace-pre-line mb-6 font-serif italic leading-relaxed">{mood.desc}</p>
              </div>
              <a href="#" className="text-[10px] tracking-widest uppercase flex items-center gap-2 hover:text-brand-gold transition-colors text-[#2b2725] font-semibold">
                VIEW ALL <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="w-2/3 h-32 lg:h-40 flex gap-2">
              {mood.images.map((img, i) => (
                <div key={i} className="flex-1 overflow-hidden rounded-sm bg-[#f8f6f0]">
                  <img src={img} alt={`${mood.name} style ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
