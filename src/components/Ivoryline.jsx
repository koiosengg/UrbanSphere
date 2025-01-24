import React, { useState } from "react";
import MainBackground from "../assets/Ivoryline/Ivoryline-Background.png";
import MainSectionName from "../assets/Ivoryline/Ivoryline-Name.png";
import MainSectionNameMobile from "../assets/Ivoryline/Ivoryline-Name-Mobile.png";
import MainSectionImg from "../assets/Ivoryline/Ivoryline-Main-Img.png"
import InfoSectionName from "../assets/Ivoryline/Ivoryline-Name-Content.png";
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
    <div className="productContainer" id="Ivoryline">
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
            <p>City Buses</p>
            <div className="productMainContainer">
              <img
                src={MainSectionName}
                className="desktop"
                alt="Urban Sphere Ivoryline Name"
              />
              <img
                src={MainSectionNameMobile}
                className="mobile"
                alt="Urban Sphere Ivoryline Name"
              />
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
                  src={MainSectionImg}
                  alt="Urban Sphere Ivoryline Main Img"
                  className="productMoreInfoMainLeftMainImg"
                />
                <div className="heading">
                  <div className="content">
                    <img src={InfoSectionName} />
                    <p>
                      The 'Ivoryline' is a range of buses from Urban Sphere,
                      featuring a variety of sizes (6, 7.5, 9, and 12 meters).
                    </p>
                  </div>
                </div>
              </div>
              <div className="productMoreInfoMainMiddle">
                <div className="productImgContainer desktop">
                  <div className="productImgDiv">
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
                  </div>
                  <div className="productImgBox">
                    <img
                      src={productImg3}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                  </div>

                  <div className="productImgDiv">
                    <div className="productImgBox">
                      <img
                        src={productImg4}
                        alt="Urban Sphere Ivoryline Product Image 1"
                      ></img>
                    </div>
                    <div className="productImgBox">
                      <img
                        src={productImg5}
                        alt="Urban Sphere Ivoryline Product Image 1"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="mobileProductImgContainer mobile">
                  <div className="productImgBox">
                    <img
                      src={productImg3}
                      style={{ height: "160px" }}
                      alt="Urban Sphere Ivoryline Product Image 1"
                    ></img>
                  </div>
                  <div
                    className="mobileProductImgContainer"
                    style={{ flexDirection: "column" }}
                  >
                    <div className="mobileProductImgContainer">
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
                    </div>
                    <div className="mobileProductImgContainer">
                      <div className="productImgBox">
                        <img
                          src={productImg4}
                          alt="Urban Sphere Ivoryline Product Image 1"
                        ></img>
                      </div>
                      <div className="productImgBox">
                        <img
                          src={productImg5}
                          alt="Urban Sphere Ivoryline Product Image 1"
                        ></img>
                      </div>
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

export default Ivoryline;
