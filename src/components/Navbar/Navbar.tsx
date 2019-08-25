import React from "react";
import ReactTooltip from "react-tooltip";

const Navbar = () => {
  return (
    <div className="hero-head">
      <nav className="navbar has-background-light">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={process.env.PUBLIC_URL + "/favicon.ico"} alt="Logo" />
            <strong> HAMMI</strong>
          </a>
          <ReactTooltip place="top" type="dark" effect="float" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
