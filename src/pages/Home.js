import React, { Component } from "react";
import "../css/Styles.css";

import NavBar from "../HomeComponents/NavBar";
import LiveEvent from "../HomeComponents/LiveEvent.jsx";
import PledgeTracker from "../HomeComponents/PledgeTracker";
import AthleteGallery from "../HomeComponents/AthleteGallery";
import PastGallery from "../HomeComponents/PastGallery";
import Partners from "../HomeComponents/Partners";
import Footer from "../HomeComponents/Footer";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

class Home extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <LiveEvent />
        <PledgeTracker />
        <AthleteGallery />
        <PastGallery />
        <Partners />
        <Footer />
      </Parallax>
    );
  }
}

export default Home;
