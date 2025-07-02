import React from "react";

const GridLayout = ({ title_1, title_2 }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {title_1}
            </h3>
            <p className="text-gray-600 mb-4">
                This is a short description of the project.
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                View Project
            </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {title_2}
            </h3>
            <p className="text-gray-600 mb-4">
                Another placeholder project description.
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                View Project
            </button>
        </div>
    </div>
);

export default GridLayout;
