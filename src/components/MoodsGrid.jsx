import { ArrowRight } from 'lucide-react';

export default function MoodsGrid() {
  const moods = [
    {
      name: 'BOLD',
      desc: 'Wear your\nconfidence.',
      images: [
        'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?w=400&q=80',
        'https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=400&q=80',
        'https://images.unsplash.com/photo-1548816658-00dce39c438f?w=400&q=80'
      ]
    },
    {
      name: 'WILD',
      desc: 'A little unexpected.\nA lot of you.',
      images: [
        'https://images.unsplash.com/photo-1444312645910-faa97318aa11?w=400&q=80',
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&q=80',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80'
      ]
    },
    {
      name: 'SOFT',
      desc: 'Let the details\nwhisper.',
      images: [
        'https://images.unsplash.com/photo-1528659556816-72f5d0f62293?w=400&q=80',
        'https://images.unsplash.com/photo-1496309732348-3627f3f040ee?w=400&q=80',
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80'
      ]
    },
    {
      name: 'SHY',
      desc: 'Quiet presence.\nBeautifully\nexpressed.',
      images: [
        'https://images.unsplash.com/photo-1508020963102-c6c723be5764?w=400&q=80',
        'https://images.unsplash.com/photo-1440342359743-84facd8dda79?w=400&q=80',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80'
      ]
    },
    {
      name: 'IN COMMAND',
      desc: 'A sharper\nkind of calm.',
      images: [
        'https://images.unsplash.com/photo-1505820980598-9eb41262d0dd?w=400&q=80',
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80',
        'https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?w=400&q=80'
      ]
    },
    {
      name: 'AT EASE',
      desc: 'Slow days.\nThoughtful style.',
      images: [
        'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=400&q=80',
        'https://images.unsplash.com/photo-1513553404607-988bf2703777?w=400&q=80',
        'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&q=80'
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
                <div key={i} className="flex-1 bg-[#e8e4db] overflow-hidden">
                  <img src={img} alt={`${mood.name} detail ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
