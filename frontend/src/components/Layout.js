import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="layout--body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
