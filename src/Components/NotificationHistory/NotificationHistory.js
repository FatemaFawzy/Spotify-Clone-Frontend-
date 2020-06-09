
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(users => this.setState({ notifications: users }));
  }

  // onSearchChange=(event)=>{
  //   this.setState({searchfield:event.target.value})
  // }
  render() {
    // const filteredNotiHistory=this.state.notifications.filter(
    //     notifications=>{
    //       return notifications.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    //     })
    return (
          <div>
          <SearchBoxNotificationHist/>

          {/* <SearchBoxNotificationHist searcChange={this.onSearchChange} /> */}

          {/* <NotificationHistoryList notifications={filteredNotiHistory}/> */}
          <NotificationHistoryList notifications={this.state.notifications}/>

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

