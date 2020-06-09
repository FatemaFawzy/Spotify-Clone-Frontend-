
import React from "react";
import GeneratedPlayList from './GeneratedPlaylist'
import NewSongAdded from './NewSongAdded'
import ReactNotifications from 'react-notifications-component'
const PopUpPage =()=> {
     return (
          <div>
            <ReactNotifications/>
           <GeneratedPlayList/>
           <NewSongAdded/>
          </div>


    );
  }

export default PopUpPage;

