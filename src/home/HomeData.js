// ==========================================
// HOME PAGE CONSOLIDATED DATA (homeData.js)
// ==========================================

// 1. Hero Section Carousel Slides (Full-frame Landscape Images, perfectly centered)
export const heroCarouselSlides = [
  {
    id: 1,
    image: 'https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.jpg?s=612x612&w=0&k=20&c=whMTmOCyOUfNqoNBe8GPlmcNUM-aCfqD-0whdFPQpO4=',
    tag: 'Career Growth & Advisory',
    title: 'Accelerate Your Next Career Milestone',
    description: '100% Genuine work experience certificates & professional documentation compliant with top MNC background verification.',
    stat: '14,800+ Careers Guided',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=80',
    tag: 'Global Visa Assistance',
    title: 'Apostille & Embassy-Grade Visa Documentation',
    description: 'End-to-end visa paperwork for work, permanent residency, and study permits verified for USA, UK, Canada & Europe.',
    stat: '99.4% Approval Rate',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    tag: 'Corporate Training',
    title: 'Hands-on Real Time Projects Training',
    description: 'Live production codebases, enterprise architecture, and technical interview defense led by industry architects.',
    stat: '30+ Live Enterprise Repos',
  },
  {
    id: 4,
    image: 'https://img.magnific.com/free-photo/business-meeting-office_1268-21523.jpg?semt=ais_hybrid&w=740&q=80',
    tag: 'Verification Shield',
    title: 'Telephonic & Official Email Verification',
    description: 'Active HR domain email verification and dedicated telephonic BGC response support across 30+ Indian commercial hubs.',
    stat: 'Pan-India BGC Clear',
  },
  {
    id: 5,
    image: 'https://thumbs.dreamstime.com/b/group-businesspeople-having-meeting-office-lobby-overhead-view-discussion-37223778.jpg?w=992',
    tag: 'Trusted Nationwide',
    title: 'Proven Credibility for 12+ Years',
    description: 'Empowering ambitious professionals across Bengaluru, Hyderabad, Pune, Mumbai, Gurugram, Noida, and 24 other cities.',
    stat: 'ISO 9001:2015 Certified',
  },
];

// 2. Horizontal Features Bar Items
export const featuresBarData = [
  {
    id: 'exp-cert',
    title: 'Experience Certificate',
    path: '/services/experience-certificate',
    tagline: '100% MNC Verified',
    type: 'certificate',
  },
  {
    id: 'visa-doc',
    title: 'Visa Documentation',
    path: '/services/visa-documentation',
    tagline: 'Apostille & Embassy Ready',
    type: 'visa',
  },
  {
    id: 'project-training',
    title: 'Real Time Project Training',
    path: '/services/real-time-projects-training',
    tagline: 'Hands-on Production Repos',
    type: 'training',
  },
];

// 3. About Career Consultancy Section Data
export const aboutSectionData = {
  headingPart1: 'About',
  headingPart2: 'Career Consultancy',
  decorativeSubtitle: 'Trusted Career Catalyst & Placement Partner',
  summaryText:
    'Career Consultancy is an authorized, premier career advancement and verification consulting firm in India. We specialize in providing 100% verified experience credentials, apostille-grade visa documentation, and hands-on real-time enterprise training. Partnering with a vast network of top MNCs and high-growth commercial hubs, our expert advisors bridge the gap between ambitious talent and world-class career placements with guaranteed compliance.',
  readMoreBtn: {
    text: 'Read More',
    link: '/why-us',
  },
  // Perfectly centered, wide corporate images
  carouselImages: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      alt: 'Professional Career Counseling Session',
      caption: 'Expert Career Guidance & Corporate Mentorship',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80',
      alt: 'Corporate Boardroom Strategic Planning',
      caption: 'Strategic Talent Placement & Growth',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      alt: 'Real Time Tech Project Team Training',
      caption: 'Hands-on Real Time Production Code',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
      alt: 'Successful Job Placement Candidate',
      caption: 'Celebrating 14,800+ Placed Careers',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1000&q=80',
      alt: 'Executive Leadership & HR Advisory',
      caption: 'Authorized Corporate Verification Network',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
      alt: 'Global Visa & Documentation Screening',
      caption: 'Apostille & Embassy Ready Documentation',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80',
      alt: 'International Corporate Conference',
      caption: 'Top MNC Background Verification Compliance',
    },
  ],
  staticFeature: {
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    alt: 'Career Consultancy Student and Candidate Success',
    badgeText: 'Priority Placement Drive',
    highlightText: '100% Verified',
    subText: 'Accelerate your dream job offer with official credentials',
  },
};

