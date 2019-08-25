import React from "react";
import { setUnlocked } from "../../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

interface EmptyCardProps {
  username?: string;
  unlock(username: string): any;
  tokens: number;
}

interface EmptyCardState {
  isHovered: boolean;
}

class EmptyCard extends React.Component<EmptyCardProps, EmptyCardState> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      isHovered: false
    };
  }

  handleClick() {
    if (this.props.username && this.props.tokens > 0) {
      this.props.unlock(this.props.username);
    }
  }

  handleHover(hovered: boolean) {
    this.setState({
      isHovered: hovered
    });
  }
  render() {
    return (
      <div
        className="column is-one-third"
        style={{
          borderStyle: "groove",
          backgroundColor: "darkgrey"
        }}
        onClick={this.handleClick}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        <figure id="info" className="image container" style={{ width: "100%" }}>
          <div className="image is-square">
            {this.props.username &&
              this.state.isHovered && [
                <div data-tip="SPEND 1 HAMMI-COIN TO UNLOCK" data-for="Footer">
                  <FontAwesomeIcon
                    icon="lock-open"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      cursor: "pointer"
                    }}
                    size="lg"
                  />
                </div>,
                <ReactTooltip
                  id="Footer"
                  place="top"
                  type="dark"
                  effect="float"
                />
              ]}
          </div>
        </figure>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokens: state.Unlocked.tokens
  };
};

const mapDispatchToProps = dispatch => {
  return {
    unlock: username => dispatch(setUnlocked(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmptyCard);
