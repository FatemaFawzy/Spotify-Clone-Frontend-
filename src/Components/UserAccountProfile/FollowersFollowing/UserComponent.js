import React, { Component } from "react";
import "./UserComponent.css"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../../Store/actions";

/** Class UserComponent that displays the image and name of a certain user and links to their profile.
 * @category UserComponent
 * @extends Component
 */
export class UserComponent extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.onProfileClicked(this.props.id);
          this.props.history.push("/webplayer/user/" + this.props.name);
        }}
        className="user-component-class">
        <img src={this.props.image} />
        <h5>{this.props.name}</h5>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProfileClicked: (itemID) => dispatch({ type: actionTypes.SELECT_PROFILE, value: itemID })

  };

};
export default connect(null, mapDispatchToProps)(withRouter(UserComponent));