import {
    SectionHeading,
    SubHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";
import config from "../config";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Home = () => {
    return (
        <>
            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle">
                <SectionHeading text={config.home.heading} />
                <SubHeading text={config.home.subHeading} />
                <CustomButton
                    label={config.home.buttonLabel}
                    onClick={() => alert("Thanks for clicking!")}
                />
                <GridLayout
                    title_1={config.home.grid[0].title}
                    description_1={config.home.grid[0].description}
                    description_2={config.home.grid[1].description}
                    title_2={config.home.grid[1].title}
                />

                <div className="flex justify-center gap-6 mt-8">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-black dark:text-white hover:text-gray-500 transition-transform transform hover:scale-110"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-black dark:text-white hover:text-blue-600 transition-transform transform hover:scale-110"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="text-black dark:text-white hover:text-sky-400 transition-transform transform hover:scale-110"
                    >
                        <Twitter />
                    </a>
                    <a
                        href="https://www.instagram.com/umasscodecollab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-black dark:text-white hover:text-pink-500 transition-transform transform hover:scale-110"
                    >
                        <Instagram />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
