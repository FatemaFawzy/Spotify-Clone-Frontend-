import React ,{ Component} from 'react';
import './ArtistSideBar.css';
import { NavLink, Link } from "react-router-dom";
import { addNewURL } from '../../HelperFunctions/History';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actionTypes from "../../Store/actions";
 
/** Class ArtistSideBar 
 * @category HomePage
 * @extends Component
 */
export class ArtistSideBar extends Component{
  constructor(props){
    super(props);
    this.state = {
    /**Array of playlists in the bottom
   * @memberof ArtistSideBar
   * @type {Array<playlist>}
   */
    playlistArray:[],
     /**Array of playlists to be show cased
   * @memberof ArtistSideBar
   * @type {Array<playlist>}
   */
    total:"",
    }
  }
   /**A function to show the popping area for creating a new playlist
   * @memberof ArtistSideBar
   * @func toggle
   */
  
    /**A function that fires once the homepage sidebar is called in the web player
   * @memberof ArtistSideBar
   * @func componentDidMount
   */
  componentDidMount() {
    
    const requestOptions = {
      method:"GET",
      headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk'}
    }
    
    // const url = "http://52.14.190.202:8000/playlists/me"; 
    // fetch(url,requestOptions)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.playlist);
    //     if(data.playlist)
    //     {
          
    //     const list = data.playlist.map(item => {
    //       return (
    //         <li onClick={()=>{
    //           this.props.history.push("/webplayer/playlist/" + item._id );
    //           this.props.onPlaylistClicked(item._id);
    //           window.location.reload(true);
    //         }} className="List2">{item.playlistName}</li>
    //       )
    //     }
        
    //     )
    //     console.log(list);
    //     this.setState({total:list});
    //     console.log(this.state.total);
    //   }
    
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
      
    }

render() {
 return (

    <div className="wrapper-Artist">
      
      <div className="sidebar">
        
        <Link to="/webplayer/HomePage"><img className="logo"  src="https://i.ya-webdesign.com/images/itunes-logo-white-png-1.png" alt="logo"/></Link>
        
          <ul>
              <li><NavLink  onClick={addNewURL("/webplayer/HomePage")} className="List" to="/webplayer/HomePage/"><i class="fas fa-user"></i>Profile</NavLink></li>
              <li><NavLink  onClick={addNewURL("/webplayer/likedsongs")} className="List2" to="/webplayer/likedsongs/"><i class="fas fa-info"></i>Info</NavLink></li>
              <li><NavLink   className="List" to="/ArtistAccount/ArtistWebPlayer/MySongs/"><i class="fas fa-music"></i>My Songs</NavLink></li>
              <li><NavLink onClick={addNewURL("webplayer/yourlibrary/")} className="List" to="/webplayer/yourlibrary/"><i class="fas fa-compact-disc"></i>My Albums</NavLink></li>
             
              <hr/>
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ArtistSideBar));