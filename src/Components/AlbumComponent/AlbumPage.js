import React ,{ Component} from 'react';
import './AlbumPage.css';
import {Link} from "react-router-dom";
import ReactDOM from "react-dom"
import CardMedia from '../Media/CardMedia';
import ReactSnackBar from "react-js-snackbar";
import HomePageNavbar from '../HomePage/HomePageNavbar';
import {BASEURL} from "../../Constants/baseURL";
import {connect} from 'react-redux';

/** Class AlbumPage 
 * @category AlbumPage
 * @extends Component
 */
export class AlbumPage extends Component
{
  constructor(props){
    super(props);
  }
  state= 
{ 
  /**Array of Song Info
   * @memberof AlbumPage
   * @type {Array<songs>}
   */
    SongInfo: [
      // {id : 1, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      // {id : 2, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      // {id : 3, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      // {id : 4, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      // {id : 5, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      // {id : 6, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      // {id : 7, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      // {id : 8, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      // {id : 9, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
    ],
  /** Album image
   * @memberof AlbumPage
   * @type {sring}
   */
    AlbumImage: "https://i.ibb.co/Q89hfcW/single-bar-note.jpg",
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {sring}
   */
    AlbumName: "Perfect",
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {sring}
   */
    Artist: "Ed sheran",
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {sring}
   */
    songsNumber: "",
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {sring}
   */
    dropContentClass: "dropdown-content",
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowAdd: false,
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowingAdd: false,
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowSave: false,
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowingSave: false,
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {string}
   */
    playAlbum: "Play",
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {object}
   */
    AlbumInfo: {},
    /**Array of playlists in the bottom
   * @memberof AlbumPage
   * @type {Array<songs>}
   */
    AblumSongs: [],
    
}
 /**Function that is called when the component renders
   * @memberof AlbumPage
   * @func componentDidMount
   */
componentDidMount(){
   /** variable of url and requestOptions
   * @memberof AlbumPage
   * @type {string}
   */
  var url = BASEURL+ "album/" + this.props.AlbumID; 

  const requestOptions = {
    method: 'GET',
    headers: { 'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjNzg1ZTE0NGQ5NDA0MzliNDU4NGEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MjgwMDExfQ.R3gD5zX1j6A9KS2uYGzjZExCc7FDgsoiPEdVlxKy24Q',
     'Content-Type': 'application/json' },
  };
  fetch(url,requestOptions)
    .then((response) => { return response.json()})
    .then((data) => {
      // console.log(data)
      this.setState({ 
        AlbumInfo: data.album,
       AlbumImage:"http://52.14.190.202:8000/images/"+data.album.imagePath,
      songsNumber:data.album.tracks.length});
      // console.log(this.state.AlbumInfo);
      this.gettracks()
    })
    .catch((error)=>{console.log(error);

    })
  }
   /**Function to get tracks
   * @memberof AlbumPage
   * @func gettracks
   */
  gettracks () {
  /**variable of url and requestOptions
   * @memberof AlbumPage
   * @type {string}
   */
    var url =BASEURL+ "tracks"; 
    const requestOptions = {
      method:"POST",
      headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk', 
      'Content-Type': 'application/json'},
      body: JSON.stringify({id: this.state.AlbumInfo.tracks})
  };
    fetch(url,requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) =>{ 
        this.setState({SongInfo:data.tracks})
        console.log(this.state.SongInfo)
        this.getArtistName()
      })
      .catch((err)=>console.log(err))
  }
  /**Function to get Artist name
   * @memberof AlbumPage
   * @func getArtistName
   */
  getArtistName()
  {
  /** variable of url
   * @memberof AlbumPage
   * @type {string}
   */
    var url =BASEURL+ "Artists/"+this.state.AlbumInfo.artistId; 
    const requestOptions = {
      method:"GET",
    headers: { 'x-auth': "eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s" },

    }
    fetch(url,requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {    
     this.setState({Artist:data.artist.artistName})
    })
    .catch((error)=>{
      console.log(error);
    })  
   }
  
     /**Function toggle add to playlist
   * @memberof AlbumPage
   * @func toggle_add_to_playlist
   */
  toggle_add_to_playlist()
 {
    /** variable blur add to playlist
   * @memberof AlbumPage
   * @type {string}
   */
   var blur_add_to_playlist=document.getElementById ('blur-add-to-playlist');
   blur_add_to_playlist.classList.toggle('activate')
    /**variable popup add to playlist
   * @memberof AlbumPage
   * @type {string}
   */
   var popup_add_to_playlist=document.getElementById('popup-add-to-playlist');
   popup_add_to_playlist.classList.toggle('activate')
 }
  
