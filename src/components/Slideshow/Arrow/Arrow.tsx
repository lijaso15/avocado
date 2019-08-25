import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setSlideshow } from "../../../actions";
import { connect } from "react-redux";

interface ArrowsProps {
  isLeft: boolean;
  setSlide(key: number): any;
  position: number;
  numSlides: number;
}

interface ArrowsState {
  isHovered: boolean;
}

class Arrow extends React.Component<ArrowsProps, ArrowsState> {
  constructor(props: ArrowsProps) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isHovered: false
    };
  }

  handleHover(hovered: boolean) {
    this.setState({
      isHovered: hovered
    });
  }

  handleClick() {
    let { isLeft, setSlide, position, numSlides } = this.props;
    if (isLeft && position > 0) {
      setSlide(position - 1);
      return;
    } else if (!isLeft && position < numSlides - 1) {
      setSlide(position + 1);
    }
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
        onClick={this.handleClick}
      >
        <FontAwesomeIcon icon={isLeft ? "chevron-left" : "chevron-right"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    position: state.Slideshow.position,
    numSlides: state.UserCard.photos.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSlide: key => dispatch(setSlideshow("POSITION", key))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arrow);
