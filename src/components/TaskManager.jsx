// Task Manager Component

import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, completed: false },
    ]);
    setNewTask("");
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-yellow-600 mb-4">
        📝 Task Manager
      </h2>

      {/* Input Area */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        <Button label="Add" onClick={addTask} variant="primary" />
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-4">
        <Button label="All" variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")} />
        <Button label="Active" variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")} />
        <Button label="Completed" variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")} />
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 border rounded-lg ${
              task.completed ? "bg-green-100 dark:bg-green-800" : "bg-gray-50 dark:bg-gray-700"
            }`}
          >
            <span
              className={`flex-grow text-left ${
                task.completed ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {task.text}
            </span>
            <div className="flex gap-2">
              <Button
                label={task.completed ? "Undo" : "Done"}
                variant="secondary"
                onClick={() => toggleComplete(task.id)}
              />
              <Button label="Delete" variant="danger" onClick={() => deleteTask(task.id)} />
            </div>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No tasks found.</p>
      )}
    </div>
  );
};

export default TaskManager;
