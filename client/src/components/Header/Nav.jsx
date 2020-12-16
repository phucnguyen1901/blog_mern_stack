import React from "react";
import "./Nav.scss";
import PropTypes from "prop-types";

Nav.propTypes = { checkNavbar: PropTypes.bool };
Nav.defaultProps = { checkNavbar: false };

function Nav(props) {
  const { checkNavbar } = props;

  return (
    <div id="bg-header">
      <div
        id="wrap-navigation"
        className={`navigation ${checkNavbar ? "navigation-scroll" : ""}`}
      >
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="/" className="navbar-brand">
            <img id="logo" src="/images/logo.png" alt="" />
          </a>
          <button
            style={{ background: "white" }}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/#content" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/me#me" className="nav-link">
                  Me
                </a>
              </li>
              <li className="nav-item">
                <a href="/create#create" className="nav-link">
                  Create Article
                </a>
              </li>
              <li className="nav-item">
                <a href="/delete#delete" className="nav-link">
                  Delete Article
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <img id="img-header" src="/images/bg-header.jpg" alt="" />
      <div id="content-bg">
        Blog
        <br />
        Phuc Nguyen
        <br />
        <a id="btn-let-go" href="/#content">
          Let's go
        </a>
      </div>
    </div>
  );
}

export default Nav;
