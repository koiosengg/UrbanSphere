import React, { useEffect, useState } from "react";
import BannerImg from "../assets/Banner.png";
import Logo from "/logo.png";
import MainBackground1 from "../assets/Ivoryline/Ivoryline-Background.png";
import MainBackground2 from "../assets/Viyana/Viyana-Background.png";
import MainBackground3 from "../assets/CityRider/CityRider-Background.png";

function Banner() {
  const images = [BannerImg, MainBackground1, MainBackground2, MainBackground3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Delay of 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="Banner">
      <div className="bannerBackground">
        <div
          className="bannerSlideContainer"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
      <img src={Logo} className="bannerLogo" alt="Logo" />
      <div className="bannerDotsContainer">
        {images.map((_, index) => (
          <section
            key={index}
            className={`bannerDot ${
              index === activeIndex ? "activeBannerDot" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
