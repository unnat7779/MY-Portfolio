import GsocImage from './gsoc.png';
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Unnat Agrawal",
    stack: ["Software Engineer", "Frontend Developer"],
    bio: " I am passionate about technology and eager to apply my knowledge in real-world projects. With a strong foundation in programming, algorithms, and software development, I am continuously expanding my skills to stay updated with the latest trends in the tech industry. My academic journey is driven by a desire to innovate and contribute to impactful solutions in the field of computer science."
};



const ProjectInfo = [
    // {
    //     title: "Ekart E-comm App",
    //     desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
    //     image: "Ekart.png",
    //     live: true,
    //     technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
    //     link: "https://code-mars.github.io/Ekart/",
    //     github: "https://github.com/Code-Mars/Ekart/"
    // },
    // {
    //     title: "Facebook Clone",
    //     desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    //     image: "Facebook.png",
    //     live: false,
    //     technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
    //     link: "https://github.com/Code-Mars/Facebook-Clone",
    //     github: "https://github.com/Code-Mars/Facebook-Clone"
    // },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: `${process.env.PUBLIC_URL}/Spotify.png`,  // Correct usage inside an object
        live: false,
        technologies: ["React", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    // {
    //     title: "Travel Tracker",
    //     desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
    //     image: "Travel.png",
    //     live: false,
    //     technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
    //     link: "https://github.com/Code-Mars/Travel-Tracker",
    //     github: "https://github.com/Code-Mars/Travel-Tracker"
    // },
    // {
    //     title: "Instagram Clone",
    //     desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    //     image: "Instagram.png",
    //     live: false,
    //     technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
    //     link: "https://github.com/Code-Mars/Instagram-Clone",
    //     github: "https://github.com/Code-Mars/Instagram-Clone"
    // },
    {
        title: "GSOC Clone",
        desc: "I developed a GSoC clone that replicates the core functionalities of the Google Summer of Code platform while introducing several enhanced features. This project enables users to search and explore participating companies with additional filters, making it easier to find opportunities that align with their interests and skills.",
        image: `${process.env.PUBLIC_URL}/gsco2.png`,
  // Add the slash before the file name
        live: false,
        technologies: ["React", "Tailwind", "JavaScript", "Tabler-Icons"],
        link: "https://github.com/Code-Mars/CodeX",
        github: "https://github.com/Code-Mars/CodeX"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS",  "JavaScript", "React JS", "Tailwind CSS"],
    },
    // {
    //     title: "Backend",
    //     skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    // },
    {
        title: "Languages",
        skills: ["C", "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code"]
    }
];
   
const socialLinks = [
    { link: "https://github.com/unnat7779", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/unnat7779", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/_unnat_7779", icon: IconBrandInstagram }, 
    
    { link: "https://www.leetcode.com/u/unnat_7779", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Computer Science Student",
        company: "Delhi Technological University",
        date: "August 2023 - Present",
        desc: "Currently pursuing a Bachelor of Technology in Computer Science and Engineering at Delhi Technological University. I have completed courses in data structures, algorithms, object-oriented programming, and software engineering, gaining a strong foundation in computer science principles and practices. I have also participated in hackathons, coding competitions, and projects to apply my skills in real-world scenarios and collaborate with peers to solve complex problems.",
        skills: [ "React JS", "Node JS", "MongoDB", "TypeScript", "Java", "C++", "Python", "HTML", "CSS", "JavaScript", "Git", "Github", "VS Code", "Figma"]
    },
    // {
    //     role: "System Engineer",
    //     company: "Infosys",
    //     date: "Nov 2022 - Sep 2023",
    //     desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    //     skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    // }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, Slugs , ExperienceInfo };