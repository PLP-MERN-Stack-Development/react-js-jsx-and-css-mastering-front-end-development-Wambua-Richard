// Tasks Page Component
import React from "react";
import TaskManager from "../components/TaskManager";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";

const Tasks = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="text-center">
      <div className="flex justify-end mb-4">
        <Button
          label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
          onClick={toggleTheme}
          variant="secondary"
        />
      </div>

      <TaskManager />
    </div>
  );
};

export default Tasks;
