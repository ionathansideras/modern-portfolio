import SectionTitle from "./SectionTitle";
import { experience } from "../data";
import GridBackground from "./design/GridBackground";
import balls from "../assets/balls.svg";
import { MouseParallax } from "react-just-parallax";

export default function Experience() {
    return (
        <main id="experience">
            <SectionTitle>
                My <span>Work Experience</span>
            </SectionTitle>

            <section className="experience-container">
                <MouseParallax strength={0.07} isAbsolutelyPositioned>
                    <img src={balls} alt="balls" className="balls" />
                </MouseParallax>

                {experience.map((item, index) => (
                    <article className="experience" key={index}>
                        <GridBackground
                            type={2}
                            size="cover"
                            repeat="no-repeat"
                            zIndex={1}
                            position="left"
                        />

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <img
                            src={item.img}
                            alt="experience-img"
                            className={item.imgClassName}
                        />
                    </article>
                ))}
            </section>
        </main>
    );
}
