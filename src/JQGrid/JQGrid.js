import React from "react";

class JQGrid extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="p-4"></div>
          <div className="row">
            <div style={{ float: "left" }}>
              <b style={{ color: "GrayText" }}>Search:</b>
            </div>
            <div style={{ float: "left", paddingLeft: "10px" }}>
              <input
                type="text"
                className="form-control center"
                size="40"
                placeholder="Search here..."
              />
            </div>
            <div style={{ float: "left", paddingLeft: "10px" }}>
              <button type="button" className="btn btn-warning" style={{width:"100px"}}>
                <b>Search</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JQGrid;
