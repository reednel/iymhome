import React, { Component } from "react";
import GalleryCard from "../HomeComponents/GalleryCard";
import "../css/Styles.css";

import samarth from "../images/samarth.PNG";
import haase from "../images/haase.png";
import macdonald from "../images/macdonald.PNG";
import cross from "../images/cross.jpg";

class AthleteGallery extends Component {
  render() {
    return (
      <div className="Event-Gallery">
        <h2>Athletes</h2>
        {/* Row 1 */}
        <div className="row">
          <div className="col-sm-4">
            <GalleryCard
              name="Dr. Amit Samarth"
              event="Ride Around India"
              img={samarth}
              link="" // each card should have a link and image
            ></GalleryCard>
          </div>
          <div className="col-sm-4">
            <GalleryCard
              name="Dave Haase"
              event="Bicycle Route 66"
              img={haase}
            ></GalleryCard>
          </div>
          <div className="col-sm-4">
            <GalleryCard
              name="James MacDonald"
              event="TBD"
              img={macdonald}
            ></GalleryCard>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="col-sm-4">
            <GalleryCard name="Bukima Patel" event="TBD"></GalleryCard>
          </div>
          <div className="col-sm-4">
            <GalleryCard
              name="Julia Cross"
              event="Canadian Challenge"
              img={cross}
            ></GalleryCard>
          </div>
          <div className="col-sm-4">
            <GalleryCard name="Christian Jensen" event="TBD"></GalleryCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AthleteGallery;
