
import React, { Component } from "react";
import ReactNotifications from 'react-notifications-component'
import './SearchBoxNotificationHist.css'
import SearchBoxNotificationHist from './SearchBoxNotificationHist'
import NotificationHistoryList from './NotificationHistoryList'
import { Link } from "react-router-dom";


class NotificationHistory extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
      searchfield:''
    };
  }

  componentDidMount() {
    fetch("http://spotifyclone.mocklab.io/notifications/recent")
      .then(Response => Response.json())
      .then(users => this.setState({ notifications: users }));
  }

  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value })  
      }
  render() {
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

