import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { aboutMe } from "../data/index";
import CodeTag from "./CodeTag";

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
                    trigger: scrollRef.current,
                    start: "top 80%",
                },
            });
        },
        { scope: scrollRef }
    );

    return (
        <div className="about-text-code" ref={scrollRef}>
            <CodeTag>{"<"}</CodeTag>
            <CodeTag color="red">ul </CodeTag>
            <CodeTag color="yellow">className</CodeTag>
            <CodeTag color="orange">=</CodeTag>
            <CodeTag color="green">"about-me-list"</CodeTag>
            <CodeTag>{">"}</CodeTag>

            {aboutMe.map((text, index) => (
                <div className="about-text-list stagger-code" key={index}>
                    <CodeTag>{"<"}</CodeTag>
                    <CodeTag color="red">li</CodeTag>
                    <CodeTag>{">"}</CodeTag>
                    <p className="white stagger-code">{text}</p>
                    <CodeTag>{"</"}</CodeTag>
                    <CodeTag color="red">li</CodeTag>
                    <CodeTag>{">"}</CodeTag>
                </div>
            ))}

            <CodeTag>{"</"}</CodeTag>
            <CodeTag color="red">ul</CodeTag>
            <CodeTag>{">"}</CodeTag>
        </div>
    );
}
