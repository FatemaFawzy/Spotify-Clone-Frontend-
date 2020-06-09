import React,{Component} from 'react';
import './ArtistWebPlayer.css';
// import SearchPage from "./SearchPage";
import {Switch, Route} from "react-router-dom";
import ArtistSidebar from "../ArtistAccount/ArtistSideBar";
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
import { ArtistHomePage } from './ArtistHomePage';
import ArtistSongs from "./ArtistSongs";
import { ArtistAlbums } from './ArtistAlbums';
import ArtistInformation from './ArtistInformation';
import EditArtistInformation from './EditArtistInformation';
import { AddAlbum } from './AddAlbum';
import {AddSong} from './AddSong';


var isPremium=false;


class ArtistWebPlayer extends Component {

  render(){

    return (
      <div className ="web-player-class1">
        <div id="blur">
        <div id="blur-add-to-playlist">
        <div className="row mx-0 no-gutters" >

          <div className="side-bar-web-player">
            <ArtistSidebar/>
          </div>

          <div className="content-web-player">

         <Switch>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/" component={ArtistHomePage}/>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/MySongs" component={ArtistSongs}/>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/MyAlbums" component={ArtistAlbums}/>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/MyInfo" component={ArtistInformation}/>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/MyInfo/EditMyInfo" component={EditArtistInformation}/>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/AddAlbum" component={AddAlbum}/>
          <Route exact path="/ArtistAccount/ArtistWebPlayer/AddSong" component={AddSong}/>
         </Switch>
            

           

          </div>


        </div>

        
        </div>
        <AddToPlaylist/>
        </div>
        <CreatePlaylist/> 
      </div>
      
    );


  }
  
}

export default ArtistWebPlayer;

