import React, { useState } from 'react';
import { Palette, Check, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface InteractiveVisualizerProps {
  onOpenQuoteModal: (productPref?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const InteractiveVisualizer: React.FC<InteractiveVisualizerProps> = ({
  onOpenQuoteModal,
  onNavigate,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<'windows' | 'composite-door' | 'bifolds'>('composite-door');
  const [selectedColor, setSelectedColor] = useState('Anthracite Grey');

  const products = [
    {
      id: 'composite-door' as const,
      name: 'Composite Front Door',
      route: 'doors-composite' as PageRoute,
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      specs: '48mm solid core, Ultion 3* diamond cylinder, Secured by Design',
      uValue: '0.9 W/m²K'
    },
    {
      id: 'windows' as const,
      name: 'Flush Sash & Casement Windows',
      route: 'windows-flush-sash' as PageRoute,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      specs: 'Multi-chambered A++ profile, triple seal weatherproofing, argon filled',
      uValue: '0.8 W/m²K'
    },
    {
      id: 'bifolds' as const,
      name: 'Aluminium Bifolding Doors',
      route: 'doors-bifold' as PageRoute,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      specs: 'Ultra-slim 108mm sightlines, stainless steel quad rollers, sunken flush track',
      uValue: '1.2 W/m²K'
    }
  ];

  const colors = [
    { name: 'Anthracite Grey', hex: '#374151', ral: 'RAL 7016', popular: true },
    { name: 'Chartwell Green', hex: '#84A98C', ral: 'Heritage Green', popular: true },
    { name: 'Agate Grey', hex: '#B5BAA7', ral: 'RAL 7038', popular: true },
    { name: 'Pure White', hex: '#F9FAFB', ral: 'RAL 9016', popular: false },
    { name: 'Golden Oak', hex: '#B45309', ral: 'Natural Timber', popular: false },
    { name: 'Jet Black Ash', hex: '#111827', ral: 'RAL 9005', popular: true },
    { name: 'Midnight Navy', hex: '#1E3A8A', ral: 'RAL 5003', popular: false },
  ];

  const currentProductData = products.find(p => p.id === selectedProduct)!;

  return (
    <div id="interactive-product-visualizer" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Visualizer</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Design & Preview Your Ideal Finish
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Choose your product style and explore bespoke architectural foil & RAL powder coat finishes.
          </p>
        </div>

        {/* Product selector buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedProduct === p.id 
                  ? 'bg-[#0B4BBE] text-white shadow-xs' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
        {/* Left: Image with dynamic color badge badge overlay */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-lg bg-slate-900 h-80 sm:h-96">
          <img 
            src={currentProductData.image} 
            alt={currentProductData.name}
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
          
          {/* Active Color Overlay Tag */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div 
                className="w-7 h-7 rounded-full shadow-inner border border-slate-300 flex-shrink-0"
                style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.hex || '#374151' }}
              />
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Selected Finish</p>
                <p className="text-sm sm:text-base font-extrabold text-slate-900">{selectedColor}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                U-Value {currentProductData.uValue}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Color Swatches & Specifications */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              1. Choose Architectural Color Foil
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                    selectedColor === c.name 
                      ? 'border-blue-600 ring-2 ring-blue-600/20 bg-blue-50/50' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span 
                    className="w-5 h-5 rounded-full border border-slate-300/80 flex-shrink-0 shadow-2xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{c.name}</p>
                    <p className="text-[10px] text-slate-500">{c.ral}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Key specs */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
            <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              Standard Specifications
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentProductData.specs}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenQuoteModal(`${currentProductData.name} in ${selectedColor}`)}
              className="flex-1 bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Get Free Quote for This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate(currentProductData.route)}
              className="px-4 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm text-center transition-colors cursor-pointer"
            >
              View Full Specs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