//  /**Function to get tracks
//    * @memberof AlbumPage
//    * @func DropMenuCard
//    */ 
//   DropMenuCard ()
//   {
//     document.getElementById("DropMenuCard").classList.toggle("show");
//   }
//    /**Function to get tracks
//    * @memberof AlbumPage
//    * @func DropMenuSong
//    */
//   DropMenuSong()
//   {
//     document.getElementById("DropMenuSong").classList.toggle("show");
//   }


   /**Function to like playlist
   * @memberof AlbumPage
   * @func likeSong
   * @param r
   */
  likeSong = r => {
    const {id} = r.target;
   
    /** heart icon
   * @memberof AlbumPage
   * @type {string}
   */
    var heart=document.getElementById(id);

    /** variable url
   * @memberof AlbumPage
   * @type {string}
   */
    var url=""
    if( heart.classList.contains("far")){
    url = BASEURL+"album/like/id="+this.props.AlbumID;
    }
    else if(heart.classList.contains("fas")){
    url = BASEURL+"album/unlike/id="+ this.props.AlbumID;
    }
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
    
    console.log(url);
    // const requestOptions = {
    //   method: 'POST',  
    //   headers: {'x-auth': this.props.userToken }, 
    // };
    // fetch(url, requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch((error)=> {console.log(error)});
  }

 /**Function to toggle play and pause button
   * @memberof AlbumPage
   * @func playButton
   */
playButton = () => {
   /**Function to get tracks
   * @memberof AlbumPage
   * @type {string}
   */
  if ( this.state.playAlbum === "Play" ) {
    this.setState({playAlbum: "Pause"});
  }
  else if ( this.state.playAlbum === "Pause" ) {
    this.setState({playAlbum: "Play"});
  }
}
 /**Function to show snack bar
   * @memberof AlbumPage
   * @func show
   * @param e
   */
show = e => {
   /** variable to check which snack bar is called
   * @memberof AlbumPage
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
else if (check=="SAVE"){
  this.setState({ ShowSave: true, ShowingSave: true });
  setTimeout(() => {
    this.setState({ ShowSave: false, ShowingSave: false });
  }, 2000);
  return;  
}
};

  render(){
  return(
  <div className="album-page">
     <HomePageNavbar accountType="regular" name="Ali Halafawy" color="black"
        image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>

      <div className="content-spacing">
        <div className="row" >
                                             {/* Crad Element */}

          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">

             <li> <CardMedia className="play-pause" image={this.state.AlbumImage} /> </li>

					  <li> <h3> {this.state.AlbumInfo.albumName} </h3> </li>
					  <li> <h5> {this.state.Artist} </h5> </li>
            
            <li> <button id="play-button" href="#" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playAlbum}</button> </li>
            <li >
              <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
              <div className="dropdown ">
              <a className="card-menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
              <div className="dropdown-menu card-dropdown-content ">
              <a className="dropdown-item drop-class" href="#" id="SAVE" value="ShowSave" onClick={this.show}>Save To Your Library</a>
              <a className="dropdown-item drop-class" onClick={this.toggle_add_to_playlist} href="#">Add To Playlist</a>
              </div>
              </div>
            </li>
            <li> <div style={{color:"#b3b3b3"}}> {this.state.songsNumber} Songs </div></li>
					</ul>
          </div>

                                              {/* Song Info */}

          <div className="col-xs-12  col-lg-7 col-xl-8 ">
          <table className="table table-borderless">
            <tbody>
                                            {/* display songs */}
          {this.state.SongInfo.map((song,index)=>(
            <tr key={index}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.trackName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile'>{this.state.Artist} </a> </li>
                </ul>
              </td>
              <td>
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a className="dropdown-item drop-class" href="#" id="ADD" value="ShowAdd" onClick={this.show} >Add to your liked songs</a>
                    <a className="dropdown-item drop-class" onClick={this.toggle_add_to_playlist} href="#">Add to playlist</a>
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

          <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowSave}>
                      Saved To Your Library
          </ReactSnackBar>
           </div> 
          </div>
      </div>
    </div>
  )
}
}

/**A function connecting component to redux store
 * @memberof AlbumPage
 * @func mapStateToProps
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
    AlbumID: state.selectedAlbumID,
  };
};

export default connect(mapStateToProps) (AlbumPage);