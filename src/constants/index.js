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

    i2e,
    digilocker,
    xie,
    gbmm,
    gvm,
    journeyverse,
    glam2door
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "background",
        title: "Background",
    },
    {
        id: "skills",
        title: "Skills",
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
            "Implemented 4-5 new features for company’s in-house project Pats!",
            "Developed highly interactive and responsive webpages for a client project using PHP, HTML5 and JavaScript.",
            "Added server side and client-side form validations and encryptions.",
            "Created REST APIs for the integration of front-end elements.",
        ],
    },
    {
        title: "Student Trainee",
        company_name: "i2e Consulting",
        icon: i2e,
        iconBg: "#E6DEDD",
        date: "Mar 2022 - Aug 2022",
        points: [
            "Created webpages for the company's website and external projects.",
            "Wrote 2-3 API calls in PHP for some new features for the Pats! Application.",
            "Worked on company's internal project called Pats along with other in-house projects.",
        ],
    },
    {
        title: "UI/UX & Functionality Tester Intern",
        company_name: "DigiLocker",
        icon: digilocker,
        iconBg: "#383E56",
        date: "Jan 2021 - May 2021",
        points: [
            "Worked as a functional tester for different android applications and websites while ensuring adherence to defined design.",
            "Tested organization’s site and versatile application to guarantee their smooth working.",
            "Drafted 5+ point by point reports of loopholes and submitted to my lead.",
            "Reported mistakes in the User Interface plan or usefulness for fixing.",
        ],
    },
];

const educations = [
    {
        title: "Bachelor of Engineering (IT)",
        company_name: "Xavier Institute of Engineering, Mumbai",
        icon: xie,
        date: "Aug 2017 - Jul 2021",
        points: "7.44 CGPA",
    },
    {
        title: "Higher Secondary Certificate (11th & 12th)",
        icon: gbmm,
        company_name: "G.B.M.M Jr College",
        date: "Jun 2015 - May 2017",
        points: "67.38%",
    },
    {
        title: "Secondary School Certificate (10th)",
        company_name: "Bhartiya Vidya Bhavan's GVM, Hinganghat",
        icon: gvm,
        date: "Apr 2014 - Mar 2015",
        points: "9.44 CGPA",
    },
];

const skills = [
    {
        title: "Frontend",
        points: [
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Bootstrap",
            "Next js",
            "tailwindcss",
            "SEO",
        ],
    },
    {
        title: "Backend & Database",
        points: [
            "PHP",
            "MySQL",
            "MySQL Workbench",
            "WordPress",
            "Rest API",
        ],
    },
    {
        title: "Tools",
        points: [
            "Git",
            "GitHub",
            "Jira",
            "VS Code",
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
        name: "Digital Video Game Store",
        description:
            "A website where users can purchase games digitally.",
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
        source_code_link: "https://github.com/siddharth-kothari/polaris-store",
    },
    {
        name: "Portfolio Website",
        description:
            "A website to showcase my skills",
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
        source_code_link: "https://github.com/siddharth-kothari/portfolio-website",
    },
    {
        name: "JourneyVerse",
        description:
            "A blog website where users can read and post blogs.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "strapi",
                color: "green-text-gradient",
            },
            {
                name: "nextAuth",
                color: "pink-text-gradient",
            },
        ],
        image: journeyverse,
        source_code_link: "https://github.com/siddharth-kothari/portfolio-website",
    },
    {
        name: "Glam2Door",
        description:
            "A website for business that provides salon services to the customer in the comfort of there home.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind css",
                color: "green-text-gradient",
            },
            {
                name: "Framer Motion",
                color: "pink-text-gradient",
            },
        ],
        image: glam2door,
        source_code_link: "https://github.com/siddharth-kothari/portfolio-website",
    },
];

export { services, technologies, experiences, educations, testimonials, projects, skills };