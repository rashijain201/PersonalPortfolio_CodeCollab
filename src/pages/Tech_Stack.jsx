import { SectionHeading } from "../templates/basicUIComponents";
import config from "../config";


function Tech_Stack() {
    return (
        <div className="relative flex-grow flex items-center justify-center text-center px-6">
            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle">
                {/* Main Heading */}
                <SectionHeading size={4} text={config.techStackPage.heading} />

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {config.techStackPage.list.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-purple-200/60 dark:bg-purple-700/60 
                                       text-black dark:text-white 
                                       px-5 py-2 rounded-full 
                                       shadow-sm hover:shadow-md 
                                       border border-purple-300/40 
                                       hover:bg-purple-300/70 
                                       dark:hover:bg-purple-600/70 
                                       transition-all duration-300"
                        >
                            {tech.trim()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tech_Stack;

