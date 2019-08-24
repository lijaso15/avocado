import React from "react";

class Description extends React.Component {
  render() {
    return (
      <article
        className="media"
        style={{
          maxHeight: "40vh",
          borderBottomColor: "#f5f5f5",
          borderBottomWidth: "2px"
        }}
      >
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Description;
