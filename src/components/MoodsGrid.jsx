import { ArrowRight } from 'lucide-react';

export default function MoodsGrid() {
  const moods = [
    {
      name: 'BOLD',
      desc: 'Wear your\nconfidence.',
      images: [
        '/images/img21.jpg',
        '/images/img22.jpg',
        '/images/img23.jpg'
      ]
    },
    {
      name: 'WILD',
      desc: 'A little unexpected.\nA lot of you.',
      images: [
        '/images/img24.jpg',
        '/images/img25.jpg',
        '/images/img26.jpg'
      ]
    },
    {
      name: 'SOFT',
      desc: 'Let the details\nwhisper.',
      images: [
        '/images/img27.jpg',
        '/images/img28.jpg',
        '/images/img29.jpg'
      ]
    },
    {
      name: 'SHY',
      desc: 'Quiet presence.\nBeautifully\nexpressed.',
      images: [
        '/images/img30.jpg',
        '/images/img31.jpg',
        '/images/img32.jpg'
      ]
    },
    {
      name: 'IN COMMAND',
      desc: 'A sharper\nkind of calm.',
      images: [
        '/images/img33.jpg',
        '/images/img34.jpg',
        '/images/img35.jpg'
      ]
    },
    {
      name: 'AT EASE',
      desc: 'Slow days.\nThoughtful style.',
      images: [
        '/images/img36.jpg',
        '/images/img37.jpg',
        '/images/img38.jpg'
      ]
    }
  ];

  return (
    <section className="px-4 md:px-8 py-8 md:py-12">
      <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
        <h2 className="font-serif text-2xl md:text-3xl text-center">what's ur mood</h2>
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {moods.map((mood, idx) => (
          <div key={idx} className="bg-[#f3efea] p-4 flex flex-row items-center shadow-sm gap-2">
            <div className="w-1/3 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-serif text-lg lg:text-xl mb-1">{mood.name}</h3>
                <p className="text-gray-600 text-[10px] lg:text-xs whitespace-pre-line mb-4 font-serif italic leading-tight">{mood.desc}</p>
              </div>
              <a href="#" className="text-[8px] lg:text-[9px] tracking-widest uppercase flex items-center gap-1 hover:text-brand-gold transition-colors">
                VIEW ALL <ArrowRight size={12} />
              </a>
            </div>
            
            <div className="w-2/3 h-24 lg:h-32 flex gap-1">
              {mood.images.map((img, i) => (
                <div key={i} className="flex-1 bg-gray-200">
                  <img src={img} alt={`${mood.name} style ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
