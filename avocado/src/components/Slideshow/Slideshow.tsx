import React from "react";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Description from "./Description";
import Dots from "./Dots";
import { connect } from "react-redux";
import LikeDislike from "./LikeDislike";

interface SlideshowProps {
  position: number;
}

class Slideshow extends React.Component<SlideshowProps> {
  render() {
    let { position } = this.props;
    return (
      <div className="columns is-desktop is-centered">
        <Arrow isLeft={true} />
        <div className="column is-half">
          <Slide />
          <Dots numSlides={4} position={position} />
          <div className="box">
            <Description />
            <LikeDislike />
          </div>
        </div>
        <Arrow isLeft={false} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    position: state.Slideshow.position
  };
};

export default connect(mapStateToProps)(Slideshow);
