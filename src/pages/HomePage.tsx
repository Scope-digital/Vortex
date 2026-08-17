import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  UserCheck, 
  Settings, 
  Home, 
  Check, 
  Sparkles, 
  Phone, 
  Award, 
  Zap, 
  Layers, 
  Lock, 
  Clock, 
  MapPin,
  ChevronRight,
  Users,
  CheckCircle2
} from 'lucide-react';
import { PageRoute } from '../types';
import { TrustpilotBadge } from '../components/TrustpilotBadge';
import { ServiceCard } from '../components/ServiceCard';
import { InteractiveVisualizer } from '../components/InteractiveVisualizer';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { testimonialsList } from '../data/galleryData';
import { useContent } from '../context/ContentContext';
import { EditableText } from '../components/admin/EditableText';
import { EditableImage } from '../components/admin/EditableImage';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (pref?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const { content } = useContent();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* HERO SECTION MATCHING SCREENSHOT */}
      <section 
        id="hero-section" 
        className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-28"
      >
        {/* Subtle background ambient mesh */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Eyebrow matching screenshot */}
              <div className="inline-flex items-center">
                <EditableText
                  fieldKey="heroEyebrow"
                  label="Hero Eyebrow"
                  value={content.heroEyebrow}
                  as="span"
                  className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7C3AED]"
                />
              </div>

              {/* Main Headline */}
              <h1 
                id="hero-headline"
                className="text-4xl sm:text-5xl lg:text-[58px] font-black text-slate-900 leading-[1.12] tracking-tight"
              >
                <EditableText
                  fieldKey="heroTitle"
                  label="Hero Title Headline"
                  value={content.heroTitle}
                  as="span"
                  multiline
                />
              </h1>

              {/* Subtitle matching screenshot text */}
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                <EditableText
                  fieldKey="heroTagline"
                  label="Hero Tagline / Subtitle"
                  value={content.heroTagline}
                  as="p"
                  multiline
                />
              </div>

              {/* Action Buttons matching screenshot */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  id="hero-get-quote-btn"
                  onClick={() => onOpenQuoteModal()}
                  className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <EditableText
                    fieldKey="heroCtaPrimary"
                    label="Primary Button Text"
                    value={content.heroCtaPrimary}
                    as="span"
                  />
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-services-btn"
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-[#0B4BBE] hover:bg-blue-50 text-[#0B4BBE] font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-lg transition-all duration-200 text-center cursor-pointer"
                >
                  <EditableText
                    fieldKey="heroCtaSecondary"
                    label="Secondary Button Text"
                    value={content.heroCtaSecondary}
                    as="span"
                  />
                </button>
              </div>

              {/* Social Proof matching screenshot Trustpilot badge */}
              <div className="pt-3">
                <TrustpilotBadge />
              </div>

            </div>

            {/* Right Hero Image matching screenshot */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
                
                <EditableImage
                  fieldKey="heroImage"
                  label="Hero Main Photo"
                  src={content.heroImage}
                  alt="Modern Home with Anthracite UPVC Windows and Contemporary Front Door"
                  className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge over image */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">10-Year Guarantee</p>
                    <p className="text-[11px] text-slate-500">Insurance Backed & FENSA</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-[#2D1A60]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                  Dewsbury & West Yorkshire
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Wavy bottom decorative gradient wave */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-indigo-100/50 via-purple-50/30 to-transparent pointer-events-none" />
      </section>

      {/* 4 PILLARS VALUE PROPOSITION BAR */}
      <section 
        id="value-pillars-bar"
        className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            {/* 1. QUALITY GUARANTEED */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3 first:pt-0 first:pl-0">
              <div className="w-12 h-12 rounded-xl border border-blue-200 bg-blue-50/80 flex items-center justify-center text-blue-700 flex-shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight uppercase">
                  QUALITY GUARANTEED
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                  We use high quality materials for long lasting results.
                </p>
              </div>
            </div>

            {/* 2. 22 YEARS EXPERIENCE */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-xl border border-blue-200 bg-blue-50/80 flex items-center justify-center text-blue-700 flex-shrink-0">
                <UserCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight uppercase">
                  22 YEARS EXPERIENCE
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                  Over 22 years experience in the trade you can trust.
                </p>
              </div>
            </div>

            {/* 3. PROFESSIONAL SERVICE */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-xl border border-blue-200 bg-blue-50/80 flex items-center justify-center text-blue-700 flex-shrink-0">
                <Settings className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight uppercase">
                  PROFESSIONAL SERVICE
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                  From start to finish, a reliable and friendly service.
                </p>
              </div>
            </div>

            {/* 4. COMPLETE SOLUTIONS */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-xl border border-blue-200 bg-blue-50/80 flex items-center justify-center text-blue-700 flex-shrink-0">
                <Home className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight uppercase">
                  COMPLETE SOLUTIONS
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                  Windows, doors, fascia, soffit & guttering – all covered.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "OUR SERVICES" SECTION */}
      <section 
        id="services-section"
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span 
            id="services-eyebrow"
            className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7C3AED] block mb-2"
          >
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Offer a Wide Range of Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Every installation is bespoke, manufactured to exacting standards and installed with meticulous care.
          </p>
        </div>

        {/* 4 Core Service Cards matching screenshot row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: UPVC WINDOWS */}
          <ServiceCard
            id="upvc-windows"
            title="UPVC WINDOWS"
            subtitle="Casement, flush sash, sliding sash, tilt & turn, and bay windows with A++ energy rating."
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            route="windows"
            features={['A++ Energy Efficiency', 'Multi-Point Security Locks']}
            onNavigate={onNavigate}
          />

          {/* Card 2: COMPOSITE DOORS */}
          <ServiceCard
            id="composite-doors"
            title="COMPOSITE DOORS"
            subtitle="High-density 48mm solid core, Ultion 3* diamond cylinder, and over 35 designer styles."
            image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
            route="doors-composite"
            features={['Ultion 3-Star Lockdown', '30+ Custom RAL Colours']}
            onNavigate={onNavigate}
          />

          {/* Card 3: FASCIA & SOFFIT */}
          <ServiceCard
            id="fascia-soffit"
            title="FASCIA & SOFFIT"
            subtitle="18mm solid full replacement UPVC boards, vented soffits, and zero painting required."
            image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
            route="fascia-upvc"
            features={['18mm Full Replacement', 'Continuous Loft Airflow']}
            onNavigate={onNavigate}
          />

          {/* Card 4: GUTTERING SERVICES */}
          <ServiceCard
            id="guttering-services"
            title="GUTTERING SERVICES"
            subtitle="Deep flow high-capacity rainwater systems, leaf guards, and seamless downpipes."
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            route="guttering-services"
            features={['Deep Flow Storm Defense', 'Zero Leaks Expansion Joints']}
            onNavigate={onNavigate}
          />

        </div>

        {/* Secondary Extended Services Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div 
            onClick={() => onNavigate('doors-bifold')}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                  Aluminium Bifold Doors
                </h4>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Ultra-slim 108mm sightlines and sunken flush thresholds opening up whole garden walls.
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('windows-sliding-sash')}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                  Heritage Sliding Sash
                </h4>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Authentic Victorian styling with modern spiral torsion balances and tilt-in cleaning.
              </p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('cladding-dry-verge')}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                  Dry Verge & UPVC Cladding
                </h4>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Eliminate cracked gable mortar and protect walls with interlocking weather-tight cladding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE VISUALIZER SECTION */}
      <section className="py-12 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveVisualizer 
            onOpenQuoteModal={onOpenQuoteModal}
            onNavigate={onNavigate}
          />
        </div>
      </section>

      {/* BEFORE / AFTER TRANSFORMATION SHOWCASE */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7C3AED]">
              REAL YORKSHIRE TRANSFORMATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              See the Difference 22 Years of Craftsmanship Makes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Old, peeling timber frames and single-pane glazing don’t just look tired—they cost hundreds in wasted heating. Our modern UPVC and Composite systems deliver a night-and-day visual and thermal upgrade.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">✓</div>
                <span className="text-sm font-bold text-slate-800">Cut heat loss by up to 40% immediately</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">✓</div>
                <span className="text-sm font-bold text-slate-800">Eliminate outside traffic noise and drafts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">✓</div>
                <span className="text-sm font-bold text-slate-800">Substantially increases home curb value</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('gallery')}
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Full Project Gallery</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BeforeAfterSlider
              title="Full House Window & Front Door Renovation"
              subtitle="Recent project in Dewsbury, WF12 - Rotting timber replaced with Anthracite Grey Flush Sash"
              beforeImage="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE VORTEX SECTION */}
      <section className="py-16 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-indigo-400 block mb-2">
              WHY VORTEX WINDOWS & DOORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Vortex Quality Guarantee
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              We treat every home as if it were our own. No high-pressure salesmen, just experienced local tradesmen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-white">10-Year Guarantee</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every frame, sealed unit, lock, and hinge is backed by our comprehensive insurance-backed guarantee.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-white">A++ Energy Rated</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-chambered profiles with Planitherm low-E glass reduce cold spots and slash gas bills.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-white">Police Approved Security</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Secured by Design accredited with Ultion 3-star diamond locks and internal glazing beads.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-white">FENSA Certified</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full building regulation compliance certification provided on completion for smooth resale.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS & TRUSTPILOT REVIEWS */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7C3AED] block mb-1">
              CUSTOMER SATISFACTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our Dewsbury Clients Say
            </h2>
          </div>
          <div>
            <TrustpilotBadge size="lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsList.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="w-4 h-4 bg-[#00B67A] text-white flex items-center justify-center rounded-xs text-[10px] font-bold">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                </div>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">{item.service}</p>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-extrabold text-sm text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
                {item.verified && (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="bg-gradient-to-r from-[#2D1A60] via-[#1E1B4B] to-[#0B4BBE] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Fast, Free & No Obligation Quotations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
            <EditableText
              fieldKey="ctaTitle"
              label="Bottom CTA Title"
              value={content.ctaTitle}
              as="span"
            />
          </h2>

          <div className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            <EditableText
              fieldKey="ctaSubtitle"
              label="Bottom CTA Subtitle"
              value={content.ctaSubtitle}
              as="p"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto bg-white text-[#2D1A60] hover:bg-slate-100 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-[#2D1A60] text-white" />
              <EditableText
                fieldKey="ctaButtonText"
                label="CTA Button Text"
                value={content.ctaButtonText}
                as="span"
              />
            </button>

            <a
              href={`tel:${content.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all border border-white/20 text-center"
            >
              Call Us: <EditableText fieldKey="phone" label="Company Phone" value={content.phone} as="span" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
