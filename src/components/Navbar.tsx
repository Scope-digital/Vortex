import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Home,
  CheckCircle2
} from 'lucide-react';
import { PageRoute } from '../types';
import { VortexLogo } from './VortexLogo';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  // Close dropdown on click outside
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const windowLinks = [
    { title: 'All Windows Overview', route: 'windows' as PageRoute, desc: 'Complete range of energy-rated UPVC & Aluminium' },
    { title: 'Casement Windows', route: 'windows-casement' as PageRoute, desc: 'Classic British design, A++ efficiency' },
    { title: 'Flush Sash Windows', route: 'windows-flush-sash' as PageRoute, desc: 'Sits flush inside frame, heritage timber look' },
    { title: 'Sliding Sash Windows', route: 'windows-sliding-sash' as PageRoute, desc: 'Georgian & Victorian vertical sliders' },
    { title: 'Tilt & Turn Windows', route: 'windows-tilt-turn' as PageRoute, desc: 'Dual opening for secure ventilation & easy clean' },
    { title: 'Bay & Bow Windows', route: 'windows-bay-bow' as PageRoute, desc: 'Panoramic natural light & structural support' },
    { title: 'Aluminium Windows', route: 'windows-aluminium' as PageRoute, desc: 'Ultra-slim contemporary architectural frames' },
  ];

  const doorLinks = [
    { title: 'All Doors Overview', route: 'doors' as PageRoute, desc: 'High-security entrance & patio door systems' },
    { title: 'Composite Doors', route: 'doors-composite' as PageRoute, desc: 'Solid 48mm core, Ultion 3* lock, 35+ designs' },
    { title: 'Bifolding Doors', route: 'doors-bifold' as PageRoute, desc: 'Ultra-slim aluminium panoramic folding doors' },
    { title: 'French Patio Doors', route: 'doors-french' as PageRoute, desc: 'Classic double-opening garden entrance' },
    { title: 'Sliding Patio Doors', route: 'doors-patio' as PageRoute, desc: 'Effortless sliding wide-view glass spans' },
    { title: 'UPVC Front & Back Doors', route: 'doors-upvc' as PageRoute, desc: 'Durable steel-reinforced affordable security' },
  ];

  const rooflineLinks = [
    { title: 'All Roofline Overview', route: 'fascia-soffit' as PageRoute, desc: 'Complete fascia, soffit & guttering solutions' },
    { title: 'UPVC Fascias & Bargeboards', route: 'fascia-upvc' as PageRoute, desc: '18mm full-replacement solid rot-free boards' },
    { title: 'Soffits & Attic Ventilation', route: 'soffits-vented' as PageRoute, desc: 'Vented & hollow soffits preventing attic damp' },
    { title: 'Guttering Services', route: 'guttering-services' as PageRoute, desc: 'Deep-flow high-capacity storm rainwater systems' },
    { title: 'Dry Verge & UPVC Cladding', route: 'cladding-dry-verge' as PageRoute, desc: 'Mortar-free gable protection & wall cladding' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const isWindowsActive = currentRoute.startsWith('windows');
  const isDoorsActive = currentRoute.startsWith('doors');
  const isRooflineActive = currentRoute.startsWith('fascia') || currentRoute.startsWith('soffit') || currentRoute.startsWith('gutter') || currentRoute.startsWith('cladding');

  return (
    <header 
      id="main-navigation-bar" 
      ref={navRef}
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo matching screenshot */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none py-1"
          >
            <VortexLogo variant="light" size="md" className="group-hover:scale-102 transition-transform" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Home */}
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-[15px] font-semibold transition-colors cursor-pointer relative ${
                currentRoute === 'home'
                  ? 'text-blue-700 border-b-2 border-blue-700 pb-1.5'
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              Home
            </button>

            {/* Windows Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('windows')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-link-windows"
                onClick={() => handleNavClick('windows')}
                className={`px-3 py-2 text-[15px] font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  isWindowsActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                <span>Windows</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'windows' ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'windows' && (
                <div 
                  id="dropdown-windows-menu"
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="p-2 border-b border-slate-100 bg-slate-50/60 rounded-lg mb-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">A++ Energy Rated Windows</p>
                  </div>
                  {windowLinks.map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex flex-col group cursor-pointer"
                    >
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700 flex items-center justify-between">
                        {item.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-600" />
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Doors Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('doors')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-link-doors"
                onClick={() => handleNavClick('doors')}
                className={`px-3 py-2 text-[15px] font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  isDoorsActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                <span>Doors</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'doors' ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'doors' && (
                <div 
                  id="dropdown-doors-menu"
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="p-2 border-b border-slate-100 bg-slate-50/60 rounded-lg mb-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">High Security Doors & Bifolds</p>
                  </div>
                  {doorLinks.map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex flex-col group cursor-pointer"
                    >
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700 flex items-center justify-between">
                        {item.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-600" />
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fascia & Soffit Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('roofline')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-link-fascia"
                onClick={() => handleNavClick('fascia-soffit')}
                className={`px-3 py-2 text-[15px] font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  isRooflineActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                <span>Fascia & Soffit</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'roofline' ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'roofline' && (
                <div 
                  id="dropdown-roofline-menu"
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="p-2 border-b border-slate-100 bg-slate-50/60 rounded-lg mb-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Roofline & Gutter Solutions</p>
                  </div>
                  {rooflineLinks.map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex flex-col group cursor-pointer"
                    >
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700 flex items-center justify-between">
                        {item.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-600" />
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery */}
            <button
              id="nav-link-gallery"
              onClick={() => handleNavClick('gallery')}
              className={`px-3 py-2 text-[15px] font-semibold transition-colors cursor-pointer ${
                currentRoute === 'gallery' ? 'text-blue-700 border-b-2 border-blue-700 pb-1.5' : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              Gallery
            </button>

            {/* About Us */}
            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-[15px] font-semibold transition-colors cursor-pointer ${
                currentRoute === 'about' ? 'text-blue-700 border-b-2 border-blue-700 pb-1.5' : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              About Us
            </button>

            {/* Contact */}
            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-[15px] font-semibold transition-colors cursor-pointer ${
                currentRoute === 'contact' ? 'text-blue-700 border-b-2 border-blue-700 pb-1.5' : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Button matching screenshot */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-get-a-quote-btn"
              onClick={onOpenQuoteModal}
              className="bg-[#0B4BBE] hover:bg-[#093D9B] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white text-[#0B4BBE]" />
              <span className="tracking-wide">GET A FREE QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#0B4BBE] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-[#0B4BBE]" />
              <span>Quote</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white border-t border-slate-200 z-50 overflow-y-auto p-4 flex flex-col justify-between animate-in fade-in duration-200"
        >
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-lg font-bold text-base ${
                currentRoute === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-800'
              }`}
            >
              Home
            </button>

            {/* Mobile Windows Accordion */}
            <div>
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'windows' ? null : 'windows')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-bold text-base text-slate-800 hover:bg-slate-50"
              >
                <span>Windows</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'windows' ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'windows' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg">
                  {windowLinks.map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className="w-full text-left py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-700"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Doors Accordion */}
            <div>
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'doors' ? null : 'doors')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-bold text-base text-slate-800 hover:bg-slate-50"
              >
                <span>Doors</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'doors' ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'doors' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg">
                  {doorLinks.map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className="w-full text-left py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-700"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Fascia & Soffit Accordion */}
            <div>
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'roofline' ? null : 'roofline')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-bold text-base text-slate-800 hover:bg-slate-50"
              >
                <span>Fascia & Soffit</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'roofline' ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'roofline' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg">
                  {rooflineLinks.map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className="w-full text-left py-2 px-3 text-sm font-medium text-slate-700 hover:text-blue-700"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`w-full text-left px-4 py-3 rounded-lg font-bold text-base ${
                currentRoute === 'gallery' ? 'bg-blue-50 text-blue-700' : 'text-slate-800'
              }`}
            >
              Gallery & Before/After
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-3 rounded-lg font-bold text-base ${
                currentRoute === 'about' ? 'bg-blue-50 text-blue-700' : 'text-slate-800'
              }`}
            >
              About Us (22 Years Experience)
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-4 py-3 rounded-lg font-bold text-base ${
                currentRoute === 'contact' ? 'bg-blue-50 text-blue-700' : 'text-slate-800'
              }`}
            >
              Contact & Showroom
            </button>
          </div>

          {/* Bottom Call & Quote in Drawer */}
          <div className="pt-6 pb-4 border-t border-slate-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#0B4BBE] text-white font-bold text-base py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white text-[#0B4BBE]" />
              <span>GET A FREE QUOTE</span>
            </button>
            <a
              href="tel:01924888123"
              className="w-full bg-slate-100 text-slate-800 font-semibold text-center text-sm py-3 rounded-xl block hover:bg-slate-200 transition-colors"
            >
              Call Dewsbury Office: 01924 888 123
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
