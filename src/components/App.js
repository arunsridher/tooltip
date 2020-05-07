import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import ToolTip from "./ToolTip";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      rect: null,
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

  render() {
    return (
      <div>
        <div id="header">ToolTip</div>
        {/* show tooltip on mouse hover */}
        {this.state.show ? (
          <ToolTip position="left" rect={this.state.rect} />
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
