import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { PageRoute } from '../types';
import { useContent } from '../context/ContentContext';
import { EditableText } from './admin/EditableText';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const { content } = useContent();

  return (
    <footer id="main-site-footer" className="bg-[#0D1527] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation & Guarantee Ribbon */}
        <div className="bg-slate-900/90 rounded-2xl p-6 mb-12 border border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <p className="text-white font-bold text-base">10-Year Insurance Backed Guarantee</p>
              <p className="text-xs text-slate-400">Full peace of mind protection on all frames, glass & installation</p>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-bold text-white">FENSA Registered Company</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span className="text-sm font-bold text-white">Made in Great Britain</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-sm font-bold text-white">22+ Years Dewsbury Heritage</span>
            </div>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M50 12 L85 30 L85 70 L50 88 L15 70 L15 30 Z" className="stroke-white fill-white/10" strokeWidth="5" />
                  <path d="M50 12 L50 88" className="stroke-blue-500" strokeWidth="4" />
                  <path d="M15 30 L50 48 L85 30" className="stroke-white" strokeWidth="4" />
                  <line x1="32" y1="21" x2="32" y2="78" className="stroke-blue-400" strokeWidth="3" />
                  <line x1="68" y1="21" x2="68" y2="78" className="stroke-blue-400" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight">Vortex</span>
                <span className="block text-xs font-semibold text-blue-400">windows and doors</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Dewsbury’s trusted specialists in energy-efficient UPVC windows, high-security composite entrance doors, aluminium bifolds, and full-replacement roofline solutions. Over 22 years delivering exceptional craftsmanship.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>
                  Showroom: <EditableText fieldKey="address" label="Address" value={content.address} />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${content.phone.replace(/\s+/g, '')}`} className="text-white hover:text-blue-400 transition-colors font-bold">
                  <EditableText fieldKey="phone" label="Company Phone" value={content.phone} />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${content.email}`} className="hover:text-white transition-colors">
                  <EditableText fieldKey="email" label="Company Email" value={content.email} />
                </a>
              </div>
            </div>
          </div>

          {/* Windows Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Windows Range</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('windows-casement')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  UPVC Casement Windows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('windows-flush-sash')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Flush Sash Heritage Windows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('windows-sliding-sash')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Sliding Sash Windows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('windows-tilt-turn')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Tilt & Turn Windows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('windows-bay-bow')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Bay & Bow Windows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('windows-aluminium')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Slimline Aluminium Windows
                </button>
              </li>
            </ul>
          </div>

          {/* Doors & Roofline Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Doors & Roofline</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('doors-composite')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Composite Front Doors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doors-bifold')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Aluminium Bifold Doors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doors-french')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  French Patio Doors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doors-patio')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Sliding Patio Doors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('fascia-upvc')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  18mm UPVC Fascias & Soffits
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guttering-services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Deep Flow Guttering
                </button>
              </li>
            </ul>
          </div>

          {/* Areas Covered & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Service Areas</h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
              <span className="bg-slate-800/80 px-2 py-1 rounded">Dewsbury</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Batley</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Mirfield</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Wakefield</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Huddersfield</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Leeds</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Morley</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Cleckheaton</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">Bradford</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">West Yorkshire</span>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Request Free Home Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vortex Windows and Doors Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('about')} className="hover:text-slate-300">About Vortex</button>
            <button onClick={() => onNavigate('gallery')} className="hover:text-slate-300">Project Gallery</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300">Contact & Showroom</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
