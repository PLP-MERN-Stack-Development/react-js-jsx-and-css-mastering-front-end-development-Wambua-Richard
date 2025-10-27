// Description: This file defines a React component that displays data fetched from an API and includes a button to toggle between light and dark themes.

import React from "react";
import APIFetcher from "../components/APIFetcher";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";

const ApiData = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          label={theme === "light" ? "Dark Mode" : "Light Mode"}
          onClick={toggleTheme}
          variant="secondary"
        />
      </div>
      <APIFetcher />
    </div>
  );
};

export default ApiData;
