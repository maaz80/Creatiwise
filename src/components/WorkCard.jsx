import React from "react";
import Ellipse from "../images/Ellipse.png";

const WorkCard = ({ CardImage, heading, Tech1, Tech2 }) => {
    return (
        <div style={{ backgroundColor: '#CBCBCB7A' }} className="relative  text-white p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-lg w-full mx-auto">
            <img src={Ellipse} alt="Ellipse" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10" />
            {/* Image Section */}
            <div className="w-full md:w-1/2 z-40">
                <img
                    src={CardImage}
                    alt="Case Study"
                    className="rounded-xl shadow-lg "
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-between h-[420px]">
                <div className="space-y-3">
                    <h2 className="text-4xl font-semibold">{heading}</h2>
                    <p className="text-gray-300">
                        With a user-centered approach, the goal was to create an intuitive
                        interface for enhanced financial intelligence.
                    </p>

                    {/* Tags */}
                    <div className="flex gap-3">
                        <span className="px-4 py-1 bg-gray-600 rounded-full text-sm">{Tech1}</span>
                        <span className="px-4 py-1 bg-gray-600 rounded-full text-sm">{Tech2}</span>
                    </div>
                </div>

                {/* Button */}
                <button className="w-44 z-40 py-3 mt-4 bg-white text-black rounded-full font-medium transition hover:bg-gray-200">
                    View Case Study
                </button>
            </div>
        </div>
    );
};

export default WorkCard;
