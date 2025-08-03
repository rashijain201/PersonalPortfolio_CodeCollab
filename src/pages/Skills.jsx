import { useState } from "react";
import { SectionHeading } from "../templates/basicUIComponents";

function Skills() {
    const [skills, setSkills] = useState(["React.js", "Tailwind CSS"]);
    const [newSkill, setNewSkill] = useState("");

    const addSkill = () => {
        if (newSkill.trim() !== "") {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    return (
        <div className="relative flex-grow flex items-center justify-center text-center px-6">
            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle">
                <SectionHeading size={4} text="Skills" />

                {/* Input box to add skill */}
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill"
                        className="border rounded-lg px-4 py-2 text-black w-60"
                    />
                    <button
                        onClick={addSkill}
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        Add Skill
                    </button>
                </div>

                {/* Display skills dynamically */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-purple-100 dark:bg-purple-700 text-black dark:text-white px-4 py-2 rounded-lg shadow hover:bg-purple-200 dark:hover:bg-purple-600 transition duration-300"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
