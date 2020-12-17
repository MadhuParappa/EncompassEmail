import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <nav
        className="navbar fixed-bottom navbar-light"
        style={{ background: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="#">
          <img src="/Images/CompanyLogo.png" style={{ height: "25px" }}></img>
        </a>

        <div class="search-container">
          <div style={{ float: "left" }}>
            <input
              type="email"
              size="20"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div style={{ float: "right", paddingLeft: "10px" }}>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "100px" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
