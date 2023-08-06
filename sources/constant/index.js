import indivue from "../assets/img/indivue.jpeg";
import beatstore from "../assets/img/beatstore.jpg";
import {
  bootstrap,
  css,
  html,
  htmlcss,
  js,
  mongodb,
  next,
  nextjs,
  nodejs,
  react,
  reactjs,
  tailwind,
  tailwindcss,
} from "../assets/svg";

export const experiences = [
  {
    title: "Intern",
    company_name: "Siemens EDA",
    icon: indivue,
    bg: "#1d1836",
    iconBg: "white",
    color: "white",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining frontend of web applications using React.js and MUI and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing/taking constructive feedback to/from other developers.",
    ],
  },
  // {
  //   title: "Full Stack Developer & Founder",
  //   company_name: "BeatStore",
  //   icon: beatstore,
  //   bg: "#0eb07a",
  //   iconBg: "black",
  //   color: "white",
  //   date: "December 2022 - Present",
  //   points: [
  //     "Developing and maintaining full web applications using Next.js, MongoDB and Tailwind and other related technologies.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Creating fully secure site.",
  //   ],
  // },
];

export const skills = [
  {
    img: next,
    label: "Next.js",
  },
  {
    img: react,
    label: "React.js",
  },
  {
    img: js,
    label: "JavaScript",
  },
  {
    img: html,
    label: "HTML",
  },
  {
    img: css,
    label: "CSS",
  },
  {
    img: tailwind,
    label: "Tailwind CSS",
  },
  {
    img: bootstrap,
    label: "Bootstrap",
  },
  {
    img: nodejs,
    label: "Node.js",
  },
  {
    img: mongodb,
    label: "MongoDB",
  },
];

export const keySkills = [
  {
    id: 0,
    label: "MongoDB",
    img: mongodb,
  },
  {
    id: 1,
    label: "HTML/CSS/JS",
    img: htmlcss,
  },
  {
    id: 2,
    label: "React.js",
    img: reactjs,
  },
  {
    id: 3,
    label: "Node.js",
    img: nodejs,
  },
  
  {
    id: 4,
    label: "Next.js",
    img: nextjs,
  },
 
 
];

export const projects = [
  {
    name: "Mudassir - Portfolio",
    tags: ["Next.js", "FramerMotion", "TailwindCSS"],
    description:
      "This is the current site you are currently visiting. It's my personal portfolio site where I showcase my skills and abilities. I've created this site to demonstrate my expertise and experience in my field, and to provide potential clients or employers with a comprehensive understanding of my capabilities. On this site, you can explore my past work, learn about the skills and tools I possess, and gain a better understanding of how I can add value to your projects or organization. Thank you for taking the time to explore my portfolio!",
    link: "https://sourabhportfolio.vercel.app",
  },
  {
    name: "Beautybebo-Clone",
    link: "https://thriving-chimera-a60362.netlify.app/",
    tags: ["HTML", "CSS", "js"],
    description:
      "Buy Beauty and Cosmetic Products Online From Beauty Bebo. Shop Makeup, Skincare, Eye Care, Mom & Baby Care, Personal Care & Hair Products from Top Beauty Brands.",
  },
  {
    name: "AirMeet Video Chat App",
    tags: ["HTML","CSS","js", "Node.js", "MongoDB","Redis","Socket.io"],
    description:
      "Airmeet allows users to create video chat rooms and communicate with other users in real-time.",
    link: "https://airmeeet.netlify.app/",
  },
  {
    name: "GOFIT",
    tags: ["HTML","CSS","js", "Node.js", "MongoDB" ],
    description:
      "Welcome to Go Fit, the ultimate sports and wellness app designed to help users and certified fitness trainers to get together and work on the fitness goal on one platform.",
    link: "https://go-fit.netlify.app/",
    
  },
  // {
  //   name: "TextUtils",
  //   link: "https://text-utils-beta.vercel.app/",
  //   tags: ["React.js", "Bootstrap"],
  //   description:
  //     "I have developed a text utility website (For Learning Purpose) that enables users to modify text in various ways. This includes converting text to UPPERCASE, lowercase, or Capitalizing Each Word of a String. The website also offers features to remove extra spaces and reverse the text. While the primary goal of this project is for learning purposes, I have incorporated additional features such as Dynamic Theme and Dark mode for an enhanced user experience.",
  //   github: "https://github.com/sourabhkumhar/TextUtils",
  // },
];
