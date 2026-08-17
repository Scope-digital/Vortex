import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { PageRoute } from '../types';

interface ServiceCardProps {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  route: PageRoute;
  features?: string[];
  onNavigate: (route: PageRoute) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subtitle,
  image,
  route,
  features,
  onNavigate,
}) => {
  return (
    <div 
      id={`service-card-${id}`}
      onClick={() => onNavigate(route)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/90 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
    >
      {/* Top Image Container with aspect ratio matching screenshot */}
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out brightness-95 group-hover:brightness-100"
          loading="lazy"
        />
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Hover quick badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-xs opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1">
          <span>View Range</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Blue Banner matching screenshot bottom block */}
      <div className="bg-[#0B4BBE] group-hover:bg-[#083C9A] text-white py-3.5 px-4 text-center transition-colors duration-200 flex items-center justify-center gap-2 shadow-inner">
        <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase drop-shadow-xs">
          {title}
        </span>
        <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Expandable summary features on hover or clean bottom */}
      {subtitle && (
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex-1 flex flex-col justify-between text-xs sm:text-sm text-slate-600">
          <p className="line-clamp-2 leading-relaxed">{subtitle}</p>
          {features && features.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-200/70 space-y-1">
              {features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-slate-700 text-xs font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
