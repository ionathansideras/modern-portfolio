import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroContent } from "../data";
import Button from "./Button";
import Gradient from "./Gradient";

export default function Hero() {
    useGSAP(() => {
        gsap.to(".stagger-box-hero", {
            opacity: 1,
            stagger: 0.1,
            duration: 0.2,
        });

        gsap.to(".hero-description", {
            opacity: 1,
            duration: 0.3,
            y: 0,
        });

        gsap.fromTo(
            ".hero-button",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        );

        gsap.to(".gradient-hero1", {
            opacity: 0.3,
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.to(".gradient-hero2", {
            opacity: 0.4,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });
    }, []);

    // Split the string into an array using newline as delimiter.
    const mainArray = heroContent.main.split(" ");

    return (
        <main className="hero-container">
            <Gradient
                animateClass="gradient-hero1"
                top={"0px"}
                left={"20px"}
                width="300px"
            />
            <p className="hero-title">{heroContent.title}</p>
            <div>
                {mainArray.map((item, index) => (
                    <h1
                        key={index}
                        className={`stagger-box-hero ${
                            index > 5 ? "hero-text-purple" : ""
                        } `}
                    >
                        {item}
                    </h1>
                ))}
            </div>
            <p className="hero-description">{heroContent.description}</p>
            <Button href="#projects" animationClass="hero-button">
                Check my Work
            </Button>
            <Gradient
                animateClass="gradient-hero2"
                right={"20px"}
                bottom="0px"
                width="500px"
                rotation="-90deg"
            />
        </main>
    );
}
