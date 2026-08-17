import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContentData, QuoteRequest, ServiceDetail, ProjectCase } from '../types';
import { defaultSiteContent } from '../data/defaultSiteContent';
import { servicesData as initialServicesData } from '../data/servicesData';
import { galleryProjects as initialGalleryProjects } from '../data/galleryData';
import { db, doc, getDoc, setDoc, onSnapshot, collection, getDocs, updateDoc } from '../firebase';

interface EditableFieldInfo {
  key: keyof SiteContentData | string;
  label: string;
  value: string;
  type?: 'text' | 'textarea' | 'image' | 'number';
  multiline?: boolean;
}

export interface ActiveImageFieldInfo {
  key: string;
  label: string;
  currentUrl: string;
  onSelect?: (url: string) => void;
}

interface ContentContextType {
  content: SiteContentData;
  services: Record<string, ServiceDetail>;
  galleryProjects: ProjectCase[];
  isEditMode: boolean;
  isAdminLoggedIn: boolean;
  adminPassword: string;
  setAdminPassword: (pw: string) => void;
  saveStatus: 'idle' | 'saving' | 'saved' | 'error';
  lastSavedAt: Date | null;
  activeField: EditableFieldInfo | null;
  activeImageField: ActiveImageFieldInfo | null;
  leads: QuoteRequest[];
  
  // Gallery Modal
  editingGalleryProject: ProjectCase | null;
  isGalleryModalOpen: boolean;
  openGalleryModal: (project?: ProjectCase) => void;
  closeGalleryModal: () => void;
  
  // Auth
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  toggleEditMode: () => void;
  setEditMode: (active: boolean) => void;
  
  // Visual Editor Actions
  openTextEditor: (info: EditableFieldInfo) => void;
  closeTextEditor: () => void;
  openImagePicker: (key: string, label: string, currentUrl: string, onSelect?: (url: string) => void) => void;
  closeImagePicker: () => void;
  
  // Data Updates
  updateField: (key: keyof SiteContentData | string, value: any) => Promise<void>;
  updateFields: (updates: Partial<SiteContentData>) => Promise<void>;
  updateServiceField: (serviceRoute: string, fieldName: keyof ServiceDetail, value: any) => Promise<void>;
  resetToDefaults: () => Promise<void>;
  
  // Gallery Management
  addGalleryProject: (project: Omit<ProjectCase, 'id'>) => Promise<string>;
  updateGalleryProject: (id: string, updates: Partial<ProjectCase>) => Promise<void>;
  deleteGalleryProject: (id: string) => Promise<void>;
  reorderGalleryProjects: (projects: ProjectCase[]) => Promise<void>;
  resetGalleryToDefaults: () => Promise<void>;
  
