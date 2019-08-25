import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { setUserCards } from "../../../../actions";
import ReactTooltip from "react-tooltip";

interface ReturnProps {
  setViewing(viewing: boolean): any;
}

class Dislike extends React.Component<ReturnProps> {
  render() {
    return (
      <div className="navbar-item">
        <a
          data-tip="return"
          data-for="return"
          className="button is-primary is-rounded is-size-4"
          onClick={() => {
            this.props.setViewing(true);
          }}
        >
          <FontAwesomeIcon icon="arrow-left" size="lg" />
        </a>
        <ReactTooltip id="return" place="left" type="success" effect="float" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setViewing: viewing => dispatch(setUserCards("VIEWING", viewing))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dislike);
