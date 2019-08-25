import React from "react";
import { connect } from "react-redux";
import { setSlideshow } from "../../../actions";

interface SlideProps {
  photo: string;
  position: number;
  numSlides: number;
  setSlide(key: number): any;
}

class Slide extends React.Component<SlideProps> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { setSlide, position, numSlides } = this.props;
    if (position < numSlides - 1) {
      setSlide(position + 1);
    }
  }

  render() {
    let { photo } = this.props;
    return (
      <div style={{}} onClick={this.handleClick}>
        <img
          style={{
            height: "53vh",
            width: "100%",
            objectFit: "cover"
          }}
          src={photo}
        />
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
)(Slide);
