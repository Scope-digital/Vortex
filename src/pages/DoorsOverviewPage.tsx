import React from 'react';
import { ShieldCheck, Lock, ArrowRight, Layers, Sparkles, Check } from 'lucide-react';
import { PageRoute } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface DoorsOverviewPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (pref?: string) => void;
}

export const DoorsOverviewPage: React.FC<DoorsOverviewPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const doorCategories = [
    {
      id: 'composite-doors',
      title: 'Composite Entrance Doors',
      subtitle: 'High-density 48mm solid core, Ultion 3-star diamond anti-snap locks, and over 35 classic and contemporary styles.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      route: 'doors-composite' as PageRoute,
      features: ['48mm Solid Core', 'Ultion 3* Lockdown', '35+ Designer Styles']
    },
    {
      id: 'bifold-doors',
      title: 'Panoramic Bifold Doors',
      subtitle: 'Ultra-slim aluminium frames with sunken flush floor thresholds opening up whole garden walls for indoor-outdoor living.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      route: 'doors-bifold' as PageRoute,
      features: ['108mm Slim Sightlines', 'Quad Stainless Rollers', 'Up to 7 Panes']
    },
    {
      id: 'french-doors',
      title: 'Classic French Doors',
      subtitle: 'Charming double-opening patio doors with master and slave high-security locking and unrestricted garden access.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      route: 'doors-french' as PageRoute,
      features: ['Double Leaf Opening', 'Inward / Outward Swing', 'Multi-Point Security']
    },
    {
      id: 'patio-doors',
      title: 'Inline Sliding Patio Doors',
      subtitle: 'Large panoramic glass panels sliding along internal tracks without taking up patio or interior floor space.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      route: 'doors-patio' as PageRoute,
      features: ['Smooth Glide Rollers', 'Zero Swing Space Needed', '2, 3, 4 Panes']
    },
    {
      id: 'upvc-doors',
      title: 'UPVC Front & Back Doors',
      subtitle: 'Durable, affordable steel-reinforced entrance doors with decorative insulated panels and high weather resistance.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      route: 'doors-upvc' as PageRoute,
      features: ['Steel Reinforced', 'Great Value', 'Cat Flap / Obscure Glass']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>High-Security Front & Patio Doors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Bespoke Entrance & Patio Doors
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Combining world-class security cylinders, heavy-duty composite cores, and effortless sliding bifold engineering.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustpilotBadge />
          </div>
        </div>
      </section>

      {/* Grid of Door Styles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doorCategories.map((door) => (
            <ServiceCard
              key={door.id}
              id={door.id}
              title={door.title}
              subtitle={door.subtitle}
              image={door.image}
              route={door.route}
              features={door.features}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Security Feature Showcase */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider">
              ULTION 3-STAR LOCKDOWN SECURITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The Most Secure Lock on the Market
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              When an intruder attacks an Ultion cylinder, a hidden molybdenum core triggers Lockdown Mode, deploying an impenetrable steel firing pin that prevents the door from opening—even if the exterior lock is snapped in half.
            </p>
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>£2,000 Anti-Snap Homeowner Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Sold Secure Diamond & Police Preferred Specification</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 text-white text-center space-y-4 border border-slate-800">
            <Lock className="w-12 h-12 text-amber-400 mx-auto" />
            <h4 className="text-xl font-bold">Standard on all Vortex Composite Doors</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Never compromise on your family’s security. Explore our full range of 35+ door styles and bespoke glass patterns.
            </p>
            <button
              onClick={() => onOpenQuoteModal('Composite Door')}
              className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Design Your Composite Door</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

      {/* Free Quote Banner */}
      <section className="bg-[#0B4BBE] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to upgrade your front or back door?</h3>
            <p className="text-blue-100 text-sm mt-1">Get an instant free quote and browse our 30+ colors in our Dewsbury showroom.</p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Doors')}
            className="bg-white text-[#0B4BBE] hover:bg-blue-50 font-extrabold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Get Free Door Quote
          </button>
        </div>
      </section>

    </div>
  );
};
