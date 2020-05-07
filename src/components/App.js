import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import ToolTip from "./ToolTip";

const POSITION = ["top", "left", "right", "bottom"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      rect: null,
      position: "top",
    };
  }

  // callback for mover hover out
  handleOnMouseOut = (evt) => {
    console.log("mouse out");
    this.setState({ show: false, rect: null });
  };

  // call for moue hover
  handleOnMouseOver = (evt) => {
    let element = evt.currentTarget;

    // get the button elements bounding rectangle
    if (element != null) {
      let rect = element.getBoundingClientRect();
      console.log(rect);
      this.setState({ show: true, rect: rect });
    }
  };

  updatePosition = () => {
    this.setState({ position: document.getElementById("position").value });
  };

  render() {
    return (
      <div>
        <div id="header">ToolTip</div>
        <div id="position-container">
          <label htmlFor="position">Position </label>
          <select
            id="position"
            defaultValue="this.state.position"
            onChange={this.updatePosition}
          >
            <option value="top">top</option>
            <option value="right">right</option>
            <option value="bottom">bottom</option>
            <option value="left">left</option>
          </select>
        </div>
        {/* show tooltip on mouse hover */}
        {this.state.show ? (
          <ToolTip position={this.state.position} rect={this.state.rect} />
        ) : null}
        <Button
          id="btn"
          onMouseOverCallback={this.handleOnMouseOver}
          onMouseOutCallback={this.handleOnMouseOut}
        >
          Hover Me!
        </Button>
      </div>
    );
  }
}

export default App;
