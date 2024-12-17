import React from "react";
import Logo from "/logo.png";
import Arrow from "../assets/arrow_back_ios_new.svg";

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
        <div className="navbarLink">
          <section>
            <p>Products</p>
            <img src={Arrow} />
          </section>
          <div className="navbar-dropdown-container">
            <div className="navbar-dropdown">
              <a href="/#Ivoryline">Ivoryline</a>
              <a href="/#Viyaana">Viyaana</a>
              <a href="/#CityRider">City Rider</a>
              <a>Future Segments</a>
            </div>
          </div>
        </div>
        <a href="/#contact" className="navbarLink">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Navbar;
