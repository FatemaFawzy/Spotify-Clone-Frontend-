import React, { Component } from "react";

import MessageShared from "./MessageShared";

let shareButton = {
  borderRadius: "100%",
  fontSize: "13px",
  backgroundColor: "black",
  borderColor: "black",
};
let shareIcon = {
  color: "#cecece",
  fontSize: "13px",
  fontStyle: "bold",
};
class ShareBox extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <div>
        <div>
          <button
            onClick={(e) => this.setState({ isOpen: true })}
            style={shareButton}
          >
            <i class="fas fa-external-link-alt" style={shareIcon}></i>
          </button>
          <MessageShared
            isOpen={this.state.isOpen}
            onClose={(e) => this.setState({ isOpen: false })}
          >
            https://www.hello.com
          </MessageShared>
        </div>
      </div>
    );
  }
}
export default ShareBox;
