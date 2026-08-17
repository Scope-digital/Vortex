import React from 'react';
import { X, Download, Server, CheckCircle2, ShieldCheck, FileArchive, ArrowRight, ExternalLink } from 'lucide-react';

interface CpanelExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CpanelExportModal: React.FC<CpanelExportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-3">
            <Server className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Upload to cPanel Hosting
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Your production build bundle is ready with complete database synchronization.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          
          {/* Direct File Download Callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileArchive className="w-5 h-5 text-blue-600" />
                <span className="font-extrabold text-slate-900 text-sm">vortex-cpanel-dist.zip</span>
              </div>
              <p className="text-xs text-slate-600">
                Contains complete compiled static files, assets, Firebase integration, and Apache <code className="bg-white px-1 rounded">.htaccess</code> routing.
              </p>
            </div>
            
            <div className="bg-white px-3 py-1.5 rounded-lg border border-blue-200 text-xs font-bold text-blue-700 flex-shrink-0">
              Ready in Root Folder
            </div>
          </div>

          {/* Step-by-Step cPanel Guide */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              3 Quick Steps to Deploy on cPanel:
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div className="text-xs leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">Download the ZIP from the file tree</strong>
                  Look at the left file explorer in Google AI Studio, right click <code className="bg-slate-200 px-1 rounded font-bold">vortex-cpanel-dist.zip</code> and click <strong>Download</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div className="text-xs leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">Upload to cPanel File Manager</strong>
                  Log in to cPanel, open <strong>File Manager</strong>, navigate into your <code className="bg-slate-200 px-1 rounded font-bold">public_html</code> folder, and click <strong>Upload</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <div className="text-xs leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">Extract inside public_html</strong>
                  Right-click the uploaded zip inside cPanel and click <strong>Extract</strong>. Your site will immediately be live on your domain with full visual editor & database support!
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Database Notice */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Cloud Firestore Sync:</strong> Any edits made via the visual editor or inbound quote inquiries will automatically sync across devices and remain live after deployment.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
