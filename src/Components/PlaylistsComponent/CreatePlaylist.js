import React ,{ Component} from 'react';
import'./CreatePlaylist.css';
import {BASEURL} from "@/Constants/baseURL";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

/** Class CreatePlaylist 
 * @category CreatePlaylist
 * @extends Component
 */
export class CreatePlaylist extends Component{
 
    /**Function toggle create to playlist
   * @memberof CreatePlaylist
   * @func toggle
   */
  toggle()
 {
  /** variable blur create to playlist
   * @memberof CreatePlaylist
   * @type {string}
   */
   var blur=document.getElementById('blur');
   blur.classList.toggle('active')

   /** variable pop create to playlist
   * @memberof CreatePlaylist
   * @type {string}
   */
   var popup=document.getElementById('popup');
   popup.classList.toggle('active')
 }

  /**Function create new playlist
   * @memberof CreatePlaylist
   * @func toggle
   * @param e
   */
createNewPlaylist = (e) =>{
  e.preventDefault();
  
  /** variable New Playlist Name
   * @memberof CreatePlaylist
   * @type {string}
   */
  var NewPlaylistName = document.getElementById('new-playlist-name').value; 

  /** variable Privacy of playlist
   * @memberof CreatePlaylist
   * @type {boolean}
   */
  // var Privacy=false;
  // const url = BASEURL+ "playlists/?playlistName="+NewPlaylistName+"&privacy="+Privacy;    
  // console.log(url);
  // const requestOptions = {
  //   method: 'POST', 
  //   headers: {'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk', 
  //   'Content-Type': 'application/json' }, 
  //   body: JSON.stringify({ playlistName: NewPlaylistName, privacy: Privacy }) ,

  // };    
  //    fetch(url,requestOptions)
  //     .then((res) => res.json())
  //     .then((data) =>{
  //       console.log(data)
  //       this.toggle()
  //       window.location.reload(true);
  //       this.props.history.replace("/webplayer/playlist" + data.playlistId)
  //     })
  //     .catch((err)=>console.log(err))
       
    
    
}
render()
{
return (
  <div className="create-playlist" id="popup" >
        <div className="d-flex justify-content-center">
            <button className="btn close-button" onClick={this.toggle} > <i className="fas fa-times"></i> </button>
        </div>
        <h2 className="d-flex justify-content-center mb-3" > Create new playlist</h2>
        <div className="input_P ">
      <form >
          <div className="form-group container ">
          <label for="new-playlist-name">Playlist Name</label>
          <input autoComplete="off" onfocus="this.value=''" placeholder="New Playlist" type="text" className="form-control form-control-lg "  id="new-playlist-name"/>
          </div>
      
          </form>
        </div> 
        <div className="container ">
            <div className="row">
              <div className="col-6 d-flex justify-content-end">
              <button className="btn btn-dark border border-light rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" onClick={this.toggle}> Cancel</button>
              </div>
              <div className="col-6 d-flex justify-content-start">
              <a href="" onClick={this.createNewPlaylist} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Create</a>
        
              </div>
            </div>
           
        </div>     
     </div>
)
}
}

/**A function connecting component to redux store
 * @memberof CreatePlaylist
 * @func mapStateToProps
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
    playlistId: state.selectedPlaylistId
  };
};

export default connect(mapStateToProps)(CreatePlaylist);