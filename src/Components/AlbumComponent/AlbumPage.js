import React ,{ Component} from 'react';
import './AlbumPage.css';
import {Link} from "react-router-dom";
import ReactDOM from "react-dom"
import MediaButton from '../Media/MediaButton';
import ReactSnackBar from "react-js-snackbar";


class AlbumPage extends Component
{
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
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
  }

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
      {id : 1, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      {id : 2, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      {id : 3, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      
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
      <div className="content-spacing">
        <div className="row" >
                                             {/* Crad Element */}

          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">

             <li> <MediaButton className="play-pause" image={this.state.AlbumImage} /> </li>

					  <li> <h3> {this.state.AlbumName} </h3> </li>
					  <li> <h5> {this.state.Artist} </h5> </li>
            
            <li> <a href="#" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Play</a> </li>
            <li >
              <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
              <div className="dropdown ">
              <a className="card-menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
              <div class="dropdown-menu card-dropdown-content ">
              <a class="dropdown-item drop-class" href="#" id="SAVE" value="ShowSave" onClick={this.show}>Save To Your Library</a>
              <a class="dropdown-item drop-class" onClick={this.toggle_add_to_playlist} href="#">Add To Playlist</a>
              </div>
              </div>
            </li>
            <li> <div style={{color:"#b3b3b3"}}> {this.state.songsNumber} </div></li>
					</ul>
          </div>

                                              {/* Song Info */}

          <div className="col-xs-12  col-lg-7 col-xl-8 ">
          <table class="table table-borderless">
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
                  <div class="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a class="dropdown-item drop-class" href="#" id="ADD" value="ShowAdd" onClick={this.show} >Add to your liked songs</a>
                    <a class="dropdown-item drop-class" onClick={this.toggle_add_to_playlist} href="#">Add to playlist</a>
                  </div>
                </div>
              </td>
              <td className="duration">{song.Duration}</td>
            </tr>
            ))} 
                                         
            </tbody>
          </table>

          <ReactSnackBar Icon={<span class="fab fa-spotify"></span>} Show={this.state.ShowAdd}>
                      Added To Your Liked Songs
          </ReactSnackBar>

          <ReactSnackBar Icon={<span class="fab fa-spotify"></span>} Show={this.state.ShowSave}>
                      Saved To Your Library
          </ReactSnackBar>
           </div> 
          </div>
      </div>
    </div>
  )
}
}

export default AlbumPage;