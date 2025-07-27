import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import config from "../config";
import { SectionHeading, CustomButton, GridLayout } from "../templates/basicUIComponents";

function Projects() {
    const { isTouring } = useSearch({ from: "/projects" });
    const navigate = useNavigate();

    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        if (!isTouring) return;

        // Countdown timer
        const countdown = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);

        // Redirect after 3 seconds
        const redirect = setTimeout(() => {
            navigate({
                to: "/contact",
                search: { isTouring: true },
            });
        }, 3000);

        // Cleanup
        return () => {
            clearInterval(countdown);
            clearTimeout(redirect);
        };
    }, [isTouring, navigate]);

    return (
        <div className="relative flex-grow flex items-center justify-center text-center px-6">
            {isTouring && (
                <div className="absolute top-[10px] w-[80%] left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-2 rounded shadow z-50">
                    Here are some of the cool things I've built — websites,
                    apps, and more. After this, let's see how to contact me!
                    <br />
                    Navigating to contact in {secondsLeft}...
                </div>
            )}

            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle">
                <SectionHeading text={config.projectsPage.heading} />
                <CustomButton
                    label={config.projectsPage.buttonLabel}
                    onClick={() => alert("Thanks for clicking!")}
                />
                <GridLayout
                    title_1={config.projectsPage.grid[0].title}
                    description_1={config.projectsPage.grid[0].description}
                    description_2={config.projectsPage.grid[1].description}
                    title_2={config.projectsPage.grid[1].title}
                />
            </div>
        </div>
    );
}

export default Projects;
