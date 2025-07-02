import React from "react";

const CustomButton = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
            {label}
        </button>
    );
};
export default CustomButton;
