import React, { Component } from "react";
import "./Tooltip.css";

class ToolTip extends Component {
  constructor(props) {
    super(props);
    // current element reference
    this.wrapper = React.createRef();
    this.state = { x: 0, y: 0, offset: 10 };
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   const styles = getComputedStyle(this.wrapper.current);
  //   console.log(styles.tooltipWidth);
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  // this method calculates the position of tooltip based on the position specified by the parent -> App.js
  getStyle = (position, x, y, width, height) => {
    let style = {
      left: 0,
      top: 0,
    };
    let offset = this.state.offset;
    switch (position) {
      case "top":
        style.left = x;
        style.top = y - height - offset;
        break;
      case "right":
        style.left = x + width + offset;
        style.top = y;
        break;
      case "bottom":
        style.left = x;
        style.top = y + height + offset;
        break;
      case "left":
        style.left = x - width - offset;
        style.top = y;
        break;
      default:
    }
    return style;
  };

  render() {
    // get button bounding rectangle and position from props
    const { rect, position } = this.props;
    // calculate tooltip position
    let style = this.getStyle(
      position,
      rect.x,
      rect.y,
      rect.width,
      rect.height
    );
    return (
      <div ref={this.wrapper} className="tooltip" style={style}>
        <div className="tooltip-text">HoverMe Tooltip</div>
      </div>
    );
  }
}

export default ToolTip;
