import React from "react";
import BannerImg from "../assets/Banner.png";
import Logo from "/logo.png";

function Banner() {
  return (
    <div className="Banner">
      <img src={BannerImg} className="bannerBackground" />
      <img src={Logo} className="bannerLogo" />
    </div>
  );
}

export default Banner;
