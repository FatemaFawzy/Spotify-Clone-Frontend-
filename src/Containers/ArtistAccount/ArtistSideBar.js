import React ,{ Component} from 'react';
import './ArtistSideBar.css';
import { NavLink, Link } from "react-router-dom";
import { addNewURL } from '../../HelperFunctions/History';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actionTypes from "../../Store/actions";
 
/** Class ArtistSideBar 
 * @category ArtistSideBar
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
     /**A function that indicated that the profile list in the sidebar was clicked and adds styles to it
   * @memberof ArtistSideBar
   * @func clickedProfile
   */
  clickedProfile=()=>{
    document.querySelector("#profile").classList.add("gray");
    document.querySelector("#infor").classList.remove("gray");
    document.querySelector("#songs").classList.remove("gray");
    document.querySelector("#albums").classList.remove("gray");
     
  }
       /**A function that indicated that the info list in the sidebar was clicked and adds styles to it
   * @memberof ArtistSideBar
   * @func clickedinfo
   */
  clickedinfo=()=>{
    document.querySelector("#profile").classList.remove("gray");
    document.querySelector("#infor").classList.add("gray");
    document.querySelector("#songs").classList.remove("gray");
    document.querySelector("#albums").classList.remove("gray");
     
  }
       /**A function that indicated that the songs list in the sidebar was clicked and adds styles to it
   * @memberof ArtistSideBar
   * @func clickedsongs
   */
  clickedsongs=()=>{
    document.querySelector("#profile").classList.remove("gray");
    document.querySelector("#infor").classList.remove("gray");
    document.querySelector("#songs").classList.add("gray");
    document.querySelector("#albums").classList.remove("gray");
  }
       /**A function that indicated that the albums list in the sidebar was clicked and adds styles to it
   * @memberof ArtistSideBar
   * @func clickedalbums
   */
  clickedalbums=()=>{
    document.querySelector("#profile").classList.remove("gray");
    document.querySelector("#infor").classList.remove("gray");
    document.querySelector("#songs").classList.remove("gray");
    document.querySelector("#albums").classList.add("gray");
  }

  
   
  
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
              <li><Link  onClick={this.clickedProfile} id="profile" className="List gray" to="/ArtistAccount/ArtistWebPlayer/"><i class="fas fa-user"></i>Profile</Link></li>
              <li><Link  onClick={this.clickedinfo} id="infor" className="List2" to="/ArtistAccount/ArtistWebPlayer/MyInfo/"><i class="fas fa-info"></i>Info</Link></li>
              <li><Link  onClick={this.clickedsongs} id="songs" className="List" to="/ArtistAccount/ArtistWebPlayer/MySongs/"><i class="fas fa-music"></i>My Songs</Link></li>
              <li><Link  onClick={this.clickedalbums} id="albums" className="List" to="/ArtistAccount/ArtistWebPlayer/MyAlbums"><i class="fas fa-compact-disc"></i>My Albums</Link></li>
             
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