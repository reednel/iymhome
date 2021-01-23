import React, { Component } from "react";
import { Container } from "reactstrap";
import ReactMapGL, { NavigationControl, FlyToInterpolator } from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA";

class Mapboxmain extends React.Component {
  state = {
    viewport: {
      width: "100%",
      height: 500,
      latitude: 21,
      longitude: 79,
      zoom: 4.2,
      bearing: 0,
      pitch: 0,
    },
  };

  _onViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  _goToAthlete = () => {
    const viewport = {
      ...this.state.viewport,
      longitude: -74.1, //This is to be the coordinate of the athlete
      latitude: 40.7,
      zoom: 14,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      // transitionEasing: d3.easeCubic
    };
    this.setState({ viewport });
  };

  render() {
    return (
      <div id="mainWrapper">
        <Container className="Map d-flex flex-wrap align-items-center align-content-center">
          <ReactMapGL
            mapboxApiAccessToken={TOKEN}
            mapStyle="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
            {...this.state.viewport}
            onViewportChange={this._onViewportChange}
          >
            <div className="nav">
              <NavigationControl
                onViewportChange={(viewport) => this.setState({ viewport })}
              />
            </div>
          </ReactMapGL>
          {/* <button onClick={this._goToAthlete}>Cyclist</button> */}
        </Container>
      </div>
    );
  }
}

export default Mapboxmain;
