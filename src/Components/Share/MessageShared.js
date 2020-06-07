import React, { Component } from "react";
import "./MessageShared.css";

let DStyle = {
  width: "600px",
  height: "60px",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  background: "white",

  background:
    "linear-gradient(90deg, rgba(174,40,150,0.8) 0%, rgba(131,94,194,0.7) 35%, rgba(81,155,245,0.6) 100%)",
  padding: "5px 5px 5px",
  borderRadius: "50px",
  display: " flex",
  flexDirection: "column",
  textAlign: "center",
  borderColor: "black",
};
let CB = {
  color: "#eeaeca",
  fontSize: "15px",
  position: "fixed",
};
let textStyle = {
  color: "#eeaeca",
  fontFamily: "Pacifico,cursive",
  fontSize: "25px",
  position: "fixed",
  left: "30%",
  top: "20%",
};
let x = {
  // top: "50%",
  position: "fixed",
  transform: "translate(-42%, -50%)",

  fontSize: "15px",
};
class MessegeShared extends Component {
  render() {
    let DialogBox = (
      <div style={DStyle}>
        <button className="CloseButton" onClick={this.props.onClose} style={CB}>
          <span style={x}>x</span>
        </button>
        <span style={textStyle}>{this.props.children}</span>
      </div>
    );
    if (!this.props.isOpen) {
      DialogBox = null;
    }
    return <div>{DialogBox}</div>;
  }
}
export default MessegeShared;
