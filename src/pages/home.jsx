import {
    SectionHeading,
    SubHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";
import Chatbot from "../components/Chatbot";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";


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
            <ParticlesBackground />
            {isTouring && (
                <div className="absolute top-[10px] w-[80%] left-1/2 transform -translate-x-1/2 bg-purple-300 text-black px-4 py-2 rounded shadow z-50 text-center">
                    <p className="font-semibold">
                        So that was the tour! Hope you had a ton of fun and know
                        all about me now!
                    </p>
                </div>
            )}
            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle bg-gray-150">
                <SectionHeading text="Welcome to the UMass CodeCollab Portfolio" />
                <SubHeading text="A collaborative student project to showcase resumes, projects, and creative skills!" />
                <CustomButton
                    label="Explore My Work"
                    onClick={() => alert("Thanks for clicking!")}
                />
                <GridLayout
                    title_1="Portfolio Template 1"
                    description_1="This is a sample template that the user can use to make his portfolio. Add your own resume, featured projects, and contact info to personalize this template."
                    description_2="Built using React, Tailwind CSS, and TanStack Router. Feel free to make the best portfolio! "
                    title_2="Portfolio Template 2"
                />
            </div>
            <Chatbot />
        </>
    );
};

export default Home;
