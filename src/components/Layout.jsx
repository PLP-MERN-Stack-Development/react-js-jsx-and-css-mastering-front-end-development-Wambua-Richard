// Layout Component (Wrapper for Pages)

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
