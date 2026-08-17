import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Phone, ArrowRight, Heart, Sparkles, MapPin, Clock } from 'lucide-react';
import { PageRoute } from '../types';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Serving Yorkshire Since 2002</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            22+ Years of Trusted Craftsmanship
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Vortex Windows and Doors was founded on a simple promise: exceptional British-made glazing and rooflines, installed by friendly local tradesmen without pushy sales gimmicks.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustpilotBadge />
          </div>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
              OUR DEWSBURY HERITAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Proudly Local, Uncompromising on Quality
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Based right here in Dewsbury, West Yorkshire, Vortex has grown over two decades through word-of-mouth recommendations and repeat customer trust.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              We know Yorkshire homes inside and out—from Victorian stone terraces requiring authentic sliding sash profiles to modern new-builds wanting razor-slim bifold doors and composite entrances.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <p className="text-3xl font-black text-blue-700">22+</p>
                <p className="text-xs font-bold text-slate-600 mt-1">Years in Continuous Operation</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <p className="text-3xl font-black text-blue-700">4,500+</p>
                <p className="text-xs font-bold text-slate-600 mt-1">Homes Upgraded Across Yorkshire</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-96">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                alt="Vortex Windows craftsmanship"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="font-extrabold text-lg">In-House Certified Installation Teams</p>
                <p className="text-xs text-slate-300">We never subcontract to unqualified third parties.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Vortex 5-Step Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 block mb-1">
              SEAMLESS FROM START TO FINISH
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The Vortex 5-Step Experience
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              How we ensure a smooth, stress-free upgrade for every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                desc: 'Friendly chat and no-obligation written quote. No pushy sales tactics.'
              },
              {
                step: '02',
                title: 'Laser Survey',
                desc: 'Senior surveyor visits to take millimetre-accurate manufacturing measurements.'
              },
              {
                step: '03',
                title: 'Custom Manufacture',
                desc: 'Your bespoke frames and doors are precision engineered to British Standards.'
              },
              {
                step: '04',
                title: 'Expert Clean Install',
                desc: 'Our certified fitters install with dust sheets and leave your home spotless.'
              },
              {
                step: '05',
                title: '10-Yr Guarantee',
                desc: 'FENSA certificate and insurance-backed warranty issued directly to you.'
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2 relative">
                <span className="text-3xl font-black text-blue-200">{s.step}</span>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 text-white p-7 rounded-2xl space-y-3">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
            <h4 className="text-xl font-bold">FENSA Registered</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Strictly compliant with all UK Building Regulations, energy efficiency ratings, and thermal conservation laws.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-7 rounded-2xl space-y-3">
            <Award className="w-10 h-10 text-amber-400" />
            <h4 className="text-xl font-bold">10-Year Insurance Backing</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every window, composite door, and roofline installation is fully covered under an independent insurance-backed guarantee.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-7 rounded-2xl space-y-3">
            <Heart className="w-10 h-10 text-red-400" />
            <h4 className="text-xl font-bold">Made in Great Britain</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Supporting British manufacturing and engineering with high-grade profiles built specifically for British weather.
            </p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#0B4BBE] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to meet our friendly team?</h3>
            <p className="text-blue-100 text-sm mt-1">Book your free survey or visit our showroom on Halifax Road in Dewsbury.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="bg-white text-[#0B4BBE] hover:bg-blue-50 font-extrabold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Get Free Survey Quote
          </button>
        </div>
      </section>

    </div>
  );
};
