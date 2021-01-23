import React, { Component } from "react";
import GalleryCard from "../HomeComponents/GalleryCard";
import "../css/Styles.css";

import haase from "../images/haase.png";

class PastGallery extends Component {
  render() {
    return (
      <div className="Event-Gallery">
        <h2>Past Events</h2>
        <div className="row">
          <div className="col-sm-4">
            <GalleryCard
              name="Dave Haase"
              event="Race Across America"
              img={haase}
            ></GalleryCard>
          </div>
        </div>
      </div>
    );
  }
}

export default PastGallery;
