import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePageSidebar from "../../Components/HomePageSidebar"
import YourLibraryPlaylist from "./YourLibraryPlaylist";
import YourLibraryArtist from "./YourLibraryArtist";
import YourLibraryAlbum from "./YourLibraryAlbum";
import YourLibraryNavbar from "../../Components/YourLibraryNavbar";
import "./YourLibrary.css";


class YourLibrary extends Component {

  render() {

    return (
      <div className="your-library-class">
        <YourLibraryNavbar image="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" />

        <div className="all-your-library-content">


          <Switch>
            <Route exact path="/webplayer/yourlibrary/" component={YourLibraryPlaylist} />
            <Route path="/webplayer/yourlibrary/artist" component={YourLibraryArtist} />
            <Route path="/webplayer/yourlibrary/album" component={YourLibraryAlbum} />
          </Switch>

        </div>


      </div>

    );


  }

}

export default YourLibrary;