import {
  FaLinkedin,
  FaHtml5,
  // FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaDocker
  // FaYoutube,
} from "react-icons/fa";
import { SiSpring, SiRedhatopenshift } from "react-icons/si"
import { IoLogoGithub } from "react-icons/io";
import { TbSql } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

// Footer Social Icons
const footerIcons = [
  {
    name: "linkedIn",
    component: FaLinkedin,
    link: "https://www.linkedin.com/in/evioghene-omuabor", // Replace with your actual LinkedIn URL
  },
  {
    name: "github",
    component: IoLogoGithub,
    link: "https://github.com/evioghene", // Replace with your actual GitHub URL
  },
  // You can add more icons if needed
];

// Header Text and Logo Configuration
const textLogo = "Evioghene Omuabor";
const imgLogo = null; // Optional, can replace with an image logo

// Navigation Menu Items
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Page Configuration
const AboutPage = {
  authorProfile: "assets/images/linkedInImage.png", // Your profile image link (optional)
  authorDescription:
    "I am an individual passionate about technological development and its impact in various spheres of life. I am a certified scrum master with professional experience in both Software Engineering and Project Management roles. I am a strategic thinker with a mindset to solve bugging issues and perceive opportunities from challenges.",
  getInTouchUrl: "mailto:eviogheneomuabor@gmail.com", // Email link
  authorName: "Evioghene Omuabor",
  profileImgTagLine: "Senior Integration Software Engineer @ Stanbic IBTC Bank",
  authorContactMail: "eviogheneomuabor@gmail.com",
  authorContactNumber: "+2347065953443",
};

// Education Details
const EducationPage = [
  {
    graduationYear: 2024,
    degreeType: "Master's in Information Management",
    institution: "Ahmadu Bello University",
    institutionUrl: "https://www.abu.edu.ng/",
    grade: "Distinction | 4.53 cgpa"
  },
  {
    graduationYear: 2019,
    degreeType: "BEng Electrical and Electronics Engineering",
    institution: "Covenant University",
    institutionUrl: "https://www.covenantuniversity.edu.ng/",
    grade: "Distinction | 4.85 cgpa"
  },
];

// Certifications Section
const CertificatesPage = [
  {
    img: "", // Optional: Certificate image URL
    title: "Certified Scrum Master",
    description: "Certified Scrum Master with experience in Agile project management.",
    issuedBy: "Scrum Alliance",
    credentialURL: "https://www.scrumalliance.org/", // Replace with credential link
  },
  // Add more certifications if needed
];

// Skills Section Icons
const skillsPage = [
  SiSpring,
  FaJava,
  VscAzureDevops,
  FaDocker,
  SiRedhatopenshift,
  TbSql,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaHtml5,
];

// Projects Section
const projectsPage = [
  {
    projectName: "Airtime Service Optimization",
    projectDescription:
      "Optimized the Airtime service responsible for fulfilling up to hundreds of thousands of daily airtime requests to achieve a performance rating from 70% to 98%, increasing revenue for the bank.",
    projectURL: "", // Optional: Project demo link
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Java, SpringBoot, Performance Optimization",
    date: "Jan 2022 - Jun 2022",
  },
  {
    projectName: "Bulk Transfer Payment System",
    projectDescription:
      "Led a team of developers to develop a bulk transfer payment system for the bank capable of fulfilling up to 100,000 transaction payments at once within 5 minutes.",
    projectURL: "", // Optional: Project demo link
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Java, SpringBoot, NIBSS Multipay",
    date: "Jul 2022 - Dec 2022",
  },
  {
    projectName: "Pan-African Payment Settlement System",
    projectDescription:
      "Implemented a system for trade and payments across countries in Africa using their indigenous local currencies.",
    projectURL: "", // Optional: Project demo link
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Java, SpringBoot, Pan-African Payment Solution",
    date: "Jan 2023 - Apr 2023",
  },
  {
    projectName: "Lagos State Government Tax Collection Service",
    projectDescription:
      "Developed a collection service for Lagos State Government for tax payment, land use charges, and other relevant remittances.",
    projectURL: "", // Optional: Project demo link
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Java, SpringBoot, Payment Gateway",
    date: "May 2023 - Aug 2023",
  },
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
};
