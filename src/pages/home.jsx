import {
    SectionHeading,
    SubHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import config from "../config";

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
            </div>
        </>
    );
};

export default Home;
