import React, { useState } from "react";
import MainBackground from "../assets/Viyana/Viyana-Background.png";
import MainSectionName from "../assets/Viyana/Viyana-Name.png";
import MainSectionNameMobile from "../assets/Viyana/Viyana-Name-Mobile.png";
import InfoSectionName from "../assets/Viyana/Viyana-Name-Content.png";
import productImg1 from "../assets/Viyana/productImg1.png";
import productImg2 from "../assets/Viyana/productImg2.png";
import productImg3 from "../assets/Viyana/productImg3.png";
import MoreInfoButton from "./MoreInfoButton";
import MoreInfoHideButton from "./MoreInfoHideButton";

function Viyana() {
  const [moreInfo, setMoreInfo] = useState(false);

  function handleOpenMoreInfo() {
    setMoreInfo(true);
    console.log(moreInfo);
  }

  function handleHideMoreInfo() {
    setMoreInfo(false);
  }

  return (
    <div className="productContainer" id="Viyaana">
      <div
        className="productContainerBackground"
        alt="Urban Sphere Viyaana Background"
      >
        <img src={MainBackground} />
      </div>
      <div className="productDiv">
        <div
          className="productDivSlide"
          style={{ transform: `translateX(${moreInfo ? "-100%" : "0"})` }}
        >
          <div className="productMain">
            <p>Low Floor Buses</p>
            <div className="productMainContainer">
              <img
                src={MainSectionName}
                className="desktop"
                alt="Urban Sphere Viyana Name"
              />
              <img
                src={MainSectionNameMobile}
                className="mobile"
                alt="Urban Sphere Viyana Name"
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
                  src={MainBackground}
                  alt="Urban Sphere Viyaana Main Img"
                  className="productMoreInfoMainLeftMainImg"
                />
                <div className="heading">
                  <div className="content">
                    <img src={InfoSectionName} />
                    <p>
                      The 'VIYANA' is a range of Low Floor Electric Buses from
                      Urban Sphere, featuring a variety of sizes (9,12, and 14
                      meters Tarmac Buses).
                    </p>
                  </div>
                </div>
              </div>
              <div className="productMoreInfoMainMiddle">
                <div className="productImgContainer desktop">
                  <div className="productImgBox">
                    <img
                      src={productImg1}
                      alt="Urban Sphere Viyaana Product Image 1"
                    ></img>
                  </div>

                  <div className="productImgDiv">
                    <div className="productImgBox">
                      <img
                        src={productImg2}
                        alt="Urban Sphere Viyaana Product Image 1"
                      ></img>
                    </div>
                    <div className="productImgBox">
                      <img
                        src={productImg3}
                        alt="Urban Sphere Viyaana Product Image 1"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="mobileProductImgContainer mobile">
                  <div className="productImgBox">
                    <img
                      src={productImg1}
                      style={{ height: "160px" }}
                      alt="Urban Sphere Viyaana Product Image 1"
                    ></img>
                  </div>
                  <div
                    className="mobileProductImgContainer"
                    style={{ flexDirection: "column" }}
                  >
                    <div className="mobileProductImgContainer">
                      <div className="productImgBox">
                        <img
                          src={productImg2}
                          alt="Urban Sphere Viyaana Product Image 1"
                        ></img>
                      </div>
                    </div>
                    <div className="mobileProductImgContainer">
                      <div className="productImgBox">
                        <img
                          src={productImg3}
                          alt="Urban Sphere Viyaana Product Image 1"
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

export default Viyana;
