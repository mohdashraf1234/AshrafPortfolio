// src/data/portfolioData.js (UPDATED: Skill Data Structure and Icons)

export const personalInfo = {
    name: "Mohd Ashraf",
    title: "Software Developer",
    email: "mohd36089@gmail.com",
    phone: "+91 9721403673",
    location: "Noida, Uttar Pradesh",
    cvLink: "./images/AshrafResume 1512.pdf", 
    profileImg: <img src="./images/AshrafImg.jpg" alt="Profile Picture of Mohd Ashraf" />
};

export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohd-ashraff/",
        iconClass: "fab fa-linkedin-in" // Font Awesome class for LinkedIn
    },
    {
        name: "GitHub",
        url: "https://github.com/mohdashraf1234",
        iconClass: "fab fa-github" // Font Awesome class for GitHub
    },
    {
        name: "Twitter (X)",
        url: "https://x.com/MdAshraf827167",
        iconClass: "fab fa-twitter" // Font Awesome class for Twitter/X
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/a_cube___",
        iconClass: "fab fa-instagram" // Font Awesome class for Instagram
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/a_cube___", // Assuming this is your LeetCode URL based on username
        iconClass: "fas fa-code" // Using a code icon for LeetCode
    }
];

export const aboutContent = "I hold a B.Tech in Electronics and Communication Engineering from ITS Engineering College, Gr. Noida, and have a strong passion for technology. I enhanced my skills by enrolling at Jspider, where I specialized in full-stack Java development with a focus on the web. Through this program, I gained expertise in HTML, CSS, JavaScript, SQL, J2EE, Spring MVC/Spring Boot, microservices, and REST API. Additionally, I have a solid foundation in Java, with 2+ years of experience at Image Infosystems Pvt Ltd, Delhi, where I utilized Java frameworks for data manipulation.";


// 🚨 NEW: Structured Skill Data with Icons for the Skills.jsx update
export const skillData = {
    frontend: [
        { name: "React.js", iconClass: "fab fa-react" },
        { name: "JavaScript", iconClass: "fab fa-js-square" },
        { name: "HTML5", iconClass: "fab fa-html5" },
        { name: "CSS3", iconClass: "fab fa-css3-alt" },
        { name: "Bootstrap", iconClass: "fab fa-bootstrap" },
        { name: "Tailwind CSS", iconClass: "fas fa-wind" },
    ],
    backend: [
        { name: "Core Java", iconClass: "fab fa-java" },
        { name: "Spring Boot", iconClass: "fas fa-leaf" }, 
        { name: "RESTful API", iconClass: "fas fa-cloud" },
        { name: "Microservices", iconClass: "fas fa-microchip" },
    ],
    databases: [
        { name: "MySQL", iconClass: "fas fa-database" },
        { name: "PostgreSQL", iconClass: "fas fa-database" },
        { name: "MongoDB", iconClass: "fas fa-database" },
    ],
    tools: [
        { name: "Git & GitHub", iconClass: "fab fa-github" },
        { name: "Docker", iconClass: "fab fa-docker" },
        { name: "AWS", iconClass: "fab fa-aws" },
        { name: "VS Code", iconClass: "fas fa-code" },
    ],
};

export const experienceData = [
    {
        title: "Java Developer",
        company: "Swapdigit LLP",
        location: "Bareilly, U.P",
        duration: "Dec 2024 - Present",
        // 🚨 Quantified Update
        description: "Actively involved in designing and enhancing scalable software solutions, focusing on backend services and APIs. **Optimized data retrieval latency by 15%** through efficient database operations and implementation of robust Java-based frameworks.",
    },
    {
        title: "Software Developer",
        company: "Star Agriseeds Pvt. Ltd.",
        location: "",
        duration: "2024 - Dec 2024",
        // 🚨 Quantified Update
        description: "Contributed to full-stack modules for internal processes, improving data management efficiency. **Developed custom reporting tools using JasperReports**, reducing manual report generation time by 4 hours weekly.",
    },
    {
        title: "Software Developer",
        company: "Image Infosystem Pvt Ltd",
        location: "",
        duration: "2022 - 2023",
        // 🚨 Quantified Update
        description: "Engaged in both front-end and back-end development tasks, contributing to the maintenance and feature implementation of client solutions. Successfully **delivered 4 key features** within the software development lifecycle, ensuring project deadlines were met.",
    },
    {
        title: "Java Full-Stack Training",
        company: "QSpiders Noida",
        location: "",
        duration: "6 Months",
        description: "Gained comprehensive expertise in Java full-stack development, covering front-end and back-end technologies, enabling me to proficiently develop dynamic web applications.",
    },
];

