import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { PageRoute } from '../types';
import { useContent } from '../context/ContentContext';
import { EditableText } from './admin/EditableText';

interface TopBannerProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const { content } = useContent();

  return (
    <div id="top-banner-bar" className="bg-[#2D1A60] text-white text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-indigo-950/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left / Center Promo matching screenshot */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <EditableText
            fieldKey="topBannerBadge"
            label="Banner Badge"
            value={content.topBannerBadge}
            as="span"
            className="bg-white text-[#2D1A60] font-bold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs"
          />
          <EditableText
            fieldKey="topBannerText"
            label="Banner Text"
            value={content.topBannerText}
            as="span"
            className="text-slate-200 text-xs sm:text-sm"
          />
          <button
            id="banner-get-in-touch-btn"
            onClick={onOpenQuoteModal}
            className="text-white underline font-semibold hover:text-blue-200 transition-colors ml-1 cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Right contact details */}
        <div className="hidden lg:flex items-center gap-5 text-slate-300 text-xs">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <EditableText
              fieldKey="topBannerLocation"
              label="Location Coverage"
              value={content.topBannerLocation}
              as="span"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <EditableText
              fieldKey="hoursWeekday"
              label="Opening Hours"
              value={content.hoursWeekday}
              as="span"
            />
          </div>
          <a
            href={`tel:${content.phone.replace(/\s+/g, '')}`}
            id="banner-phone-link"
            className="flex items-center gap-1.5 font-bold text-white hover:text-blue-300 transition-colors bg-white/10 px-2.5 py-1 rounded-md"
          >
            <Phone className="w-3.5 h-3.5 text-blue-300" />
            <EditableText
              fieldKey="phone"
              label="Company Phone"
              value={content.phone}
              as="span"
            />
          </a>
        </div>

      </div>
    </div>
  );
};
