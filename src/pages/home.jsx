import {
    SectionHeading,
    SubHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";

const Home = () => {
    return (
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
    );
};

export default Home;
