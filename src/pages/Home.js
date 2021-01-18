import React, { Component } from "react";
import "../css/Styles.css";

import NavBar from "../components/NavBar";
import LiveEvent from "../components/LiveEvent.jsx";
import PledgeTracker from "../components/PledgeTracker";
import AthleteGallery from "../components/AthleteGallery";
import PastGallery from "../components/PastGallery";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

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