export const projectImageAssets = {
    certificates: [
        "./images/LearnbayCertificate.jpg",
        "./images/JavaTrainingCertificate.jpg",
    ],
    companyLogos: [
        "./images/Star_Pic.JPG",
        "./images/imageinfo.jpg",
        "./images/star3.jpg",
    ]
}


export const projectsData = [
    {
        title: "Cloud-based Contact Application",
        image: "/images/ContactProject.png",
        description: "A scalable cloud-hosted contact management system with user authentication, role-based access control, real-time database synchronization, and Razorpay payment integration.",
        techs: ["Java", "Spring Boot", "MySQL", "REST API"],
        demoLink: "/images/ContactProject1.mp4", 
        codeLink: "https://github.com/mohdashraf1234/CloudContactBaseContactSystemApplication"
    },
    {
        title: "Chat Application",
        image: "/images/chatapp2.jpg",
        description: "A full-stack real-time messaging platform featuring instant messaging, audio calling, file sharing, and user presence indicators with secure WebSocket communication and WebRTC integration.",
        techs: ["Java", "Spring Boot", "WebSocket", "REST API"],
        demoLink: "/images/ContactProject1.mp4",
        codeLink: "https://github.com/mohdashraf1234/ChatApplication"
    },
    {
        title: "Music System",
        image: "/images/MusicSystemBC.jpg",
        description: "A responsive online music player where users can enjoy songs, create playlists, adjust equalizers, and toggle between light/dark themes.",
        techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        demoLink: "https://mohdashraf1234.github.io/MusicSystemByAshraf/",
        codeLink: "https://github.com/mohdashraf1234/MusicSystemByAshraf"
    },
    {
        title: "Student Info Report",
        image: "/images/studentInfo.jpeg",
        description: "A Spring Boot based web application to generate information forms and reports dynamically with PDF generation using JasperReports.",
        techs: ["Java", "Spring Boot", "Thymeleaf", "JasperReports"],
        demoLink: "./images/StudentReport%20Video%20(online-video-cutter.com).mp4", 
        codeLink: "https://github.com/mohdashraf1234/StudentFormGenerator"
    },
    {
        title: "Snake Game",
        image: "/images/SnakeGame.png",
        description: "A fun and interactive snake game with increasing difficulty levels, score tracking, and responsive controls for both desktop and mobile devices.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        demoLink: "https://mohdashraf1234.github.io/SnakeG", 
        codeLink: "https://github.com/mohdashraf1234/SnakeG"
    },
    {
        title: "Task Management",
        image: "/images/TaskM.png",
        description: "A task management web application that enables users to add, edit, and track tasks with deadlines, priorities, and categories.",
        techs: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
        demoLink: "/images/TMS.mp4", 
        codeLink: "https://github.com/mohdashraf1234/TaskManagmentSystem"
    },
    {
        title: "Flipkart Clone",
        image: "/images/FlipKartClone.png",
        description: "A front-end of Flipkart clone featuring product listing, search, shopping cart, authentication, and order management.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        demoLink: "https://mohdashraf1234.github.io/FlipKartCloneByAshraf/", 
        codeLink: "https://github.com/mohdashraf1234/FlipKartCloneByAshraf"
    },
    {
        title: "3D Calculator",
        image: "/images/Calculator.png",
        description: "A visually appealing 3D styled calculator built with CSS animations and JavaScript. Supports all basic arithmetic operations with an engaging interactive UI.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        demoLink: "https://mohdashraf1234.github.io/Calculator/", 
        codeLink: "https://github.com/mohdashraf1234/Calculator"
    },
    {
        title: "TODO List",
        image: "/images/todolist.png",
        description: "A responsive and interactive To-Do List web application. Users can add, edit, mark as complete, and delete tasks. The app stores tasks in local storage for persistence.",
        techs: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
        demoLink: "https://mohdashraf1234.github.io/TODO-List1/", 
        codeLink: "https://github.com/mohdashraf1234/TODO-List1"
    },
    {
        title: "Alarm Clock",
        image: "/images/DigitalClock.png",
        description: "A responsive and interactive Digital Clock web application with three modes: Live clock display, alarm functionality, and countdown timer with notifications.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        demoLink: "https://mohdashraf1234.github.io/Digital-clock/", 
        codeLink: "https://github.com/mohdashraf1234/Digital-clock"
    },
];