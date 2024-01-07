import { meta, shopify, uczelnia, tesla } from "../assets/images";
import {
  car2,
  car,
  contact,
  css,
  estate,
  csharp,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  docker,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  postman,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  qrCode,
  logoH4L,
  msSql,
  mySql,
  postGresSql,
  vite,
  facebook,
  idea,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: csharp,
    name: "Csharp",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postman,
    name: "PostMan",
    type: "DataBase",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: msSql,
    name: "MSSQL",
    type: "Database",
  },
  {
    imageUrl: mySql,
    name: "MYSQL",
    type: "Database",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: postGresSql,
    name: "postgresSSQL",
    type: "Database",
  },
];

export const experiences = [
  {
    title: "Bachelor Student",
    company_name: "Uczelnia Lazarskiego",
    icon: uczelnia,
    iconBg: "#accbe1",
    date: "October 2019 — March 2023",
    points: ["Kierunek: Zarządzanie. Specjalizacja: E-biznes."],
  },
  {
    title: "Started my programming road",
    company_name: "IT Sphere",
    icon: idea,
    iconBg: "#7C39E6",
    date: "October 2019 — March 2023",
    points: [
      "I started to programm on C# then I went to Typescript/Javascript, now I am trying to combine them both with more priority to TS/JS because I like them more and on the same way I pin to this main languages bunch of different stuff such as frameworks, SQLs, enova, mongodb and many more.",
    ],
  },
  {
    title: "Sku Formatter",
    company_name: "Code-Generator-API",
    icon: qrCode,
    iconBg: "#b7e4c7",
    date: "February 2023 - March 2023",
    points: [
      "We enter the name of the product and the result we get is a suggested one product code.",
    ],
  },
  {
    title: "GDPR Risk Extractor z Hack4Law edycja III",
    company_name: "Ai lawyer chat bot with Rysk Stat Chart",
    icon: logoH4L,
    iconBg: "#a2d2ff",
    date: "October 23 2023 - October 24 2023",
    points: [
      "Project was candidate on Hackathon 2023. This programm was done in one day due to Hackaton regulations. The product is addressed mainly to various lawyers positions. This is a beta version of the app that may be useful for the LegalTech community in Poland and users of applications such as Lex ODO and RiskTracker. You can see more in Projects part",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "https://profile-work-site.netlify.app/#contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Gruntmaster",
  },
  {
    name: "Facebook",
    iconUrl: facebook,
    link: "https://www.facebook.com/andrew.horlanov/",
  },
];

export const projects = [
  {
    iconUrl: estate,
    theme: "btn-back-red",
    name: "Main Portfolio Site",
    description: "Main portfolio site",
    link: "https://profile-work-site.netlify.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-green",
    name: "Car Showcase",
    description:
      "Built a mobile app for finding and comparing cars on the market.",
    link: "https://github.com/Gruntmaster/car-rentpay-showplatform",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "Gdpr assistant hack4law ",
    description:
      "Hackaton 2023 project candidate. Ai lawyer chat bot with Rysk Stat Chart",
    link: "https://github.com/Gruntmaster/gdpr_assistant_hack4law",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-pink",
    name: "SKU Formatter",
    description:
      "We enter the name of the product and the result we get is a suggested one product code.",
    link: "https://github.com/Gruntmaster/Code-Generator-API",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-yellow",
    name: "MarketIdea",
    description: "Developed a web site for business salesforce partner.",
    link: "https://github.com/Gruntmaster/MarketIdea-Copy-for-Netlify-",
  },
  {
    iconUrl: threads,
    theme: "btn-back-orange",
    name: "Upcoming personal project",
    description: "Soon there will be another item to portfolio.",
    link: "/",
  },
];
