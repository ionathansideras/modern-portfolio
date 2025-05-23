import { FaLocationArrow } from "react-icons/fa";

export default function ProjectItem({
    img,
    title,
    description,
    codebaseUrl,
    liveUrl,
    techStack,
}: {
    img?: string;
    title?: string;
    description?: string;
    codebaseUrl?: string;
    liveUrl?: string;
    techStack?: string[];
}) {
    return (
        <article className="project">
            <div className="project-image-box">
                <img className="project-image" src={img} alt="project-image" />
            </div>
            <div className="project-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="project-details">
                <div className="project-tech-stack">
                    {techStack?.map((img, index) => (
                        <img
                            key={index}
                            className={`project-tech-icon`}
                            src={img}
                            alt={`tech-stack-icon`}
                            style={{
                                left: `${index * 33}px`,
                            }}
                        />
                    ))}
                </div>
                <div className="project-urls">
                    {codebaseUrl && (
                        <a href={codebaseUrl} target="_blank">
                            Code <FaLocationArrow />
                        </a>
                    )}
                    {liveUrl && (
                        <a href={liveUrl} target="_blank">
                            Live <FaLocationArrow />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
