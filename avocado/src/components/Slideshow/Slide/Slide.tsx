import React from "react";

class Slide extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/43/6a/f9/436af91fd180638a1f2b345f4b720d80.jpg")'
        }}
      >
        <img
          style={{
            height: "60vh",
            width: "100%",
            objectFit: "contain"
          }}
          src="https://i.pinimg.com/736x/43/6a/f9/436af91fd180638a1f2b345f4b720d80.jpg"
        />
      </div>
    );
  }
}

export default Slide;
