import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Dislike extends React.Component {
  render() {
    return (
      <div className="delete ">
        <FontAwesomeIcon icon="times-circle" />
      </div>
    );
  }
}

export default Dislike;
