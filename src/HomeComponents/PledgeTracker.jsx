import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "../css/Styles.css";

const pledges = 40;

class PledgeTracker extends Component {
  render() {
    return (
      <div className="Pledge-Tracker">
        <ProgressBar
          className="Pledge-Tracker-Bar"
          animated
          now={pledges}
          label={pledges}
          variant="danger"
        />
      </div>
    );
  }
}

export default PledgeTracker;
