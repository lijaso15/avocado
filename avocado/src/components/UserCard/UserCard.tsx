import React from "react";
import { setUserCards, setUserCard } from "../../actions";
import { connect } from "react-redux";

type data = {
  photos: string[];
  username: string;
  description: string;
};

interface UserCardProps {
  setViewing(viewing: boolean): any;
  setCurrentlyViewing(data: data): any;
  photos: string[];
  username: string;
  description: string;
}

class UserCard extends React.Component<UserCardProps> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let {
      setViewing,
      setCurrentlyViewing,
      photos,
      username,
      description
    } = this.props;
    setViewing(false);
    setCurrentlyViewing({
      photos,
      username,
      description
    });
  }

  render() {
    return (
      <div
        className="column is-one-third"
        style={{
          borderStyle: "groove",
          backgroundColor: "white"
        }}
        onClick={this.handleClick}
      >
        <figure id="info" className="image container" style={{ width: "100%" }}>
          <div className="image is-square">
            <img
              src={this.props.photos[0]}
              style={{
                objectFit: "cover"
              }}
            />
          </div>
        </figure>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setViewing: viewing => dispatch(setUserCards("VIEWING", viewing)),
    setCurrentlyViewing: data =>
      dispatch(setUserCard("CURRENTLY_VIEWING", data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserCard);
