import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Upload, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  Save, 
  Check, 
  AlertCircle,
  Camera,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { ProjectCase } from '../../types';
import { BeforeAfterSlider } from '../BeforeAfterSlider';

const GALLERY_PRESETS = [
  {
    name: 'Full House Flush Sash (Anthracite Grey)',
    category: 'windows',
    before: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    spec: 'Flush Sash A++ Windows & Solid Core Door',
    color: 'Anthracite Grey (RAL 7016)'
  },
  {
    name: 'Aluminium Bifold Patio Transformation',
    category: 'bifolds',
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    spec: '5-Leaf Slimline Aluminium Bifolds',
    color: 'Matt Anthracite Grey'
  },
  {
    name: 'Solid Core Composite Front Door',
    category: 'doors',
    before: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
    spec: '48mm Solid Timber Core & Ultion 3*',
    color: 'Chartwell Green'
  },
  {
    name: 'Full Roofline, Fascias & Deep Guttering',
    category: 'fascia-soffit',
    before: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    spec: '18mm Full Replacement Fascias & Deep Flow Gutters',
    color: 'Black Ash Foil'
  },
  {
    name: 'Victorian Stone Cottage Sash Windows',
    category: 'windows',
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    spec: 'Vertical Sliding Sash with Georgian Bars',
    color: 'Agate Grey Woodgrain'
  },
  {
    name: '5-Facet Load Bearing Bay Window',
    category: 'windows',
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    spec: '5-Facet Load-Bearing Bay with Planitherm Glass',
    color: 'Clean White UPVC'
  }
];

