import {
   
    backend,
    
    web,
    javascript,
    
    html,
    css,
    reactjs,   
    tailwind,
    git,
    github,
php,
bootstrap,
wordpress,
mysql,
    
polaris,
portfolio,
    tripguide,
    
    i2e,
    digilocker,
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
        id: "resume",
        title: "Resume",
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
        title: "Frontend Developer",
        icon: backend,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "GitHub",
        icon: github,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "BootStrap",
        icon: bootstrap,
    },

    {
        name: "WordPress",
        icon: wordpress,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "i2e Consulting",
        icon: i2e,
        iconBg: "#383E56",
        date: "Aug 2022 - Ongoing",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Student Trainee",
        company_name: "i2e Consulting",
        icon: i2e,
        iconBg: "#E6DEDD",
        date: "Mar 2022 - Aug 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "UI/UX & Functionality Tester Intern",
        company_name: "DigiLocker",
        icon: digilocker,
        iconBg: "#383E56",
        date: "Jan 2021 - May 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    // {
    //     testimonial:
    //         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //     name: "Sara Lee",
    //     designation: "CFO",
    //     company: "Acme Co",
    //     image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //     testimonial:
    //         "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //     name: "Chris Brown",
    //     designation: "COO",
    //     company: "DEF Corp",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //     testimonial:
    //         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "CTO",
    //     company: "456 Enterprises",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];

const projects = [
    {
        name: "AI Based Game Development ",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Digital Video Game Store ",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
        ],
        image: polaris,
        source_code_link: "https://github.com/",
    },
    {
        name: "Portfolio Website",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };