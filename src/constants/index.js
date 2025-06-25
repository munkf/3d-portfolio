import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  danish,
  figma,
  firebase,
  tuxuri,
  rashdanlogo,
  shopify,
  carrent,
  padu,
  threejs,
  learnify,
  rashdan,
  studyla,
  tnb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
   {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
 
];

const experiences = [
  {
    title: "DevOps Intern",
company_name: "Tuxuri Sdn. Bhd.",
icon: tuxuri,
iconBg: "#383E56",
date: "July 2024 – September 2024",
points: [
  "Built interactive GIS web applications with MapLibre and OpenStreetMap baselayers, marking the Tuxuri office location with pop-up address displays.",
  "Integrated PDF asset reports into Google Sheets and exported them to Excel for the MyAssets SIRIM system.",
  "Installed DuckDB and wrote SQL queries against coordinate data to generate GeoJSON files for seamless map integration.",
  "Overlaid Points-of-Interest from Overture Maps onto MapLibre as dynamic, interactive map layers.",
  "Developed mobile-first, responsive web designs using HTML, CSS, and vanilla JavaScript to ensure cross-device compatibility.",
  "Designed and prototyped a responsive weather widget in Figma for a TNB demo distribution project.",
  "Automated web-scraping scripts to collect external data, enriching the geospatial mapping features."
],

  },
  {
    title: "Full-Stack Developer",
    company_name: "Rashdan Classic Sdn. Bhd.",
    icon: rashdanlogo,
    iconBg: "#E6DEDD",
    date: "Sept 2024",
    points: [
    "Built a premium car-plate marketplace platform using Next.js (API routes) for backend and Tailwind CSS for frontend styling.",
    "Integrated Firebase for authentication, Firestore data storage, and real-time updates to manage listings and transactions.",
    "Designed responsive UI/UX mockups and prototypes in Figma, ensuring a consistent brand experience across devices.",
    "Deployed and monitored the application on Vercel, optimizing build performance and routing for seamless user access.",
    ],
  },
  {
    title: "E-Commerce Developer",
    company_name: "Padu Gears Trading",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
     "Migrated the entire product database from Yezza into Shopify using CSV imports and Shopify’s Admin API.",
    "Configured and connected a custom domain (DNS setup, SSL) to ensure a seamless branded experience.",
    "Customized and extended a paid Shopify theme—tweaked Liquid templates, integrated Tailwind CSS utilities, and updated UI assets in Figma.",
    "Set up core store functionality: created collections, configured shipping rates, tax rules, and integrated payment gateways (iPay88/Billplz) for secure checkout.",
    ],
  },
  /* {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }, */
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Iman proved me wrong.",
    name: "Danish",
    designation: "CFO",
    company: "Acme Co",
    image: danish,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Iman does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Iman optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Learnify AI Platform",
    description:
      "AI-enhanced learning management system that lets students upload course materials, get instant summaries, switch between models (ChatGPT, Gemini, Claude), and chat with an intelligent assistant.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: learnify,
    source_code_link: "https://github.com/munkf/learnify-oasis",
  },
  {
    name: "StudyLah",
    description:
      "Mobile productivity app for students—featuring a smart schedule planner, assignment tracker, Pomodoro clock, habit tracker, and daily motivational quotes to balance academics and life.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: studyla,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rental Booking System",
    description:
      "Multi-branch car rental web app with wizard-style booking flow, real-time availability checks, and an admin dashboard featuring analytics and Chart.js visualizations.",
    tags: [
      {
        name: "laravel",
        color: "orange-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "chartjs",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "TNB Demo Distribution Mapping",
    description:
      "Geo-visualization tool using MapLibre to display TNB assets (power stations, distribution points) with custom SVG spritesheets and interactive overlays, integrated with backend APIs.",
    tags: [
      {
        name: "maplibre",
        color: "blue-text-gradient",
      },
      {
        name: "gis",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "inkscape",
        color: "orange-text-gradient",
      },
    ],
    image: tnb,
    source_code_link: "https://github.com/",
  },
  {
    name: "PaduGears E-Commerce",
    description:
      "Shopify storefront for gym apparel, accessories, and supplements, featuring full data migration from Yezza, custom domain setup, tailored Liquid template modifications, and Stripe/PayPal integration.",
    tags: [
      {
        name: "shopify",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: padu,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rashdan Classic",
    description:
      "Premium Malaysian car-plate marketplace built with Next.js & Tailwind CSS, using Firebase for auth & Firestore, and deployed on Vercel for fast, SEO-friendly performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
       {
        name: "vercel",
        color: "red-text-gradient",
      },
    ],
    image: rashdan,
    source_code_link: "https://www.rashdanclassic.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
