import React, { Component } from "react";
// import NotificationList from "../../Components/Notifications/NotificationList"
import NotificationList from "../NotificationList"
import "./NotificationButton.css";
// import "./App.css";
class NotificationButton extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => {
        this.setState({ notifications: users });
      });
  }

  render() {
    return (
      <div class="box">
        <div class="notification">
          <i class="fas fa-bell"></i>
          <span class="num">4</span>

          <div className="whatever">
            <NotificationList notifications={this.state.notifications} />
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationButton;