// 4. Our Services Section with 3D Flip Cards Data
export const servicesSectionData = {
  headingPart1: 'OUR',
  headingPart2: 'SERVICES',
  subheading: 'Industry-standard corporate solutions engineered for background verification and career growth.',
  cards: [
    {
      id: 'experience-certificate',
      title: 'Experience Certificate',
      path: '/services/experience-certificate',
      frontImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      frontDescription: 'Collaborate Consulting exists to find the place where disparate career aspirations meet verified corporate authenticity.',
      backTitle: 'Experience Certificate',
      backDescription:
        'Authorized employment credentials for IT & non-IT domains across India. Backed by active official HR domain email responses, landline verification, and full EPFO compliance. Our authenticated experience certifications ensure a 100% seamless transition through third-party background screening.',
      // High-end Executive Color scheme for Card 1
      frontGradient: 'from-[#0b1f3a] via-[#09182d] to-[#050e1b]',
      frontAccentLine: '#38bdf8',
      backAccentGradient: 'from-blue-900 via-indigo-950 to-slate-950',
      backAccentColor: '#38bdf8',
      highlights: ['Official HR Domain Mail Verification', 'EPFO & Telephonic Response', 'Top MNC Formatted Documents'],
      btnText: 'Read More',
    },
    {
      id: 'visa-documentation',
      title: 'Visa Documentation',
      path: '/services/visa-documentation',
      frontImage: 'https://media.istockphoto.com/id/1783635446/photo/visa-application-form.jpg?s=612x612&w=0&k=20&c=RWnFVTydHN2C8-fxumXIE27tU8a-YwKrnlClwbHkLUE=',
      frontDescription: 'Visa Services technologies deliver the meticulous documentation you need to satisfy strict consular standards and fast-track approval.',
      backTitle: 'Visa Documentation',
      backDescription:
        'Comprehensive, embassy-ready work and permanent residency paperwork prepared under strict international guidelines. Complete with apostille legalization, Ministry of External Affairs attestation, and certified financial proof dossiers for USA, UK, Canada, and Schengen zones.',
      // High-end Executive Color scheme for Card 2
      frontGradient: 'from-[#08222d] via-[#061922] to-[#040f15]',
      frontAccentLine: '#2dd4bf',
      backAccentGradient: 'from-teal-800 via-cyan-950 to-slate-950',
      backAccentColor: '#2dd4bf',
      highlights: ['Apostille & Embassy Legalization', 'Strict Consular Compliance Check', 'Work & PR Visa Dossiers'],
      btnText: 'Read More',
    },
    {
      id: 'real-time-projects-training',
      title: 'Real Time Project Training',
      path: '/services/real-time-projects-training',
      frontImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      frontDescription: 'Master live production codebases, enterprise system design, and hands-on technical interview defense led by industry architects.',
      backTitle: 'Real Time Project Training',
      backDescription:
        'Bridge the gap between theoretical knowledge and real enterprise execution. Work directly on production codebases, microservices architectures, cloud CI/CD pipelines, and defend complex software architectures with full confidence in technical rounds.',
      // High-end Executive Color scheme for Card 3
      frontGradient: 'from-[#1c173b] via-[#14102c] to-[#0c0a1b]',
      frontAccentLine: '#c084fc',
      backAccentGradient: 'from-purple-900 via-violet-950 to-slate-950',
      backAccentColor: '#c084fc',
      highlights: ['Live Enterprise Repositories', 'Architecture & Microservices', 'Technical Defense & Mock Panels'],
      btnText: 'Read More',
    },
  ],
};
