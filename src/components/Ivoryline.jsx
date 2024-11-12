import React, { useState } from "react";
import IvorylineBackground from "../assets/Ivoryline/Ivoryline-Background.png";
import IvorylineName from "../assets/Ivoryline/Ivoryline-Name.png";
import IvorylineNameContent from "../assets/Ivoryline/Ivoryline-Name-Content.png";
import productImg1 from "../assets/Ivoryline/productImg1.png";
import productImg2 from "../assets/Ivoryline/productImg2.png";
import productImg3 from "../assets/Ivoryline/productImg3.png";
import productImg4 from "../assets/Ivoryline/productImg4.png";
import productImg5 from "../assets/Ivoryline/productImg5.png";
import MoreInfoButton from "./MoreInfoButton";
import MoreInfoHideButton from "./MoreInfoHideButton";

function Ivoryline() {
  const [moreInfo, setMoreInfo] = useState(false);

  function handleOpenMoreInfo() {
    setMoreInfo(true);
    console.log(moreInfo);
  }

  function handleHideMoreInfo() {
    setMoreInfo(false);
  }

  return (
    <div className="productContainer">
      <div
        className="productContainerBackground"
        alt="Urban Sphere Ivoryline Background"
      >
        <img src={IvorylineBackground} />
      </div>
      <div className="productDiv">
        <div
          className="productDivSlide"
          style={{ transform: `translateX(${moreInfo ? "-100%" : "0"})` }}
        >
          <div className="productMain">
            <img src={IvorylineName} alt="Urban Sphere Ivoryline Name" />
            <MoreInfoButton onSelect={handleOpenMoreInfo} />
          </div>
          <div className="productMoreInfo">
            <div className="productMoreInfoHide">
              <MoreInfoHideButton onSelect={handleHideMoreInfo} />
            </div>
            <div className="productMoreInfoMain">
              <div className="productMoreInfoMainLeft">
                <img
                  src={IvorylineBackground}
                  alt="Urban Sphere Ivoryline Main Img"
                  className="productMoreInfoMainLeftMainImg"
                />
                <div className="heading">
                  <span>Urban Sphere</span>
                  <div className="content">
                    <img src={IvorylineNameContent} />
                    <p>
                      The 'Ivoryline' is a range of buses from Urban Sphere,
                      featuring a variety of sizes (6, 7.5, 9, and 14 meters).
                      The lineup draws its inspiration from Urban Sphere's
                      Navagraha Design philosophy, taking cues from the vahana
                      (vehicle) of Budhgraha or Mercury – the elephant.
                      Elephants have been historically associated with royalty
                      and are renowned for their strength, making them an ideal
                      inspiration for heavy transport vehicles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="productMoreInfoMainMiddle">
                <div className="productImgContainer">
                  <div className="productImgDiv">
                    <img
                      src={productImg1}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                    <img
                      src={productImg2}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                  </div>
                  <img
                    src={productImg3}
                    alt="Urban Sphere Ivoryline Product Image 1"
                  ></img>
                  <div className="productImgDiv">
                    <img
                      src={productImg4}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                    <img
                      src={productImg5}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                  </div>
                </div>
                <div className="productButtonContainer">
                  <a href="#contact" className="knowMoreButton">
                    Know More
                  </a>
                  <a className="brochureButton">Download Brochure</a>
                </div>
              </div>
              <div className="productMoreInfoMainRight">
                <div className="flagLine">
                  <div className="line" id="orange"></div>
                  <div className="line" id="white"></div>
                  <div className="line" id="green"></div>
                </div>
                <h3>Proudly Designed & Made in India</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ivoryline;
