// import React from "react";
import { MdMenu } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-dark fixed-top navbar-expand-lg" id="navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler header-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <MdMenu className="toggle-btn" />
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <div className="header-end">
            <div className="icon-group align-items-center">
              <a
                className="header-icon"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Kriso3D"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