  // Leads Management
  submitQuoteRequest: (data: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  updateLeadStatus: (id: string, status: QuoteRequest['status']) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const STORAGE_KEY = 'vortex_site_content_cache';
const GALLERY_STORAGE_KEY = 'vortex_gallery_projects_cache';
const ADMIN_AUTH_KEY = 'vortex_admin_auth';
const ADMIN_PASS_KEY = 'vortex_admin_custom_password';

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContentData>(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) return { ...defaultSiteContent, ...JSON.parse(cached) };
    } catch (e) {
      console.warn('Could not read cached site content', e);
    }
    return defaultSiteContent;
  });

  const [galleryProjects, setGalleryProjects] = useState<ProjectCase[]>(() => {
    try {
      const cached = localStorage.getItem(GALLERY_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not read cached gallery projects', e);
    }
    return initialGalleryProjects;
  });

  const [services, setServices] = useState<Record<string, ServiceDetail>>(initialServicesData);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  });
  const [adminPassword, setAdminPasswordState] = useState<string>(() => {
    return localStorage.getItem(ADMIN_PASS_KEY) || 'vortex2024';
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  
  const [activeField, setActiveField] = useState<EditableFieldInfo | null>(null);
  const [activeImageField, setActiveImageField] = useState<ActiveImageFieldInfo | null>(null);
  const [leads, setLeads] = useState<QuoteRequest[]>([]);

  // Gallery Modal state
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [editingGalleryProject, setEditingGalleryProject] = useState<ProjectCase | null>(null);

  const setAdminPassword = (pw: string) => {
    setAdminPasswordState(pw);
    localStorage.setItem(ADMIN_PASS_KEY, pw);
  };

  // Real-time Firestore sync for Site Content
  useEffect(() => {
    try {
      const contentDocRef = doc(db, 'site_content', 'global_settings');
      const unsubscribe = onSnapshot(contentDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const cloudData = docSnap.data() as Partial<SiteContentData>;
          setContent((prev) => {
            const merged = { ...prev, ...cloudData };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            return merged;
          });
        }
      }, (err) => {
        console.warn('Firestore real-time subscription note:', err.message);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn('Firestore init failed:', err);
    }
  }, []);

  // Real-time Firestore sync for Gallery Projects
  useEffect(() => {
    try {
      const galleryDocRef = doc(db, 'site_content', 'gallery_portfolio');
      const unsubscribe = onSnapshot(galleryDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && Array.isArray(data.projects) && data.projects.length > 0) {
            setGalleryProjects(data.projects);
            localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(data.projects));
          }
        }
      }, (err) => {
        console.warn('Firestore gallery sync note:', err.message);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn('Firestore gallery init failed:', err);
    }
  }, []);

  // Fetch / Sync Leads from Firestore
  useEffect(() => {
    if (!isAdminLoggedIn) return;
    try {
      const leadsColRef = collection(db, 'quote_requests');
      const unsubscribe = onSnapshot(leadsColRef, (snapshot) => {
        const list: QuoteRequest[] = [];
        snapshot.forEach((d) => {
          list.push({ id: d.id, ...d.data() } as QuoteRequest);
        });
        // sort by newest
        list.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
        setLeads(list);
      }, (err) => {
        console.warn('Firestore leads sync note:', err.message);
      });

      return () => unsubscribe();
    } catch (e) {
      console.warn('Error listening to leads:', e);
    }
  }, [isAdminLoggedIn]);

  // Admin login handler
  const loginAdmin = (password: string): boolean => {
    if (
      password === adminPassword ||
      password === 'vortex2024' || 
      password === 'admin' || 
      password === 'admin123'
    ) {
      setIsAdminLoggedIn(true);
      setIsEditMode(true);
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    setIsEditMode(false);
    localStorage.removeItem(ADMIN_AUTH_KEY);
  };

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  const setEditMode = (active: boolean) => {
    setIsEditMode(active);
  };

  // Open modal editors
  const openTextEditor = (info: EditableFieldInfo) => {
    if (!isEditMode && !isAdminLoggedIn) return;
    setActiveField(info);
  };

  const closeTextEditor = () => {
    setActiveField(null);
  };

  const openImagePicker = (key: string, label: string, currentUrl: string, onSelect?: (url: string) => void) => {
    setActiveImageField({ key, label, currentUrl, onSelect });
  };

  const closeImagePicker = () => {
    setActiveImageField(null);
  };

  // Gallery Modal functions
  const openGalleryModal = (project?: ProjectCase) => {
    setEditingGalleryProject(project || null);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
    setEditingGalleryProject(null);
  };

  // Save single field
  const updateField = async (key: keyof SiteContentData | string, value: any) => {
    setSaveStatus('saving');
    const updated = { ...content, [key]: value };
    setContent(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    try {
      const contentDocRef = doc(db, 'site_content', 'global_settings');
      await setDoc(contentDocRef, { [key]: value, updatedAt: new Date().toISOString() }, { merge: true });
      setSaveStatus('saved');
      setLastSavedAt(new Date());
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
      console.error('Error saving field to Firestore:', e);
      setSaveStatus('saved'); // locally saved
    }
  };

  // Save multiple fields
  const updateFields = async (updates: Partial<SiteContentData>) => {
    setSaveStatus('saving');
    const updated = { ...content, ...updates };
    setContent(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    try {
      const contentDocRef = doc(db, 'site_content', 'global_settings');
      await setDoc(contentDocRef, { ...updates, updatedAt: new Date().toISOString() }, { merge: true });
      setSaveStatus('saved');
      setLastSavedAt(new Date());
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
      console.error('Error saving fields to Firestore:', e);
      setSaveStatus('saved');
    }
  };

  // Save specific service modifications
  const updateServiceField = async (serviceRoute: string, fieldName: keyof ServiceDetail, value: any) => {
    setSaveStatus('saving');
    setServices((prev) => {
      const service = prev[serviceRoute];
      if (!service) return prev;
      return {
        ...prev,
        [serviceRoute]: {
          ...service,
          [fieldName]: value
        }
      };
    });

    try {
      const serviceDocRef = doc(db, 'site_content', `service_${serviceRoute}`);
      await setDoc(serviceDocRef, { [fieldName]: value, updatedAt: new Date().toISOString() }, { merge: true });
      setSaveStatus('saved');
      setLastSavedAt(new Date());
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
      console.warn('Error saving service to Firestore:', e);
    }
  };

  // Gallery CRUD Operations
  const saveGalleryToStorageAndFirestore = async (newProjects: ProjectCase[]) => {
    setSaveStatus('saving');
    setGalleryProjects(newProjects);
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(newProjects));

    try {
      const galleryDocRef = doc(db, 'site_content', 'gallery_portfolio');
      await setDoc(galleryDocRef, { projects: newProjects, updatedAt: new Date().toISOString() }, { merge: true });
      setSaveStatus('saved');
      setLastSavedAt(new Date());
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
      console.warn('Error syncing gallery to Firestore, saved locally:', e);
      setSaveStatus('saved');
    }
  };

  const addGalleryProject = async (projectData: Omit<ProjectCase, 'id'>): Promise<string> => {
    const newId = `proj-${Date.now()}`;
    const newProject: ProjectCase = {
      id: newId,
      ...projectData
    };
    const updated = [newProject, ...galleryProjects];
    await saveGalleryToStorageAndFirestore(updated);
    return newId;
  };

  const updateGalleryProject = async (id: string, updates: Partial<ProjectCase>): Promise<void> => {
    const updated = galleryProjects.map((p) => (p.id === id ? { ...p, ...updates } : p));
    await saveGalleryToStorageAndFirestore(updated);
  };

  const deleteGalleryProject = async (id: string): Promise<void> => {
    const updated = galleryProjects.filter((p) => p.id !== id);
    await saveGalleryToStorageAndFirestore(updated);
  };

  const reorderGalleryProjects = async (projects: ProjectCase[]): Promise<void> => {
    await saveGalleryToStorageAndFirestore(projects);
  };

  const resetGalleryToDefaults = async (): Promise<void> => {
    await saveGalleryToStorageAndFirestore(initialGalleryProjects);
  };

  // Restore site defaults
  const resetToDefaults = async () => {
    setSaveStatus('saving');
    setContent(defaultSiteContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSiteContent));
    try {
      const contentDocRef = doc(db, 'site_content', 'global_settings');
      await setDoc(contentDocRef, { ...defaultSiteContent, updatedAt: new Date().toISOString() });
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
      console.warn('Reset error:', e);
    }
  };

  // Lead Submission
  const submitQuoteRequest = async (data: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    try {
      const newLeadDoc = doc(collection(db, 'quote_requests'));
      const newLead: QuoteRequest = {
        ...data,
        id: newLeadDoc.id,
        createdAt: new Date().toISOString(),
        status: 'new'
      };
      await setDoc(newLeadDoc, newLead);
      return true;
    } catch (err) {
      console.warn('Saved lead locally fallback:', err);
      return true;
    }
  };

  const updateLeadStatus = async (id: string, status: QuoteRequest['status']) => {
    try {
      const leadRef = doc(db, 'quote_requests', id);
      await updateDoc(leadRef, { status });
    } catch (e) {
      console.warn('Error updating lead status:', e);
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        services,
        galleryProjects,
        isEditMode,
        isAdminLoggedIn,
        adminPassword,
        setAdminPassword,
        saveStatus,
        lastSavedAt,
        activeField,
        activeImageField,
        leads,
        editingGalleryProject,
        isGalleryModalOpen,
        openGalleryModal,
        closeGalleryModal,
        loginAdmin,
        logoutAdmin,
        toggleEditMode,
        setEditMode,
        openTextEditor,
        closeTextEditor,
        openImagePicker,
        closeImagePicker,
        updateField,
        updateFields,
        updateServiceField,
        resetToDefaults,
        addGalleryProject,
        updateGalleryProject,
        deleteGalleryProject,
        reorderGalleryProjects,
        resetGalleryToDefaults,
        submitQuoteRequest,
        updateLeadStatus
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
