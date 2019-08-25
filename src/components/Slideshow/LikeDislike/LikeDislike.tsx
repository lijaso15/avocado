import React from "react";
import Like from "./Like";
import Dislike from "./Dislike";

class LikeDislike extends React.Component {
  render() {
    return (
      <article className="media">
        <Dislike />
        <div className="media-content"></div>
        <Like />
      </article>
    );
  }
}

export default LikeDislike;
