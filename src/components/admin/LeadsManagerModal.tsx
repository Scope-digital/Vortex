import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Calendar, Clock, CheckCircle2, User, FileText, Sparkles, Inbox } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { QuoteRequest } from '../../types';

interface LeadsManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadsManagerModal: React.FC<LeadsManagerModalProps> = ({ isOpen, onClose }) => {
  const { leads, updateLeadStatus } = useContent();
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'quoted' | 'completed'>('all');

  if (!isOpen) return null;

  const filteredLeads = filter === 'all' 
    ? leads 
    : leads.filter(l => (l.status || 'new') === filter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg">
                Inbound Quote Requests & Leads
              </h3>
              <p className="text-xs text-slate-400">
                Connected to Firestore database: <span className="text-emerald-400 font-bold">{leads.length} total enquiries</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'all', label: `All (${leads.length})` },
            { id: 'new', label: `New (${leads.filter(l => (l.status || 'new') === 'new').length})` },
            { id: 'contacted', label: `Contacted (${leads.filter(l => l.status === 'contacted').length})` },
            { id: 'quoted', label: `Quoted (${leads.filter(l => l.status === 'quoted').length})` },
            { id: 'completed', label: `Completed (${leads.filter(l => l.status === 'completed').length})` },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filter === f.id
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Leads List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-2">
              <Inbox className="w-12 h-12 mx-auto text-slate-300 stroke-1" />
              <p className="font-bold text-sm text-slate-600">No quote requests in this filter</p>
              <p className="text-xs">Submissions from the quote calculator & contact forms will appear here in real-time.</p>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div 
                key={lead.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-300 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                      <User className="w-4 h-4 text-blue-600" />
                      {lead.fullName}
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 font-bold px-2.5 py-0.5 rounded-md">
                      {lead.serviceType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">Status:</span>
                    <select
                      value={lead.status || 'new'}
                      onChange={(e) => lead.id && updateLeadStatus(lead.id, e.target.value as any)}
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg border cursor-pointer ${
                        lead.status === 'completed'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                          : lead.status === 'quoted'
                          ? 'bg-purple-50 text-purple-700 border-purple-300'
                          : lead.status === 'contacted'
                          ? 'bg-amber-50 text-amber-700 border-amber-300'
                          : 'bg-blue-50 text-blue-700 border-blue-300'
                      }`}
                    >
                      <option value="new">New Enquiry</option>
                      <option value="contacted">Contacted</option>
                      <option value="quoted">Quote Sent</option>
                      <option value="completed">Completed / Won</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <a href={`tel:${lead.phone}`} className="font-bold text-blue-600 hover:underline">
                      {lead.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <a href={`mailto:${lead.email}`} className="font-bold text-slate-800 hover:underline">
                      {lead.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Postcode: <strong className="text-slate-800">{lead.postcode}</strong></span>
                  </div>
                </div>

                {(lead.subType || lead.colorPreference || lead.propertyType || lead.timeframe) && (
                  <div className="flex flex-wrap gap-2 text-[11px] pt-1">
                    {lead.subType && <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Style: {lead.subType}</span>}
                    {lead.colorPreference && <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Color: {lead.colorPreference}</span>}
                    {lead.propertyType && <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Property: {lead.propertyType}</span>}
                    {lead.timeframe && <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Timeline: {lead.timeframe}</span>}
                    {lead.itemCount && <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Quantity: {lead.itemCount} items</span>}
                  </div>
                )}

                {lead.notes && (
                  <div className="bg-slate-50 p-3 rounded-xl text-xs text-slate-700 border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">Customer Message / Details:</span>
                    {lead.notes}
                  </div>
                )}

                {lead.createdAt && (
                  <p className="text-[10px] text-slate-400 text-right">
                    Received: {new Date(lead.createdAt).toLocaleString()}
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
          >
            Close Inbox
          </button>
        </div>

      </div>
    </div>
  );
};
