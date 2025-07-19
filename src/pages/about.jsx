import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

function About() {
    const { isTouring } = useSearch({ from: "/about" });
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
                to: "/projects",
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
        <div className="relative flex-grow bg-green-500 flex flex-col items-center justify-center text-center px-6">
            {isTouring && (
                <div className="absolute top-[10px] w-[80%] left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-2 rounded shadow z-50">
                    So, about me — I love coding and creating innovative
                    solutions. I also enjoy collaborating with others. Let's
                    explore my projects next!
                    <br />
                    Navigating to projects in {secondsLeft}...
                </div>
            )}
            <div>
                <h1 className="text-white text-5xl font-bold mb-4">
                    About This Project
                </h1>
                <p className="text-white text-lg max-w-2xl mx-auto">
                    This portfolio template was created by CodeCollab, the tech
                    club at UMass Amherst, to help students build and showcase
                    their work using modern frontend tools. It is fully
                    customizable and open-source, allowing anyone to personalize
                    it for internships, job hunts, or creative portfolios.
                </p>
            </div>
        </div>
    );
}

export default About;
