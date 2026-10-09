import { ArrowRight } from 'lucide-react';

export default function MoodsGrid() {
  const moods = [
    {
      name: 'BOLD',
      desc: 'Wear your\nconfidence.',
      images: [
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80',
        'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=400&q=80',
        'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=80'
      ]
    },
    {
      name: 'WILD',
      desc: 'A little unexpected.\nA lot of you.',
      images: [
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80',
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80'
      ]
    },
    {
      name: 'SOFT',
      desc: 'Let the details\nwhisper.',
      images: [
        'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=400&q=80',
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80'
      ]
    },
    {
      name: 'SHY',
      desc: 'Quiet presence.\nBeautifully\nexpressed.',
      images: [
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80',
        'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80'
      ]
    },
    {
      name: 'IN COMMAND',
      desc: 'A sharper\nkind of calm.',
      images: [
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&q=80',
        'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=400&q=80',
        'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80'
      ]
    },
    {
      name: 'AT EASE',
      desc: 'Slow days.\nThoughtful style.',
      images: [
        'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=400&q=80',
        'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&q=80',
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80'
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
