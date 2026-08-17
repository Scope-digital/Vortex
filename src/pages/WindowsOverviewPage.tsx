import React from 'react';
import { ShieldCheck, Zap, ArrowRight, Layers, Award, Sparkles, Check } from 'lucide-react';
import { PageRoute } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface WindowsOverviewPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (pref?: string) => void;
}

export const WindowsOverviewPage: React.FC<WindowsOverviewPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const windowCategories = [
    {
      id: 'casement',
      title: 'UPVC Casement Windows',
      subtitle: 'The UK’s most popular window style. Multi-chambered profiles, A++ energy rating, and multi-point shootbolt locking.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      route: 'windows-casement' as PageRoute,
      features: ['A++ Energy Efficiency', 'Top / Side Hung Options', 'Argon Filled Double/Triple']
    },
    {
      id: 'flush-sash',
      title: 'Flush Sash Windows',
      subtitle: 'Sits completely flush inside the outer frame. Combines traditional timber joinery looks with modern high-performance UPVC.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      route: 'windows-flush-sash' as PageRoute,
      features: ['Timber-look Joints', 'Heritage Approved', 'Agate & Anthracite Foils']
    },
    {
      id: 'sliding-sash',
      title: 'Sliding Sash Windows',
      subtitle: 'Authentic Georgian and Victorian vertical sliding sash with modern spiral balances and inward tilt-to-clean capability.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      route: 'windows-sliding-sash' as PageRoute,
      features: ['Smooth Torsion Balances', 'Run-through Sash Horns', 'Tilt-in Easy Cleaning']
    },
    {
      id: 'tilt-turn',
      title: 'Tilt & Turn Windows',
      subtitle: 'European dual-action engineering: tilt inward from the top for secure ventilation, or swing open 90° for easy cleaning.',
      image: 'https://images.unsplash.com/photo-1502005229762-ee1b2b93e007?auto=format&fit=crop&w=800&q=80',
      route: 'windows-tilt-turn' as PageRoute,
      features: ['Dual Opening Modes', 'Fire Egress Compliant', 'Acoustic Soundproofing']
    },
    {
      id: 'bay-bow',
      title: 'Bay & Bow Windows',
      subtitle: 'Project outward from external walls to capture panoramic natural light and expand your interior living area.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      route: 'windows-bay-bow' as PageRoute,
      features: ['Structural Bay Posts', 'Insulated Base & Canopy', '3, 4, 5 Facet Options']
    },
    {
      id: 'aluminium',
      title: 'Slimline Aluminium Windows',
      subtitle: 'Ultra-slim 38mm architectural sightlines, expansive glass areas, and marine-grade powder coating in any RAL colour.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      route: 'windows-aluminium' as PageRoute,
      features: ['Ultra-Slim Sightlines', 'Polyamide Thermal Break', '200+ RAL Colours']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Energy Rated A++ UPVC & Aluminium</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            High-Performance Window Systems
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Manufactured to the highest British standards. Engineered for maximum energy efficiency, exceptional security, and timeless curb appeal.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustpilotBadge />
          </div>
        </div>
      </section>

      {/* Grid of Window Styles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {windowCategories.map((win) => (
            <ServiceCard
              key={win.id}
              id={win.id}
              title={win.title}
              subtitle={win.subtitle}
              image={win.image}
              route={win.route}
              features={win.features}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
            Compare Window Features & Ratings
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Window Style</th>
                  <th className="py-3 px-4">Energy Rating</th>
                  <th className="py-3 px-4">Security Rating</th>
                  <th className="py-3 px-4">Maintenance</th>
                  <th className="py-3 px-4">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Casement Windows</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">A++ (U: 0.8)</td>
                  <td className="py-3.5 px-4 font-semibold">PAS 24 / Secured by Design</td>
                  <td className="py-3.5 px-4">Zero Maintenance</td>
                  <td className="py-3.5 px-4 text-slate-500">Everyday British homes</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Flush Sash</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">A+ (U: 1.1)</td>
                  <td className="py-3.5 px-4 font-semibold">PAS 24 / Secured by Design</td>
                  <td className="py-3.5 px-4">Zero Maintenance</td>
                  <td className="py-3.5 px-4 text-slate-500">Cottages & Modern Minimalist</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Sliding Sash</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">A-Rated (U: 1.3)</td>
                  <td className="py-3.5 px-4 font-semibold">Heritage Key Cam Locks</td>
                  <td className="py-3.5 px-4">Wipe Clean Tilt</td>
                  <td className="py-3.5 px-4 text-slate-500">Victorian & Georgian period homes</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Tilt & Turn</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">A++ (U: 0.8)</td>
                  <td className="py-3.5 px-4 font-semibold">Perimeter Multi-Lock</td>
                  <td className="py-3.5 px-4">Zero Maintenance</td>
                  <td className="py-3.5 px-4 text-slate-500">Upper floors & fire escape access</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Aluminium</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">A-Rated (U: 1.1)</td>
                  <td className="py-3.5 px-4 font-semibold">Heavy Duty Multi-Point</td>
                  <td className="py-3.5 px-4">40+ Year Lifespan</td>
                  <td className="py-3.5 px-4 text-slate-500">Contemporary grand designs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* Free Quote Banner */}
      <section className="bg-[#0B4BBE] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Need assistance choosing the right window style?</h3>
            <p className="text-blue-100 text-sm mt-1">Our certified Dewsbury surveyors provide free in-home measuring and expert guidance.</p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Windows')}
            className="bg-white text-[#0B4BBE] hover:bg-blue-50 font-extrabold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Get Free Window Quote
          </button>
        </div>
      </section>

    </div>
  );
};
