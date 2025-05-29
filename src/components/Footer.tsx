import { socials } from "../data";
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright © {year} Ionathan Sideras</p>
            <nav>
                {socials.map((social, index) => (
                    <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        key={index}
                    >
                        <img
                            src={social.icon}
                            alt={social.name + " icon"}
                            title={social.name}
                        />
                    </a>
                ))}
            </nav>
        </footer>
    );
}
