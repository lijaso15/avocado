import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ReactComponent as Heart } from "../../../../assets/heart.svg";

class Like extends React.Component {
  render() {
    return (
      <div
        className="media-right button is-rounded is-size-5"
        style={{
          color: "red"
        }}
      >
        <FontAwesomeIcon icon="heart" />
        {/* <Heart /> */}
      </div>
    );
  }
}

export default Like;
