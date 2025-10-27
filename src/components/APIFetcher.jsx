// Description: A React component that fetches data from a public API, displays it in a grid layout, and includes search and pagination functionalities.

import React, { useState, useEffect } from "react";
import Button from "./Button";

const APIFetcher = () => {
  const [posts, setPosts] = useState([]);         // fetched data
  const [loading, setLoading] = useState(true);   // loading state
  const [error, setError] = useState(null);       // error state
  const [searchTerm, setSearchTerm] = useState(""); // search
  const [page, setPage] = useState(1);            // pagination
  const [limit] = useState(10);                   // posts per page

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  // Fetch posts from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // Filtered posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold text-center text-yellow-600 mb-4">
        🌐 API Integration Demo
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading posts...</p>}

      {/* Error State */}
      {error && (
        <p className="text-center text-red-600 font-semibold">
          ❌ {error}
        </p>
      )}

      {/* Posts Grid */}
      {!loading && !error && (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-lg shadow-sm dark:bg-gray-700"
            >
              <h3 className="font-bold text-lg text-yellow-600 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {!loading && filteredPosts.length === 0 && (
        <p className="text-center text-gray-400 mt-6">No results found.</p>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          label="Previous"
          variant="secondary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        />
        <span className="text-gray-600 dark:text-gray-300 font-semibold">
          Page {page}
        </span>
        <Button
          label="Next"
          variant="primary"
          onClick={() => setPage((prev) => prev + 1)}
        />
      </div>
    </div>
  );
};

export default APIFetcher;
