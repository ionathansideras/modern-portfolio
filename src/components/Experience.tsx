import SectionTitle from "./SectionTitle";
import work from "../assets/work.svg";
import freelance from "../assets/freelance.svg";

export default function Experience() {
    return (
        <main id="experience">
            <SectionTitle>
                My <span>Work Experience</span>
            </SectionTitle>

            <section className="experience-container">
                <article className="experience">
                    <div>
                        <h3>FrontEnd Developer</h3>
                        <p>2 years working in Three Deers</p>
                    </div>
                    <img src={work} alt="code" className="experience-photo-1" />
                </article>
                <article className="experience">
                    <div>
                        <h3>Freelance</h3>
                        <p>I did a freelance project for a client</p>
                    </div>
                    <img
                        src={freelance}
                        alt="freelance"
                        className="experience-photo-2"
                    />
                </article>
            </section>
        </main>
    );
}
