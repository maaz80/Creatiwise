import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  py-12 relative overflow-hidden mt-16">
      {/* Moving Text */}
      <div className="w-full overflow-hidden whitespace-nowrap flex ">
        <div className="animate-marquee text-8xl font-bold flex space-x-6 uppercase mb-16 text-outline-white">
          <span>Flow ✶ Figma ✶ Designer ✶ Developer ✶</span>
          <span>Flow ✶ Figma ✶ Designer ✶ Developer ✶</span>
          <span>Flow ✶ Figma ✶ Designer ✶ Developer ✶</span>
          <span>Flow ✶ Figma ✶ Designer ✶ Developer ✶</span>
          <span>Flow ✶ Figma ✶ Designer ✶ Developer ✶</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mt-10 text-white">
        <h2 className="text-5xl font-extrabold">LET'S TALK!</h2>
        <div
          href="mailto:rehanurraihan@gmail.com"
          className="text-lg mt-3 inline-block text-gray-300 hover:text-white transition"
        >
          rehanurraihan@gmail.com ↗
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center mt-10 px-10 text-gray-400 text-sm">
        <p>© Rehan Raihan - 2023</p>
        <div className="flex space-x-6">
          <div className="text-gray-400 hover:text-white">Dribbble</div>
          <div className="text-gray-400 hover:text-white">Behance</div>
          <div className="text-gray-400 hover:text-white">Twitter</div>
          <div className="text-gray-400 hover:text-white">Instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
