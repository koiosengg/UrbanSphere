import React from "react";
import Banner from "./Banner";
import Ivoryline from "./Ivoryline";
import Viyana from "./Viyana";
import CityRider from "./CityRider";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Banner />
      <div id="products">
        <Ivoryline />
        <Viyana />
        <CityRider />
      </div>
      <Contact />
    </div>
  );
}

export default Home;
