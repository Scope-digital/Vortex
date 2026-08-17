import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

interface EditableImageProps {
  fieldKey: string;
  label: string;
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  fieldKey,
  label,
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden'
}) => {
  const { isEditMode, openImagePicker } = useContent();

  const handleEditClick = (e: React.MouseEvent) => {
    if (isEditMode) {
      e.preventDefault();
      e.stopPropagation();
      openImagePicker(fieldKey, label, src);
    }
  };

  return (
    <div className={`group relative ${containerClassName}`}>
      <img src={src} alt={alt} className={className} />
      
      {isEditMode && (
        <button
          onClick={handleEditClick}
          type="button"
          title={`Change image: ${label}`}
          className="absolute inset-0 bg-slate-900/40 hover:bg-slate-900/60 transition-all flex flex-col items-center justify-center gap-2 text-white font-bold text-xs p-3 z-30 cursor-pointer backdrop-blur-2xs"
        >
          <div className="w-10 h-10 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
            <Camera className="w-5 h-5" />
          </div>
          <span className="bg-slate-900/90 px-3 py-1 rounded-full border border-white/20 text-xs flex items-center gap-1.5 shadow-md">
            <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
            Change Image ({label})
          </span>
        </button>
      )}
    </div>
  );
};
