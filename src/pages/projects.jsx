import { ProjectComponent } from "../templates/basicUIComponents";
import { useEffect } from "react";
import "@fontsource/montserrat"; // Import Montserrat font

const Projects = () => {
    useEffect(() => {
        const scrollElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        scrollElements.forEach((el) => {
            observer.observe(el);
        });

        return () => {
            scrollElements.forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div>
            <section className="self-stretch overflow-hidden flex flex-col py-32 px-4 box-border max-w-full">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 box-border gap-[40px] max-w-full">
                    {/* Heading Row */}
                    <div
                        className="w-full flex flex-row items-center justify-center gap-4 flex-wrap animate-fade-in-top opacity-0 [&.animate]:opacity-100"
                        data-animate-on-scroll
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold font-[Montserrat] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-300 dark:to-indigo-500">
                            My
                        </h1>
                        <h1 className="text-5xl md:text-6xl font-extrabold font-[Montserrat] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-300 dark:to-indigo-500">
                            Projects
                        </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-20 w-full">
                        {/* Project Component */}
                        <ProjectComponent
                            Image="src/Project_Image/code_collab.png"
                            Number="01"
                            Title="Personal Website"
                            ImageLink="https://github.com/rbose21-05/PersonalPortfolio_CodeCollab"
                            Text1="This is my personal website, built using React.js and Tailwind CSS. It showcases my projects, skills, and experiences."
                            Text2="The website is designed to be responsive and user-friendly, providing a seamless experience across devices. It features a modern design with smooth animations and transitions."
                        />

                        <ProjectComponent
                            Image="src/Project_Image/code_collab.png"
                            Number="02"
                            Title="Project 2"
                            ImageLink="https://github.com/rbose21-05/PersonalPortfolio_CodeCollab"
                            Text1="Description of Project 2"
                            Text2="Added Description of features and tech stack of Project 2."
                        />

                        <ProjectComponent
                            Image="src/Project_Image/code_collab.png"
                            Number="03"
                            Title="Project 3"
                            ImageLink="https://github.com/rbose21-05/PersonalPortfolio_CodeCollab"
                            Text1="Description of Project 3"
                            Text2="Added Description of features and tech stack of Project 3."
                        />

                        <ProjectComponent
                            Image="src/Project_Image/code_collab.png"
                            Number="04"
                            Title="Project 4"
                            ImageLink="https://github.com/rbose21-05/PersonalPortfolio_CodeCollab"
                            Text1="Description of Project 4"
                            Text2="Added Description of features and tech stack of Project 4."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
