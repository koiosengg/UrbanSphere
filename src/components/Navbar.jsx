import React from "react";
import Logo from "/logo.png";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
      <img src={Logo} className="navbarLogo" onClick={scrollToTop} alt="Logo" />
      <div className="navbarTab">
        <div className="navbarLink">Products</div>
        <a href="/#contact" className="navbarLink">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
