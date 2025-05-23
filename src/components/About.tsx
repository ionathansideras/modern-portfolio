import SectionTitle from "./SectionTitle";
import GridBackground from "./design/GridBackground";
import CodeDiv from "./CodeDiv";
import Gradient from "./design/Gradient";

export default function About() {
    return (
        <main id="about">
            <SectionTitle>
                A little bit <span>about me</span>
            </SectionTitle>
            <section className="about-container">
                <Gradient
                    top={"-60px"}
                    left={"-200px"}
                    width="600px"
                    rotation="-90deg"
                    opacity={0.7}
                />

                <article className="about-text">
                    <GridBackground
                        type={2}
                        size="cover"
                        repeat="no-repeat"
                        zIndex={-3}
                        position="center"
                    />
                    <CodeDiv />
                </article>
                <article className="about-skills">
                    <p>
                        {/* Here are some of the technologies that i have worked
                        with in the past 3 years. */}
                    </p>
                </article>
            </section>
        </main>
    );
}
