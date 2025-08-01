import config from "../config";
import {
    SectionHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";

function Projects() {
    return (
        <div className="relative flex-grow flex items-center justify-center text-center px-6">
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
