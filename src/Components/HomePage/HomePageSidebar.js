import React ,{ Component} from 'react';
import './HomePageSidebar.css';
import { NavLink, Link } from "react-router-dom";
import CreatePlaylist from '../PlaylistsComponent/CreatePlaylist';
import { addNewURL } from '../../HelperFunctions/History';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actionTypes from "../../Store/actions";
 
/** Class HomepageSidebar 
 * @category HomePage
 * @extends Component
 */
export class HomePageSidebar extends Component{
  constructor(props){
    super(props);
    this.state = {
    /**Array of playlists in the bottom
   * @memberof HomePageSidebar
   * @type {Array<playlist>}
   */
    playlistArray:[],
     /**Array of playlists to be show cased
   * @memberof HomePageSidebar
   * @type {Array<playlist>}
   */
    total:"",
    }
  }
   /**A function to show the popping area for creating a new playlist
   * @memberof HomePageSidebar
   * @func toggle
   */
  toggle()
  {
  /**A function to show the popping area for creating a new playlist
   * @memberof HomePageSidebar
   * @var blur
   */
    var blur=document.getElementById('blur');
    blur.classList.toggle('active')
      /**A function to show the popping area for creating a new playlist
   * @memberof HomePageSidebar
   * @var pop
   */
    var popup=document.getElementById('popup');
    popup.classList.toggle('active')
  }
    /**A function that fires once the homepage sidebar is called in the web player
   * @memberof HomePageSidebar
   * @func componentDidMount
   */
  componentDidMount() {
    
    const requestOptions = {
      method:"GET",
      headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk'}
    }
    
    const url = "http://52.14.190.202:8000/playlists/me"; 
    fetch(url,requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.playlist);
        if(data.playlist)
        {
          
        const list = data.playlist.map(item => {
          return (
            <li onClick={()=>{
              this.props.history.push("/webplayer/playlist/" + item._id );
              this.props.onPlaylistClicked(item._id);
              window.location.reload(true);
            }} className="List2">{item.playlistName}</li>
          )
        }
        
        )
        console.log(list);
        this.setState({total:list});
        console.log(this.state.total);
      }
    
      })
      .catch((error)=>{
        console.log(error);
      })
      
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
                {this.state.total}
              </div>
          </ul> 
      </div>
    
    </div>

);
}
} 
const mapStateToProps = state => {

  return {
    userID:state.userID
  };

};

const mapDispatchToProps = dispatch => {

  return {

    onPlaylistClicked : (itemID) => dispatch ({type: actionTypes.SELECT_PLAYLIST , value: itemID})
  };

};
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePageSidebar));