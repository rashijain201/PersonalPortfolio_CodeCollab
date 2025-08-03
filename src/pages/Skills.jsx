import { SectionHeading } from "../templates/basicUIComponents";

function Skills() {
    return (
        <div className="relative flex-grow flex items-center justify-center text-center px-6">
            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle">
                
                {/* Main Heading */}
                <SectionHeading size={4} text="Skills" />

                {/* List of Skills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    <div className="bg-purple-100 dark:bg-purple-700 text-black dark:text-white px-4 py-2 rounded-lg shadow">
                        Python
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-700 text-black dark:text-white px-4 py-2 rounded-lg shadow">
                        JavaScript
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-700 text-black dark:text-white px-4 py-2 rounded-lg shadow">
                        Java
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-700 text-black dark:text-white px-4 py-2 rounded-lg shadow">
                        Other Skills
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

