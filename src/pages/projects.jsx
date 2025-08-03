import config from "../config";
import {
    SectionHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";
import { useEffect } from "react";
import ProjectComponent from "../components/ProjectComponent";
import "../components/animation.css"; // Ensure the path is correct
import '@fontsource/montserrat'; // Import Montserrat font


const Projects = () => {
    useEffect(() => {
        const scrollElements = document.querySelectorAll("[data-animate-on-scroll]");

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
    <section className="self-stretch overflow-hidden flex flex-col py-6 px-4 box-border max-w-full">
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

        {/* Project Component */}
        <ProjectComponent
          Image="src/Project_Image/code_collab.png"
          Number="01"
          Title="Personal Website"
          ImageLink="https://github.com/rbose21-05/PersonalPortfolio_CodeCollab"
          Text1="This is my personal website, built using React.js and Tailwind CSS. It showcases my projects, skills, and experiences."
          Text2="The website is designed to be responsive and user-friendly, providing a seamless experience across devices. It features a modern design with smooth animations and transitions."
        />
      </div>
    </section>
  </div>
);

};

export default Projects;
