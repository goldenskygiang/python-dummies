import React, { useState } from "react";
import Navbar from "./Navbar";
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import Footer from "./Footer";

import "../css/Layout.css"

const Layout = ({ children }) => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogInOpen, setLogInOpen] = useState(false);
  
  return (
    <div className="layout">
      <SignUp isOpen={isSignUpOpen} setIsOpen={setSignUpOpen} />
      <LogIn isOpen={isLogInOpen} setIsOpen={setLogInOpen} />
      <Navbar setSignUpOpen={setSignUpOpen} setLogInOpen={setLogInOpen} />
      <main className="layout--body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
