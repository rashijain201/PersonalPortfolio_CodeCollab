import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import config from "../config";

function Contact() {
    const { isTouring } = useSearch({ from: "/contact" });
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        if (!isTouring) return;

        const countdown = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            navigate({
                to: "/",
                search: { isTouring: true },
            });
        }, 3000);

        return () => {
            clearInterval(countdown);
            clearTimeout(redirect);
        };
    }, [isTouring]);

    return (
        <div className="relative flex-grow flex flex-col items-center justify-center text-center px-6">
            {isTouring && (
                <div className="absolute top-[10px] w-[80%] left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-2 rounded shadow z-50">
                    There are a LOT of ways to reach me.
                    <br />
                    Tour ends in {secondsLeft}...
                </div>
            )}

            <div>
                <h1 className="text-black dark:text-white text-5xl font-bold mb-4">
                    {config.contact.heading}
                </h1>
                <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                    {config.contact.description}
                </p>
            </div>
        </div>
    );
}

export default Contact;
