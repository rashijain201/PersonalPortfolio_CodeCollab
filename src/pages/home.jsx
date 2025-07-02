import {
    SectionHeading,
    SubHeading,
    CustomButton,
    GridLayout,
} from "../templates/basicUIComponents";

const Home = () => {
    return (
        <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle bg-gray-150">
            <SectionHeading text="🚀 Welcome to My Portfolio" />
            <SubHeading text="I'm building something amazing!" />
            <CustomButton
                label="Click Me"
                onClick={() => alert("Button Clicked!")}
            />
            <GridLayout
                title_1="My First Project"
                title_2="My Second Project"
            />
        </div>
    );
};

export default Home;
