// Description: Footer component with links to Privacy, Terms, and Contact pages, styled with Tailwind CSS.

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-10 border-t dark:border-gray-700 transition-colors">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-0">
          © {new Date().getFullYear()} Mutito Beez. All Rights Reserved.
        </p>

        <div className="flex gap-4">
          <a href="/privacy" className="text-yellow-600 dark:text-yellow-400 hover:underline">Privacy</a>
          <a href="/terms" className="text-yellow-600 dark:text-yellow-400 hover:underline">Terms</a>
          <a href="/contact" className="text-yellow-600 dark:text-yellow-400 hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
