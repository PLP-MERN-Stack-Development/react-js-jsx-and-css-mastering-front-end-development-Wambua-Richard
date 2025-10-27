// Description: A reusable Card component with Tailwind CSS styling.

import React from "react";

const Card = ({ title, content, image, children }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden max-w-sm border border-gray-100">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
        <h1 className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 animate-fadeIn">
           Mutito Beez 🐝
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
        {children}
      </div>

    </div>
  );
};

export default Card;
