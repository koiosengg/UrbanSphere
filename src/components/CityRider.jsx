import React, { useState } from "react";
import MainBackground from "../assets/CityRider/CityRider-Background.png";
import MainSectionBackground from "../assets/CityRider/CityRider-Section-Background.png";
import MainSectionName from "../assets/CityRider/CityRider-Name.png";
import MainSectionNameMobile from "../assets/CityRider/CityRider-Name-Mobile.png";
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
    <div className="productContainer" id="CityRider">
      <div
        className="productContainerBackground"
        alt="Urban Sphere CityRider Background"
      >
        <img src={MainBackground} />
      </div>
      <div className="productDiv">
        <div
          className="productDivSlide"
          style={{ transform: `translateX(${moreInfo ? "-100%" : "0"})` }}
        >
          <div className="productMain">
            <p style={{ color: "#1E1E1E" }} className="desktop">Micro Buses</p>
            <p className="mobile">Micro Buses</p>
            <div className="productMainContainer">
              <img src={MainSectionName} className="desktop" alt="Urban Sphere CityRider Name" />
              <img src={MainSectionNameMobile} className="mobile" alt="Urban Sphere CityRider Name" />
              <MoreInfoButton onSelect={handleOpenMoreInfo} />
            </div>
          </div>
          <div
            className={`productMoreInfo ${
              moreInfo ? "productMoreInfoOpen" : ""
            }`}
          >
            <div className="productMoreInfoHide">
              <MoreInfoHideButton onSelect={handleHideMoreInfo} />
              <div className="productMoreInfoMainRight mobile">
                <div className="flagLine">
                  <div className="line" id="orange"></div>
                  <div className="line" id="white"></div>
                  <div className="line" id="green"></div>
                </div>
                <h3>Proudly Designed & Made in India</h3>
              </div>
            </div>
            <div className="productMoreInfoMain">
              <div className="productMoreInfoMainLeft">
                <img
                  src={MainSectionBackground}
                  alt="Urban Sphere CityRider Main Img"
                  className="productMoreInfoMainLeftMainImg"
                />
                <div className="heading">
                  <div className="content">
                    <img src={InfoSectionName} />
                    <p>
                      The 'CITY RIDER' is a range of Micro Electric Buses from
                      Urban Sphere, featuring a variety of sizes (4.9 & 5.9
                      meters buses).
                    </p>
                  </div>
                </div>
              </div>
              <div className="productMoreInfoMainMiddle">
                <div className="productImgContainer">
                  <div className="productImgBox">
                    <img
                      src={productImg1}
                      alt="Urban Sphere CityRider Product Image 1"
                    ></img>
                  </div>

                  <div className="productImgDiv">
                    <div className="productImgBox">
                      <img
                        src={productImg2}
                        alt="Urban Sphere CityRider Product Image 1"
                      ></img>
                    </div>
                    <div className="productImgBox">
                      <img
                        src={productImg3}
                        alt="Urban Sphere CityRider Product Image 1"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="productButtonContainer">
                  <a href="#contact" className="knowMoreButton">
                    Know More
                  </a>
                  <a className="brochureButton">Download Brochure</a>
                </div>
              </div>
              <div className="productMoreInfoMainRight desktop">
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
