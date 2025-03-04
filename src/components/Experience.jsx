import React, { useState } from "react";
import CardImage1 from "../images/CardImage1.png";
import CardImage2 from "../images/CardImage2.png";
import CardImage3 from "../images/CardImage3.png";
const experiences = [
  { 
    role: "Lead Product Designer", 
    company: "Fortknox", 
    duration: "Mar 2022 - Oct 2023",
    image:CardImage1
  },
  { 
    role: "Intern Designer", 
    company: "OmniSafe", 
    duration: "Mar 2022 - Oct 2023",
    image: CardImage2
  },
  { 
    role: "UI Designer", 
    company: "Doradesign", 
    duration: "Mar 2022 - Oct 2023",
    image: CardImage3
  },
  { 
    role: "Frontend Developer", 
    company: "OpacityAuthor", 
    duration: "Mar 2022 - Oct 2023",
    image: CardImage1
  },
];

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-[82%] mx-auto text-white py-10 mt-32 relative" onMouseMove={handleMouseMove}>
       <h2 className="text-4xl font-bold  flex items-center text-white mb-20">
            <span className=" text-4xl">✶</span> Experience
          </h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex justify-between border-b border-gray-600 py-4 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="text-3xl">{exp.role}</div>
            <div className="text-right">
              <div className="font-semibold">{exp.company}</div>
              <div className="text-gray-400 ">{exp.duration}</div>
            </div>
            {hoveredIndex === index && (
              <div 
                className="fixed pointer-events-none w-48 h-48 rounded-lg overflow-hidden"
                style={{
                  left: mousePosition.x + 20,
                  top: mousePosition.y - 90,
                  transform: 'translate(0, -50%)',
                  zIndex: 50
                }}
              >
                <img 
                  src={exp.image} 
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;