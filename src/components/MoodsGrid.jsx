import { ArrowRight } from 'lucide-react';

export default function MoodsGrid() {
  const moods = [
    {
      name: 'BOLD',
      desc: 'Wear your\nconfidence.',
      image: '/images/optimized/mood_bold_dresses.jpg'
    },
    {
      name: 'WILD',
      desc: 'A little unexpected.\nA lot of you.',
      image: '/images/optimized/mood_wild_dresses.jpg'
    },
    {
      name: 'SOFT',
      desc: 'Let the details\nwhisper.',
      image: '/images/optimized/mood_soft_dresses.jpg'
    },
    {
      name: 'SHY',
      desc: 'Quiet presence.\nBeautifully\nexpressed.',
      image: '/images/optimized/mood_shy_dresses.jpg'
    },
    {
      name: 'IN COMMAND',
      desc: 'A sharper\nkind of calm.',
      image: '/images/optimized/mood_in_command_dresses.jpg'
    },
    {
      name: 'AT EASE',
      desc: 'Slow days.\nThoughtful style.',
      image: '/images/optimized/mood_at_ease_dresses.jpg'
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
            
            <div className="w-2/3 h-32 lg:h-40 flex overflow-hidden rounded-sm bg-[#f8f6f0]">
              <img src={mood.image} alt={`${mood.name} styles`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
