import config from "../config";

function About() {
    return (
        <div className="relative flex-grow flex flex-col items-center justify-center text-center px-6">
            <div>
                <h1 className="text-black dark:text-white text-5xl font-bold mb-4">
                    {config.about.heading}
                </h1>
                <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                    {config.about.description}
                </p>
            </div>
        </div>
    );
}

export default About;
