import { useState } from 'react';
import { X, Check, Scissors, Sparkles, Send, Ruler, ArrowRight, ArrowLeft } from 'lucide-react';
import { customizableDesigns } from '../data/fashionData';

export default function BespokeCustomizerModal({ initialDesignIndex = 0, onClose, onSubmitCustomOrder }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(initialDesignIndex);
  
  const design = customizableDesigns[selectedDesignIndex] || customizableDesigns[0];

  const [customOptions, setCustomOptions] = useState({
    neckline: 'Square Sweetheart',
    sleeves: 'Delicate Flutter Sleeves',
    length: 'Midi (Calf length)',
    color: { name: 'Champagne Silk', hex: '#e8dbbf', filter: 'none' },
    fabric: 'Italian Mulberry Silk Satin',
    size: 'S (Custom Tailored)',
    measurements: {
      height: '165 cm',
      bust: '84 cm',
      waist: '66 cm',
      notes: ''
    }
  });

  const colorPalette = [
    { name: 'Champagne Pearl', hex: '#ede6d6', filter: 'none' },
    { name: 'Lavender Mist', hex: '#d6c8e8', filter: 'hue-rotate(270deg) saturate(1.2)' },
    { name: 'Blush Peony', hex: '#f0ccd4', filter: 'hue-rotate(330deg) saturate(1.3)' },
    { name: 'Imperial Emerald', hex: '#265440', filter: 'hue-rotate(110deg) saturate(1.4)' },
    { name: 'Sunset Terracotta', hex: '#d96b52', filter: 'hue-rotate(350deg) saturate(1.4)' },
    { name: 'Midnight Sapphire', hex: '#1c2e4a', filter: 'brightness(0.5) hue-rotate(210deg)' },
    { name: 'Natural French Linen', hex: '#dfd8ca', filter: 'grayscale(0.6) brightness(1.05)' }
  ];

  const fabrics = [
    'Italian Mulberry Silk Satin',
    'French Floral Embroidered Organza',
    'Belgian Washed Flax Linen',
    'Fine Accordion Chiffon',
    'Tailored Suiting Crepe'
  ];

  const handleFinish = (e) => {
    e.preventDefault();
    onSubmitCustomOrder({
      designName: design.name,
      designNumber: design.number,
      ...customOptions,
      price: `$${design.basePrice + 25}`
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#faf8f5] w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-none shadow-2xl border border-[#d8d3c9] relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors cursor-pointer"
          aria-label="Close customizer"
        >
          <X size={18} />
        </button>

        {/* Left Side: Atelier Silhouette Live Preview */}
        <div className="w-full md:w-5/12 bg-[#ebe4da] p-6 flex flex-col justify-between relative overflow-hidden min-h-[380px] md:min-h-[580px]">
          <div className="relative z-10">
            <span className="bg-[#8b7355] text-white text-[9px] tracking-widest uppercase px-3 py-1 font-semibold inline-block mb-2">
              ATELIER BESPOKE STUDIO
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-[#2b2725]">
              {design.name}
            </h3>
            <p className="text-gray-600 text-xs font-serif italic">
              {design.mood} • Base Silhouette {design.number}
            </p>
          </div>

          {/* Garment Image with Live Custom Color Filter */}
          <div className="my-auto relative rounded-sm overflow-hidden shadow-lg border border-white/50 h-[320px] md:h-[400px]">
            <img 
              src="/images/customizer_base.jpg" 
              alt="Customizer silhouette on tailor dummy"
              style={{ filter: customOptions.color.filter }}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Subtle color glow */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-color opacity-35 transition-colors duration-500"
              style={{ backgroundColor: customOptions.color.hex }}
            />

            {/* Custom Specs Pills */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-xs text-white p-2.5 text-[10px] space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-300">Color:</span>
                <span className="font-semibold">{customOptions.color.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Length:</span>
                <span className="font-semibold">{customOptions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sleeves:</span>
                <span className="font-semibold">{customOptions.sleeves}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-center text-[10px] text-gray-500 italic font-serif">
            "Your favourite design. Made uniquely for you by Zahwa Akhtar."
          </div>
        </div>

        {/* Right Side: Step-by-Step Customization Flow */}
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Steps Progress Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
              {[
                { num: 1, label: 'Choose Design' },
                { num: 2, label: 'Fabric & Style' },
                { num: 3, label: 'Measurements' }
              ].map((step) => (
                <div 
                  key={step.num}
                  onClick={() => setCurrentStep(step.num)}
                  className={`flex items-center gap-2 cursor-pointer transition-colors ${currentStep === step.num ? 'text-[#8b7355] font-semibold' : 'text-gray-400'}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === step.num ? 'bg-[#8b7355] text-white' : currentStep > step.num ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {currentStep > step.num ? <Check size={10} /> : step.num}
                  </span>
                  <span className="text-xs tracking-wider uppercase hidden sm:inline">{step.label}</span>
                </div>
              ))}
            </div>

            {/* STEP 1: CHOOSE DESIGN */}
            {currentStep === 1 && (
              <div>
                <h4 className="font-serif text-lg text-[#2b2725] mb-1">Step 1: Select Your Base Silhouette</h4>
                <p className="text-xs text-gray-500 mb-4">Choose from the 6 signature atelier silhouettes created for the collection.</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {customizableDesigns.map((d, idx) => (
                    <div 
                      key={d.id}
                      onClick={() => setSelectedDesignIndex(idx)}
                      className={`relative p-2 border transition-all cursor-pointer bg-white group ${selectedDesignIndex === idx ? 'border-[#8b7355] ring-2 ring-[#8b7355]/30 shadow-md' : 'border-gray-200 hover:border-gray-400'}`}
                    >
                      <span className="absolute top-2 left-2 text-[10px] font-serif bg-white/90 px-1 py-0.5 z-10">
                        {d.number}
                      </span>
                      <div className="h-28 overflow-hidden mb-2 bg-gray-100">
                        <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <p className="font-serif text-xs text-[#2b2725] font-medium truncate">{d.name}</p>
                      <p className="text-[10px] text-gray-500">${d.basePrice}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: FABRIC & STYLE DETAILS */}
            {currentStep === 2 && (
              <div>
                <h4 className="font-serif text-lg text-[#2b2725] mb-1">Step 2: Choose Modern Fabric & Color</h4>
                <p className="text-xs text-gray-500 mb-4">Pick colorway, luxury fabric weave, neckline, and sleeves.</p>

                {/* Color Palette */}
                <div className="mb-4">
                  <label className="block text-[11px] tracking-widest uppercase font-semibold text-gray-700 mb-2">
                    Colorway: <span className="text-[#8b7355] font-normal">{customOptions.color.name}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colorPalette.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCustomOptions({ ...customOptions, color: c })}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${customOptions.color.name === c.name ? 'scale-115 border-[#8b7355] ring-2 ring-[#8b7355]/30 shadow' : 'border-gray-300 hover:scale-105'}`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {customOptions.color.name === c.name && (
                          <Check size={12} className={c.hex === '#ede6d6' ? 'text-black' : 'text-white'} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric Selection */}
                <div className="mb-4">
                  <label className="block text-[11px] tracking-widest uppercase font-semibold text-gray-700 mb-2">
                    Artisanal Fabric:
                  </label>
                  <select 
                    value={customOptions.fabric}
                    onChange={(e) => setCustomOptions({ ...customOptions, fabric: e.target.value })}
                    className="w-full p-2.5 text-xs bg-white border border-gray-300 rounded-none font-sans focus:outline-none focus:border-[#8b7355]"
                  >
                    {fabrics.map((f, i) => (
                      <option key={i} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                {/* Sleeves & Length */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase font-semibold text-gray-700 mb-2">
                      Sleeve Style:
                    </label>
                    <select
                      value={customOptions.sleeves}
                      onChange={(e) => setCustomOptions({ ...customOptions, sleeves: e.target.value })}
                      className="w-full p-2.5 text-xs bg-white border border-gray-300 rounded-none focus:border-[#8b7355]"
                    >
                      <option value="Sleeveless Minimalist">Sleeveless Minimalist</option>
                      <option value="Delicate Flutter Sleeves">Delicate Flutter Sleeves</option>
                      <option value="Romantic Organza Puff">Romantic Organza Puff</option>
                      <option value="Classic French Long Cuff">Classic French Long Cuff</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-widest uppercase font-semibold text-gray-700 mb-2">
                      Hemline Cut:
                    </label>
                    <select
                      value={customOptions.length}
                      onChange={(e) => setCustomOptions({ ...customOptions, length: e.target.value })}
                      className="w-full p-2.5 text-xs bg-white border border-gray-300 rounded-none focus:border-[#8b7355]"
                    >
                      <option value="Above Knee (Mini)">Above Knee (Mini)</option>
                      <option value="Midi (Calf length)">Midi (Calf length)</option>
                      <option value="Floor Length (Maxi Gown)">Floor Length (Maxi Gown)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: MEASUREMENTS & REQUEST */}
            {currentStep === 3 && (
              <div>
                <h4 className="font-serif text-lg text-[#2b2725] mb-1">Step 3: Size & Bespoke Measurements</h4>
                <p className="text-xs text-gray-500 mb-4">Provide your approximate sizing or exact measurements for a custom atelier fit.</p>

                {/* Standard Size */}
                <div className="mb-4">
                  <label className="block text-[11px] tracking-widest uppercase font-semibold text-gray-700 mb-2">
                    Standard Sizing Base:
                  </label>
                  <div className="flex gap-2">
                    {['XS', 'S', 'M', 'L', 'Custom Bespoke'].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setCustomOptions({ ...customOptions, size: sz })}
                        className={`py-1.5 px-3 text-xs border cursor-pointer transition-all ${customOptions.size === sz ? 'bg-[#2b2725] text-white border-[#2b2725]' : 'bg-white text-gray-700 border-gray-300'}`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Body Dimensions */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block text-[10px] uppercase text-gray-600 mb-1">Height</label>
                    <input 
                      type="text" 
                      value={customOptions.measurements.height}
                      onChange={(e) => setCustomOptions({
                        ...customOptions,
                        measurements: { ...customOptions.measurements, height: e.target.value }
                      })}
                      placeholder="e.g. 168 cm"
                      className="w-full p-2 text-xs border border-gray-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase text-gray-600 mb-1">Bust (cm)</label>
                    <input 
                      type="text" 
                      value={customOptions.measurements.bust}
                      onChange={(e) => setCustomOptions({
                        ...customOptions,
                        measurements: { ...customOptions.measurements, bust: e.target.value }
                      })}
                      placeholder="e.g. 84 cm"
                      className="w-full p-2 text-xs border border-gray-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase text-gray-600 mb-1">Waist (cm)</label>
                    <input 
                      type="text" 
                      value={customOptions.measurements.waist}
                      onChange={(e) => setCustomOptions({
                        ...customOptions,
                        measurements: { ...customOptions.measurements, waist: e.target.value }
                      })}
                      placeholder="e.g. 68 cm"
                      className="w-full p-2 text-xs border border-gray-300 bg-white"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-4">
                  <label className="block text-[10px] uppercase text-gray-600 mb-1">
                    Special Fitting Instructions or Occasion:
                  </label>
                  <textarea 
                    rows={2}
                    value={customOptions.measurements.notes}
                    onChange={(e) => setCustomOptions({
                      ...customOptions,
                      measurements: { ...customOptions.measurements, notes: e.target.value }
                    })}
                    placeholder="e.g. For a garden graduation ceremony, slightly looser waist preferred..."
                    className="w-full p-2 text-xs border border-gray-300 bg-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs uppercase tracking-wider text-gray-600 hover:text-black flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft size={14} /> Back
              </button>
            ) : <div />}

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Estimated Bespoke Total</span>
                <span className="font-serif text-lg text-[#2b2725] font-semibold">${design.basePrice + 25}</span>
              </div>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-[#8b7355] hover:bg-[#725e45] text-white px-6 py-2.5 text-xs tracking-widest uppercase flex items-center gap-2 transition-colors cursor-pointer"
                >
                  Continue <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinish}
                  className="bg-[#2b2725] hover:bg-black text-white px-6 py-2.5 text-xs tracking-widest uppercase flex items-center gap-2 transition-colors shadow-md cursor-pointer"
                >
                  <Send size={14} /> Send Request
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
