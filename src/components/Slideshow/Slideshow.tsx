import React from "react";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Description from "./Description";
import Dots from "./Dots";
import { connect } from "react-redux";
import LikeDislike from "./LikeDislike";
import { data } from "../UserCard/UserCard";

interface SlideshowProps {
  position: number;
  data: data;
  active: boolean;
}

class Slideshow extends React.Component<SlideshowProps> {
  render() {
    let { position, data, active } = this.props;
    if (!active) {
      return null;
    }
    return (
      <div className="columns is-desktop is-centered">
        <Arrow isLeft={true} />
        <div className="column is-half">
          <Slide photo={data.photos[position]} />
          <Dots numSlides={data.photos.length} position={position} />
          <div className="box">
            <Description
              description={data.description}
              username={data.username}
            />
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
    position: state.Slideshow.position,
    data: state.UserCard,
    active: !state.UserCards.isViewing
  };
};

export default connect(mapStateToProps)(Slideshow);
