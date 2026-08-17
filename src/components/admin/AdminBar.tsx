import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  Edit3, 
  Eye, 
  Cloud, 
  CloudCheck, 
  Inbox, 
  Server, 
  RotateCcw, 
  LogOut, 
  Sparkles, 
  Settings, 
  Phone, 
  Mail,
  CheckCircle2,
  AlertCircle,
  LayoutDashboard
} from 'lucide-react';
import { PageRoute } from '../../types';
import { useContent } from '../../context/ContentContext';
import { LeadsManagerModal } from './LeadsManagerModal';
import { CpanelExportModal } from './CpanelExportModal';

interface AdminBarProps {
  onNavigate?: (route: PageRoute) => void;
  currentRoute?: PageRoute;
}

export const AdminBar: React.FC<AdminBarProps> = ({ onNavigate, currentRoute }) => {
  const { 
    isAdminLoggedIn, 
    isEditMode, 
    toggleEditMode, 
    logoutAdmin, 
    saveStatus, 
    lastSavedAt,
    leads,
    resetToDefaults,
    openTextEditor,
    content
  } = useContent();

  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const newLeadsCount = leads.filter(l => (l.status || 'new') === 'new').length;

  // Don't render anything if not logged in (clean front-end!) OR if already on /admin page
  if (!isAdminLoggedIn || currentRoute === 'admin') {
    return null;
  }

  return (
    <>
      {/* Top Fixed Admin Bar */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800 shadow-xl px-4 py-2 text-xs transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Brand / Mode */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate?.('admin')}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/50 px-2.5 py-1 rounded-md font-extrabold uppercase tracking-wider text-[10px] cursor-pointer transition-all"
              title="Open Full Admin Dashboard"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </button>

            {/* Edit Mode Toggle Switch */}
            <button
              onClick={toggleEditMode}
              className={`flex items-center gap-2 px-3 py-1 rounded-full font-bold text-xs transition-all cursor-pointer ${
                isEditMode
                  ? 'bg-emerald-600 text-white shadow-xs ring-2 ring-emerald-400/40'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${isEditMode ? 'bg-white animate-pulse' : 'bg-slate-500'}`} />
              <Edit3 className="w-3.5 h-3.5" />
              <span>Visual Editor: {isEditMode ? 'ON (Click text/images to edit)' : 'OFF'}</span>
            </button>
          </div>

          {/* Center: Cloud Sync Status */}
          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            {saveStatus === 'saving' ? (
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                Syncing to Cloud Database...
              </span>
            ) : saveStatus === 'saved' ? (
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Cloud Database Synced
              </span>
            ) : (
              <span className="flex items-center gap-1 text-slate-400">
                <Cloud className="w-3.5 h-3.5 text-blue-400" />
                Firestore Database Connected
              </span>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            
            {/* Leads Button */}
            <button
              onClick={() => setIsLeadsModalOpen(true)}
              className="bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5 font-bold cursor-pointer relative"
              title="View Inbound Quotes"
            >
              <Inbox className="w-3.5 h-3.5 text-blue-400" />
              <span>Quotes</span>
              {newLeadsCount > 0 && (
                <span className="bg-emerald-500 text-slate-950 font-black text-[10px] px-1.5 py-0.2 rounded-full">
                  {newLeadsCount} new
                </span>
              )}
            </button>

            {/* cPanel Export / Deploy */}
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="bg-blue-700 hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5 font-bold cursor-pointer"
            >
              <Server className="w-3.5 h-3.5" />
              <span>cPanel Upload</span>
            </button>

            {/* Quick Edit Global Info */}
            <button
              onClick={() => openTextEditor({ key: 'phone', label: 'Company Phone', value: content.phone, type: 'text' })}
              className="hidden lg:flex bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-lg transition-colors items-center gap-1.5 font-bold cursor-pointer"
              title="Edit Phone Number across whole site"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Edit Phone</span>
            </button>

            {/* Reset Defaults */}
            {showConfirmReset ? (
              <div className="flex items-center gap-1 bg-red-950/80 border border-red-800 px-2 py-0.5 rounded-lg">
                <span className="text-[10px] text-red-300">Reset?</span>
                <button
                  onClick={() => {
                    resetToDefaults();
                    setShowConfirmReset(false);
                  }}
                  className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold hover:bg-red-500"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowConfirmReset(false)}
                  className="text-[10px] text-slate-400 hover:text-white px-1"
                >
                  No
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-red-300 p-1.5 rounded-lg transition-colors cursor-pointer"
                title="Reset All Text & Images to Defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Logout */}
            <button
              onClick={logoutAdmin}
              className="bg-slate-800 hover:bg-red-900/40 text-slate-400 hover:text-red-300 p-1.5 rounded-lg transition-colors cursor-pointer"
              title="Log out of Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>
      </header>

      {/* Modals */}
      <LeadsManagerModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
      />

      <CpanelExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </>
  );
};
