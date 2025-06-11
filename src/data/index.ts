import BookingWebSite from "../assets/bookingWebSite.webp";
import mui from "../assets/mui.svg";
import react from "../assets/re.svg";
import ts from "../assets/ts.svg";
import next from "../assets/next.svg";
import mysql from "../assets/mysql.svg";
import js from "../assets/js.svg";
import brainwave from "../assets/brainwave.webp";
import tw from "../assets/tail.svg";
import vite from "../assets/vite.svg";
import iphone from "../assets/iphone.webp";
import gsap from "../assets/gsap.svg";
import three from "../assets/three.svg";
import car from "../assets/3dcar.webp";
import scss from "../assets/scss.svg";
import videocall from "../assets/videocall.webp";
import firebase from "../assets/firebase.svg";
import monmariage from "../assets/monmariage.webp";
import hostinger from "../assets/hostinger.svg";
import wordpress from "../assets/wordpress.svg";
import webrtc from "../assets/webrtc.svg";
import code from "../assets/code.svg";
import freelance from "../assets/freelance.svg";
import link from "../assets/link.svg";
import git from "../assets/git.svg";
import redux from "../assets/redux.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

export const links = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export const heroContent = {
    title: "Welcome to My Portfolio",
    main: "Always creating Beautiful & Functional Web Experiences",
    description:
        "Im Ionathan the FrontEnd Developer & this is my corner of the web!",
};

export const projects = [
    {
        img: BookingWebSite,
        title: "Fullstack Booking Web App",
        description:
            "A full-stack booking web app with an admin panel, built using Next.js, MySQL, and MUI. It allows users to book accommodations and manage their bookings.",
        codebaseUrl: "https://github.com/ionathansideras/bookingsite/tree/main",
        liveUrl: "",
        techStack: [
            { icon: next, name: "Next.js" },
            { icon: react, name: "React" },
            { icon: mysql, name: "MySQL" },
            { icon: mui, name: "MUI" },
        ],
    },
    {
        img: brainwave,
        title: "SaaS landing page",
        description:
            "A landing page with a modern design and responsive layout. It showcases the features and benefits of the product, with a focus on user experience.",
        codebaseUrl: "https://github.com/ionathansideras/mindflow",
        liveUrl: "https://mindflow-ecru.vercel.app/",
        techStack: [
            { icon: vite, name: "Vite" },
            { icon: react, name: "React" },
            { icon: tw, name: "Tailwind CSS" },
            { icon: js, name: "JavaScript" },
        ],
    },
    {
        img: iphone,
        title: "iPhone 15 Pro website clone",
        description:
            "A clone of the iPhone 15 Pro website, showcasing the features and specifications of the device. It also includes smooth animations and 3D interactive elements.",
        codebaseUrl: "https://github.com/ionathansideras/3d-iphone-website",
        liveUrl: "https://3d-iphone15pro.vercel.app/",
        techStack: [
            { icon: react, name: "React" },
            { icon: tw, name: "Tailwind CSS" },
            { icon: gsap, name: "GSAP" },
            { icon: three, name: "Three.js" },
        ],
    },
    {
        img: monmariage,
        title: "Freelance Wordpress Website",
        description:
            "A freelance website for a wedding - event planner. It showcases the services and portfolio of the planner, with a focus on user experience and design.",
        codebaseUrl: "",
        liveUrl: "https://monmariageanni.com/",
        techStack: [
            { icon: wordpress, name: "Wordpress" },
            { icon: hostinger, name: "Hostinger" },
        ],
    },
    {
        img: car,
        title: "3D Porsche Configurator",
        description:
            "A 3D car configurator that allows users to customize the Porsche with different colors and features. It uses R3F for the 3D rendering and React for the frontend.",
        codebaseUrl: "https://github.com/ionathansideras/3d-configurator",
        liveUrl: "https://porscheconfigurator.vercel.app/",
        techStack: [
            { icon: vite, name: "Vite" },
            { icon: react, name: "React" },
            { icon: three, name: "Three.js" },
            { icon: scss, name: "SCSS" },
        ],
    },
    {
        img: videocall,
        title: "Video Call App",
        description:
            "A video call app that allows users to make video calls with their friends and family in a P2P style. It uses WebRTC for the video streaming and Firebase for the backend.",
        codebaseUrl: "https://github.com/ionathansideras/videoCall",
        liveUrl: "https://soloconvo.vercel.app/",
        techStack: [
            { icon: ts, name: "Typescript" },
            { icon: react, name: "React" },
            { icon: firebase, name: "Firebase" },
            { icon: webrtc, name: "WebRTC" },
        ],
    },
];

export const aboutMe = [
    "Even though i'm a Frontend Developer, I have experience in Backend Development as well.",
    "I constantly try to improve my tech stack.",
    "Open communication & collaboration is my priority.",
    "Always open to new opportunities and challenges.",
];

export const experience = [
    {
        title: "FrontEnd Developer",
        description:
            "I've been working at Three Deers for 1.9 years, where I develop and maintain various projects.",
        img: code,
        imgClassName: "experience-photo-1",
    },
    {
        title: "Freelance",
        description:
            "I worked on a freelance project for a wedding planner client, using Wordpress.",
        img: freelance,
        imgClassName: "experience-photo-2",
    },
];

export const techStack = [
    { icon: scss, name: "SCSS" },
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: tw, name: "Tailwind CSS" },
    { icon: three, name: "Three.js" },
    { icon: redux, name: "Redux" },
    { icon: react, name: "React" },
    { icon: next, name: "Next.js" },
    { icon: ts, name: "Typescript" },
    { icon: js, name: "JavaScript" },
];

export const socials = [
    {
        icon: git,
        href: "https://github.com/ionathansideras",
        name: "GitHub",
    },
    {
        icon: link,
        href: "https://www.linkedin.com/in/ionathan-sideras-072a60255",
        name: "LinkedIn",
    },
];
