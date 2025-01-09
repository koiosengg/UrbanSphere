import React, { useState, useEffect, useRef } from "react";
import Logo from "/logo.png";
import BannerImg1 from "../assets/Banner/Urban Sphere Banner Image 1.png";
import BannerVideo1 from "../assets/Banner/Urban Sphere Banner Video 1.mp4";
import BannerVideo2 from "../assets/Banner/Urban Sphere Banner Video 2.mp4";
import BannerVideo3 from "../assets/Banner/Urban Sphere Banner Video 3.mp4";
import BannerVideo4 from "../assets/Banner/Urban Sphere Banner Video 4.mp4";
import LeftArrow from "../assets/Left Arrow.png";
import RightArrow from "../assets/Right Arrow.png";

const videos = [BannerVideo1, BannerVideo2, BannerVideo3, BannerVideo4];

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < videos.length) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

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
          <img src={BannerImg1} alt="Slide 1" />
          {videos.map((video, index) => (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index + 1] = el)}
              src={video}
            ></video>
          ))}
        </div>
      </div>
      {activeIndex === 0 && (
        <img src={Logo} className="bannerLogo" alt="Logo" />
      )}
      <div className="bannerDotsContainer">
        {[...Array(videos.length + 1)].map((_, index) => (
          <section
            key={index}
            className={`bannerDot ${
              activeIndex === index ? "activeBannerDot" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="bannerButtonsContainer">
        <img
          src={LeftArrow}
          alt="Previous Slide"
          className="bannerButton left"
          onClick={handlePrev}
          style={{
            opacity: activeIndex === 0 ? 0.3 : 1,
            cursor: activeIndex === 0 ? "none" : "pointer",
          }}
        />
        <img
          src={RightArrow}
          alt="Next Slide"
          className="bannerButton right"
          onClick={handleNext}
          style={{
            opacity: activeIndex === videos.length ? 0.3 : 1,
            cursor: activeIndex === videos.length ? "none" : "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default Banner;
