import {
    SectionHeading,
    SubHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import config from "../config";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"; 

const Home = () => {
    var { isTouring } = useSearch({ from: "/" });
    const navigate = useNavigate();

    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        if (!isTouring) return;
        const countdown = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    navigate({ to: "/" });
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => {
            clearInterval(countdown);
        };
    }, [isTouring, navigate]);

    return (
        <>
            {isTouring && (
                <div className="absolute top-[10px] w-[80%] left-1/2 transform -translate-x-1/2 bg-purple-300 text-black px-4 py-2 rounded shadow z-50 text-center">
                    <p className="font-semibold">
                        So that was the tour! Hope you had a ton of fun and know
                        all about me now!
                    </p>
                </div>
            )}
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
