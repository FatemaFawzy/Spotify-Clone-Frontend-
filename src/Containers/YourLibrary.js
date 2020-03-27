import React,{Component} from 'react';
import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";
import HomePageSidebar from "../Components/HomePageSidebar"
import YourLibraryPlaylist from "./YourLibraryPlaylist";
import YourLibraryArtist from "./YourLibraryArtist";
import YourLibraryAlbum from "./YourLibraryAlbum";
import YourLibraryNavbar from "../Components/YourLibraryNavbar";


class YourLibrary extends Component {

  render(){

    return (
      <div className ="your-library-class">
        <Router>
        <Switch>
            <Route exact path="/webplayer/yourlibrary/" component={YourLibraryPlaylist}/>
            <Route path="/webplayer/yourlibrary/artist" component={YourLibraryArtist}/>
            <Route path="/webplayer/yourlibrary/album" component={YourLibraryAlbum}/>
          </Switch>
          </Router>

      </div>
      
    );


  }
  
}

export default YourLibrary;

