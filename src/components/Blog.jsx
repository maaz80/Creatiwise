import React from "react";
import CardImage1 from "../images/CardImage1.png";
import CardImage2 from "../images/CardImage2.png";
import CardImage3 from "../images/CardImage3.png";

const blogPosts = [
  {
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
    image: CardImage1, // Replace with actual paths
  },
  {
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["DESIGN", "PRINT"],
    image: CardImage2,
  },
  {
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["FIGMA", "WEB"],
    image: CardImage3,
  },
];

const Blog = () => {
  return (
    <div className="w-[82%] mx-auto text-white py-12 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold  flex items-center text-white">
            <span className="mr-2 text-2xl">✶</span> Blog
          </h2>
          <div className='underline text-white hover:text-gray-400 hover:no-underline'>View all</div>
        </div>

      {/* Blog List */}
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex items-center gap-6 border-b border-gray-600 pb-6"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-52 h-36 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Content */}
            <div className="flex-1">
              <p className="text-gray-400 text-sm">{post.date}</p>
              <h3 className="text-xl font-semibold mt-1">{post.title}</h3>

              {/* Tags */}
              <div className="flex gap-2 mt-3">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="border border-gray-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read Button */}
            <button className="bg-white hidden lg:block text-black px-6 py-2 rounded-full text-sm hover:bg-gray-300 ">
              Read
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
