import BookingWebSite from "../assets/BookingWebSite.png";
import mui from "../assets/mui.svg";
import react from "../assets/re.svg";
import ts from "../assets/ts.svg";
import next from "../assets/next.svg";
import mysql from "../assets/mysql.svg";
import js from "../assets/js.svg";
import brainwave from "../assets/brainwave.png";
import tw from "../assets/tail.svg";
import vite from "../assets/vite.svg";
import iphone from "../assets/iphone.png";
import gsap from "../assets/gsap.svg";
import three from "../assets/three.svg";
import car from "../assets/3dcar.png";
import scss from "../assets/scss.svg";
import videocall from "../assets/videocall.png";
import firebase from "../assets/firebase.svg";
import monmariage from "../assets/monmariage.png";
import hostinger from "../assets/hostinger.svg";
import wordpress from "../assets/wordpress.svg";
import webrtc from "../assets/webrtc.svg";
import code from "../assets/code.svg";
import freelance from "../assets/freelance.svg";

export const links = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export const heroContent = {
    title: "Welcome to My Portfolio",
    main: "Always creating Beautiful & Functional Web Experiences",
    description: "Im Jonathan and this is my corner of the web!",
};

export const projects = [
    {
        img: BookingWebSite,
        title: "Fullstack Booking Web App",
        description:
            "A fullstack booking web app with Admin panel that i built with Next.js, mySQL, and MUI. It allows users to book their accommodations and manage their bookings.",
        codebaseUrl: "https://github.com/ionathansideras/booking-site",
        liveUrl: "",
        techStack: [next, react, mysql, mui],
    },
    {
        img: brainwave,
        title: "Frontend landing page",
        description:
            "A landing page with a modern design and responsive layout. It showcases the features and benefits of the product, with a focus on user experience.",
        codebaseUrl: "https://github.com/ionathansideras/mindflow",
        liveUrl: "https://mindflow-ecru.vercel.app/",
        techStack: [vite, react, tw, js],
    },
    {
        img: iphone,
        title: "iPhone 15 Pro website clone",
        description:
            "A clone of the iPhone 15 Pro website, showcasing the features and specifications of the device. It also includes smooth animations and 3D interactive elements.",
        codebaseUrl: "https://github.com/ionathansideras/3d-iphone-website",
        liveUrl: "https://3d-iphone15pro.vercel.app/",
        techStack: [react, tw, gsap, three],
    },
    {
        img: monmariage,
        title: "Freelance Wordpress Website",
        description:
            "A freelance website for a wedding - event planner. It showcases the services and portfolio of the planner, with a focus on user experience and design.",
        codebaseUrl: "",
        liveUrl: "https://monmariageanni.com/",
        techStack: [wordpress, hostinger],
    },
    {
        img: car,
        title: "3D Porsche Configurator",
        description:
            "A 3D car configurator that allows users to customize the Porsche with different colors and features. It uses R3F for the 3D rendering and React for the frontend.",
        codebaseUrl: "https://github.com/ionathansideras/3d-configurator",
        liveUrl: "https://porscheconfigurator.vercel.app/",
        techStack: [vite, react, three, scss],
    },
    {
        img: videocall,
        title: "Video Call App",
        description:
            "A video call app that allows users to make video calls with their friends and family in a P2P style. It uses WebRTC for the video streaming and Firebase for the backend.",
        codebaseUrl: "https://github.com/ionathansideras/videoCall",
        liveUrl: "https://soloconvo.vercel.app/",
        techStack: [ts, react, firebase, webrtc],
    },
];

export const aboutMe = [
    "I prioritize client collaboration, fostering open communication",
    "I'm very flexible with time zone communications",
    "Tech enthusiast with a passion for development.",
    "I constantly try to improve my tech stack",
];

export const experience = [
    {
        title: "FrontEnd Developer",
        description: "2 years working in Three Deers",
        img: code,
        imgClassName: "experience-photo-1",
    },
    {
        title: "Freelance",
        description: "I worked on a freelance project for a client",
        img: freelance,
        imgClassName: "experience-photo-2",
    },
];
