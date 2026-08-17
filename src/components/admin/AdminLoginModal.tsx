import React, { useState } from 'react';
import { X, Lock, ShieldCheck, KeyRound, Sparkles } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { loginAdmin } = useContent();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password);
    if (success) {
      setError(false);
      setPassword('');
      onClose();
    } else {
      setError(true);
    }
  };

  const handleQuickDemoAccess = () => {
    loginAdmin('vortex2024');
    setError(false);
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Admin & Visual Editor
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Access live on-page content editing, photo manager, and cloud database.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Admin Password or PIN
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  placeholder="Enter admin password..."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
              {error && (
                <p className="text-xs text-red-600 font-semibold mt-1.5">
                  Invalid password. (Default is <code className="bg-red-50 px-1 py-0.5 rounded">vortex2024</code>)
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-sm py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Sign In to Admin
            </button>
          </form>

          {/* Quick Demo button */}
          <div className="border-t border-slate-100 pt-4 text-center">
            <p className="text-xs text-slate-500 mb-2">Want to test the visual editor immediately?</p>
            <button
              onClick={handleQuickDemoAccess}
              type="button"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>1-Click Admin Access (vortex2024)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
