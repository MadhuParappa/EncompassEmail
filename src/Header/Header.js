import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="#">
          <img src="/Images/CompanyLogo.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
            <b>Encompass core</b><span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              <b>Email</b>
            </a>
            <a className="nav-item nav-link" href="#">
              <b>Online giving</b>
            </a>
          </div>
        </div>
        <div style={{float:"right"}}>
            <b>Loggedin User:</b> <span style={{color:"green"}}>Madhu Parappa</span> |
        </div>
        <div style={{float:"right",paddingLeft:10}}>
            <a href="#">Logout</a>
        </div>
      </nav>
    );
  }
}

export default Header;
