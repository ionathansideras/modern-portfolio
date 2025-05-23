import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CodeDiv() {
    const scrollRef = useRef(null);

    useGSAP(
        () => {
            gsap.to(".stagger-code", {
                opacity: 1,
                stagger: 0.1,
                duration: 0.2,
                scrollTrigger: {
                    trigger: scrollRef.current, // The element that triggers the animation
                    start: "top 80%", // When the top of the trigger hits 80% down the viewport
                },
            });
        },
        { scope: scrollRef }
    );

    return (
        <div className="about-text-code" ref={scrollRef}>
            <span className="white stagger-code">{"<"}</span>
            <span className="red stagger-code">
                ul <span className="yellow stagger-code">className</span>
                <span className="orange stagger-code">=</span>
                <span className="green stagger-code">"about-me-list"</span>
            </span>
            <span className="white stagger-code">{">"}</span>
            <div className="about-text-list stagger-code">
                <span className="white stagger-code">{"<"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
                <p className="white stagger-code">
                    I prioritize client collaboration, fostering open
                    communication
                </p>
                <span className="white stagger-code">{"</"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
            </div>
            <div className="about-text-list stagger-code">
                <span className="white stagger-code">{"<"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
                <p className="white stagger-code">
                    I'm very flexible with time zone communications
                </p>
                <span className="white stagger-code">{"</"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
            </div>
            <div className="about-text-list stagger-code">
                <span className="white stagger-code">{"<"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
                <p className="white stagger-code">
                    Tech enthusiast with a passion for development.
                </p>
                <span className="white stagger-code">{"</"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
            </div>
            <div className="about-text-list stagger-code">
                <span className="white stagger-code">{"<"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
                <p className="white stagger-code">
                    I constantly try to improve My tech stack
                </p>
                <span className="white stagger-code">{"</"}</span>
                <span className="red stagger-code">li</span>
                <span className="white stagger-code">{">"}</span>
            </div>
            <span className="white stagger-code">{"</"}</span>
            <span className="red stagger-code">ul</span>
            <span className="white stagger-code">{">"}</span>
        </div>
    );
}
