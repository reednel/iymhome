import React, { Component } from "react";

import "../css/Styles.css";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event">
        <div className="Live-Event-Box">
          <div className="row">
            <div className="Event-Preview"></div>
            <span className="Athlete-Preview"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveEvent;
