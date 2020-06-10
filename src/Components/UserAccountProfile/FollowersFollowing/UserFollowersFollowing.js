import React, { Component } from "react";
import "./UserFollowersFollowing.css";
import { NavLink } from "react-router-dom";
import ListOfUsers from "./ListOfUsers";
import { Route, Switch, Redirect } from "react-router-dom";
import { BASEURL } from "../../../Constants/baseURL";

/** Class UserFollowersFollowing. A page that displays the list of followers/following of a certain user
 * @category UserFollowersFollowing
 * @extends Component
 */
class UserFollowersFollowing extends Component {

  state = {
    followers: [],
    following: [],
  }

  componentDidMount() {
    const url = BASEURL + "users/followlist";

    const requestOptions = {
      method: 'GET',
      headers: { 'x-auth': this.props.passedToken },
    };

    try {
      fetch(url, requestOptions)
        .then((response) => {

          return response.json();

        })
        .then((data) => {
          this.setState({
            followers: data.followers,
            following: data.following
          })

        })
        .catch(function (error) {
          console.log('There has been a problem with your fetch operation: ',
            error.message);
        })
    }
    catch (error) {
      console(error);
    }
  }

  render() {
    return (
      <div className="users-followers-following-class">
        <div className="row container-fluid">

          <div className="col-6">
            <NavLink to="/account/userfollowersfollowing/followers" >
              {this.state.followers.length} Followers
             </NavLink>
          </div>

          <div className="col-6">
            <NavLink to="/account/userfollowersfollowing/following" >
              {this.state.following.length} Following
             </NavLink>
          </div>

        </div>
        <Switch>
          <Route path="/account/userfollowersfollowing/followers" render={(props) => <ListOfUsers {...props}
            users={this.state.followers} />} />
          <Route path="/account/userfollowersfollowing/following" render={(props) => <ListOfUsers {...props}
            users={this.state.following} />} />
          <Redirect to="/account/userfollowersfollowing/followers" />
        </Switch>
      </div>
    )
  }
}

export default UserFollowersFollowing;