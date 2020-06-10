
import React, { Component } from "react";
import ReactNotifications from 'react-notifications-component'
import './SearchBoxNotificationHist.css'
import SearchBoxNotificationHist from './SearchBoxNotificationHist'
import NotificationHistoryList from './NotificationHistoryList'
import { Link } from "react-router-dom";

import {BASEURL} from "../../Constants/baseURL";
/** Class NotificationHistory
 * @category NotificationHistory
 * @extends Component
 */
class NotificationHistory extends Component {
  constructor() {
    super();
    this.state = {
  /**Object of notification history - array of notifications
   * @memberof NotificationHistory
   * @type {Array<NotificationHistory>}
   */

      notifications: [],

    /**Object of notification history - searched word
   * @memberof NotificationHistory
   * @type {string}
   */  
      searchfield:''
    };
  }
  
  /**Function for setting state on rendering and getting notification history
   * @memberof NotificationHistory
   * @func componentDidMount
   */
  

  componentDidMount() {

    let theurl= BASEURL+ "notifications/recent"

    fetch(theurl)
      .then(Response => Response.json())
      .then(users => this.setState({ notifications: users }));
  }

      /**event, when the text change in the search box, the searchfield value changes
   * @memberof NotificationHistory
   * @func NotificationHistory
   */
     
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value })  
      }
  render() {

      /**Function for filtering the searched notificatoin and handeling the lowecase/upper case situation
   * @memberof NotificationHistory
   * @func NotificationHistory
   */
        const filteredNotiHistory=this.state.notifications.filter(
          notifications=>{
            return notifications.username.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
          }
        )
    return (
          <div>
          <SearchBoxNotificationHist searchChange={this.onSearchChange} />
          <NotificationHistoryList notifications={filteredNotiHistory}/>

          <div>
          <ReactNotifications/>
          <div>
            <Link  to="/webplayer/PopUp/" className='seeAll'>PopUpPage</Link>

          </div>
          </div>
          </div>


    );
  }
}

export default NotificationHistory;

