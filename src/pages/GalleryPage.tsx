import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { galleryProjects } from '../data/galleryData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (pref?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'windows' | 'doors' | 'fascia-soffit' | 'bifolds'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? galleryProjects 
    : galleryProjects.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Local Transformations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Workmanship & Project Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore recent window, door, and roofline installations carried out by our master craftsmen across Dewsbury and West Yorkshire.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustpilotBadge />
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        
        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'windows', label: 'UPVC Windows' },
            { id: 'doors', label: 'Composite Doors' },
            { id: 'bifolds', label: 'Bifold Doors' },
            { id: 'fascia-soffit', label: 'Fascia & Guttering' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#0B4BBE] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Before & After Interactive Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="space-y-4">
              <BeforeAfterSlider
                title={proj.title}
                subtitle={`${proj.location} • Completed ${proj.completionDate}`}
                beforeImage={proj.beforeImage}
                afterImage={proj.afterImage}
              />
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">
                    <span className="text-slate-400">Spec:</span> {proj.productInstalled}
                  </span>
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                    {proj.energyRating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#2D1A60] to-[#0B4BBE] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Want Similar Results for Your Home?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a no-obligation visit from our Dewsbury surveyor. We’ll measure up and give you a fixed quote valid for 12 months.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-white text-[#2D1A60] hover:bg-slate-100 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>GET A FREE NO-OBLIGATION QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
