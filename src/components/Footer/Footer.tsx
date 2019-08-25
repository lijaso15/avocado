import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { setUserCards } from "../../actions";

interface FooterProps {
  tokens: number;
  setViewing(viewing: boolean): any;
}

class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <div className="hero-foot has-background-light">
        <div className="container">
          <nav className="tabs is-boxed is-fullwidth">
            <ul>
              <li onClick={() => this.props.setViewing(true)}>
                <a data-tip="HOME" data-for="Footer">
                  {" "}
                  <FontAwesomeIcon icon="home" />{" "}
                </a>
              </li>
              <li>
                <a data-tip="MESSAGES" data-for="Footer">
                  <FontAwesomeIcon icon="comment-dots" />
                </a>
              </li>
              <li>
                <a
                  data-tip={this.props.tokens + "  REMAINING HAMMI-COINS"}
                  data-for="Footer"
                >
                  <FontAwesomeIcon icon="coins" />{" "}
                </a>
              </li>
              <li>
                <a data-tip="STORIES" data-for="Footer">
                  <FontAwesomeIcon icon="book-reader" />{" "}
                </a>
              </li>
              <li>
                <a data-tip="SETTINGS" data-for="Footer">
                  <FontAwesomeIcon icon="cog" />{" "}
                </a>
              </li>
            </ul>
            <ReactTooltip id="Footer" place="top" type="dark" effect="float" />
          </nav>
        </div>
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
    setViewing: viewing => dispatch(setUserCards("VIEWING", viewing))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
