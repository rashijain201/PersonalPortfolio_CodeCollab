import {
    SectionHeading,
    SubHeading,
    CustomButton,
    GridLayout,
} from "../components/BasicUI";

const Home = () => {
    return (
        <div className="p-8 space-y-6 text-center">
            <SectionHeading text="🚀 Welcome to My Portfolio" />
            <SubHeading text="I'm building something amazing!" />
            <CustomButton
                label="Click Me"
                onClick={() => alert("Button Clicked!")}
            />
            <GridLayout />
        </div>
    );
};

export default Home;