export const GalleryItemModal: React.FC = () => {
  const { 
    isGalleryModalOpen, 
    closeGalleryModal, 
    editingGalleryProject, 
    addGalleryProject, 
    updateGalleryProject,
    openImagePicker
  } = useContent();

  const [formData, setFormData] = useState<Omit<ProjectCase, 'id'>>({
    title: '',
    category: 'windows',
    location: 'Dewsbury, West Yorkshire',
    completionDate: 'August 2024',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: '',
    productInstalled: 'High-Efficiency A++ UPVC Windows',
    color: 'Anthracite Grey (RAL 7016)',
    energyRating: 'A++ Energy Rated'
  });

  const [activeTab, setActiveTab] = useState<'details' | 'images' | 'preview'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [uploadTarget, setUploadTarget] = useState<'before' | 'after' | null>(null);

  // Populate form when editing or resetting
  useEffect(() => {
    if (editingGalleryProject) {
      setFormData({
        title: editingGalleryProject.title,
        category: editingGalleryProject.category,
        location: editingGalleryProject.location,
        completionDate: editingGalleryProject.completionDate,
        beforeImage: editingGalleryProject.beforeImage,
        afterImage: editingGalleryProject.afterImage,
        description: editingGalleryProject.description,
        productInstalled: editingGalleryProject.productInstalled,
        color: editingGalleryProject.color,
        energyRating: editingGalleryProject.energyRating
      });
    } else {
      setFormData({
        title: '',
        category: 'windows',
        location: 'Dewsbury, West Yorkshire',
        completionDate: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
        beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
        afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        description: '',
        productInstalled: 'Flush Sash A++ Windows & Designer Door',
        color: 'Anthracite Grey (RAL 7016)',
        energyRating: 'A++ Triple Glazed'
      });
    }
    setErrorMsg('');
    setActiveTab('details');
  }, [editingGalleryProject, isGalleryModalOpen]);

  if (!isGalleryModalOpen) return null;

  // File upload handler
  const handleFileUpload = (target: 'before' | 'after', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Image size too large (max 5MB). Please compress first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setFormData(prev => ({
        ...prev,
        [target === 'before' ? 'beforeImage' : 'afterImage']: result
      }));
      setErrorMsg('');
    };
    reader.readAsDataURL(file);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setErrorMsg('Please provide a project title.');
      setActiveTab('details');
      return;
    }
    if (!formData.beforeImage.trim() || !formData.afterImage.trim()) {
      setErrorMsg('Please provide both Before and After image URLs.');
      setActiveTab('images');
      return;
    }

    setIsSubmitting(true);
    try {
      if (editingGalleryProject) {
        await updateGalleryProject(editingGalleryProject.id, formData);
      } else {
        await addGalleryProject(formData);
      }
      closeGalleryModal();
    } catch (err: any) {
      setErrorMsg('Failed to save project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh] my-auto">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-base sm:text-lg">
                {editingGalleryProject ? 'Edit Gallery Project' : 'Add New Transformation Project'}
              </h2>
              <p className="text-xs text-slate-400">
                {editingGalleryProject ? 'Update before/after photos and specifications' : 'Create an interactive before/after case study for your gallery'}
              </p>
            </div>
          </div>
          <button
            onClick={closeGalleryModal}
            className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 px-6 pt-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-all ${
              activeTab === 'details'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-xl shadow-2xs font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>1. Project Details & Specs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('images')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-all ${
              activeTab === 'images'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-xl shadow-2xs font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>2. Before & After Photos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-all ${
              activeTab === 'preview'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-xl shadow-2xs font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3. Interactive Live Preview</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* TAB 1: DETAILS */}
          {activeTab === 'details' && (
            <div className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Headline / Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Full House Anthracite Flush Sash & Composite Door"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900 font-semibold bg-white"
                  >
                    <option value="windows">UPVC Windows</option>
                    <option value="doors">Composite Doors</option>
                    <option value="bifolds">Bifold Doors</option>
                    <option value="fascia-soffit">Fascia & Guttering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Dewsbury, WF12"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Completion Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. August 2024"
                      value={formData.completionDate}
                      onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Description & Workmanship Story
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe what was removed, why the homeowner upgraded, and what Vortex master craftsmen installed..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Product Specification
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Flush Sash A++ Windows"
                    value={formData.productInstalled}
                    onChange={(e) => setFormData({ ...formData, productInstalled: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Colour / Finish
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anthracite Grey (RAL 7016)"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Performance / Rating
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. A++ Triple Glazed"
                    value={formData.energyRating}
                    onChange={(e) => setFormData({ ...formData, energyRating: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-slate-900"
                  />
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: IMAGES (BEFORE & AFTER) */}
          {activeTab === 'images' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* BEFORE IMAGE BOX */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      1. Before Image (Old / Original)
                    </span>
                  </div>

                  <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 border border-slate-300 shadow-inner group">
                    <img 
                      src={formData.beforeImage} 
                      alt="Before Preview" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2 bg-black/75 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                      Before
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <label className="flex-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs transition-colors">
                        <Upload className="w-3.5 h-3.5 text-blue-600" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload('before', e)}
                        />
                      </label>

                      <button
                        type="button"
                        onClick={() => openImagePicker('', 'Before Image', formData.beforeImage, (url) => {
                          setFormData(prev => ({ ...prev, beforeImage: url }));
                        })}
                        className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold py-2 px-3 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Preset Library</span>
                      </button>
                    </div>

                    <div className="relative">
                      <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Or paste direct image URL..."
                        value={formData.beforeImage}
                        onChange={(e) => setFormData({ ...formData, beforeImage: e.target.value })}
                        className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* AFTER IMAGE BOX */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      2. After Image (Vortex Transformation)
                    </span>
                  </div>

                  <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 border border-slate-300 shadow-inner group">
                    <img 
                      src={formData.afterImage} 
                      alt="After Preview" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                      After
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <label className="flex-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs transition-colors">
                        <Upload className="w-3.5 h-3.5 text-blue-600" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload('after', e)}
                        />
                      </label>

                      <button
                        type="button"
                        onClick={() => openImagePicker('', 'After Image', formData.afterImage, (url) => {
                          setFormData(prev => ({ ...prev, afterImage: url }));
                        })}
                        className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold py-2 px-3 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Preset Library</span>
                      </button>
                    </div>

                    <div className="relative">
                      <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Or paste direct image URL..."
                        value={formData.afterImage}
                        onChange={(e) => setFormData({ ...formData, afterImage: e.target.value })}
                        className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Architectural Presets */}
              <div className="bg-slate-100/80 p-4 rounded-2xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Quick Load High-Definition Inspiration Pairs
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {GALLERY_PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          beforeImage: preset.before,
                          afterImage: preset.after,
                          productInstalled: preset.spec,
                          color: preset.color,
                          category: preset.category as any
                        }));
                      }}
                      className="text-left p-2.5 bg-white hover:bg-blue-50 hover:border-blue-300 border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs flex items-center gap-2.5"
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-900">
                        <img src={preset.after} alt={preset.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-800 truncate">{preset.name}</p>
                        <p className="text-[10px] text-slate-500 truncate">{preset.spec}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: INTERACTIVE PREVIEW */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-xs font-semibold flex items-center justify-between">
                <span>Interactive Slider Test: Drag horizontally to verify your transformation.</span>
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Live
                </span>
              </div>

              <div className="border border-slate-200 rounded-2xl p-2 bg-slate-100">
                <BeforeAfterSlider
                  title={formData.title || 'Project Transformation Preview'}
                  subtitle={`${formData.location} • Completed ${formData.completionDate}`}
                  beforeImage={formData.beforeImage}
                  afterImage={formData.afterImage}
                />
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs text-xs space-y-2">
                <p className="text-slate-600">{formData.description || 'No description entered yet.'}</p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-slate-700 font-medium">
                  <span><strong>Spec:</strong> {formData.productInstalled}</span>
                  <span><strong>Colour:</strong> {formData.color}</span>
                  <span className="text-blue-600 font-bold">{formData.energyRating}</span>
                </div>
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {activeTab !== 'details' && (
                <button
                  type="button"
                  onClick={() => setActiveTab(activeTab === 'preview' ? 'images' : 'details')}
                  className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100 cursor-pointer"
                >
                  Previous Step
                </button>
              )}
              {activeTab !== 'preview' && (
                <button
                  type="button"
                  onClick={() => setActiveTab(activeTab === 'details' ? 'images' : 'preview')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl cursor-pointer"
                >
                  Next: {activeTab === 'details' ? 'Photos' : 'Test Slider'}
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={closeGalleryModal}
                className="px-4 py-2.5 border border-slate-300 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>{editingGalleryProject ? 'Save Changes' : 'Publish to Gallery'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
