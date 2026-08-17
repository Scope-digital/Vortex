/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { ContentProvider } from './context/ContentContext';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FreeQuoteModal } from './components/FreeQuoteModal';
import { AdminBar } from './components/admin/AdminBar';
import { VisualEditModal } from './components/admin/VisualEditModal';
import { ImagePickerModal } from './components/admin/ImagePickerModal';
import { GalleryItemModal } from './components/admin/GalleryItemModal';

// Pages
import { HomePage } from './pages/HomePage';
import { WindowsOverviewPage } from './pages/WindowsOverviewPage';
import { DoorsOverviewPage } from './pages/DoorsOverviewPage';
import { RooflineOverviewPage } from './pages/RooflineOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

// Data
import { servicesData } from './data/servicesData';

function AppContent() {
  // Initialize route from pathname (e.g. /admin) or hash
  const getInitialRoute = (): PageRoute => {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const target = path || hash;

    if (target === 'admin') return 'admin';
    if (servicesData[target as PageRoute]) return target as PageRoute;
    if (['windows', 'doors', 'fascia-soffit', 'gallery', 'about', 'contact', 'admin'].includes(target)) {
      return target as PageRoute;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePref, setQuotePref] = useState<string | undefined>(undefined);

  // Sync URL on route change and listen to browser back/forward
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const targetPath = currentRoute === 'home' ? '/' : `/${currentRoute}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ route: currentRoute }, '', targetPath);
    }
  }, [currentRoute]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (path === 'admin') {
        setCurrentRoute('admin');
      } else if (servicesData[path as PageRoute]) {
        setCurrentRoute(path as PageRoute);
      } else if (['windows', 'doors', 'fascia-soffit', 'gallery', 'about', 'contact'].includes(path)) {
        setCurrentRoute(path as PageRoute);
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
  };

  const handleOpenQuoteModal = (pref?: string) => {
    setQuotePref(pref);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuotePref(undefined);
  };

  // If on /admin route, render full Admin Portal
  if (currentRoute === 'admin') {
    return (
      <div id="vortex-admin-root" className="min-h-screen bg-slate-950 font-sans text-slate-100">
        <AdminPage onNavigate={handleNavigate} />
        <VisualEditModal />
        <ImagePickerModal />
        <GalleryItemModal />
      </div>
    );
  }

  const renderCurrentPage = () => {
    // If it's an individual sub-service detail page
    if (servicesData[currentRoute]) {
      return (
        <ServiceDetailPage
          service={servicesData[currentRoute]}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'windows':
        return (
          <WindowsOverviewPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'doors':
        return (
          <DoorsOverviewPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'fascia-soffit':
        return (
          <RooflineOverviewPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
    }
  };

  return (
    <div id="vortex-app-root" className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Top Admin Control Bar (Only renders when logged in) */}
      <AdminBar onNavigate={handleNavigate} currentRoute={currentRoute} />

      {/* Top Banner with FREE QUOTES badge matching screenshot */}
      <TopBanner
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Navigation Bar matching screenshot */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Rich Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Global Interactive Free Quote Modal */}
      <FreeQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={quotePref}
      />

      {/* Global Visual Content Editing Modals */}
      <VisualEditModal />
      <ImagePickerModal />
      <GalleryItemModal />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
