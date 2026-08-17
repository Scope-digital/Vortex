export type PageRoute = 
  | 'home'
  | 'windows'
  | 'windows-casement'
  | 'windows-flush-sash'
  | 'windows-sliding-sash'
  | 'windows-tilt-turn'
  | 'windows-bay-bow'
  | 'windows-aluminium'
  | 'doors'
  | 'doors-composite'
  | 'doors-upvc'
  | 'doors-bifold'
  | 'doors-french'
  | 'doors-patio'
  | 'fascia-soffit'
  | 'fascia-upvc'
  | 'soffits-vented'
  | 'guttering-services'
  | 'cladding-dry-verge'
  | 'gallery'
  | 'about'
  | 'contact'
  | 'quote-builder'
  | 'admin'
  | 'admin-leads';

export interface ServiceDetail {
  id: string;
  route: PageRoute;
  category: 'windows' | 'doors' | 'roofline';
  title: string;
  shortTitle: string;
  badge?: string;
  tagline: string;
  heroImage: string;
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
    iconName: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  colorOptions: {
    name: string;
    hex: string;
    previewImg?: string;
  }[];
  benefits: string[];
  galleryImages: {
    url: string;
    caption: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ProjectCase {
  id: string;
  title: string;
  category: 'windows' | 'doors' | 'fascia-soffit' | 'bifolds';
  location: string;
  completionDate: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  productInstalled: string;
  color: string;
  energyRating: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export interface QuoteRequest {
  id?: string;
  serviceType: string;
  subType?: string;
  itemCount?: number;
  propertyType?: string;
  colorPreference?: string;
  timeframe?: string;
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  address?: string;
  notes?: string;
  createdAt?: string;
  status?: 'new' | 'contacted' | 'quoted' | 'completed';
}

export interface SiteContentData {
  // Global & Header
  brandName: string;
  phone: string;
  email: string;
  address: string;
  hoursWeekday: string;
  hoursSaturday: string;
  topBannerBadge: string;
  topBannerText: string;
  topBannerLocation: string;
  trustpilotScore: string;
  trustpilotReviewsCount: string;

  // Home Hero
  heroEyebrow: string;
  heroTitle: string;
  heroTagline: string;
  heroBadge: string;
  heroImage: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  // 4 Pillars Strip
  pillars: {
    title: string;
    subtitle: string;
    iconName: string;
  }[];

  // Visualizer Header
  visualizerHeading: string;
  visualizerSubheading: string;

  // About Snippet Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutStatYears: string;
  aboutStatHomes: string;
  aboutImage: string;

  // Bottom CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;

  // Service details overrides
  servicesOverride?: Record<string, Partial<ServiceDetail>>;
}
