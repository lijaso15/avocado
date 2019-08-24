import React from "react";
import { setSlideshow } from "../../../../actions";
import { connect } from "react-redux";

interface DotProps {
  active: boolean;
  setSlide(key: number): any;
  key: number;
}

class Dot extends React.Component<DotProps> {
  render() {
    let { key, setSlide } = this.props;
    console.log(key);

    return (
      <span
        style={{
          height: "1em",
          width: "1em",
          backgroundColor: this.props.active ? "lightgrey" : "grey",
          borderRadius: "50%",
          display: "inline-block"
        }}
        onClick={setSlide(key)}
      ></span>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSlide: key => dispatch(setSlideshow("POSITION", key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dot);
