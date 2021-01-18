import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

import "../css/Styles.css";

const pledges = 40;


class PledgeTracker extends Component {
  render() {
    return (
    <div classname="Pledge-Tracker">
      <div classname="Pledge-Tracker-Filler">
      <ProgressBar animated now={pledges} label ={pledges} variant = "danger" />;
      </div>
    </div>
    )
  }
}

export default PledgeTracker;
