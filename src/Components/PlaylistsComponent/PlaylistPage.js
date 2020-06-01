import React ,{ Component} from 'react';
import './PlaylistPage.css';
import DeletePlaylist from './DeletePlaylist';
import CardMedia from '../Media/CardMedia';
import ReactSnackBar from "react-js-snackbar";
import './SnackBar.css';
import HomePageNavbar from '../HomePage/HomePageNavbar';
import {BASEURL} from "../../Constants/baseURL";
import {connect} from 'react-redux';

/** Class PlaylistPage 
 * @category PlaylistPage
 * @extends Component
 */
export class PlaylistPage extends Component
{
  
  
  state= 
  { 
      // SongInfo: [
      //   {id : 1, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      //   {id : 2, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      //   {id : 3, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      //   {id : 4, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      //   {id : 5, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      //   {id : 6, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      //   {id : 7, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      //   {id : 8, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      //   {id : 9, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      //   {id : 10, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      //   {id : 11, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      //   {id : 12, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
        
      // ],

      /** playlist image
     * @memberof PlaylistPage
     * @type {string}
     */
      playlistImage: "https://i.ibb.co/Q89hfcW/single-bar-note.jpg",
     
     /** playlist songs number
     * @memberof PlaylistPage
     * @type {string}
     */
      songsNumber: "",  
      
      /** show/add snack bar
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowAdd: false,
      
      /** show/add snack bar
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowingAdd: false,
     
     /** show/remove snack bar
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowRemove: false,
      
      /** show/remove snack bar
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowingRemove: false,
      
      /** button play
     * @memberof PlaylistPage
     * @type {string}
     */
      playplaylist: "Play",
     
      /** object of playlist info
     * @memberof PlaylistPage
     * @type {object}
     */
      playlistInfo:{},
     
    /**Array of Artist names
     * @memberof PlaylistPage
     * @type {Array<artistNames>}
     */
      ArtistNames:[],

    /**Array of playlist tracks
     * @memberof PlaylistPage
     * @type {Array<tracks>}
     */
      playlistTracks:[]
  }

   /**Function that is called when the component renders
   * @memberof PlaylistPage
   * @func componentDidMount
   */
  componentDidMount() {
    /** variable of url 
     * @memberof PlaylistPage
     * @type {string}
     */
    var url =BASEURL+ "playlists/me?id="+this.props.PlaylistID; 
    const requestOptions = {
      method:"GET",
      headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk'}
    }
    
    fetch(url,requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var lengthOfplaylists = Object.keys(data.playlist).length;
        var selectedPlaylist=""
        for(var i=0;i<lengthOfplaylists;i++){
          if(this.props.PlaylistID==data.playlist[i]._id){
            selectedPlaylist=data.playlist[i]
          }
        }
        var tracksCount = Object.keys(selectedPlaylist.tracks).length;
        console.log(this.props.PlaylistID)
        this.setState({
        playlistInfo: selectedPlaylist,
        playlistImage: "http://52.14.190.202:8000/Images/"+selectedPlaylist.imagePath,
        songsNumber: tracksCount,
        playlistTracks: selectedPlaylist.tracks,
      });
        console.log(this.state.playlistTracks);
        this.gettracks()
      })
      .catch((error)=>{
        console.log(error);
      })
      

    }

 /**Function to get tracks
   * @memberof PlaylistPage
   * @func gettracks
   */
    gettracks () {

      /** variable of url 
     * @memberof PlaylistPage
     * @type {string}
     */
    //   var url =BASEURL+ "tracks"; 
    //   const requestOptions = {
    //     method:"POST",
    //     headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk', 
    //     'Content-Type': 'application/json'},
    //     body: JSON.stringify({id: this.state.playlistTracks})
    // };
    //   fetch(url,requestOptions)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) =>{ 
    //       this.setState({playlistTracks:data.tracks})
    //       console.log(this.state.playlistTracks)
    //       // this.getArtistName()
    //     })
    //     .catch((err)=>console.log(err))
    }

    // getArtistName()
    // {
      
    //   for(var i =0;i<this.state.playlistTracks.length;i++){
    //   var x=''
    //   var url =BASEURL+ "Artists/"+this.state.playlistTracks[i].artistId; 
    //   const requestOptions = {
    //     method:"GET",
    //   headers: { 'x-auth': "eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s" },

    //   }
    //   fetch(url,requestOptions)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {    
    //     x=data.artist.artistName
    //     console.log(x)
    //   }, this.state.playlistTracks[i] = {...this.state.playlistTracks[i], artistName:x })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
      
    //  }
    
    //  console.log(this.state.playlistTracks)  
    // }
    
  /**Function to like playlist
   * @memberof PlaylistPage
   * @func likeSong
   * @param e
   */
  likeSong = e => {
    const {id} = e.target;
   
    /** variable of heart icon 
     * @memberof PlaylistPage
     * @type {string}
     */
    var heart=document.getElementById(id);
    
    /** variable of url 
     * @memberof PlaylistPage
     * @type {string}
     */
    // var url=""
    // if( heart.classList.contains("far")){
    // url = BASEURL+"playlists/like/?id="+this.state.playlistInfo._id;
    // }
    // else if(heart.classList.contains("fas")){
    // url = BASEURL+"playlists/unlike/?id="+this.state.playlistInfo._id;
    // }
    // heart.classList.toggle("far");
    // heart.classList.toggle("fas");
    
    // console.log(url);
    // const requestOptions = {
    //   method: 'POST',  
    //   headers: {'x':  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk', 
    //    }, 
    //   body: JSON.stringify({ id: this.state.playlistInfo._id}) ,
 
    // };
    // fetch(url, requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch((error)=> {console.log(error)});
  }


  /**Function to toggle add to playlist
   * @memberof PlaylistPage
   * @func toggle_add_to_playlist
   */
  toggle_add_to_playlist()
{
  /** variable blur add to playlist
   * @memberof PlaylistPage
   * @type {string}
   */
  var blur_add_to_playlist=document.getElementById('blur-add-to-playlist');
  if (blur_add_to_playlist!=null){
  blur_add_to_playlist.classList.toggle('activate')
  }

   /** variable popup add to playlist
   * @memberof PlaylistPage
   * @type {string}
   */
  var popup_add_to_playlist=document.getElementById('popup-add-to-playlist');
  if (popup_add_to_playlist!=null){
  popup_add_to_playlist.classList.toggle('activate')
}
}

 /**Function to play button
   * @memberof PlaylistPage
   * @func playButton
   */
