import { HomeIcon, LayoutDashboard } from "lucide-react";
import { getYearsWithMonths } from "@/lib/utils";

export const DATA = {
    name: "Lookman Gohil",
    initials: "LG",
    url: "https://lookman.io",
    location: "Gujarat, India",
    locationLink: "https://www.google.com/maps/place/gujarat",
    description:
        "Software Engineer. I build things, break things, then build them better.",
    summary: `Software Engineer with a [Master's in Computer Science](/#education) and ${getYearsWithMonths("2024-06-01")}+ years building production-ready web applications. Specialized in [React ecosystem, Node/Express APIs, database optimization, and modern UI frameworks](/#skills). [Delivered multiple end-to-end projects](/project), handling everything from system design to deployment. Passionate about clean architecture and learning distributed systems. When I'm not shipping code, I'm probably breaking things to understand how they work.`,
    avatarUrl: "/me.webp",
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/project", icon: LayoutDashboard, label: "Project" },
    ],
    work: [
        {
            company: "Kode Creators",
            href: "https://kodecreators.com/",
            badges: [],
            location: "Vadodara, Gujarat",
            title: "Software Engineer",
            logoUrl: "/companies/kodecreators.webp",
            start: "May 2026",
            end: "Present",
            description:
                "Software Developer at Kode Creators. Responsibilities span component architecture, API integration, state management, and performance optimization. Building React-based web applications with active participation in team discussions around architecture and development processes. Currently upskilling in full-stack development and system design.",
        },
        {
            company: "Qodors",
            href: "https://www.qodors.com/",
            badges: [],
            location: "Surat, Gujarat",
            title: "Software Engineer",
            logoUrl: "/companies/qodors.webp",
            start: "Jan 2025",
            end: "May 2026",
            description:
                "Developed architecture for multi-module AI platform featuring automated video generation with customizable avatars and voice synthesis. Created interactive React Flow workflow builder for AI-powered automation. Implemented authentication infrastructure securing 5000+ user accounts. Contributed to architecture decisions and code reviews in Agile environment.",
        },
        {
            company: "Aarksoft Webtech",
            href: "https://aarksoft.in/",
            badges: [],
            location: "Vadodara, Gujarat",
            title: "Software Engineer",
            logoUrl: "/companies/aarksoft.webp",
            start: "Jun 2024",
            end: "Dec 2024",
            description:
                "Built production-grade MERN stack applications with Redux Toolkit managing application state across multiple components. Developed RESTful API integrations for seamless data exchange between frontend and backend systems. Worked alongside senior engineering team to deliver production-ready React applications, focusing on component architecture and user interface development.",
        },
    ],
    education: [
        {
            school: "Parul University",
            href: "https://paruluniversity.ac.in/faculty/engineering-technology/",
            degree: "Master of Computer Applications, Computer Science",
            logoUrl: "/education/parul.webp",
            start: "2023",
            end: "2025",
        },
        {
            school: "Parul University",
            href: "https://paruluniversity.ac.in/faculty/engineering-technology/",
            degree: "Bachelor of Computer Application, Computer Science",
            logoUrl: "/education/parul.webp",
            start: "2020",
            end: "2023",
        },
    ]
} as const;
