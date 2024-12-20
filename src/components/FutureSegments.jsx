import React, { useState } from "react";
import MainBackground from "../assets/FutureSegments/FutureSegments-Background.png";
import MainSectionBackground from "../assets/FutureSegments/FutureSegments-Section-Background.png";
import InfoSectionName from "../assets/FutureSegments/FutureSegments-Name-Content.png";
import productImg1 from "../assets/FutureSegments/productImg1.png";
import productImg2 from "../assets/FutureSegments/productImg2.png";
import productImg3 from "../assets/FutureSegments/productImg3.png";
import MoreInfoButton from "./MoreInfoButton";
import MoreInfoHideButton from "./MoreInfoHideButton";

function FutureSegments() {
  const [moreInfo, setMoreInfo] = useState(false);

  function handleOpenMoreInfo() {
    setMoreInfo(true);
    console.log(moreInfo);
  }

  function handleHideMoreInfo() {
    setMoreInfo(false);
  }

  return (
    <div className="productContainer" id="FutureSegments">
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
            <p></p>
            <div className="productMainContainer">
              <span>Future Segments</span>
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
                  alt="Urban Sphere Ivoryline Main Img"
                  className="productMoreInfoMainLeftMainImg"
                />
                <div className="heading">
                  <div className="content">
                    <img src={InfoSectionName} />
                    <p>
                      Other than present product lineups, Urban Sphere aims to
                      uplifting transportation by creating new segments in
                      automotive industry. Some other segments which Urban
                      Sphere is planning in future, Includes Coach Buses, Semi
                      Trailer trucks & Lifestyle Pickup Trucks, Etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="productMoreInfoMainMiddle">
                <div className="productImgContainer">
                  <div className="productImgBox">
                    <img
                      src={productImg1}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                  </div>
                  <div className="productImgBox">
                    <img
                      src={productImg2}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                  </div>
                  <div className="productImgBox">
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

export default FutureSegments;
