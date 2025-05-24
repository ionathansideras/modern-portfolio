import Button from "./Button";
import SectionTitle from "./SectionTitle";
import { LuCopy } from "react-icons/lu";
import { useRef } from "react";

export default function Contact() {
    const confettiRef = useRef<HTMLImageElement>(null);

    const copyEmailToClipboard = () => {
        const email = "iona8ansideras@gmail.com";
        navigator.clipboard.writeText(email);

        // "Replay" the gif by changing its src
        if (confettiRef.current) {
            confettiRef.current.style.display = "block";
            confettiRef.current.src = `/confetti.gif?reload=${Date.now()}`;

            // Optional: hide after 3 seconds
            setTimeout(() => {
                if (confettiRef.current) {
                    confettiRef.current.style.display = "none";
                }
            }, 2000);
        }
    };

    return (
        <main id="contact">
            <SectionTitle>
                Let's get in <span>touch</span>
            </SectionTitle>

            <section className="contact-container">
                <article className="contact-welcoming">
                    <h4>Do you have any questions? Feel free to contact me!</h4>
                </article>
                <article className="contact-button">
                    <p>Do you want to start a project together?</p>
                    <Button onClick={copyEmailToClipboard}>
                        <LuCopy style={{ marginRight: "10px" }} />
                        Copy my email address
                    </Button>

                    {/* Confetti gif */}
                    <img
                        ref={confettiRef}
                        src="/confetti.gif"
                        alt="confetti"
                        className="confetti-gif"
                    />
                </article>
            </section>
        </main>
    );
}
