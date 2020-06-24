import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePageSidebar from "@/Components/HomePage/HomePageSidebar"
import YourLibraryPlaylist from "./YourLibraryPlaylist";
import YourLibraryArtist from "./YourLibraryArtist";
import YourLibraryAlbum from "./YourLibraryAlbum";
import YourLibraryNavbar from "@/Components/YourLibraryComponents/YourLibraryNavbar";
import "./YourLibrary.css";

/** Class YourLibrary
 * @extends Component
 */
export class YourLibrary extends Component {

  render() {

    return (
      <div className="your-library-class">
        
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