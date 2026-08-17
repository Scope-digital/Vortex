import { ServiceDetail } from '../types';

export const servicesData: Record<string, ServiceDetail> = {
  'windows-casement': {
    id: 'windows-casement',
    route: 'windows-casement',
    category: 'windows',
    title: 'UPVC Casement Windows',
    shortTitle: 'Casement Windows',
    badge: 'Best Seller',
    tagline: 'Timeless style, exceptional thermal performance, and unmatched security for every British home.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    overview: 'Our UPVC casement windows are the UK’s most popular window choice. Engineered with multi-chambered profile technology and energy-rated double or triple glazing, they offer an unbeatable combination of weather resistance, low maintenance, and energy efficiency, keeping your home warm and secure throughout the year.',
    keyFeatures: [
      {
        title: 'A++ Energy Rating',
        description: 'Multi-chambered profiles with warm-edge spacer bars reduce heat loss by up to 40%.',
        iconName: 'Zap'
      },
      {
        title: 'Secured by Design',
        description: 'High-security multi-point locking systems with anti-jemmy hinge bolts as standard.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Acoustic Soundproofing',
        description: 'High-density argon-filled acoustic glazing blocks out road and neighborhood noise.',
        iconName: 'VolumeX'
      },
      {
        title: 'Zero Maintenance',
        description: 'UV-stabilized UPVC will never rot, peel, rust, or require painting. Just wipe clean.',
        iconName: 'Sparkles'
      }
    ],
    specifications: [
      { label: 'Profile Depth', value: '70mm multi-chambered UPVC' },
      { label: 'Energy Rating', value: 'A++ as standard (A+++ Triple Glazed)' },
      { label: 'U-Value', value: 'Down to 0.8 W/m²K' },
      { label: 'Locking Mechanism', value: 'High security shootbolt & mushroom cams' },
      { label: 'Guarantee', value: '10-Year Insurance-Backed Guarantee' },
      { label: 'Glazing Options', value: '28mm Double / 36mm Triple Glazing' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Smooth White', hex: '#F9FAFB' },
      { name: 'Chartwell Green', hex: '#84A98C' },
      { name: 'Agate Grey', hex: '#B5BAA7' },
      { name: 'Golden Oak', hex: '#B45309' },
      { name: 'Black Ash', hex: '#111827' }
    ],
    benefits: [
      'Custom manufactured to your exact window apertures in Dewsbury',
      'Choose from side-hung, top-hung, or fixed dummy sash configurations',
      'Optional Georgian bars, astragal bars, or leaded decorative glass',
      'Night-vent locking facility for secure fresh air ventilation',
      'Complies fully with Document L and Document Q building regulations'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        caption: 'Anthracite Grey Casement Windows on Modern White Render'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        caption: 'Clean White UPVC Casements with Georgian Grille Details'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
        caption: 'Large Picture and Side Opening Casement Window Set'
      }
    ],
    faqs: [
      {
        question: 'How long does casement window installation take?',
        answer: 'Most standard full-house window replacements (8–10 windows) are completed within 1 to 2 days by our certified in-house fitting team.'
      },
      {
        question: 'Are Vortex casement windows FENSA certified?',
        answer: 'Yes! All Vortex installations come with a full FENSA certificate and a 10-year insurance-backed guarantee.'
      },
      {
        question: 'Can I get matching frames for my front door and fascia?',
        answer: 'Absolutely. We offer perfectly matched foil finishes across all windows, composite doors, and roofline products.'
      }
    ]
  },

  'windows-flush-sash': {
    id: 'windows-flush-sash',
    route: 'windows-flush-sash',
    category: 'windows',
    title: 'Flush Sash Windows',
    shortTitle: 'Flush Sash',
    badge: 'Heritage & Modern',
    tagline: 'Sleek, seamless lines that sit completely flat with the frame for architectural elegance.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    overview: 'Flush sash windows combine the authentic charm of traditional timber joinery with modern high-performance UPVC technology. The window sash sits entirely flush inside the outer frame, creating a smooth, flat exterior appearance popular in both conservation areas and ultra-modern new builds.',
    keyFeatures: [
      {
        title: 'Completely Flush Exterior',
        description: 'No protruding sash lines for a clean, minimalist architectural aesthetic.',
        iconName: 'Layout'
      },
      {
        title: 'Authentic Timber Look',
        description: 'Mechanically jointed timber-weld corners with deep woodgrain texture foils.',
        iconName: 'Layers'
      },
      {
        title: 'Superior Thermal Sealing',
        description: 'Double weatherseals and multi-chamber insulation retain peak warmth.',
        iconName: 'Flame'
      },
      {
        title: 'Conservation Friendly',
        description: 'Approved in many heritage and conservation zones across West Yorkshire.',
        iconName: 'CheckCircle'
      }
    ],
    specifications: [
      { label: 'Profile System', value: 'Heritage 70mm Flush Fit UPVC' },
      { label: 'Thermal Performance', value: 'WER A+ Rated (U-Value 1.2 W/m²K)' },
      { label: 'Corner Joints', value: 'Mechanical or Graf Seamless Timberweld' },
      { label: 'Hardware Finish', value: 'Monkey Tail, Teardrop, or Contemporary Chrome' },
      { label: 'Glass Thickness', value: '28mm double glazed or acoustic laminate' },
      { label: 'Guarantee', value: '10-Year Insurance-Backed Warranty' }
    ],
    colorOptions: [
      { name: 'Agate Grey', hex: '#B5BAA7' },
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'French Grey', hex: '#9CA3AF' },
      { name: 'Chalk White', hex: '#F3F4F6' },
      { name: 'Irish Oak', hex: '#D97706' },
      { name: 'Painswick', hex: '#6B7280' }
    ],
    benefits: [
      'Eliminates the maintenance and repainting associated with old timber frames',
      'Authentic monkey-tail handles and peg stays available in antique black and pewter',
      'Dual-color options: choose one color outside to match masonry, and white inside',
      'Enhanced acoustic insulation for quieter indoor living'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        caption: 'Flush Sash Agate Grey Windows on Stone Cottage'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
        caption: 'Anthracite Flush Windows with Sleek Modern Sightlines'
      }
    ],
    faqs: [
      {
        question: 'Are flush sash windows more expensive than standard casement windows?',
        answer: 'Flush sash windows require precision hand-finishing and specialized welding, making them slightly higher in price than standard chamfered frames, but significantly cheaper and longer-lasting than real timber.'
      },
      {
        question: 'Can I have dummy pegs and decorative stays?',
        answer: 'Yes, we have traditional working and dummy furniture sets in antique brass, pewter, matte black, and satin chrome.'
      }
    ]
  },

  'windows-sliding-sash': {
    id: 'windows-sliding-sash',
    route: 'windows-sliding-sash',
    category: 'windows',
    title: 'Sliding Sash Windows',
    shortTitle: 'Sliding Sash',
    badge: 'Period Charm',
    tagline: 'Classic Georgian & Victorian elegance with effortless sliding balances and tilt-to-clean functionality.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    overview: 'Restore the classic architectural character of your period property without drafty cords or rattling frames. Our vertical sliding sash windows feature modern torsion spring balances for smooth, effortless sliding, together with an inward tilt facility for easy glass cleaning from inside your room.',
    keyFeatures: [
      {
        title: 'Smooth Spiral Balances',
        description: 'Counterbalanced mechanisms allow effortless one-finger sliding operation.',
        iconName: 'Sliders'
      },
      {
        title: 'Tilt-In Cleaning Facility',
        description: 'Both top and bottom sashes tilt inward for safe cleaning from inside.',
        iconName: 'RotateCcw'
      },
      {
        title: 'Period Detail Features',
        description: 'Run-through sash horns, deep bottom rails, and authentic astragal glazing bars.',
        iconName: 'Award'
      },
      {
        title: 'Draft-Free Comfort',
        description: 'Multiple brush seals prevent cold drafts and eliminate rattling in high winds.',
        iconName: 'Wind'
      }
    ],
    specifications: [
      { label: 'Profile Depth', value: '128mm multi-chambered authentic sash box' },
      { label: 'Opening Style', value: 'Vertical slider with inward tilt cleaning' },
      { label: 'Energy Rating', value: 'A-Rated with argon-filled low-E glazing' },
      { label: 'Security', value: 'Heritage cam locks with travel restrictor stays' },
      { label: 'Sash Horns', value: 'Continuous run-through or plant-on horns' }
    ],
    colorOptions: [
      { name: 'White Woodgrain', hex: '#FFFFFF' },
      { name: 'Cream Foil', hex: '#FEF3C7' },
      { name: 'Agate Grey', hex: '#B5BAA7' },
      { name: 'Chartwell Green', hex: '#84A98C' }
    ],
    benefits: [
      'Preserves the period charm of Victorian and Edwardian stone and brick properties',
      'Child-safe travel restrictors prevent accidental full opening',
      'High thermal retention saves hundreds on heating bills compared to single-glazed timber'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        caption: 'Classic White Sliding Sash Windows on Period Brick Home'
      }
    ],
    faqs: [
      {
        question: 'Do your sliding sash windows use traditional weights and pulleys?',
        answer: 'We use modern pre-tensioned spiral torsion balances which eliminate stuck pulleys, broken cords, and rattling, while looking indistinguishable from historic sash windows.'
      }
    ]
  },

  'windows-tilt-turn': {
    id: 'windows-tilt-turn',
    route: 'windows-tilt-turn',
    category: 'windows',
    title: 'Tilt & Turn Windows',
    shortTitle: 'Tilt & Turn',
    badge: 'Continental Versatility',
    tagline: 'Dual-action engineering providing draft-free ventilation and wide opening for easy cleaning and fire escape.',
    heroImage: 'https://images.unsplash.com/photo-1502005229762-ee1b2b93e007?auto=format&fit=crop&w=1400&q=80',
    overview: 'Popular across modern European architecture, tilt and turn windows offer two opening positions with a single turn of the handle: tilt inward from the top for secure, rain-proof ventilation, or swing open fully like a door for maximum airflow, fire egress, and simple indoor cleaning.',
    keyFeatures: [
      {
        title: 'Dual Opening Action',
        description: 'Tilts from top for gentle airflow; swings open 90° for full access.',
        iconName: 'Maximize2'
      },
      {
        title: 'Fire Escape Compliant',
        description: 'Provides large, unobstructed openings ideal for upper floor egress.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Ultra-Tight Compression Seals',
        description: 'Multi-point perimeter locking compresses the sash tightly against the frame.',
        iconName: 'Lock'
      }
    ],
    specifications: [
      { label: 'Profile System', value: '70mm Heavy-Duty Multi-Chamber UPVC' },
      { label: 'Operation', value: 'Turn 90° for tilt, turn 180° for full open' },
      { label: 'Glazing Support', value: 'Up to 44mm acoustic triple glazing' },
      { label: 'Security', value: 'Perimeter shootbolts with anti-lift pins' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Slate Grey', hex: '#4B5563' },
      { name: 'White Gloss', hex: '#FFFFFF' },
      { name: 'Black Matte', hex: '#111827' }
    ],
    benefits: [
      'Ideal for multi-storey properties where exterior cleaning is difficult',
      'Provides high levels of acoustic and thermal insulation',
      'Can accommodate larger glass spans than traditional casements'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1502005229762-ee1b2b93e007?auto=format&fit=crop&w=800&q=80',
        caption: 'Anthracite Tilt and Turn Windows on Apartment Extension'
      }
    ],
    faqs: [
      {
        question: 'Are tilt and turn windows safe for families with young children?',
        answer: 'Yes! We install tilt-first gearing and key-locking restrictor handles so children can safely enjoy ventilation without being able to open the window fully.'
      }
    ]
  },

  'windows-bay-bow': {
    id: 'windows-bay-bow',
    route: 'windows-bay-bow',
    category: 'windows',
    title: 'Bay & Bow Windows',
    shortTitle: 'Bay & Bow Windows',
    badge: 'Panoramic Views',
    tagline: 'Flood your living space with natural light and expand your interior room dimension.',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
    overview: 'Bay and Bow windows are the centerpiece of any living room or master bedroom. They project outward from your external wall, capturing panoramic views and natural sunlight from multiple angles while adding usable interior floor and windowsill space.',
    keyFeatures: [
      {
        title: 'Structural Load-Bearing Support',
        description: 'Heavy-duty bay jacks and reinforced structural couplers hold upper masonry securely.',
        iconName: 'Anchor'
      },
      {
        title: 'Insulated Canopies & Bases',
        description: 'Pre-insulated GRP or lead-look roof canopies prevent cold bridging beneath.',
        iconName: 'Umbrella'
      },
      {
        title: 'Custom Angle Coupling',
        description: 'Precision 90°, 135°, 150°, and circular facet bay couplers for perfect fit.',
        iconName: 'Compass'
      }
    ],
    specifications: [
      { label: 'Bay Types', value: '3, 4, or 5 facet Angled Bays & Segmental Bows' },
      { label: 'Structural Reinforcement', value: 'Heavy gauge steel bay posts with adjustable jacks' },
      { label: 'Thermal Rating', value: 'A++ with Planitherm low-E glass' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Smooth White', hex: '#F9FAFB' },
      { name: 'Rosewood', hex: '#451A03' },
      { name: 'Golden Oak', hex: '#B45309' }
    ],
    benefits: [
      'Expands interior room feel and creates lovely window seat areas',
      'Transforms the exterior curb appeal of your property immediately',
      'Can convert a flat standard window into a projecting bow window'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
        caption: '5-Facet Victorian Bow Window in Crisp White UPVC'
      }
    ],
    faqs: [
      {
        question: 'Can you replace a flat window with a bow window?',
        answer: 'Yes! We can build a projecting bow window supported by heavy-duty cantilevers and a custom insulated lead-look or tiled canopy.'
      }
    ]
  },

  'windows-aluminium': {
    id: 'windows-aluminium',
    route: 'windows-aluminium',
    category: 'windows',
    title: 'Architectural Aluminium Windows',
    shortTitle: 'Aluminium Windows',
    badge: 'Ultra Slim',
    tagline: 'Ultra-slim sightlines, expansive glass panes, and durable powder-coated finishes.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    overview: 'For modern luxury and ultra-slim profiles, our architectural aluminium windows offer unrivaled strength, razor-thin sightlines, and expansive panoramic glass. Engineered with polyamide thermal breaks, they deliver exceptional thermal efficiency and a high-end powder-coated finish in any RAL color.',
    keyFeatures: [
      {
        title: 'Ultra-Slim Sightlines',
        description: 'Narrower frames mean up to 25% more glass area and brighter natural light.',
        iconName: 'Maximize'
      },
      {
        title: 'Polyamide Thermal Break',
        description: 'Advanced thermal barrier stops cold transference for low U-values.',
        iconName: 'Shield'
      },
      {
        title: 'Marine-Grade Powder Coating',
        description: 'Scratch-resistant, weather-proof finish guaranteed not to fade or corrode.',
        iconName: 'Sun'
      }
    ],
    specifications: [
      { label: 'Material', value: 'High-strength 6063 T6 architectural aluminium' },
      { label: 'Sightline', value: 'As slim as 38mm' },
      { label: 'Finish', value: 'Qualicoat Class 2 marine-grade powder coating (RAL)' },
      { label: 'U-Value', value: 'As low as 1.1 W/m²K' }
    ],
    colorOptions: [
      { name: 'Matt Anthracite (RAL 7016)', hex: '#374151' },
      { name: 'Jet Black (RAL 9005)', hex: '#111827' },
      { name: 'Traffic White (RAL 9016)', hex: '#FFFFFF' },
      { name: 'Bronze Metallic', hex: '#78350F' }
    ],
    benefits: [
      'Incredible structural rigidity allows massive floor-to-ceiling glass sizes',
      'Over 200 custom RAL colors with textured, matte, or gloss finishes',
      'Lifespan exceeding 40+ years with virtually zero maintenance'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        caption: 'Ultra-Slim Aluminium Windows on Modern Architectural Grand Design'
      }
    ],
    faqs: [
      {
        question: 'Do aluminium windows suffer from condensation or cold frames?',
        answer: 'Not at all. Modern aluminium frames incorporate advanced polyamide thermal breaks which physically isolate the cold outside from the warm inside.'
      }
    ]
  },

  // DOORS
  'doors-composite': {
    id: 'doors-composite',
    route: 'doors-composite',
    category: 'doors',
    title: 'High-Security Composite Doors',
    shortTitle: 'Composite Doors',
    badge: 'Most Popular',
    tagline: 'The ultimate in front door security, thermal insulation, and bespoke curb appeal.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    overview: 'Make a lasting first impression while protecting your family with our high-security composite doors. Featuring a high-density 48mm solid core, glass-reinforced plastic (GRP) skins that resist scratching and denting, and 3-star Ultion diamond-rated locking cylinders, our doors are virtually impenetrable.',
    keyFeatures: [
      {
        title: '48mm Solid Core',
        description: 'Multi-layer laminated timber and high-density foam core resists forced entry.',
        iconName: 'Shield'
      },
      {
        title: 'Ultion 3-Star Locking',
        description: 'Lockdown mode activates instantly when attacked, with £2,000 anti-snap guarantee.',
        iconName: 'Lock'
      },
      {
        title: 'GRP Impact Skin',
        description: 'Glass Reinforced Plastic skin will not warp, bow, crack, or fade over time.',
        iconName: 'Zap'
      },
      {
        title: 'Over 35 Designer Styles',
        description: 'Traditional Victorian, Edwardian, and contemporary flush designs with long bar handles.',
        iconName: 'Palette'
      }
    ],
    specifications: [
      { label: 'Door Thickness', value: '48mm / 70mm High-Performance Core' },
      { label: 'Locking Cylinder', value: 'Ultion 3* Diamond Anti-Snap / Anti-Drill' },
      { label: 'Weather Rating', value: 'BS 6375 Wind & Water Tightness Certified' },
      { label: 'Glass Types', value: 'Triple glazed decorative glass with warm edge spacer' },
      { label: 'Threshold', value: 'Low mobility aluminum threshold or standard UPVC' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Midnight Navy', hex: '#1E3A8A' },
      { name: 'Chartwell Green', hex: '#84A98C' },
      { name: 'Duck Egg Blue', hex: '#A5F3FC' },
      { name: 'Rich Plum', hex: '#581C87' },
      { name: 'Racing Green', hex: '#065F46' },
      { name: 'Pebble Grey', hex: '#D1D5DB' },
      { name: 'Jet Black', hex: '#111827' }
    ],
    benefits: [
      'Unsurpassed thermal insulation keeps hallway drafts and heat loss away',
      'Wide range of designer hardware: brushed steel pull bars, lion knockers, smart locks',
      'Secured by Design accredited - police preferred specification'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        caption: 'Anthracite Grey Modern Composite Door with Brushed Steel Bar Handle'
      },
      {
        url: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
        caption: 'Chartwell Green Traditional Composite Door with Etched Glass'
      }
    ],
    faqs: [
      {
        question: 'Will a composite door warp or expand in hot weather?',
        answer: 'Our composite doors are manufactured with reinforced cross-grain timber cores and GRP outer skins engineered specifically to resist thermal expansion, ensuring smooth latching 365 days a year.'
      },
      {
        question: 'Can I design my door online?',
        answer: 'Yes! Use our interactive quote builder to choose your preferred door style, glass design, handle, letterbox, and custom RAL color.'
      }
    ]
  },

  'doors-bifold': {
    id: 'doors-bifold',
    route: 'doors-bifold',
    category: 'doors',
    title: 'Panoramic Bifolding Doors',
    shortTitle: 'Bifold Doors',
    badge: 'Seamless Living',
    tagline: 'Effortlessly fold away your exterior wall to merge your home and garden into one.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    overview: 'Transform your kitchen, dining, or living area with our smooth-gliding aluminium bifold doors. Opening up to 90% of your doorway with ultra-low flush thresholds, they seamlessly unite your indoor interior with your outdoor patio or garden.',
    keyFeatures: [
      {
        title: 'Ultra-Slim 108mm Sightline',
        description: 'Minimalist frames give maximum glass surface and breathtaking garden views.',
        iconName: 'Maximize'
      },
      {
        title: 'Effortless Roller Glide',
        description: 'Bottom-hung stainless steel quad rollers make opening 400kg glass panels featherlight.',
        iconName: 'Sliders'
      },
      {
        title: 'Low Flush Threshold',
        description: 'Sunken floor track creates a trip-free step into your garden.',
        iconName: 'CheckCircle'
      },
      {
        title: 'Finger-Safe Gaskets',
        description: 'Specially engineered soft rubber seals protect little fingers during operation.',
        iconName: 'Shield'
      }
    ],
    specifications: [
      { label: 'Leaf Configurations', value: '2 to 7 door panels (open left, right, or split)' },
      { label: 'Max Width', value: 'Up to 1.2m per door leaf / 8.4m total span' },
      { label: 'Locking', value: 'Heavy duty multi-point lock with top and bottom shootbolts' },
      { label: 'Thermal U-Value', value: '1.3 W/m²K (Double) / 0.9 W/m²K (Triple)' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey (RAL 7016)', hex: '#374151' },
      { name: 'Jet Black (RAL 9005)', hex: '#111827' },
      { name: 'Pure White (RAL 9010)', hex: '#FFFFFF' }
    ],
    benefits: [
      'Traffic door option allows easy everyday back door access without opening the full bifold',
      'Fully weather-tested against extreme British rain and gale-force wind conditions',
      'Significantly increases your property market value and visual appeal'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        caption: '5-Leaf Anthracite Aluminium Bifold Doors Opening onto Decking'
      }
    ],
    faqs: [
      {
        question: 'Can bifold doors be fitted with an everyday traffic door?',
        answer: 'Yes! Odd numbered leaf configurations (e.g. 3, 5, or 7 panes) feature a master traffic door that operates just like a regular back door.'
      }
    ]
  },

  'doors-french': {
    id: 'doors-french',
    route: 'doors-french',
    category: 'doors',
    title: 'Classic French Doors',
    shortTitle: 'French Doors',
    badge: 'Timeless Elegance',
    tagline: 'Double-opening patio doors delivering traditional charm, generous ventilation, and effortless garden access.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    overview: 'Our UPVC and aluminium French doors offer a charming, classic entryway to gardens, balconies, and conservatories. With both master and slave doors opening outward or inward, they provide an unobstructed passage with maximum airflow.',
    keyFeatures: [
      {
        title: 'Unrestricted Double Opening',
        description: 'Both doors open wide with no central post blocking the view.',
        iconName: 'Maximize2'
      },
      {
        title: 'Master & Slave Security',
        description: 'Integral top and bottom shootbolts secure both door leaves rigidly.',
        iconName: 'Lock'
      }
    ],
    specifications: [
      { label: 'Profiles', value: '70mm UPVC or Slimline Aluminium' },
      { label: 'Opening Style', value: 'Inward or Outward Opening' },
      { label: 'Security', value: 'Hook bolts, shootbolts, and anti-snap cylinders' }
    ],
    colorOptions: [
      { name: 'Smooth White', hex: '#FFFFFF' },
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Chartwell Green', hex: '#84A98C' },
      { name: 'Golden Oak', hex: '#B45309' }
    ],
    benefits: [
      'Perfect replacement for outdated single doors or aging wooden patio doors',
      'Optional side lights and top lights for wider wall openings'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        caption: 'White UPVC French Doors Leading out to Stone Patio'
      }
    ],
    faqs: [
      {
        question: 'Can French doors open outward so they don’t take up room inside?',
        answer: 'Yes, outward-opening French doors are our most popular option to maximize interior floor space.'
      }
    ]
  },

  'doors-patio': {
    id: 'doors-patio',
    route: 'doors-patio',
    category: 'doors',
    title: 'Inline Sliding Patio Doors',
    shortTitle: 'Sliding Patio Doors',
    badge: 'Space Saver',
    tagline: 'Wide uninterrupted glass spans that slide effortlessly without taking up interior or patio floor space.',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
    overview: 'Our inline sliding patio doors are ideal when you want expansive glass and unobstructed natural light without doors swinging into your room or garden furniture. Heavy-duty tandem rollers ensure whisper-quiet, fingertip gliding.',
    keyFeatures: [
      {
        title: 'Huge Glass Panes',
        description: 'Fewer vertical frame mullions for panoramic unbroken scenic views.',
        iconName: 'Eye'
      },
      {
        title: 'Zero Swing Clearance',
        description: 'Panels slide along their own tracks, leaving full indoor and outdoor floor space free.',
        iconName: 'Layers'
      }
    ],
    specifications: [
      { label: 'Panel Options', value: '2, 3, or 4 pane sliding configurations' },
      { label: 'Locking', value: '6-point pincer locking mechanism with anti-lift blocks' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Agate Grey', hex: '#B5BAA7' }
    ],
    benefits: [
      'Effortless glide with stainless steel track and heavy-duty tandem steel rollers',
      'High thermal and acoustic performance'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
        caption: 'Triple Pane Sliding Patio Door in Anthracite Grey'
      }
    ],
    faqs: [
      {
        question: 'Are sliding patio doors easy to slide?',
        answer: 'Our advanced tandem steel rollers and stainless steel track make sliding even 150kg glass panels effortless.'
      }
    ]
  },

  'doors-upvc': {
    id: 'doors-upvc',
    route: 'doors-upvc',
    category: 'doors',
    title: 'UPVC Front & Back Doors',
    shortTitle: 'UPVC Doors',
    badge: 'Great Value',
    tagline: 'Durable, secure, and cost-effective entrance doors designed for everyday reliability.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    overview: 'Our UPVC residential doors provide an attractive, high-security, and budget-friendly entrance solution for front, back, and side entrances. Constructed with galvanised steel reinforcing and thermally insulated infill panels, they require zero maintenance.',
    keyFeatures: [
      {
        title: 'Steel Reinforced Core',
        description: 'Galvanised steel internal bracing prevents twisting and forced entry.',
        iconName: 'Shield'
      },
      {
        title: 'Weatherproof Infill Panels',
        description: 'MDF reinforced insulated skins with decorative molding and obscure glass.',
        iconName: 'Sun'
      }
    ],
    specifications: [
      { label: 'Frame', value: '70mm fully steel reinforced UPVC' },
      { label: 'Locking', value: 'Multi-point hook and deadbolt locking' }
    ],
    colorOptions: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Golden Oak', hex: '#B45309' },
      { name: 'Rosewood', hex: '#451A03' }
    ],
    benefits: [
      'Affordable, durable, and highly weather-resistant',
      'Available with cat flaps, obscure privacy glass, and letterboxes'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        caption: 'UPVC Back Door with Obscure Glazing and Chrome Lever Handle'
      }
    ],
    faqs: [
      {
        question: 'Can you install a cat flap into a UPVC back door?',
        answer: 'Yes! We can fit microchip or magnetic pet flaps into solid lower UPVC door panels.'
      }
    ]
  },

  // ROOFLINE
  'fascia-upvc': {
    id: 'fascia-upvc',
    route: 'fascia-upvc',
    category: 'roofline',
    title: 'UPVC Fascias & Bargeboards',
    shortTitle: 'Fascia & Bargeboard',
    badge: 'Rot Free',
    tagline: 'Replace rotten wooden fascias with full-replacement 18mm solid UPVC boards.',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    overview: 'Your roofline protects your home from water ingress, rot, and structural timber decay. We remove all rotten wooden fascia boards down to the rafter feet and install heavy-duty 18mm full replacement solid UPVC fascia boards that will never rot, peel, or need painting.',
    keyFeatures: [
      {
        title: 'Full Replacement (Never Capped)',
        description: 'We strip rotten timber back to rafters for a clean, permanent structural install.',
        iconName: 'CheckCircle'
      },
      {
        title: '18mm Solid Load-Bearing Boards',
        description: 'Thick solid boards support heavy rain-filled gutters and roof tile edges safely.',
        iconName: 'Layers'
      },
      {
        title: 'Concealed Over-Fascia Vents',
        description: 'Integrates hidden airflow strips to keep your attic bone-dry and free from damp.',
        iconName: 'Wind'
      }
    ],
    specifications: [
      { label: 'Thickness', value: '18mm Solid Full Replacement UPVC' },
      { label: 'Board Styles', value: 'Square edge, Bullnose round, or Ogee decorative' },
      { label: 'Fixings', value: 'Stainless steel polymer-headed annular ring shank pins' },
      { label: 'Guarantee', value: '20-Year Manufacturer Guarantee against warping & discoloration' }
    ],
    colorOptions: [
      { name: 'Gloss White', hex: '#FFFFFF' },
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Black Ash', hex: '#111827' },
      { name: 'Golden Oak', hex: '#B45309' },
      { name: 'Mahogany', hex: '#451A03' }
    ],
    benefits: [
      'Eliminates dangerous ladders and costly repainting every few years',
      'Protects structural roof timbers from costly damp damage',
      'Gives your roofline a crisp, modern, showroom-clean finish'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
        caption: 'Anthracite UPVC Fascia and Soffit Replacement on Modern Home'
      }
    ],
    faqs: [
      {
        question: 'Do you cap over existing wooden fascias or replace them completely?',
        answer: 'We strictly recommend and carry out full replacement. Capping over old timber traps moisture inside and rots your roof rafters out of sight.'
      }
    ]
  },

  'soffits-vented': {
    id: 'soffits-vented',
    route: 'soffits-vented',
    category: 'roofline',
    title: 'Soffit Boards & Attic Ventilation',
    shortTitle: 'Soffits & Ventilation',
    badge: 'Prevents Damp',
    tagline: 'Keep your roof space well-ventilated and prevent costly condensation, mold, and rot.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    overview: 'Soffit boards bridge the gap between your fascia and the exterior brickwork. Our ventilated and hollow UPVC soffits ensure continuous airflow throughout your roof space, satisfying British Building Regulations and preventing condensation from rotting ceiling joists.',
    keyFeatures: [
      {
        title: 'Continuous Loft Ventilation',
        description: 'Vented strip patterns provide constant 10mm/25mm airflow without letting insects in.',
        iconName: 'Wind'
      },
      {
        title: 'Integrated Downlighting Ready',
        description: 'Easily accommodates recessed exterior LED spotlights for evening curb appeal.',
        iconName: 'Zap'
      }
    ],
    specifications: [
      { label: 'Types', value: 'Vented flat board, Hollow tongue & groove, Solid board' },
      { label: 'Vent Mesh', value: 'Micro-mesh insect repellent barriers' }
    ],
    colorOptions: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Black Ash', hex: '#111827' }
    ],
    benefits: [
      'Eliminates attic condensation and black mold',
      'Provides a clean underside finish to overhangs and porches'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        caption: 'Hollow Tongue and Groove Soffit with Recessed LED Lighting'
      }
    ],
    faqs: [
      {
        question: 'Can you install outdoor LED spotlights into the new soffits?',
        answer: 'Yes! We frequently pre-cut and wire high-efficiency IP65 rated LED soffit downlights for stunning evening illumination.'
      }
    ]
  },

  'guttering-services': {
    id: 'guttering-services',
    route: 'guttering-services',
    category: 'roofline',
    title: 'High-Capacity Guttering & Downpipes',
    shortTitle: 'Guttering Services',
    badge: 'Flood Defense',
    tagline: 'High-flow rainwater drainage systems engineered to protect your foundations from overflow.',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    overview: 'With British weather producing increasingly heavy downpours, outdated gutters frequently overflow and cause damp brickwork. Our deep flow and high-capacity guttering systems carry up to 3x more rainwater than standard half-round gutters.',
    keyFeatures: [
      {
        title: 'Deep Flow High Capacity',
        description: 'Transports large volumes of water safely during severe Yorkshire storms.',
        iconName: 'Droplets'
      },
      {
        title: 'Thermal Expansion Joints',
        description: 'Lubricated neoprene seals accommodate hot summers and cold winters with zero leaks.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Leaf & Debris Protection',
        description: 'Optional Hedgehog leaf guards and balloon strainers keep gutters free-flowing.',
        iconName: 'Sparkles'
      }
    ],
    specifications: [
      { label: 'Profiles', value: 'Deep Flow, Half Round, Square Line, Ogee High Flow' },
      { label: 'Downpipes', value: '68mm Round / 65mm Square heavy-duty UPVC' },
      { label: 'Seals', value: 'High-grade EPDM rubber compression gaskets' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Gloss Black', hex: '#111827' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Cast Iron Effect', hex: '#1F2937' }
    ],
    benefits: [
      'Protects your brickwork, foundation, and garden landscaping from flooding',
      'Cast iron effect finishes available for traditional stone cottages'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
        caption: 'Deep Flow Black Guttering Installation on Brick Residence'
      }
    ],
    faqs: [
      {
        question: 'Why choose Deep Flow guttering over standard half-round?',
        answer: 'Deep Flow profile gutters hold over 50% more rainwater volume and require fewer downpipes, eliminating overflowing gutters in torrential rain.'
      }
    ]
  },

  'cladding-dry-verge': {
    id: 'cladding-dry-verge',
    route: 'cladding-dry-verge',
    category: 'roofline',
    title: 'Dry Verge Systems & UPVC Cladding',
    shortTitle: 'Dry Verge & Cladding',
    badge: 'Mortar Free',
    tagline: 'Eliminate cracked crumbling mortar on roof gable edges and transform plain exterior walls.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    overview: 'Traditional sand and cement mortar on roof gable ends cracks, washes out, and falls away over time. Our interlocking dry verge units mechanically lock your roof tiles in place with zero mortar, preventing tile lift in high winds and blocking bird and wasp nesting.',
    keyFeatures: [
      {
        title: '100% Mortar-Free Fix',
        description: 'Mechanically screws to tile battens for wind-proof tile security.',
        iconName: 'CheckCircle'
      },
      {
        title: 'Pest & Nesting Barrier',
        description: 'Solid interlocking end caps stop birds, bats, and wasps entering roof voids.',
        iconName: 'Shield'
      },
      {
        title: 'Shiplap Exterior Cladding',
        description: 'Modern UPVC wall cladding adds instant insulation and visual contrast.',
        iconName: 'Layout'
      }
    ],
    specifications: [
      { label: 'Verge Unit Type', value: 'Universal continuous & individual interlocking verge units' },
      { label: 'Cladding Styles', value: '150mm Shiplap & 100mm V-Groove UPVC planks' }
    ],
    colorOptions: [
      { name: 'Anthracite Grey', hex: '#374151' },
      { name: 'Black', hex: '#111827' },
      { name: 'Brown / Terracotta', hex: '#78350F' },
      { name: 'Grey', hex: '#6B7280' }
    ],
    benefits: [
      'Zero maintenance - never pay for mortar repointing again',
      'Provides modern architectural accents to gables and dormers'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        caption: 'Modern Anthracite Dry Verge Gable End Installation'
      }
    ],
    faqs: [
      {
        question: 'Can dry verge be fitted to existing roof tiles without replacing the whole roof?',
        answer: 'Yes! We can easily retrofit dry verge systems to almost all concrete, slate, and clay tile roofs.'
      }
    ]
  }
};
