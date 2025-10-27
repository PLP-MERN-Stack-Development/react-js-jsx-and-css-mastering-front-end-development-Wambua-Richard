// Custom Hook to manage localStorage state
// This hook will store and retrieve data from local storage — useful for persisting tasks.

import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
