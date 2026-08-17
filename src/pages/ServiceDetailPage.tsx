import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Phone, 
  Check, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  HelpCircle,
  Award,
  Lock,
  Maximize2,
  Sliders,
  Wind,
  Droplets,
  Sun,
  Palette,
  VolumeX,
  Flame,
  Layout,
  Anchor,
  Umbrella,
  Compass,
  Maximize,
  ShieldAlert,
  RotateCcw,
  CheckCircle,
  Eye
} from 'lucide-react';
import { ServiceDetail, PageRoute } from '../types';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (pref?: string) => void;
}

// Icon helper
const renderIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 text-blue-600' };
  switch (iconName) {
    case 'Zap': return <Zap {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'VolumeX': return <VolumeX {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Layout': return <Layout {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Flame': return <Flame {...props} />;
    case 'CheckCircle': return <CheckCircle {...props} />;
    case 'Sliders': return <Sliders {...props} />;
    case 'RotateCcw': return <RotateCcw {...props} />;
    case 'Award': return <Award {...props} />;
    case 'Wind': return <Wind {...props} />;
    case 'Maximize2': return <Maximize2 {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'Lock': return <Lock {...props} />;
    case 'Anchor': return <Anchor {...props} />;
    case 'Umbrella': return <Umbrella {...props} />;
    case 'Compass': return <Compass {...props} />;
    case 'Maximize': return <Maximize {...props} />;
    case 'Sun': return <Sun {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'Eye': return <Eye {...props} />;
    case 'Droplets': return <Droplets {...props} />;
    default: return <ShieldCheck {...props} />;
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [selectedColor, setSelectedColor] = useState(service.colorOptions[0]?.name || 'Anthracite Grey');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Service Breadcrumb & Hero Header */}
      <section className="bg-slate-900 text-white pt-8 pb-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button 
              onClick={() => onNavigate(service.category === 'windows' ? 'windows' : service.category === 'doors' ? 'doors' : 'fascia-soffit')} 
              className="hover:text-white transition-colors capitalize cursor-pointer"
            >
              {service.category}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-400 font-bold">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              {service.badge && (
                <span className="inline-flex items-center gap-1.5 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {service.badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.tagline}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(`${service.title} in ${selectedColor}`)}
                  className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>GET FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:01924888123"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>01924 888 123</span>
                </a>
              </div>

              <div className="pt-2">
                <TrustpilotBadge />
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 h-80 sm:h-96">
                <img 
                  src={service.heroImage} 
                  alt={service.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Manufactured to British Standards</span>
                  <span className="text-emerald-400 font-bold">10-Yr Guarantee</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content & Specs Area */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        {/* Overview & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Overview & Performance
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.overview}
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Key Installation Benefits
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
              <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Technical Specifications
              </h3>
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {service.specifications.map((spec, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="font-bold text-slate-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenQuoteModal(service.title)}
                className="w-full bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold text-sm py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Quotation with these Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Enduring Performance
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Every detail is designed to enhance thermal comfort, security, and low maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {renderIcon(feat.iconName)}
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">{feat.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Color Palette Selector */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 block mb-1">
                AVAILABLE FINISHES
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Architectural Color & Woodgrain Range
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                UV-resistant, durable foils guaranteed against fading or peeling.
              </p>
            </div>
            <div className="bg-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-700">
              Selected: <span className="text-blue-700">{selectedColor}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {service.colorOptions.map((col) => (
              <button
                key={col.name}
                onClick={() => setSelectedColor(col.name)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                  selectedColor === col.name
                    ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600/20'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-full border border-slate-300 shadow-inner"
                  style={{ backgroundColor: col.hex }}
                />
                <span className="text-xs font-bold text-slate-800 leading-tight">{col.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Photo Gallery Grid */}
        {service.galleryImages.length > 0 && (
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
              Installation Gallery & Inspiration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.galleryImages.map((img, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-900 h-64 border border-slate-200">
                  <img 
                    src={img.url} 
                    alt={img.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Everything you need to know before ordering {service.shortTitle}.
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between text-sm sm:text-base cursor-pointer hover:bg-slate-50"
                  >
                    <span>{faq.question}</span>
                    <span className="text-blue-600 text-lg font-bold ml-2">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              Ready to upgrade with {service.shortTitle}?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Free home consultation, accurate survey, and 10-year insurance backed guarantee.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal(`${service.title} in ${selectedColor}`)}
            className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>REQUEST FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
