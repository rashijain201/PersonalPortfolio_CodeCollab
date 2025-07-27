import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import config from "../config";

function About() {
    const { isTouring } = useSearch({ from: "/about" });
    const navigate = useNavigate();

    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        if (!isTouring) return;

        const countdown = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            navigate({
                to: "/projects",
                search: { isTouring: true },
            });
        }, 3000);

        return () => {
            clearInterval(countdown);
            clearTimeout(redirect);
        };
    }, [isTouring, navigate]);

    return (
        <div className="relative flex-grow flex flex-col items-center justify-center text-center px-6">
            {isTouring && (
                <div className="absolute top-[10px] w-[80%] left-1/2 transform -translate-x-1/2 bg-yellow-300 dark:bg-yellow-500 text-black dark:text-white px-4 py-2 rounded shadow z-50">
                    So, about me — I love coding and creating innovative
                    solutions. I also enjoy collaborating with others. Let's
                    explore my projects next!
                    <br />
                    Navigating to projects in {secondsLeft}...
                </div>
            )}
            <div>
                <h1 className="text-black dark:text-white text-5xl font-bold mb-4">
                    {config.about.heading}
                </h1>
                <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                    {config.about.description}
                </p>
            </div>
        </div>
    );
}

export default About;
