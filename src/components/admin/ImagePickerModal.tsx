import React, { useState } from 'react';
import { X, Check, Upload, Link as LinkIcon, Image as ImageIcon, Sparkles, RefreshCw } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const PRESET_IMAGES = [
  {
    title: 'Modern Living Room & Casement Windows',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'Windows'
  },
  {
    title: 'Flush Sash & Heritage Brick Home',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    category: 'Windows'
  },
  {
    title: 'Victorian Vertical Sliding Sash',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    category: 'Windows'
  },
  {
    title: 'Slimline Aluminium Panoramic Glazing',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    category: 'Windows'
  },
  {
    title: 'Anthracite Grey Composite Front Door',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    category: 'Doors'
  },
  {
    title: 'Panoramic Aluminium Bifold Doors',
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    category: 'Doors'
  },
  {
    title: 'Clean UPVC Fascias & Deep Flow Roofline',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    category: 'Roofline'
  },
  {
    title: 'Bright Architectural Dining Glass Area',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    category: 'Glazing'
  }
];

export const ImagePickerModal: React.FC = () => {
  const { activeImageField, closeImagePicker, updateField, saveStatus } = useContent();
  const [selectedTab, setSelectedTab] = useState<'presets' | 'upload' | 'url'>('presets');
  const [imageUrl, setImageUrl] = useState('');
  const [previewSrc, setPreviewSrc] = useState('');
  const [uploadError, setUploadError] = useState('');

  React.useEffect(() => {
    if (activeImageField) {
      setImageUrl(activeImageField.currentUrl || '');
      setPreviewSrc(activeImageField.currentUrl || '');
    }
  }, [activeImageField]);

  if (!activeImageField) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }

    // Limit to 4MB for high quality and smooth Firestore storage
    if (file.size > 4 * 1024 * 1024) {
      setUploadError('File size is too large (max 4MB). Please choose a compressed photo.');
      return;
    }

    setUploadError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewSrc(result);
      setImageUrl(result);
    };
    reader.readAsDataURL(file);
  };

  const handleApply = async () => {
    if (!imageUrl) return;
    await updateField(activeImageField.key, imageUrl);
    closeImagePicker();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-blue-400" />
            <h3 className="font-extrabold text-sm sm:text-base">
              Change Image: <span className="text-blue-300 font-normal">{activeImageField.label}</span>
            </h3>
          </div>
          <button
            onClick={closeImagePicker}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 px-6 pt-2">
          <button
            onClick={() => setSelectedTab('presets')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-all ${
              selectedTab === 'presets'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-lg shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Curated Presets
          </button>
          <button
            onClick={() => setSelectedTab('upload')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-all ${
              selectedTab === 'upload'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-lg shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            Upload from Computer
          </button>
          <button
            onClick={() => setSelectedTab('url')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-all ${
              selectedTab === 'url'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-lg shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            Image Link / URL
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Tab 1: Presets */}
          {selectedTab === 'presets' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Click any architectural photo below to select it for this section:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRESET_IMAGES.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setImageUrl(preset.url);
                      setPreviewSrc(preset.url);
                    }}
                    className={`group relative rounded-xl overflow-hidden border-2 text-left transition-all h-28 cursor-pointer ${
                      imageUrl === preset.url
                        ? 'border-blue-600 ring-2 ring-blue-600/30'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img 
                      src={preset.url} 
                      alt={preset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-1.5">
                      <span className="text-[10px] text-white font-bold leading-tight line-clamp-2">
                        {preset.title}
                      </span>
                    </div>
                    {imageUrl === preset.url && (
                      <div className="absolute top-1 right-1 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Upload */}
          {selectedTab === 'upload' && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-8 text-center bg-slate-50/50 transition-colors">
                <input
                  type="file"
                  id="image-file-input"
                  accept="image/png, image/jpeg, image/webp, image/jpg"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="image-file-input"
                  className="cursor-pointer flex flex-col items-center justify-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-800">
                    Click to browse or drop an image file here
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Supports JPG, PNG, WebP up to 4MB
                  </p>
                </label>
              </div>

              {uploadError && (
                <p className="text-xs text-red-600 font-semibold">{uploadError}</p>
              )}
            </div>
          )}

          {/* Tab 3: URL */}
          {selectedTab === 'url' && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Direct Image Link (HTTPS)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                    setPreviewSrc(e.target.value);
                  }}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs font-mono"
                />
              </div>
            </div>
          )}

          {/* Live Preview Box */}
          {previewSrc && (
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Selected Image Preview
              </span>
              <div className="h-40 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 relative">
                <img 
                  src={previewSrc} 
                  alt="Preview" 
                  className="w-full h-full object-cover object-center"
                  onError={() => setUploadError('Could not load image preview. Please check URL.')}
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={closeImagePicker}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          
          <button
            type="button"
            disabled={!previewSrc || saveStatus === 'saving'}
            onClick={handleApply}
            className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {saveStatus === 'saving' ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Saving to Database...</span>
              </>
            ) : (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Apply to Website</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
