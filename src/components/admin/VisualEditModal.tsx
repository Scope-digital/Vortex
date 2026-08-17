import React, { useState, useEffect } from 'react';
import { X, Check, Sparkles, RefreshCw } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

export const VisualEditModal: React.FC = () => {
  const { activeField, closeTextEditor, updateField, saveStatus } = useContent();
  const [val, setVal] = useState('');

  useEffect(() => {
    if (activeField) {
      setVal(activeField.value || '');
    }
  }, [activeField]);

  if (!activeField) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateField(activeField.key, val);
    closeTextEditor();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="font-extrabold text-sm sm:text-base">
              Edit Content: <span className="text-blue-300 font-normal">{activeField.label}</span>
            </h3>
          </div>
          <button
            onClick={closeTextEditor}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSave} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              {activeField.label} Content
            </label>
            {activeField.multiline || activeField.type === 'textarea' ? (
              <textarea
                rows={5}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="Enter text..."
                className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-sans leading-relaxed"
                autoFocus
              />
            ) : (
              <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="Enter text..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-sans"
                autoFocus
              />
            )}
            <p className="text-[11px] text-slate-400 mt-1.5 flex items-center justify-between">
              <span>Changes are saved immediately to the cloud database.</span>
              <span className="font-mono">{val.length} chars</span>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={closeTextEditor}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saveStatus === 'saving'}
              className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {saveStatus === 'saving' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Save to Live Database</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
