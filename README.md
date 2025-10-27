🎨 Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development
🚀 Objective

The goal of this project is to build a responsive and interactive React application that demonstrates mastery of JSX, component-based architecture, React hooks, and API integration.
Styling is implemented using Tailwind CSS to achieve a clean, modern, and responsive UI across all devices.

🧩 Project Overview

This project demonstrates:

Setting up a React app with Vite

Implementing reusable UI components

Managing state using React hooks (useState, useEffect, useContext)

Fetching and displaying data from a public API

Applying Tailwind CSS for responsive design and theme switching

Adding custom animations and transitions for better UX

📂 Tasks Breakdown
🧱 Task 1: Project Setup

Created a new React project using Vite:

npm create vite@latest react-app --template react
cd react-app
npm install


Installed and configured Tailwind CSS:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Updated tailwind.config.cjs:

content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
darkMode: "class",


Created project structure:

src/
├── components/
├── pages/
├── context/
├── hooks/
├── utils/
├── App.jsx
└── main.jsx


Configured React Router for page navigation:

npm install react-router-dom

🧩 Task 2: Component Architecture

Developed reusable and customizable UI components:

🟢 Button Component

Supports multiple variants using props:

<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>


Variants styled using Tailwind utility classes.

🟡 Card Component

Displays boxed content with flexible props for title and description:

<Card title="Honey Production" content="Learn about sustainable bee farming." />

🔵 Navbar Component

Responsive navigation with links and a theme switcher (light/dark mode).

⚫ Footer Component

Displays copyright,
privacy, and contact links at the bottom of every page.

🧩 Layout Component

Wraps the main application with Navbar and Footer for consistent UI:

<Layout>
  <HomePage />
</Layout>


✅ All components are fully reusable and maintainable.

⚙️ Task 3: State Management and Hooks

Implemented a Task Manager that allows users to manage their daily tasks efficiently.

Features:

➕ Add new tasks

✅ Mark tasks as completed

❌ Delete tasks

🔍 Filter tasks: All, Active, Completed

Hooks Used:

useState → manages task state

useEffect → loads and persists tasks to localStorage

useContext → manages light/dark theme

Custom Hook: useLocalStorage

const [tasks, setTasks] = useLocalStorage("tasks", []);


✅ Tasks are persisted between browser sessions.

🌐 Task 4: API Integration

Integrated data fetching from a public API (JSONPlaceholder) to display posts dynamically.

API Endpoint:
https://jsonplaceholder.typicode.com/posts

Implemented Features:

Fetch and display data in a grid layout

Show loading and error states

Added pagination / infinite scrolling

Included a search bar to filter posts

Example fetch logic:

useEffect(() => {
  setLoading(true);
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(() => setError("Failed to fetch data"))
    .finally(() => setLoading(false));
}, [page]);


✅ Demonstrates practical API consumption, state handling, and UI feedback patterns.

🎨 Task 5: Styling with Tailwind CSS
🧭 Responsive Design

Implemented mobile-first layouts using Tailwind breakpoints:

Screen	Prefix	Example
Mobile	(default)	text-sm
Tablet	md:	md:text-base
Desktop	lg:	lg:text-lg

Example:

<div className="flex flex-col md:flex-row justify-between items-center">

🌗 Theme Switcher

Integrated Tailwind dark mode using class-based switching.

Implemented ThemeContext for persistent theme toggling.

🪄 Custom Animations

Extended Tailwind with custom keyframes:

extend: {
  keyframes: {
    fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
  },
  animation: {
    fadeIn: "fadeIn 1s ease-in-out",
  },
},


Used in components:

<h1 className="animate-fadeIn text-3xl font-bold text-yellow-600">Welcome 🐝</h1>


✅ Final UI is interactive, accessible, and visually appealing.

🧰 Technologies Used
Technology	Purpose
React (Vite)	Front-end library and fast build tool
Tailwind CSS	Responsive, utility-first styling
React Router	Client-side routing
Context API	Theme management
JSONPlaceholder API	Mock API for data fetching
Lucide Icons	Modern icon set for theme toggle & UI elements
🧭 Folder Structure
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Tasks.jsx
│   └── ApiData.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── App.jsx
└── main.jsx

🧪 Expected Outcome

By completing all five tasks, the final application achieves:

✅ Fully functional React application

✅ Reusable and modular components

✅ Efficient state management with hooks

✅ Smooth API integration

✅ Responsive, animated, and theme-aware UI

✅ Clean, maintainable, and production-ready code

🖼️ Screenshots (Add Your Own)
Light Mode	Dark Mode	Task Manager	API Page

	
	
	

(Ensure your screenshots are saved in a /screenshots folder.)

🛠️ Setup and Installation
Prerequisites

Node.js v18 or higher

npm or yarn

Installation Steps

Clone your repository:

git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Wambua-Richard.git
cd react-js-jsx-and-css-mastering-front-end-development-Wambua-Richard


Install dependencies:

npm install


Start the development server:

npm run dev


Build for production:

npm run build


Preview the build:

npm run preview

🚀 Deployment

Deploy the app using any of these services:

Vercel

Netlify

GitHub Pages

Example Deployment Command (Vercel)
npm install -g vercel
vercel


After deployment, include your live link here:

🌐 Live Demo: https://react-js-jsx-and-css-wk3.netlify.app/

✅ Submission Instructions

Accept the GitHub Classroom invitation.

Clone your personal repository.

Complete all five tasks and push your code regularly.

Include:

All source files (components, hooks, pages)

Screenshots in /screenshots

This README.md file

Deploy your app and add the deployed URL above.

Push all changes to your repository before the deadline.

📚 Key Learnings

Understanding React’s component-based architecture

Using JSX effectively for dynamic UIs

Managing state and side effects with hooks

Consuming REST APIs in React

Styling with Tailwind’s utility classes

Implementing responsive layouts and dark mode

✨ Author

👨‍💻 Richard Wambua
MERN Stack Developer | Front-End Enthusiast
📍 Kenya
📧 wambuarichard335@gmail.com
💻 Wambua-Richard