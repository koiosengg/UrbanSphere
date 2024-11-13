import React, { useState } from "react";
import MainBackground from "../assets/CityRider/CityRider-Background.png";
import MainSectionName from "../assets/CityRider/CityRider-Name.png";
import InfoSectionName from "../assets/CityRider/CityRider-Name-Content.png";
import productImg1 from "../assets/CityRider/productImg1.png";
import productImg2 from "../assets/CityRider/productImg2.png";
import productImg3 from "../assets/CityRider/productImg3.png";
import MoreInfoButton from "./MoreInfoButton";
import MoreInfoHideButton from "./MoreInfoHideButton";

function CityRider() {
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
        <img src={MainBackground} />
      </div>
      <div className="productDiv">
        <div
          className="productDivSlide"
          style={{ transform: `translateX(${moreInfo ? "-100%" : "0"})` }}
        >
          <div className="productMain">
            <img src={MainSectionName} alt="Urban Sphere Ivoryline Name" />
            <MoreInfoButton onSelect={handleOpenMoreInfo} />
          </div>
          <div
            className={`productMoreInfo ${
              moreInfo ? "productMoreInfoOpen" : ""
            }`}
          >
            <div className="productMoreInfoHide">
              <MoreInfoHideButton onSelect={handleHideMoreInfo} />
            </div>
            <div className="productMoreInfoMain">
              <div className="productMoreInfoMainLeft">
                <img
                  src={MainBackground}
                  alt="Urban Sphere Ivoryline Main Img"
                  className="productMoreInfoMainLeftMainImg"
                />
                <div className="heading">
                  <span>Urban Sphere</span>
                  <div className="content">
                    <img src={InfoSectionName} />
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
                  <img
                    src={productImg1}
                    alt="Urban Sphere Ivoryline Product Image 1"
                  ></img>
                  <div className="productImgDiv">
                    <img
                      src={productImg2}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                    <img
                      src={productImg3}
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

export default CityRider;
