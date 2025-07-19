import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
        <div className="relative flex-grow bg-green-500 flex items-center justify-center text-center px-6">
            {isTouring && (
                <div className="absolute top-[10px] w-[80%] left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-2 rounded shadow z-50">
                    Here are some of the cool things I've built — websites,
                    apps, and more. After this, let's see how to contact me!
                    <br />
                    Navigating to contact in {secondsLeft}...
                </div>
            )}

            <div>
                <h1 className="text-white text-5xl font-bold mb-4">
                    Project Highlights
                </h1>
                <p className="text-white text-lg max-w-2xl mx-auto">
                    Showcase up to 3–5 of your best projects here. You can
                    include project titles, a short description, GitHub links,
                    and even live demos. This section is meant to reflect your
                    work, passion, and technical skills!
                </p>
            </div>
        </div>
    );
}

export default Projects;
