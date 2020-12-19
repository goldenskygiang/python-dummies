import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../css/Layout.css"

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
