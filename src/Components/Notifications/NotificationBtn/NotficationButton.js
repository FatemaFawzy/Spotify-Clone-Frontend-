import React, { Component } from "react";
// import NotificationList from "../../Components/Notifications/NotificationList"
import NotificationList from "../NotificationList"
import "./NotificationButton.css";
import { Link } from "react-router-dom";
import {BASEURL}  from '../../../Components/../Constants/baseURL'
/** Class NotificationButton
 * @category NotificationButton
 * @extends Component
 */

class NotificationButton extends Component {
  constructor() {
    super();
    this.state = {

      /**Object of notification- array of 3 newest notifications
   * @memberof NotificationButton
   * @type {Array<notifications>}
   */  
      notifications: [],
    };
  }

  /**Function for setting state on rendering and getting notification history
   * @memberof NotificationButton
   * @func componentDidMount
   */
  
  componentDidMount() {
    let theurl= BASEURL+ "notifications/recent"


    fetch(theurl)
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
