import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import config from "../config";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 flex flex-col items-center gap-2">
            <div className="flex gap-4">
                {config.social.github && (
                    <a
                        href={config.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                )}
                {config.social.linkedin && (
                    <a
                        href={config.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                )}
                {config.social.email && (
                    <a href={config.social.email} aria-label="Email">
                        <FaEnvelope />
                    </a>
                )}
            </div>
            <p className="text-sm text-center">
                &copy; {new Date().getFullYear()} {config.siteTitle}.{" "}
                {config.tagline}
            </p>
        </footer>
    );
}

export default Footer;
