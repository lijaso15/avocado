import React from "react";
import Dot from "./Dot";

interface DotsProps {
  numSlides: number;
  position: number;
}

class Dots extends React.Component<DotsProps> {
  render() {
    let { numSlides, position } = this.props;
    let arr = [...Array(numSlides).keys()];

    return (
      <div
        style={{
          position: "absolute",
          top: "60vh",
          left: String(50 - numSlides) + "%"
        }}
      >
        {arr.map(i => (
          <Dot active={i === position} key={i} />
        ))}
      </div>
    );
  }
}

export default Dots;
