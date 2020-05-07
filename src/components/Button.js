import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.children,
    };
  }
  render() {
    // onMouseOver and onMouseOut callbacks from parent -> App.js
    const { onMouseOverCallback, onMouseOutCallback } = this.props;
    return (
      <button
        type="button"
        id={this.state.id}
        onMouseOver={onMouseOverCallback}
        onMouseLeave={onMouseOutCallback}
      >
        {this.state.text}
      </button>
    );
  }
}

export default Button;
