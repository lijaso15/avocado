import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ReactComponent as Heart } from "../../../../assets/heart.svg";

class Like extends React.Component {
  render() {
    return (
      <div
        className="media-right"
        style={{
          fontSize: "3rem",
          cursor: "pointer"
        }}
        data-tip="MESSAGES"
        data-for="Footer"
      >
        <FontAwesomeIcon icon="comment-dots" />
      </div>
    );
  }
}

export default Like;
