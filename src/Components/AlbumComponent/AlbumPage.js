import React ,{ Component} from 'react';
import './AlbumPage.css';
import {Link} from "react-router-dom";
import ReactDOM from "react-dom"
import CardMedia from '../Media/CardMedia';
import ReactSnackBar from "react-js-snackbar";
import HomePageNavbar from '../HomePage/HomePageNavbar';
import {BASEURL} from "../../Constants/baseURL";
import {connect} from 'react-redux';


class AlbumPage extends Component
{
  state= 
{ 
    SongInfo: [
      {id : 1, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      {id : 2, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      {id : 3, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      {id : 4, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      {id : 5, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      {id : 6, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      {id : 7, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      {id : 8, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      {id : 9, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      
      
    ],

    AlbumImage: "https://i1.sndcdn.com/artworks-000240088107-9s5wcs-t500x500.jpg",
    AlbumName: "Perfect",
    Artist: "Ed sheran",
    songsNumber: "12 Songs",
    dropContentClass: "dropdown-content",
    ShowAdd: false,
    ShowingAdd: false,
    ShowSave: false,
    ShowingSave: false,
    playAlbum: "Play"
    
}
  toggle_add_to_playlist()
 {
   var blur_add_to_playlist=document.getElementById ('blur-add-to-playlist');
   blur_add_to_playlist.classList.toggle('activate')
   var popup_add_to_playlist=document.getElementById('popup-add-to-playlist');
   popup_add_to_playlist.classList.toggle('activate')
 }
  
  DropMenuCard ()
  {
    document.getElementById("DropMenuCard").classList.toggle("show");
  }
  DropMenuSong()
  {
    document.getElementById("DropMenuSong").classList.toggle("show");
  }
  
  likeSong = r => {
    const {id} = r.target;
    var heart=document.getElementById(id);
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


playButton = e => {
  const {id} = e.target;
  if ( this.state.playAlbum === "Play" ) {
    this.setState({playAlbum: "Pause"});
  }
  else if ( this.state.playAlbum === "Pause" ) {
    this.setState({playAlbum: "Play"});
  }
}
show = e => {
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

					  <li> <h3> {this.state.AlbumName} </h3> </li>
					  <li> <h5> {this.state.Artist} </h5> </li>
            
            <li> <a href="#" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playAlbum}</a> </li>
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
            <li> <div style={{color:"#b3b3b3"}}> {this.state.songsNumber} </div></li>
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
                  <li>{song.SongName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile'>{song.Singer} </a></li>
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
              <td className="duration">{song.Duration}</td>
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
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
    AlbumID: state.selectedAlbumID,
  };
};

export default connect(mapStateToProps) (AlbumPage);