import React from 'react';
import { Edit3 } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { SiteContentData } from '../../types';

interface EditableTextProps {
  fieldKey: keyof SiteContentData | string;
  label: string;
  value: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  multiline?: boolean;
  children?: React.ReactNode;
}

export const EditableText: React.FC<EditableTextProps> = ({
  fieldKey,
  label,
  value,
  as: Component = 'span',
  className = '',
  multiline = false,
  children
}) => {
  const { isEditMode, openTextEditor } = useContent();

  const handleClick = (e: React.MouseEvent) => {
    if (isEditMode) {
      e.preventDefault();
      e.stopPropagation();
      openTextEditor({
        key: fieldKey,
        label,
        value,
        multiline,
        type: multiline ? 'textarea' : 'text'
      });
    }
  };

  if (!isEditMode) {
    return (
      <Component className={className}>
        {children || value}
      </Component>
    );
  }

  return (
    <Component
      onClick={handleClick}
      title={`Click to edit: ${label}`}
      className={`relative group cursor-pointer transition-all duration-150 rounded px-1 -mx-1 ring-1 ring-dashed ring-blue-500/60 hover:ring-2 hover:ring-blue-600 hover:bg-blue-50/20 ${className}`}
    >
      {children || value}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-md pointer-events-none flex items-center gap-1 z-30 whitespace-nowrap">
        <Edit3 className="w-2.5 h-2.5" />
        Edit
      </span>
    </Component>
  );
};
