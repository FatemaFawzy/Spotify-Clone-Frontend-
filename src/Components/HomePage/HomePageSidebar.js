import React ,{ Component} from 'react';
import './HomePageSidebar.css';
import { NavLink, Link } from "react-router-dom";
import CreatePlaylist from '../PlaylistsComponent/CreatePlaylist';
import { addNewURL } from '../../HelperFunctions/History';
 

class HomePageSidebar extends Component{
  toggle()
  {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active')
    var popup=document.getElementById('popup');
    popup.classList.toggle('active')
  }

render() {
 return (

    <div className="wrapper">
      
      <div className="sidebar">
        
        <Link to="/webplayer/HomePage"><img className="logo"  src="https://i.ya-webdesign.com/images/itunes-logo-white-png-1.png" alt="logo"/></Link>
        
          <ul>
              <li><NavLink  onClick={addNewURL("/webplayer/HomePage")} className="List" to="/webplayer/HomePage/"><i className="fas fa-home"></i>Home</NavLink></li>
              <li><NavLink   className="List" to="/webplayer/search/"><i className="fas fa-search" aria-hidden="true"></i>Search</NavLink></li>
              <li><NavLink onClick={addNewURL("webplayer/yourlibrary/")} className="List" to="/webplayer/yourlibrary/"><i className="fas fa-bookmark" aria-hidden="true"></i>Your library</NavLink></li>
              <p id="Playlist">Playlists</p>
              <li><a className="List2" href="#" onClick={this.toggle}><i className="fas fa-plus-square fa-2x" aria-hidden="true"></i>Create Playlist</a></li>
              <li><NavLink  onClick={addNewURL("/webplayer/likedsongs")} className="List2" to="/webplayer/likedsongs/"><i className="fas fa-heart fa-2x" aria-hidden="true"></i>Liked Songs</NavLink></li>
              <hr/>
              <div id="my-playlist" className="my-playlists">
                <li><a className="List2" href="/webplayer/playlist">Born To die</a></li>
                <li><a className="List2" href="/webplayer/album">Perfect</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
              </div>
          </ul> 
      </div>
    
    </div>

);
}
} 

export default HomePageSidebar;