import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ArrowsProps {
  isLeft: boolean;
}

interface ArrowsState {
  isHovered: boolean;
}

class Arrow extends React.Component<ArrowsProps, ArrowsState> {
  constructor(props: ArrowsProps) {
    super(props);

    this.handleHover = this.handleHover.bind(this);

    this.state = {
      isHovered: false
    };
  }

  handleHover(hovered: boolean) {
    this.setState({
      isHovered: hovered
    });
  }

  render() {
    let { isLeft } = this.props;

    return (
      <div
        className={
          isLeft
            ? "column is-size-1 has-text-left"
            : "column is-size-1 has-text-right"
        }
        style={{
          background: this.state.isHovered
            ? isLeft
              ? "linear-gradient(to left, #ffffff 0%, grey 100%)"
              : "linear-gradient(to right, #ffffff 0%, grey 100%)"
            : "",
          paddingTop: "50vh",
          color: this.state.isHovered ? "white" : ""
        }}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        <FontAwesomeIcon icon={isLeft ? "chevron-left" : "chevron-right"} />
      </div>
    );
  }
}

export default Arrow;
