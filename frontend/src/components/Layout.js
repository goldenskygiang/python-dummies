import React, { useState }  from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

import "../css/Layout.css";

const Layout = ({ children, loading }) => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogInOpen, setLogInOpen] = useState(false);

  return (
    <div className="layout">
      <SignUp isOpen={isSignUpOpen} setOpen={setSignUpOpen}/>
      <LogIn  isOpen={isLogInOpen} setOpen={setLogInOpen}/>
      <Navbar setLogInOpen={setLogInOpen} setSignUpOpen={setSignUpOpen} />
      <main className="layout--body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
