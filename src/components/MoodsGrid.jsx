import { ArrowRight } from 'lucide-react';

export default function MoodsGrid() {
  const moods = [
    {
      name: 'BOLD',
      desc: 'Wear your\nconfidence.',
      images: [
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80',
        'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?w=600&q=80',
        'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80'
      ]
    },
    {
      name: 'WILD',
      desc: 'A little unexpected.\nA lot of you.',
      images: [
        'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=600&q=80',
        'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80',
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80'
      ]
    },
    {
      name: 'SOFT',
      desc: 'Let the details\nwhisper.',
      images: [
        'https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=600&q=80',
        'https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=600&q=80',
        'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&q=80'
      ]
    },
    {
      name: 'SHY',
      desc: 'Quiet presence.\nBeautifully\nexpressed.',
      images: [
        'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600&q=80',
        'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=600&q=80',
        'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=600&q=80'
      ]
    },
    {
      name: 'IN COMMAND',
      desc: 'A sharper\nkind of calm.',
      images: [
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
        'https://images.unsplash.com/photo-1434389670869-c8c7385477da?w=600&q=80',
        'https://images.unsplash.com/photo-1605901302636-6e11894d03e5?w=600&q=80'
      ]
    },
    {
      name: 'AT EASE',
      desc: 'Slow days.\nThoughtful style.',
      images: [
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
        'https://images.unsplash.com/photo-1589810635656-320c156f7e8f?w=600&q=80',
        'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=600&q=80'
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
