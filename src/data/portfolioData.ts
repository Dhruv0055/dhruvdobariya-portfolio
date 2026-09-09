import type { SiteConfig } from '../types/portfolio';

/**
 * =========================================================================
 * DHRUV DOBARIYA — PORTFOLIO DATA & DIRECT VIDEO SOURCES
 * =========================================================================
 */
export const portfolioData: SiteConfig = {
  brandName: 'Dhruv Dobariya',
  profession: 'Video Editor & Visual Storyteller',
  tagline: 'PREMIUM VIDEO EDITING & VISUAL STORYTELLING',
  heroStatement: 'I transform raw footage into engaging visual stories designed to capture attention and elevate your brand.',
  
  editorialStatement: "I DON'T JUST EDIT VIDEOS. I BUILD ATTENTION.",
  editorialParagraph:
    'Every cut, transition, sound effect and frame has a purpose. I focus on creating videos that feel polished, engaging and visually memorable — from high-retention short-form edits and UGC to commercial brand films and cinematic edits.',
  
  brandStatement: 'RAW FOOTAGE IS ONLY THE BEGINNING.',
  brandSubtext:
    'The right edit can change how a story feels, how long someone watches, and what they remember.',

  bio: [
    "I'm Dhruv, a video editor focused on creating engaging digital content for creators, brands and businesses.",
    "I enjoy taking raw footage and turning it into content that feels polished, intentional and worth watching.",
    "Whether you need a high-retention Reel, UGC video ads, a YouTube video, a commercial brand film, or a cinematic edit, I'm available to collaborate."
  ],
  profileImage: '/dhruv-photo.jpg',

  contact: {
    email: 'dhruvdobariya005@gmail.com',
    whatsapp: '+91 81609 25636',
    whatsappNumber: '918160925636',
    instagram: '@dhruvdobariya',
    instagramUrl: 'https://instagram.com',
    linkedin: 'dhruv-dobariya',
    linkedinUrl: 'https://linkedin.com',
    youtube: '@DhruvDobariyaEdits',
    youtubeUrl: 'https://youtube.com',
    location: 'BASED IN INDIA — AVAILABLE WORLDWIDE',
    availability: 'AVAILABLE FOR PROJECTS — 2026'
  },

  masterDriveFolder: 'https://drive.google.com/drive/folders/1-fAPohvDgHQ8tLt3TJAOscRYUVtHhLlL?usp=drive_link',

  showreel: {
    title: 'FEATURED 2026 SHOWREEL',
    subtitle: 'SELECTED WORK',
    description: 'A curated showcase of commercial edits, short-form retention structures, UGC video ads, and cinematic color grades.',
    videoSourceType: 'google-drive',
    videoUrl: 'https://drive.google.com/file/d/1DFAgevx05WhHTuQozoFQXDK58xCvvz4W/view?usp=drive_link',
    googleDriveUrl: 'https://drive.google.com/file/d/1DFAgevx05WhHTuQozoFQXDK58xCvvz4W/view?usp=drive_link',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterImage: 'https://lh3.googleusercontent.com/d/1DFAgevx05WhHTuQozoFQXDK58xCvvz4W=w1080',
    tags: ['COMMERCIAL', 'SHORT-FORM', 'UGC VIDEOS', 'CINEMATIC', 'COLOR GRADING']
  },

  services: [
    {
      number: '01',
      title: 'COMMERCIAL EDITING',
      subtitle: 'Brand & Product Impact',
      description: 'High-end commercial films, promotional ads, and product launch videos designed to elevate brand authority and drive conversions.',
      tags: ['Commercial Films', 'Product Videos', 'Brand Ads', 'Promotional Videos']
    },
    {
      number: '02',
      title: 'SHORT-FORM CONTENT',
      subtitle: 'Retention & Viral Growth',
      description: 'Hook-driven, fast-paced Reels, Shorts, and TikTok edits optimized for high watch time, pattern interrupts, and engagement.',
      tags: ['Reels / TikTok', 'YouTube Shorts', 'Retention Editing', 'Dynamic Subtitles']
    },
    {
      number: '03',
      title: 'UGC & CREATIVE ADS',
      subtitle: 'Direct Response Performance',
      description: 'High-converting UGC video ads and social creatives built to boost click-through rates and scale paid media campaigns.',
      tags: ['UGC Ads', 'Meta Ad Creatives', 'TikTok Ads', 'Product Demos']
    },
    {
      number: '04',
      title: 'CINEMATIC COLOR & FINISHING',
      subtitle: 'Visual Aesthetics & Sound',
      description: 'Precision DaVinci Resolve color grading, custom film print emulations, visual effects finishing, and spatial sound design.',
      tags: ['DaVinci Color Grading', 'LUTs & Print Film', 'Sound Design & Foley', '4K Mastering']
    }
  ],

  process: [
    {
      number: '01',
      step: '01',
      title: 'BRIEF & FOOTAGE REVIEW',
      description: 'We review raw footage, target audience, reference styles, audio cues, and delivery specifications.',
      details: ['Asset intake & log review', 'Pacing & hook alignment', 'Delivery specifications']
    },
    {
      number: '02',
      step: '02',
      title: 'STORY CUT & PACING',
      description: 'Assemble the narrative backbone, fine-tuning timing, rhythm, and retention hooks for maximum impact.',
      details: ['A-roll cutting & dynamic pacing', 'B-roll selection & visual rhythm', 'Audio beat synchronization']
    },
    {
      number: '03',
      step: '03',
      title: 'COLOR, SFX & FINISHING',
      description: 'Apply DaVinci color grading, audio leveling, motion graphics, transitions, and export in master 4K uncompressed format.',
      details: ['DaVinci Resolve color grade', 'Custom sound design & SFX mix', 'Uncompressed 4K master export']
    }
  ],

  tools: [
    { name: 'Adobe Premiere Pro', category: 'Assembly & Timeline Editing', icon: 'premiere' },
    { name: 'DaVinci Resolve Studio', category: 'Color Science & Mastering', icon: 'davinci' },
    { name: 'Adobe After Effects', category: 'Motion Graphics & VFX', icon: 'aftereffects' },
    { name: 'Adobe Audition', category: 'Audio Mastering & Sound FX', icon: 'audition' },
    { name: 'Adobe Photoshop', category: 'Thumbnails & Design Assets', icon: 'photoshop' },
    { name: 'Google Drive 4K Cloud', category: 'Master Vault & Deliverables', icon: 'drive' }
  ],

  metrics: [
    { value: '100+', label: 'Delivered Video Edits' },
    { value: '4K', label: 'Uncompressed Master Exports' },
    { value: '+45%', label: 'Average Retention Lift' },
    { value: '24-48h', label: 'Turnaround Available' }
  ],

  testimonials: [
    {
      id: 't-1',
      author: 'Alex Rivera',
      clientName: 'Alex Rivera',
      role: 'Creative Director',
      clientRole: 'Creative Director',
      company: 'Aura Media Agency',
      quote: 'Dhruv transformed our raw brand footage into an absolute cinematic masterpiece. His sense of timing, DaVinci color grading, and surgical audio mix took our client campaigns to another level. Seamless communication and super fast 24-48h delivery.',
      content: 'Dhruv transformed our raw brand footage into an absolute cinematic masterpiece. His sense of timing, DaVinci color grading, and surgical audio mix took our client campaigns to another level. Seamless communication and super fast 24-48h delivery.',
      metric: '+78% Viewer Retention'
    },
    {
      id: 't-2',
      author: 'Marcus Vance',
      clientName: 'Marcus Vance',
      role: 'YouTube Creator & Founder',
      clientRole: 'YouTube Creator (220K+ Subs)',
      company: 'Vance Digital',
      quote: 'Our short-form watch time and engagement jumped immediately once Dhruv took over editing. He understands retention hooks, sound effects, and pattern interrupts better than any editor we have worked with.',
      content: 'Our short-form watch time and engagement jumped immediately once Dhruv took over editing. He understands retention hooks, sound effects, and pattern interrupts better than any editor we have worked with.',
      metric: '4.5M+ Total Views'
    },
    {
      id: 't-3',
      author: 'Elena Rostova',
      clientName: 'Elena Rostova',
      role: 'E-Commerce Brand Founder',
      clientRole: 'E-Commerce Brand Founder',
      company: 'Lumiere Skincare',
      quote: 'The UGC and creative video ads Dhruv cut for our Meta and TikTok campaigns delivered our highest return on ad spend this quarter. Clean typography, snappy pacing, and direct-response structure.',
      content: 'The UGC and creative video ads Dhruv cut for our Meta and TikTok campaigns delivered our highest return on ad spend this quarter. Clean typography, snappy pacing, and direct-response structure.',
      metric: '3.4x Return on Ad Spend'
    },
    {
      id: 't-4',
      author: 'Liam Chen',
      clientName: 'Liam Chen',
      role: 'Commercial Film Producer',
      clientRole: 'Executive Producer',
      company: 'Apex Visuals',
      quote: 'Finding an editor who delivers uncompressed 4K master files on time with zero fluff is rare. Dhruv is reliable, proactive with creative feedback, and extremely detail-oriented on sound and color.',
      content: 'Finding an editor who delivers uncompressed 4K master files on time with zero fluff is rare. Dhruv is reliable, proactive with creative feedback, and extremely detail-oriented on sound and color.',
      metric: '100% On-Time Delivery'
    }
  ],

  projects: [
    {
      id: 'project-commercial',
      slug: 'commercial-brand-film',
      number: '01',
      title: 'Commercial Brand Film',
      category: 'COMMERCIAL',
      year: '2026',
      client: 'Brand Commercial',
      shortDescription: 'High-impact commercial video edit featuring dynamic cuts, DaVinci color grading, and spatial audio sync.',
      fullDescription: 'A premier commercial video edit highlighting brand aesthetic, product details, and rhythmic pacing. Streamed directly from Google Drive in full quality.',
      challenge: 'Balancing fast visual rhythm while preserving an elegant brand narrative arc.',
      solution: 'Synchronized visual cuts to subtle audio transients and created custom split-tone grading.',
      role: ['Commercial Editing', 'Color Grading', 'Sound Design'],
      tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects'],
      videoSourceType: 'google-drive',
      videoUrl: 'https://drive.google.com/file/d/1aE9h0qbrHgfUux3CWtIQ7fNY66BX3fPB/view?usp=drive_link',
      googleDriveUrl: 'https://drive.google.com/file/d/1aE9h0qbrHgfUux3CWtIQ7fNY66BX3fPB/view?usp=drive_link',
      posterImage: 'https://lh3.googleusercontent.com/d/1aE9h0qbrHgfUux3CWtIQ7fNY66BX3fPB=w1080',
      featured: true
    },
    {
      id: 'project-short-form',
      slug: 'short-form-retention-edit',
      number: '02',
      title: 'Short-Form Retention Edit',
      category: 'SHORT-FORM',
      year: '2026',
      client: 'Social Growth',
      shortDescription: 'Fast-paced, hook-optimized vertical edit built for maximum viewer retention on Instagram Reels and TikTok.',
      fullDescription: 'An energetic short-form edit engineered to keep audiences glued from the opening hook to the end screen with pattern interrupts, animated text, and sound effects.',
      challenge: 'Squeezing maximum narrative density and visual flair into under 45 seconds.',
      solution: 'Utilized kinetic typography, speed ramping, and micro-sound accents.',
      role: ['Short-Form Editing', 'Motion Graphics', 'Sound Design'],
      tools: ['Adobe Premiere Pro', 'After Effects', 'Audition'],
      videoSourceType: 'google-drive',
      videoUrl: 'https://drive.google.com/file/d/1XIW0mD5bUJ6wz7691rK-Xl7H3_F5cihT/view?usp=drive_link',
      googleDriveUrl: 'https://drive.google.com/file/d/1XIW0mD5bUJ6wz7691rK-Xl7H3_F5cihT/view?usp=drive_link',
      posterImage: 'https://lh3.googleusercontent.com/d/1XIW0mD5bUJ6wz7691rK-Xl7H3_F5cihT=w1080',
      featured: true
    },
    {
      id: 'project-cinematic',
      slug: 'cinematic-film-campaign',
      number: '03',
      title: 'Cinematic Campaign Edit',
      category: 'CINEMATIC',
      year: '2026',
      client: 'Cinematic Film',
      shortDescription: 'Atmospheric cinematic trailer highlighting filmic color tones, widescreen composition, and sound design.',
      fullDescription: 'A widescreen cinematic piece cut with precision color science and orchestral score timing in DaVinci Resolve.',
      challenge: 'Filtering vast footage into an emotional visual piece with cinematic shadow roll-off.',
      solution: 'Graded with custom Kodak print emulation and layered environmental foley.',
      role: ['Video Editing', 'Color Grading', 'Sound Design'],
      tools: ['DaVinci Resolve', 'Premiere Pro', 'Audition'],
      videoSourceType: 'google-drive',
      videoUrl: 'https://drive.google.com/file/d/1sarXkfoz0CV-KHKwYUrQma_9JfKpSB1X/view?usp=drive_link',
      googleDriveUrl: 'https://drive.google.com/file/d/1sarXkfoz0CV-KHKwYUrQma_9JfKpSB1X/view?usp=drive_link',
      posterImage: 'https://lh3.googleusercontent.com/d/1sarXkfoz0CV-KHKwYUrQma_9JfKpSB1X=w1080',
      featured: true
    },
    {
      id: 'project-ugc',
      slug: 'ugc-brand-creative',
      number: '04',
      title: 'UGC Brand Creative Ad',
      category: 'UGC',
      year: '2026',
      client: 'UGC Performance Ad',
      shortDescription: 'Direct-response UGC video edit with authentic pacing, engaging product demonstrations, and clear CTA.',
      fullDescription: 'An authentic UGC creative ad built for Meta and TikTok direct-response conversion. Combines creator talent footage with snappy product callouts and native social pacing.',
      challenge: 'Maintaining organic, authentic UGC feel while driving commercial conversion.',
      solution: 'Fast visual pacing, punchy social sound design, and high-contrast captions.',
      role: ['UGC Editing', 'Motion Graphics', 'Sound Design'],
      tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
      videoSourceType: 'google-drive',
      videoUrl: 'https://drive.google.com/file/d/15xo3vY1vEuh8YZrrdmlEXyhsCelAmvAx/view?usp=drive_link',
      googleDriveUrl: 'https://drive.google.com/file/d/15xo3vY1vEuh8YZrrdmlEXyhsCelAmvAx/view?usp=drive_link',
      posterImage: 'https://lh3.googleusercontent.com/d/15xo3vY1vEuh8YZrrdmlEXyhsCelAmvAx=w1080',
      featured: true
    }
  ]
};