playButton = () => {
  if ( this.state.playplaylist === "Play" ) {
    this.setState({playplaylist: "Pause"});
  }
  else if ( this.state.playplaylist === "Pause" ) {
    this.setState({playplaylist: "Play"});
  }
}

/**Function to show snack bar
   * @memberof PlaylistPage
   * @func show
   * @param e
   */
show = e => {

  /** variable to check which snack bar is called
   * @memberof PlaylistPage
   * @type {string}
   */
  var check = e.target.id;
  if (check=="ADD"){
  this.setState({ ShowAdd: true, ShowingAdd: true });
  setTimeout(() => {
    this.setState({ ShowAdd: false, ShowingAdd: false });
  }, 2000); 
  return; 
  }
else if (check=="REMOVE"){
  this.setState({ ShowRemove: true, ShowingRemove: true });
  setTimeout(() => {
    this.setState({ ShowRemove: false, ShowingRemove: false });
  }, 2000);
  return;  
}
};

  render(){
  return(
    <div>
  <div className="playlist-page">
   <HomePageNavbar accountType="regular" name="Ali Halafawy" color="black"
        image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
     
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
            <CardMedia image={this.state.playlistImage} /> 
              

					  <li> <h3> {this.state.playlistInfo.playlistName} </h3> </li>
					  <li> <h5> {this.state.playlistInfo.userId} </h5></li>
            <li >
               <button href="#" id="play-button" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playplaylist}</button>
            </li>
            <li  className="d-flex justify-content-around">
            <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
             
            
          <div className="dropdown ">
              <a className="card-menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
              <div className="dropdown-menu card-dropdown-content ">
              <a className="dropdown-item drop-class" href="#">Edit Playlist</a>
              <a className="dropdown-item drop-class" data-toggle="modal" data-target="#delete" href="#">Delete</a>
              
          </div>

          </div>
            </li>
            <li > <div style={{color:"#b3b3b3"}}> {this.state.songsNumber} Songs</div> </li>
					</ul>
          </div>

        <div className="col-xs-12  col-lg-7 col-xl-8">
        <table className="table table-borderless">
          <tbody>
                                             {/* Display Songs */}
           {this.state.songsNumber == 0 ? <h2 className="d-flex justify-content-center">It's a bit empty here...</h2> : this.state.playlistTracks.map((song,index)=>(
            <tr key={index}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.trackName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile'>{song.artistId} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'> {song.AlbumName}</a></li>
                </ul>
              </td>
              <td>
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a className="dropdown-item drop-class" href="#" id="ADD" value="ShowAdd" onClick={this.show} >Add to your liked songs</a>
                    
                    <a className="dropdown-item drop-class" onClick={this.toggle_add_to_playlist} href="#">Add to playlist</a>
                    <a className="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show} href="#">Remove from this playlist</a>
                  </div>
                </div>
              </td>
              <td className="duration">{song.duration}</td>
            </tr>
            ))} 
             
      </tbody>
    </table>
    <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowAdd}>
                      Added To Your Liked Songs
    </ReactSnackBar>

    <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
                      Removed From This Playlist
    </ReactSnackBar>
      </div> 
      </div>
      </div>
      <DeletePlaylist delete={this.state.playlistInfo.playlistName} />
    </div>
    </div>
    
  )
}
}

/**A function connecting component to redux store
 * @memberof PlaylistPage
 * @func mapStateToProps
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
    PlaylistID: state.selectedPlaylistID,
  };
};

export default connect(mapStateToProps) (PlaylistPage);