import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "" }}
      className="jumbotron"
    >
      <img src="./googlelogo.png" alt="google-logo" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;