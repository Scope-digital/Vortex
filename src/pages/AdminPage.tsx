import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Edit3, 
  Inbox, 
  Server, 
  Download, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Filter, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  RotateCcw, 
  LogOut,
  Database,
  Sparkles,
  Layers,
  Settings,
  Calendar,
  Plus,
  Trash2,
  Camera,
  ImageIcon,
  Tag
} from 'lucide-react';
import { PageRoute, QuoteRequest, ProjectCase } from '../types';
import { useContent } from '../context/ContentContext';
import { VortexLogo } from '../components/VortexLogo';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface AdminPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  const { 
    isAdminLoggedIn, 
    loginAdmin, 
    logoutAdmin, 
    adminPassword, 
    setAdminPassword,
    isEditMode, 
    toggleEditMode,
    leads, 
    updateLeadStatus, 
    content, 
    openTextEditor, 
    openImagePicker,
    saveStatus,
    lastSavedAt,
    resetToDefaults,
    galleryProjects,
    openGalleryModal,
    deleteGalleryProject,
    updateGalleryProject,
    resetGalleryToDefaults
  } = useContent();

  const [enteredPass, setEnteredPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'leads' | 'gallery' | 'content' | 'cpanel' | 'security'>('leads');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState<string>('all');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [passChangeSuccess, setPassChangeSuccess] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmGalleryReset, setConfirmGalleryReset] = useState(false);
  const [deleteProjConfirmId, setDeleteProjConfirmId] = useState<string | null>(null);

  // Handle Login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(enteredPass);
    if (!success) {
      setErrorMsg('Incorrect password. Please try again or use vortex2024.');
    } else {
      setErrorMsg('');
      setEnteredPass('');
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.postcode && lead.postcode.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'all' || (lead.status || 'new') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const newLeadsCount = leads.filter(l => (l.status || 'new') === 'new').length;

  // Export CSV
  const handleExportCSV = () => {
    const headers = ['Date', 'Status', 'Name', 'Phone', 'Email', 'Postcode', 'Address', 'Service', 'Items', 'Property', 'Colour', 'Timeframe', 'Notes'];
    const rows = leads.map(l => [
      l.submittedAt ? new Date(l.submittedAt).toLocaleDateString() : '',
      l.status || 'new',
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.postcode}"`,
      `"${(l.address || '').replace(/"/g, '""')}"`,
      `"${l.serviceType.replace(/"/g, '""')}"`,
      l.itemCount || '',
      `"${l.propertyType || ''}"`,
      `"${l.colorPreference || ''}"`,
      `"${l.timeframe || ''}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `vortex-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download cPanel ZIP
  const handleDownloadCpanelZip = () => {
    const link = document.createElement('a');
    link.href = '/vortex-cpanel-dist.zip';
    link.download = 'vortex-cpanel-dist.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ==========================================
  // VIEW 1: ADMIN LOGIN SCREEN (If not logged in)
  // ==========================================
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          
          {/* Logo container */}
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="p-4 bg-white rounded-2xl shadow-xl border border-slate-200 inline-block mb-4">
              <VortexLogo variant="light" size="lg" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-full text-xs font-bold text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Staff & Admin Portal</span>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-black text-white tracking-tight">Admin Sign In</h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Enter your administrative key to access the content editor and customer inquiries.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter admin password..."
                    value={enteredPass}
                    onChange={(e) => setEnteredPass(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-slate-950 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-xs font-semibold text-rose-400 mt-2 flex items-center gap-1.5">
                    <span>⚠️</span> {errorMsg}
                  </p>
                )}
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Default Password:</span>
                <code className="text-blue-400 font-mono font-bold bg-slate-800 px-2 py-0.5 rounded">vortex2024</code>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Unlock Admin Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-2 text-center border-t border-slate-800">
              <button
                onClick={() => onNavigate('home')}
                className="text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 mx-auto font-semibold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Public Website</span>
              </button>
            </div>
          </div>

          <p className="text-center text-[11px] text-slate-600 mt-6">
            Vortex Windows & Doors • Secure Administrative Management System
          </p>

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white rounded-xl shadow-xs">
              <VortexLogo variant="light" size="sm" />
            </div>
            <div className="hidden sm:block h-6 w-px bg-slate-800" />
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Admin Online
              </span>
              <span className="text-xs text-slate-400 hidden md:inline">
                Firestore DB Connected
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            
            {/* Visual Editor Toggle */}
            <button
              onClick={() => {
                if (!isEditMode) toggleEditMode();
                onNavigate('home');
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Open Visual Editor on Site</span>
            </button>

            {/* Back to Website */}
            <button
              onClick={() => onNavigate('home')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">View Website</span>
            </button>

            {/* Logout */}
            <button
              onClick={logoutAdmin}
              className="bg-red-950/60 hover:bg-red-900 border border-red-800/80 text-red-200 text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Sign out of admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>

          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 flex-1 space-y-8">
        
        {/* KPI Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Quotes Received</span>
              <Inbox className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-3xl font-black text-white">{leads.length}</p>
            <p className="text-[11px] text-slate-500 mt-1">Saved in cloud Firestore</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">New Inquiries</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-3xl font-black text-amber-400">{newLeadsCount}</p>
            <p className="text-[11px] text-amber-400/80 mt-1">Awaiting review or callback</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Visual Editor</span>
              <Edit3 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-lg font-black ${isEditMode ? 'text-emerald-400' : 'text-slate-400'}`}>
                {isEditMode ? 'ACTIVE' : 'READY'}
              </span>
              <button
                onClick={toggleEditMode}
                className="text-xs font-bold text-blue-400 hover:underline cursor-pointer ml-auto"
              >
                Toggle {isEditMode ? 'Off' : 'On'}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Click text/photos on site to edit</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">cPanel Package</span>
              <Server className="w-4 h-4 text-purple-400" />
            </div>
            <button
              onClick={handleDownloadCpanelZip}
              className="bg-purple-600/30 hover:bg-purple-600 border border-purple-500/50 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .ZIP</span>
            </button>
            <p className="text-[11px] text-slate-500 mt-1">Ready for public_html</p>
          </div>

        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-800 space-x-2 sm:space-x-4 overflow-x-auto pb-px">
          {[
            { id: 'leads', label: `Inbound Quotes (${leads.length})`, icon: Inbox },
            { id: 'gallery', label: `Gallery & Projects (${galleryProjects.length})`, icon: Sparkles },
            { id: 'content', label: 'Quick Content Editor', icon: Edit3 },
            { id: 'cpanel', label: 'cPanel Hosting Deployment', icon: Server },
            { id: 'security', label: 'Security & Backup', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'border-blue-500 text-blue-400 bg-slate-900/40 rounded-t-xl'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ==========================================
            TAB 1: INBOUND QUOTES & LEADS
        ========================================== */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            
            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by customer name, phone, service, postcode..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl text-xs font-bold text-slate-300 py-2 px-3 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New Inquiries</option>
                  <option value="contacted">Contacted</option>
                  <option value="booked">Survey Booked</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>

                <button
                  onClick={handleExportCSV}
                  disabled={leads.length === 0}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2 px-3.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                  title="Export all leads to CSV spreadsheet"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Leads List */}
            {filteredLeads.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 space-y-3">
                <Inbox className="w-10 h-10 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-white">No quote requests found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {searchTerm ? 'No results matched your search query.' : 'When customers submit a quote on the website, their details will appear here in real time.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredLeads.map((lead) => {
                  const status = lead.status || 'new';
                  return (
                    <div 
                      key={lead.id}
                      className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-xs transition-all space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-extrabold text-base text-white">{lead.fullName}</h3>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {lead.submittedAt ? new Date(lead.submittedAt).toLocaleString() : 'Recent'}
                          </span>
                        </div>

                        {/* Status update badge */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 font-medium">Status:</span>
                          <select
                            value={status}
                            onChange={(e) => updateLeadStatus(lead.id!, e.target.value as any)}
                            className={`text-xs font-black py-1 px-2.5 rounded-lg border focus:outline-none cursor-pointer ${
                              status === 'new'
                                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                                : status === 'contacted'
                                ? 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                                : status === 'booked'
                                ? 'bg-purple-500/20 text-purple-400 border-purple-500/40'
                                : status === 'completed'
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            <option value="new">🟡 New</option>
                            <option value="contacted">🔵 Contacted</option>
                            <option value="booked">🟣 Survey Booked</option>
                            <option value="completed">🟢 Completed</option>
                            <option value="archived">⚪ Archived</option>
                          </select>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                          <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Contact Info</p>
                          <a href={`tel:${lead.phone}`} className="font-bold text-blue-400 hover:underline flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" />
                            <span>{lead.phone}</span>
                          </a>
                          <a href={`mailto:${lead.email}`} className="text-slate-300 hover:underline flex items-center gap-1.5 truncate">
                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                            <span>{lead.email}</span>
                          </a>
                        </div>

                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                          <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Service & Specs</p>
                          <p className="font-bold text-white">{lead.serviceType}</p>
                          <p className="text-slate-400">{lead.itemCount ? `${lead.itemCount} items` : ''} • {lead.colorPreference || 'Standard'}</p>
                        </div>

                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                          <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Location & Property</p>
                          <p className="font-bold text-white flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-rose-400" />
                            <span>{lead.postcode}</span>
                          </p>
                          <p className="text-slate-400 truncate">{lead.address || lead.propertyType || 'West Yorkshire'}</p>
                        </div>

                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                          <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Timeline / Notes</p>
                          <p className="font-bold text-amber-300">{lead.timeframe || 'Flexible'}</p>
                          <p className="text-slate-400 line-clamp-2">{lead.notes || 'No extra notes provided'}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* ==========================================
            TAB 2: GALLERY & PORTFOLIO MANAGER
        ========================================== */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            
            {/* Gallery Top Action Bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span>Project Transformations & Before/After Gallery</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Manage interactive before/after sliders, change photos, customize product specs, and add new West Yorkshire installations.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <button
                    onClick={() => openGalleryModal()}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-all active:scale-98"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Transformation</span>
                  </button>

                  <button
                    onClick={() => onNavigate('gallery')}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer border border-slate-700"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Public Gallery</span>
                  </button>
                </div>
              </div>

              {/* Gallery Filter & Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Filter:</span>
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'windows', label: 'Windows' },
                    { id: 'doors', label: 'Doors' },
                    { id: 'bifolds', label: 'Bifolds' },
                    { id: 'fascia-soffit', label: 'Roofline' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setGalleryCategoryFilter(cat.id)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                        galleryCategoryFilter === cat.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>Total: <strong className="text-white">{galleryProjects.length}</strong> items</span>
                  {confirmGalleryReset ? (
                    <div className="flex items-center gap-1.5 bg-rose-950/80 p-1 rounded-lg border border-rose-800">
                      <span className="text-[10px] text-rose-300 font-bold px-1">Reset all items?</span>
                      <button
                        onClick={async () => {
                          await resetGalleryToDefaults();
                          setConfirmGalleryReset(false);
                        }}
                        className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setConfirmGalleryReset(false)}
                        className="bg-slate-700 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer"
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmGalleryReset(true)}
                      className="text-slate-500 hover:text-rose-400 text-xs flex items-center gap-1 cursor-pointer transition-colors"
                      title="Reset gallery to default showcase projects"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Defaults</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Project Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {galleryProjects
                .filter(p => galleryCategoryFilter === 'all' || p.category === galleryCategoryFilter)
                .map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-4 space-y-4 hover:border-slate-700 transition-colors shadow-lg"
                  >
                    {/* Top title and actions */}
                    <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                      <div>
                        <span className="inline-block bg-blue-900/40 text-blue-300 border border-blue-700/50 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1">
                          {proj.category}
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-white">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-rose-400" />
                            {proj.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-500" />
                            {proj.completionDate}
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => openGalleryModal(proj)}
                          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>

                        {deleteProjConfirmId === proj.id ? (
                          <div className="flex items-center gap-1 bg-rose-950 p-1 rounded-lg border border-rose-800">
                            <button
                              onClick={() => {
                                deleteGalleryProject(proj.id);
                                setDeleteProjConfirmId(null);
                              }}
                              className="bg-rose-600 text-white text-[10px] font-bold px-2 py-1 rounded cursor-pointer"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteProjConfirmId(null)}
                              className="bg-slate-800 text-slate-300 text-[10px] font-bold px-1.5 py-1 rounded cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteProjConfirmId(proj.id)}
                            className="bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300 p-1.5 rounded-lg cursor-pointer transition-colors"
                            title="Delete transformation"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Before & After Photo Preview Boxes */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Before Box */}
                      <div className="bg-slate-950 rounded-xl p-2 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Before Photo</span>
                          <button
                            onClick={() => openImagePicker('', `Before Photo (${proj.title})`, proj.beforeImage, (url) => {
                              updateGalleryProject(proj.id, { beforeImage: url });
                            })}
                            className="text-[10px] text-blue-400 hover:underline cursor-pointer"
                          >
                            Replace
                          </button>
                        </div>
                        <div className="h-28 rounded-lg overflow-hidden bg-slate-900 relative">
                          <img src={proj.beforeImage} alt="Before" className="w-full h-full object-cover" />
                        </div>
                      </div>

                      {/* After Box */}
                      <div className="bg-slate-950 rounded-xl p-2 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">After Photo</span>
                          <button
                            onClick={() => openImagePicker('', `After Photo (${proj.title})`, proj.afterImage, (url) => {
                              updateGalleryProject(proj.id, { afterImage: url });
                            })}
                            className="text-[10px] text-blue-400 hover:underline cursor-pointer"
                          >
                            Replace
                          </button>
                        </div>
                        <div className="h-28 rounded-lg overflow-hidden bg-slate-900 relative">
                          <img src={proj.afterImage} alt="After" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Specs info */}
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1.5">
                      <p className="text-slate-300 line-clamp-2">{proj.description}</p>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/80 text-[11px]">
                        <span className="text-slate-400 font-medium"><strong>Spec:</strong> {proj.productInstalled}</span>
                        <span className="text-blue-400 font-bold">{proj.energyRating}</span>
                      </div>
                    </div>

                  </div>
                ))}
            </div>

          </div>
        )}

        {/* ==========================================
            TAB 3: QUICK CONTENT EDITOR
        ========================================== */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Content Customization</h3>
                  <p className="text-xs text-slate-400">
                    Edit phone numbers, hero headlines, and company information across the entire site with immediate cloud sync.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (!isEditMode) toggleEditMode();
                    onNavigate('home');
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Launch Visual On-Page Editor</span>
                </button>
              </div>

              {/* Quick Field Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Phone */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Phone Number</span>
                    <button
                      onClick={() => openTextEditor({ key: 'phone', label: 'Company Phone', value: content.phone, type: 'text' })}
                      className="text-xs font-bold text-blue-400 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-base font-extrabold text-white">{content.phone}</p>
                  <p className="text-[11px] text-slate-500">Updated across header, top banner, quote modals, and footer.</p>
                </div>

                {/* Email */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Email</span>
                    <button
                      onClick={() => openTextEditor({ key: 'email', label: 'Company Email', value: content.email, type: 'text' })}
                      className="text-xs font-bold text-blue-400 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-base font-extrabold text-white">{content.email}</p>
                  <p className="text-[11px] text-slate-500">Official contact email for inquiries.</p>
                </div>

                {/* Trustpilot Score */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trustpilot Rating & Reviews</span>
                    <button
                      onClick={() => openTextEditor({ key: 'trustpilotScore', label: 'Trustpilot Score', value: content.trustpilotScore, type: 'text' })}
                      className="text-xs font-bold text-blue-400 hover:underline cursor-pointer"
                    >
                      Edit Score
                    </button>
                  </div>
                  <p className="text-base font-extrabold text-emerald-400">{content.trustpilotScore} / 5.0 ({content.trustpilotReviewsCount} reviews)</p>
                  <p className="text-[11px] text-slate-500">Displayed in Hero badge, Top banner, and reviews section.</p>
                </div>

                {/* Hero Headline */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Main Hero Headline</span>
                    <button
                      onClick={() => openTextEditor({ key: 'heroTitle', label: 'Hero Headline', value: content.heroTitle, type: 'textarea' })}
                      className="text-xs font-bold text-blue-400 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm font-bold text-white line-clamp-2">{content.heroTitle}</p>
                  <p className="text-[11px] text-slate-500">Primary headline visible to visitors on the homepage.</p>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ==========================================
            TAB 3: CPANEL HOSTING DEPLOYMENT
        ========================================== */}
        {activeTab === 'cpanel' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">cPanel Production Package</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Download the self-contained static distribution archive with Apache rewrite rules.
                </p>
              </div>
              <button
                onClick={handleDownloadCpanelZip}
                className="bg-[#0B4BBE] hover:bg-[#083C9A] text-white font-extrabold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg cursor-pointer transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download vortex-cpanel-dist.zip</span>
              </button>
            </div>

            {/* Step by step guide */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                How to upload to your cPanel Host in 3 Steps:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xs">1</div>
                  <h5 className="font-bold text-sm text-white">Log in to cPanel</h5>
                  <p className="text-xs text-slate-400">Open your web hosting control panel and click on <strong>File Manager</strong>.</p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xs">2</div>
                  <h5 className="font-bold text-sm text-white">Upload to public_html</h5>
                  <p className="text-xs text-slate-400">Navigate to <code>public_html/</code> and upload <code>vortex-cpanel-dist.zip</code>.</p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xs">3</div>
                  <h5 className="font-bold text-sm text-white">Right-Click & Extract</h5>
                  <p className="text-xs text-slate-400">Click <strong>Extract</strong> inside public_html. Your website is immediately live with HTTPS!</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB 4: SECURITY & BACKUP
        ========================================== */}
        {activeTab === 'security' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
            
            {/* Change Password */}
            <div className="space-y-4 border-b border-slate-800 pb-6 max-w-lg">
              <h4 className="text-base font-bold text-white">Update Admin Password</h4>
              <p className="text-xs text-slate-400">
                Change the password required to access <code>/admin</code> and edit the website.
              </p>

              <div className="space-y-3">
                <input
                  type="password"
                  placeholder="Enter new password (min 6 chars)..."
                  value={newPasswordInput}
                  onChange={(e) => {
                    setNewPasswordInput(e.target.value);
                    setPassChangeSuccess(false);
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-white text-xs sm:text-sm focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => {
                    if (newPasswordInput.trim().length >= 4) {
                      setAdminPassword(newPasswordInput.trim());
                      setPassChangeSuccess(true);
                      setNewPasswordInput('');
                    }
                  }}
                  disabled={newPasswordInput.trim().length < 4}
                  className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
                >
                  Save New Password
                </button>

                {passChangeSuccess && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Password updated successfully and saved in database!
                  </p>
                )}
              </div>
            </div>

            {/* Reset Factory Content */}
            <div className="space-y-3 max-w-lg">
              <h4 className="text-base font-bold text-white">Reset Default Site Content</h4>
              <p className="text-xs text-slate-400">
                Restores all text, headlines, and standard images back to default factory settings.
              </p>

              {confirmReset ? (
                <div className="bg-red-950/80 border border-red-800 p-4 rounded-xl space-y-3">
                  <p className="text-xs text-red-200 font-bold">
                    Are you sure? This will revert all custom edits made via the visual editor.
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        resetToDefaults();
                        setConfirmReset(false);
                      }}
                      className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                    >
                      Yes, Reset Content
                    </button>
                    <button
                      onClick={() => setConfirmReset(false)}
                      className="bg-slate-800 text-slate-300 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-slate-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmReset(true)}
                  className="bg-slate-800 hover:bg-red-950/80 hover:text-red-300 text-slate-400 text-xs font-bold px-4 py-2 rounded-xl border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Content to Defaults</span>
                </button>
              )}
            </div>

          </div>
        )}

      </main>

    </div>
  );
};
