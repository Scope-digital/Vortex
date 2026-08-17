import { ProjectCase, Testimonial } from '../types';

export const galleryProjects: ProjectCase[] = [
  {
    id: 'proj-1',
    title: 'Full House Window & Composite Door Transformation',
    category: 'windows',
    location: 'Dewsbury, West Yorkshire',
    completionDate: 'June 2024',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Replaced 9 old drafty brown timber windows with high-efficiency Anthracite Grey flush sash UPVC windows and a matching designer composite door.',
    productInstalled: 'Flush Sash A++ Windows & Solid Core Composite Door',
    color: 'Anthracite Grey (RAL 7016)',
    energyRating: 'A++ Triple Glazed'
  },
  {
    id: 'proj-2',
    title: 'Modern Bifolding Door Kitchen Extension',
    category: 'bifolds',
    location: 'Mirfield, West Yorkshire',
    completionDate: 'May 2024',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Installed a 5-leaf slimline aluminium bifold door system with sunken flush threshold, merging open plan kitchen with garden patio.',
    productInstalled: 'Aluminium Bifold Doors (5 Leaves)',
    color: 'Matt Anthracite Grey',
    energyRating: '1.2 W/m²K U-Value'
  },
  {
    id: 'proj-3',
    title: 'Complete Roofline & Deep Flow Guttering Overhaul',
    category: 'fascia-soffit',
    location: 'Wakefield, West Yorkshire',
    completionDate: 'July 2024',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Stripped out decaying wooden bargeboards and installed 18mm full-replacement Black Ash fascias, vented soffits, and high-capacity deep flow guttering.',
    productInstalled: '18mm Full Replacement Fascias & Deep Flow Gutters',
    color: 'Black Ash Foil',
    energyRating: 'Continuous Loft Ventilation'
  },
  {
    id: 'proj-4',
    title: 'Victorian Stone Cottage Sliding Sash Windows',
    category: 'windows',
    location: 'Huddersfield, West Yorkshire',
    completionDate: 'April 2024',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke sliding sash windows in Agate Grey with authentic astragal Georgian bars and run-through sash horns to preserve cottage character.',
    productInstalled: 'Vertical Sliding Sash with Tilt-in Balances',
    color: 'Agate Grey Woodgrain',
    energyRating: 'A-Rated Acoustic Glass'
  },
  {
    id: 'proj-5',
    title: 'Designer High Security Front Entrance Door',
    category: 'doors',
    location: 'Batley, West Yorkshire',
    completionDate: 'August 2024',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
    description: 'Installation of a bespoke Chartwell Green composite front door with satin etched glass, 1200mm brushed steel pull bar, and Ultion 3* smart lock.',
    productInstalled: 'Solid Core Composite Door with Ultion 3*',
    color: 'Chartwell Green',
    energyRating: 'Secured by Design Certified'
  },
  {
    id: 'proj-6',
    title: 'Bay Window Restoration & Replacement',
    category: 'windows',
    location: 'Leeds, West Yorkshire',
    completionDate: 'March 2024',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    description: 'Structural jack reinforcement and 5-facet bay window replacement in smooth white UPVC with energy-efficient Planitherm glazing.',
    productInstalled: '5-Facet Load-Bearing Bay Window',
    color: 'Clean White UPVC',
    energyRating: 'A++ Energy Rated'
  }
];

export const testimonialsList: Testimonial[] = [
  {
    id: 't-1',
    name: 'David & Sarah M.',
    location: 'Dewsbury, WF12',
    rating: 5,
    date: '2 weeks ago',
    service: 'Full House Windows & Composite Door',
    text: 'From the initial quote with zero pushy sales tactics to the final installation by Chris and his team, Vortex was outstanding. The Anthracite Grey windows have completely transformed our 1930s home and cut our heating bills right away. Highly recommended!',
    verified: true
  },
  {
    id: 't-2',
    name: 'Mark Henderson',
    location: 'Mirfield, WF14',
    rating: 5,
    date: '1 month ago',
    service: 'Aluminium Bifold Doors',
    text: 'We had a 4-metre bifold door installed across our new open-plan extension. The quality is second to none, the flush floor threshold is completely level with our patio, and they slide effortlessly. Friendly, on time, and left everything spotless.',
    verified: true
  },
  {
    id: 't-3',
    name: 'Gillian Priestley',
    location: 'Wakefield, WF2',
    rating: 5,
    date: '1 month ago',
    service: 'Fascias, Soffits & Deep Guttering',
    text: 'Our old wooden fascias were rotting and leaking every winter. Vortex stripped them all back, repaired the timber ends and fitted solid black ash fascias with deep flow guttering. The roofline looks brand new and no more water overflow during heavy rain!',
    verified: true
  },
  {
    id: 't-4',
    name: 'Imran & Nadia K.',
    location: 'Batley, WF17',
    rating: 5,
    date: '2 months ago',
    service: 'Composite Front Door & Tilt/Turn Windows',
    text: 'Top notch service from start to finish. The composite door feels like a bank vault with the Ultion lock, and the sound insulation from the busy road outside is remarkable. 5 stars all the way.',
    verified: true
  },
  {
    id: 't-5',
    name: 'Robert Thornton',
    location: 'Huddersfield, HD8',
    rating: 5,
    date: '3 months ago',
    service: 'Sliding Sash UPVC Windows',
    text: 'Living in a period conservation-style stone cottage, we were nervous about UPVC. But the sliding sash windows with run-through horns look authentic and operate like a dream. Beautiful craftsmanship.',
    verified: true
  }
];
