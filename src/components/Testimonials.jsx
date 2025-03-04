import React, { useState } from "react";
import Human from "../images/Human.png";

const testimonials = [
  {
    name: "Floyd Miles",
    company: "eBay",
    image: Human, // Replace with actual image path
    feedback:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    name: "Jenny Wilson",
    company: "Google",
    image: Human,
    feedback:
      "The resume builder was easy to use and made my resume look professional. Highly recommend it! The resume builder was easy to use and made my resume look professional. Highly recommend it!",
  },
  {
    name: "Leslie Alexander",
    company: "Amazon",
    image: Human,
    feedback:
      "I landed my dream job thanks to Synergy's resume builder. It made my application stand out! I landed my dream job thanks to Synergy's resume builder. It made my application stand out!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-[82%] mx-auto text-white py-12">
      {/* Header */}
      <h2 className="text-4xl font-bold  flex items-center text-white mb-20">
            <span className=" text-2xl">✶</span> What they say
          </h2>

      <div className="flex items-start justify-between mb-10 w-full"> 
        {/* User Info */}
        <div className="flex items-center gap-4">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-xl font-medium">{testimonials[currentIndex].name}</p>
            <p className="text-gray-400 ">{testimonials[currentIndex].company}</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex relative  w-[50%]">
          <span className="absolute text-[400px] text-gray-200/50 z-10 top-[-200px] left-[-30px]">“</span>
          <div className="text-3xl z-50">
          {testimonials[currentIndex].feedback}
          </div>
        </div>

        </div>

        {/* Navigation */}
        <div className="flex item-center justify-center gap-3 z-50 mt-20" >
          <button
            className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center z-50 hover:bg-white hover:text-black trasition-all duration-400 font-bold"
            onClick={prevTestimonial}
          >
            ←
          </button>
          <button
            className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center z-50 hover:bg-white hover:text-black trasition-all duration-400 font-bold"
            onClick={nextTestimonial}
          >
            →
          </button>
      </div>
    </div>
  );
};

export default Testimonial;
