import React from 'react';
import { ShieldCheck, Wind, Droplets, ArrowRight, Check, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface RooflineOverviewPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (pref?: string) => void;
}

export const RooflineOverviewPage: React.FC<RooflineOverviewPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const rooflineCategories = [
    {
      id: 'fascia-upvc',
      title: 'UPVC Fascias & Bargeboards',
      subtitle: '18mm full replacement solid load-bearing boards. We strip away rotting wooden fascias completely for a lifetime of zero maintenance.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      route: 'fascia-upvc' as PageRoute,
      features: ['18mm Solid Full Replacement', 'Never Rot or Need Painting', 'Integrated Over-Fascia Vents']
    },
    {
      id: 'soffits-vented',
      title: 'Soffit Boards & Attic Ventilation',
      subtitle: 'Vented and hollow tongue-and-groove soffits providing continuous airflow to stop damp and roof timber rot.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      route: 'soffits-vented' as PageRoute,
      features: ['Continuous Loft Airflow', 'Insect Screen Barrier', 'LED Downlight Ready']
    },
    {
      id: 'guttering-services',
      title: 'High-Capacity Guttering & Downpipes',
      subtitle: 'Deep flow and high capacity storm drainage systems preventing overflow damage to brickwork and foundations.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      route: 'guttering-services' as PageRoute,
      features: ['Deep Flow High Volume', 'Expansion Joint Seals', 'Leaf Guard Protection']
    },
    {
      id: 'cladding-dry-verge',
      title: 'Dry Verge & Exterior UPVC Cladding',
      subtitle: 'Eliminate cracked mortar on roof gables with interlocking dry verge units, and refresh exterior walls with weather-tight cladding.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      route: 'cladding-dry-verge' as PageRoute,
      features: ['100% Mortar-Free Fix', 'Prevents Bird & Wasp Entry', 'Shiplap Wall Cladding']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Wind className="w-3.5 h-3.5" />
            <span>Complete Roofline & Storm Drainage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Fascias, Soffits & Guttering Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Protect your roof structure, banish rotting timber forever, and keep your attic dry with our 18mm full-replacement UPVC roofline packages.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustpilotBadge />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooflineCategories.map((item) => (
            <ServiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              route={item.route}
              features={item.features}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Full Replacement vs Capping Educational Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider">
              THE VORTEX DIFFERENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why We Always Full-Replace (Never Cap Over Rot)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cheap contractors often just "cap" thin plastic over existing rotten wooden fascia boards. This traps moisture inside, accelerating dry rot in your rafter feet until gutters collapse. At Vortex, we completely remove old timber, inspect and repair rafter ends, and install thick, structural 18mm boards designed to last for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto" />
              <h4 className="font-bold text-slate-900 text-sm">Solid 18mm Full Boards</h4>
              <p className="text-xs text-slate-500">Supports full gutter weight and tile overhang with stainless steel fixings.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <Wind className="w-8 h-8 text-blue-600 mx-auto" />
              <h4 className="font-bold text-slate-900 text-sm">Over-Fascia Ventilation</h4>
              <p className="text-xs text-slate-500">Concealed air strips eliminate attic condensation and damp ceiling spots.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <Droplets className="w-8 h-8 text-blue-600 mx-auto" />
              <h4 className="font-bold text-slate-900 text-sm">Deep Flow Storm Defense</h4>
              <p className="text-xs text-slate-500">Carries 50% more rainwater volume than standard half-round gutters.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Free Quote Banner */}
      <section className="bg-[#0B4BBE] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Get your roofline inspected free of charge</h3>
            <p className="text-blue-100 text-sm mt-1">We provide transparent quotes for complete fascias, soffits, and gutter replacements.</p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Fascia & Soffit')}
            className="bg-white text-[#0B4BBE] hover:bg-blue-50 font-extrabold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Get Free Roofline Quote
          </button>
        </div>
      </section>

    </div>
  );
};
