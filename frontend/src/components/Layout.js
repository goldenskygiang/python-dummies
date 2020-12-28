import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

import "../css/Layout.css";

const Layout = ({ children }) => {
<<<<<<< HEAD
  return (
    <div className="layout">
      <Navbar />
=======
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogInOpen, setLogInOpen] = useState(false);

  return (
    <div className="layout">
      <SignUp isOpen={isSignUpOpen} setIsOpen={setSignUpOpen}/>
      <LogIn  isOpen={isLogInOpen} setIsOpen={setLogInOpen}/>
      <Navbar setLogInOpen={setLogInOpen} setSignUpOpen={setSignUpOpen} />
>>>>>>> 2bb2e5022935340d3408c3ad7bf6907c788c37d7
      <main className="layout--body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
