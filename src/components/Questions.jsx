import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use a combination of tools such as Figma, Adobe XD, Sketch, and InVision for design and prototyping. For research, I rely on tools like Google Analytics, Hotjar, and UserTesting.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "Success is measured through usability testing, analytics, and user feedback. Key performance indicators (KPIs) like conversion rates, task success rates, and user satisfaction scores help evaluate the effectiveness of a design.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[80%] mx-auto text-white py-12">
      {/* Header */}
      <h2 className="text-3xl font-semibold mb-8">✦ Frequently asked questions</h2>

      {/* FAQs */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="text-xl font-medium flex justify-between w-full items-center"
            >
              {faq.question}
              <span className="ml-2 text-2xl font-thin"> 
                {openIndex === index ? <FaAngleDown /> : <FaAngleUp />}
              </span>
            </button>

            {/* Answers*/}
            <div
              className={`overflow-hidden transition-all ${
                openIndex === index ? "max-h-40 mt-2 text-gray-300" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;