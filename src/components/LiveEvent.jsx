import React, { Component } from "react";

import "../css/Styles.css";

import MapBoxmain from "../components/MapBox Components/Mapboxmain";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event">
        <div className="Live-Event-Box">
          <div className="row">
            <div className="col">
              <MapBoxmain></MapBoxmain>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveEvent;
