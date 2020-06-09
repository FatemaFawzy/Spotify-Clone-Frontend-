import React,{Component} from 'react';
import './WebPlayer.css';
// import SearchPage from "./SearchPage";
import {Switch, Route} from "react-router-dom";
import HomePageSidebar from "../../Components/HomePage/HomePageSidebar";
import SearchPage from "../../Components/SearchComponents/SearchPage";
import YourLibrary  from '../YourLibraryPages/YourLibrary';
import YourLibraryPlaylist  from '../YourLibraryPages/YourLibraryPlaylist';
import ArtistProfile from '../ArtistProfile/ArtistProfile';
import MusicBar from "../../Components/MusicBar/MusicBar"
import HomePage from '../HomePage/HomePage';
import PlaylistPage from '../../Components/PlaylistsComponent/PlaylistPage';
import CreatePlaylist from '../../Components/PlaylistsComponent/CreatePlaylist';
import AlbumPage from '../../Components/AlbumComponent/AlbumPage';
import AccountLayout from '../UserAccountProfile/AccountLayout';
import welcomePage from '../WelcomePage/welcomePage';
import OtherUser from '../OtherUserPage/OtherUser';
import LikedSongs from '../../Components/LikedSongs/LikedSongs';
import AddToPlaylist from '../../Components/PlaylistsComponent/AddToPlaylist';
import SeeAllArtists from '../../Containers/HomePage/SeeAllArtists';
import SeeAllPlaylists from '../../Containers/HomePage/SeeAllPlaylists';
import SeeAllMadeForYou from '../../Containers/HomePage/SeeAllMadeForYou';
import SeeAllRecentlyPlayed from '../../Containers/HomePage/SeeAllRecentlyPlayed';
import AdsBar from "../../Components/Ads/AdsBar";
import NotificationHistory from '../../Components/NotificationHistory/NotificationHistory'
var isPremium=false;


class WebPlayer extends Component {

  render(){

    return (
      <div className ="web-player-class">
        <div id="blur">
        <div id="blur-add-to-playlist">
        <div className="row mx-0 no-gutters" >

          <div className="side-bar-web-player">
            <HomePageSidebar/>
          </div>

          <div className="content-web-player">

          <Switch>
            <Route exact path="/webplayer/" component={HomePage}/>
            <Route path="/webplayer/search" component={SearchPage}/>
            <Route path="/webplayer/yourlibrary" component={YourLibrary}/>
            <Route exact path="/webplayer/HomePage" component={HomePage}/>
            <Route  path="/webplayer/NotificationHistory/" component={NotificationHistory}/>

              {/* TODO: change the directory. this is for testing only */}
              <Route path="/webplayer/likedsongs" component={LikedSongs}/>
              <Route path="/webplayer/album" component={AlbumPage}/>
              <Route path="/webplayer/playlist" component={PlaylistPage}/>
              <Route path="/webplayer/user" component={OtherUser}/>
              <Route path="/webplayer/artistprofile" component={ArtistProfile}/>
              <Route path="/webplayer/HomePage/seeallartists" component={SeeAllArtists}/>
              <Route path="/webplayer/HomePage/seeallplaylists" component={SeeAllPlaylists}/>
              <Route path="/webplayer/HomePage/seeallMadeForYou" component={SeeAllMadeForYou}/>
              <Route path="/webplayer/HomePage/seeallrecentlyplayed" component={SeeAllRecentlyPlayed}/>

            </Switch>

            {!isPremium&&<AdsBar/>}

          </div>


        </div>

        <footer className="music-bar-footer">
          <MusicBar></MusicBar>
        </footer>
        </div>
        <AddToPlaylist/>
        </div>
        <CreatePlaylist/> 
      </div>
      
    );


  }
  
}

export default WebPlayer;

