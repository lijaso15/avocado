import React from "react";
import { setUserCards, setUserCard } from "../../actions";
import { connect } from "react-redux";
import EmptyCard from "./EmptyCard";

export type data = {
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
  active: boolean;
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
    if (!this.props.active) {
      return <EmptyCard username={this.props.username} />;
    }

    return (
      <div
        className="column is-one-third"
        style={{
          borderStyle: "groove"
        }}
        onClick={this.handleClick}
      >
        <figure id="info" className="image container" style={{ width: "100%" }}>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "hsl(0, 0%, 96%)",
              zIndex: 99
            }}
            className="subtitle"
          >
            {this.props.username}
          </span>
          {!(this.props.username === "Joojoo") && (
            <span
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 99,
                textDecoration: "underline"
              }}
              className="subtitle"
            >
              <span
                style={{
                  height: "20px",
                  width: "20px",
                  backgroundColor: "#23d160",
                  borderRadius: "50%",
                  display: "inline-block"
                }}
              ></span>
              {"  "}online
            </span>
          )}
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

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.Unlocked.users.includes(ownProps.username)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setViewing: viewing => dispatch(setUserCards("VIEWING", viewing)),
    setCurrentlyViewing: data =>
      dispatch(setUserCard("CURRENTLY_VIEWING", data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);
