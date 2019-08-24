import React from "react";

class EmptyCard extends React.Component {
  render() {
    return (
      <div
        className="column is-one-third"
        style={{
          borderStyle: "groove",
          backgroundColor: "darkgrey"
        }}
      >
        <figure id="info" className="image container" style={{ width: "100%" }}>
          <div className="image is-square"></div>
        </figure>
      </div>
    );
  }
}

export default EmptyCard;
