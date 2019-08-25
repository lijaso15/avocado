import React from "react";

interface DescriptionProps {
  description: string;
  username: string;
}

class Description extends React.Component<DescriptionProps> {
  render() {
    let { description, username } = this.props;
    return (
      <article
        className="media"
        style={{
          borderBottomColor: "#f5f5f5",
          borderBottomWidth: "2px",
          height: "18vh",
          overflow: "scroll"
        }}
      >
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{username}</strong>
              <br></br>
              {description}
            </p>
          </div>
        </div>
      </article>
    );
  }
}
export default Description;
