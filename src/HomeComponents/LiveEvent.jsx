import React, { Component } from "react";

import "../css/Styles.css";

import MapBoxmain from "../HomeComponents/Mapboxmain";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <MapBoxmain />
        </div>
        <div className="col Live-Event-Feed-Box">Live Feed</div>
      </div>
    );
  }
}

export default LiveEvent;
