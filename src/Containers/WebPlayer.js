import React,{Component} from 'react';
import './WebPlayer.css';
// import SearchPage from "./SearchPage";
import {Switch, Route} from "react-router-dom";
import HomePageSidebar from "../Components/HomePageSidebar"
import SearchPage from '../SearchComponents/SearchPage';
import YourLibrary  from './YourLibraryPages/YourLibrary';
import YourLibraryPlaylist  from './YourLibraryPages/YourLibraryPlaylist';
import ArtistProfile from './ArtistProfile/ArtistProfile';
import HomePage from './HomePage';



class WebPlayer extends Component {

  render(){

    return (
      <div className ="web-player-class">
        
      <div className="row mx-0 no-gutters">

        <div className="side-bar-web-player">
          <HomePageSidebar/>
        </div>

        <div className="content-web-player">

          <Switch>
            <Route exact path="/webplayer/" component={HomePage}/>
            <Route path="/webplayer/search" component={SearchPage}/>
            <Route path="/webplayer/yourlibrary" component={YourLibrary}/>
            <Route path="/webplayer/HomePage" component={HomePage}/>

            {/* TODO: change the directory. this is for testing only */}
            <Route path="/webplayer/likedsongs" component={ArtistProfile}/>

          </Switch>

        </div>



      </div>
      </div>
      
    );


  }
  
}

export default WebPlayer;

