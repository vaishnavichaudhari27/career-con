export const topBarData = {
  trustBadge: "⚡ ISO 9001:2015 Certified | 100% Confidential Verification",
  whatsappText: "WhatsApp 24/7 Support",
  whatsappNumber: "+91 7982984125",
  whatsappLink: "https://wa.me/917982984125?text=Hello%20Dreamsoft%20Consultancy%2C%20I%20need%20assistance.",
  socialLinks: [
    {
      id: "fb",
      name: "Facebook",
      url: "https://www.facebook.com",
      iconType: "facebook",
    },
    {
      id: "li",
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      iconType: "linkedin",
    },
    {
      id: "wa",
      name: "WhatsApp Direct",
      url: "https://wa.me/917982984125",
      iconType: "whatsapp",
    },
  ],
};

export const brandData = {
  title: "DREAMSOFT",
  subtitle: "CONSULTANCY",
  badge: "VERIFIED",
  homePath: "/",
};

export const navItems = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "why-us",
    title: "Why Us",
    path: "/why-us",
  },
  {
    id: "our-services",
    title: "Our Services",
    path: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        id: "exp",
        title: "Experience Documents",
        path: "/services/experience-documents",
        desc: "Genuine employment documentation & letters",
        icon: "file-text",
        badge: "Popular",
      },
      {
        id: "visa",
        title: "Visa Services",
        path: "/services/visa-services",
        desc: "Work, study & migration visa assistance",
        icon: "globe",
      },
      {
        id: "pf",
        title: "PF / Form 16",
        path: "/services/pf-form16",
        desc: "Provident fund and tax documentation support",
        icon: "shield-check",
      },
      {
        id: "cert",
        title: "Online Certifications",
        path: "/services/certification",
        desc: "Accredited technical and management certifications",
        icon: "award",
      },
      {
        id: "train",
        title: "Online Training",
        path: "/services/online-training",
        desc: "Expert-led practical skill development courses",
        icon: "book-open",
      },
    ],
  },
  {
    id: "location",
    title: "Locations",
    path: "/location",
    hasDropdown: true,
    dropdownItems: [
      { title: "Bangalore", path: "/location/bangalore", state: "Karnataka" },
      { title: "Delhi NCR", path: "/location/delhi", state: "New Delhi" },
      { title: "Gurgaon", path: "/location/gurgaon", state: "Haryana" },
      { title: "Hyderabad", path: "/location/hyderabad", state: "Telangana" },
      { title: "Mumbai", path: "/location/mumbai", state: "Maharashtra" },
      { title: "Noida", path: "/location/noida", state: "Uttar Pradesh" },
      { title: "Pune", path: "/location/pune", state: "Maharashtra" },
      { title: "Chennai", path: "/location/chennai", state: "Tamil Nadu" },
      { title: "Kolkata", path: "/location/kolkata", state: "West Bengal" },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    path: "/blog",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    path: "/contact",
  },
];

export const ctaButton = {
  text: "Enquire Now",
  link: "https://wa.me/917982984125?text=Hi%20Dreamsoft%2C%20I%20would%20like%20to%20get%20a%20free%20consultation.",
};
