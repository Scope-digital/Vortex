import React from 'react';
import { Star } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { EditableText } from './admin/EditableText';

interface TrustpilotBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TrustpilotBadge: React.FC<TrustpilotBadgeProps> = ({ size = 'md', className = '' }) => {
  const { content } = useContent();

  return (
    <div 
      id="trustpilot-rating-badge"
      className={`inline-flex items-center gap-2 flex-wrap select-none ${className}`}
    >
      {/* Star + Trustpilot Logo */}
      <div className="flex items-center gap-1.5 font-bold text-slate-900 tracking-tight text-sm sm:text-base">
        <div className="w-5 h-5 bg-[#00B67A] text-white flex items-center justify-center rounded-xs shadow-2xs">
          <Star className="w-3.5 h-3.5 fill-white text-[#00B67A]" />
        </div>
        <span className="font-extrabold tracking-tight text-slate-900">Trustpilot</span>
      </div>

      {/* 5 Green Squares with white stars */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((idx) => (
          <div 
            key={idx} 
            className="w-5 h-5 bg-[#00B67A] flex items-center justify-center rounded-xs shadow-2xs"
          >
            <Star className="w-3.5 h-3.5 fill-white text-[#00B67A]" />
          </div>
        ))}
      </div>

      {/* Text rating */}
      <span className="text-xs sm:text-sm font-semibold text-slate-700">
        <EditableText
          fieldKey="trustpilotScore"
          label="Trustpilot Score"
          value={content.trustpilotScore}
          as="span"
          className="font-extrabold text-slate-900"
        />
        {' '}out of 5 based on{' '}
        <EditableText
          fieldKey="trustpilotReviewsCount"
          label="Reviews Count"
          value={content.trustpilotReviewsCount}
          as="span"
          className="underline decoration-slate-300"
        />
      </span>
    </div>
  );
};
