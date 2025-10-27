// A reusable button component with different variants and styles.

import React from "react";

const Button = ({ label, variant = "primary", onClick }) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const buttonStyle = `${baseStyle} ${variants[variant]}`;

  return (
    <button className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg animate-bounceIn">
      Shop Now
    </button>
  );
};

export default Button;
