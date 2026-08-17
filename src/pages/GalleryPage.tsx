import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Check, 
  ArrowRight, 
  Plus, 
  Edit3, 
  Trash2, 
  Camera, 
  ImageIcon,
  ShieldCheck,
  ChevronDown,
  Layers
} from 'lucide-react';
import { PageRoute, ProjectCase } from '../types';
import { useContent } from '../context/ContentContext';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { TrustpilotBadge } from '../components/TrustpilotBadge';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (pref?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const { 
    galleryProjects, 
    isAdminLoggedIn, 
    isEditMode, 
    openGalleryModal, 
    deleteGalleryProject, 
    updateGalleryProject,
    openImagePicker 
  } = useContent();

  const [activeFilter, setActiveFilter] = useState<'all' | 'windows' | 'doors' | 'fascia-soffit' | 'bifolds'>('all');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? galleryProjects 
    : galleryProjects.filter(p => p.category === activeFilter);

  const handleDelete = async (id: string) => {
    await deleteGalleryProject(id);
    setDeleteConfirmId(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Admin Quick Action Banner (When logged in) */}
      {(isAdminLoggedIn || isEditMode) && (
        <div className="bg-slate-900 border-b border-slate-800 text-white px-4 py-3 sticky top-16 z-20 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 bg-blue-600 rounded-lg text-white">
                <Edit3 className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-extrabold text-white">
                  Gallery Management Active ({galleryProjects.length} Total Projects)
                </p>
                <p className="text-[11px] text-slate-400">
                  Click any project to edit details, upload before/after photos, or add new installations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => openGalleryModal()}
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md cursor-pointer transition-all active:scale-98"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project / Transformation</span>
              </button>

              <button
                onClick={() => onNavigate('admin')}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3 py-2 rounded-xl transition-colors cursor-pointer"
              >
                Open Admin Portal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Local Transformations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Workmanship & Project Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore recent window, door, and roofline installations carried out by our master craftsmen across Dewsbury and West Yorkshire.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustpilotBadge />
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        
        {/* Filter Navigation & Add Button Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'windows', label: 'UPVC Windows' },
              { id: 'doors', label: 'Composite Doors' },
              { id: 'bifolds', label: 'Bifold Doors' },
              { id: 'fascia-soffit', label: 'Fascia & Guttering' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0B4BBE] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {(isAdminLoggedIn || isEditMode) && (
            <button
              onClick={() => openGalleryModal()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-98 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add Transformation</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">No projects in this category yet</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              There are currently no items under "{activeFilter}". You can add one anytime.
            </p>
            {(isAdminLoggedIn || isEditMode) && (
              <button
                onClick={() => openGalleryModal()}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project to this Category</span>
              </button>
            )}
          </div>
        )}

        {/* Before & After Interactive Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="space-y-3 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-md relative group hover:shadow-lg transition-shadow"
            >
              {/* Admin Card Action Bar */}
              {(isAdminLoggedIn || isEditMode) && (
                <div className="bg-slate-900 text-white p-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-2 shadow-sm border border-slate-800">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={() => openImagePicker('', `Before Photo (${proj.title})`, proj.beforeImage, (url) => {
                        updateGalleryProject(proj.id, { beforeImage: url });
                      })}
                      className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Replace Before Photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Edit Before Photo</span>
                    </button>

                    <button
                      onClick={() => openImagePicker('', `After Photo (${proj.title})`, proj.afterImage, (url) => {
                        updateGalleryProject(proj.id, { afterImage: url });
                      })}
                      className="bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Replace After Photo"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Edit After Photo</span>
                    </button>

                    <button
                      onClick={() => openGalleryModal(proj)}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Edit project details & specs"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Details</span>
                    </button>
                  </div>

                  <div>
                    {deleteConfirmId === proj.id ? (
                      <div className="flex items-center gap-1.5 bg-rose-950/80 p-1 rounded-lg border border-rose-800">
                        <span className="text-[10px] text-rose-300 font-bold px-1">Confirm?</span>
                        <button
                          onClick={() => handleDelete(proj.id)}
                          className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer"
                        >
                          Yes, Delete
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="bg-slate-700 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirmId(proj.id)}
                        className="bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300 p-1.5 rounded-lg transition-colors cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Before & After Interactive Slider */}
              <BeforeAfterSlider
                title={proj.title}
                subtitle={`${proj.location} • Completed ${proj.completionDate}`}
                beforeImage={proj.beforeImage}
                afterImage={proj.afterImage}
              />
              
              {/* Project Details Description Card */}
              <div className="p-2 space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">
                    <span className="text-slate-400">Spec:</span> {proj.productInstalled}
                  </span>
                  {proj.color && (
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">
                      {proj.color}
                    </span>
                  )}
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                    {proj.energyRating}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#2D1A60] to-[#0B4BBE] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Want Similar Results for Your Home?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a no-obligation visit from our Dewsbury surveyor. We’ll measure up and give you a fixed quote valid for 12 months.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-white text-[#2D1A60] hover:bg-slate-100 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer inline-flex items-center gap-2 active:scale-98"
            >
              <span>GET A FREE NO-OBLIGATION QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};

