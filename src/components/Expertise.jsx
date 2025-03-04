import React from "react";

const expertiseData = [
  {
    title: "Branding",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UI Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.",
  },
];

const Expertise = () => {
  return (
    <section className="bg-black text-white pt-40 pl-8 lg:pl-36 pr-8 lg:pr-20 ">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 flex items-center">
        <span className="mr-2 text-2xl">✶</span> Expertise
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10">
        {expertiseData.map((item, index) => (
          <div key={index} className="space-y-2 w-full lg:w-[87%]">
            <h3 className="text-xl font-semibold">▪ {item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
