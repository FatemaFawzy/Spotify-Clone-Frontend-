import React, { Component } from "react";
// import NotificationList from "../../Components/Notifications/NotificationList"
import NotificationList from "../NotificationList"
import "./NotificationButton.css";
import { Link } from "react-router-dom";



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
      <div class="notificationBox">
        <div class="notification">
          <i class="fas fa-bell"></i>
          <span class="num">3</span>
 
          <div className="whatever">
            <NotificationList notifications={this.state.notifications} />
            <Link  to="/webplayer/NotificationHistory/" className='seeAll'>More</Link>

          </div>


        </div>

      </div>
    );
  }
}

export default NotificationButton;
