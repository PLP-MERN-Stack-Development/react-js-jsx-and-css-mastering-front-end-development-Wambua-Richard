// Description: Navbar Component with Theme Switcher and Navigation Links

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex justify-between items-center transition-colors">
      <h1 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
        Mutito Beez 🐝
      </h1>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">Home</Link>
        <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">About</Link>
        <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">Contact</Link>
        <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">Tasks</Link>
        <Link to="/api" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">API</Link>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition"
        >
          {theme === "light" ? (
            <Moon className="text-gray-700 dark:text-yellow-400" />
          ) : (
            <Sun className="text-yellow-500" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;