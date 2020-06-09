
import React, { Component } from "react";
import ArtistFollowed from '../../Components/Notifications/PopUp/ArtistFollowed'
import ReactNotifications from 'react-notifications-component'
import GeneratedPlaylist from '../../Components/Notifications/PopUp/GeneratedPlaylist'
import NewSongAdded from '../../Components/Notifications/PopUp/NewSongAdded'
const NotificationHistory =()=>{
  return(
    <div>
      <ReactNotifications/>

      <NewSongAdded/>
      <GeneratedPlaylist/>
    </div>
  )
}

export default NotificationHistory;
