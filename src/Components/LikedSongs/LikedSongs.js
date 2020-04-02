import React ,{ Component} from 'react';
import './LikedSongs.css';
import MediaButton from '../Media/MediaButton';
// import ReactSnackBar from "react-js-snackbar";
  
class LikedSongs extends Component
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

  likeSong = e => {
    const {id} = e.target;
    var heart=document.getElementById(id);
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
  }
  
  state= 
{ 
    SongInfo: [
      {id : 1, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 2, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 3, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      {id : 4, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 5, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 6, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      {id : 7, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 8, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 9, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      {id : 10, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 11, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 12, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      
    ],
    LikedSongsImage: "https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png",
    songsNumber: "32 Songs",   
    ShowRemove: false,
    ShowingRemove: false,
}

show = e => {
  var check = e.target.id;
  if (check=="REMOVE"){
  this.setState({ ShowRemove: true, ShowingRemove: true });
  setTimeout(() => {
    this.setState({ ShowRemove: false, ShowingRemove: false });
  }, 2000); 
  return; 
  }
};


  render(){
  return(
  <div className="liked-songs-page">
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
              <MediaButton image={this.state.LikedSongsImage}/>
					  <li> <h3> Liked Songs </h3> </li>
            <li> <a href="#" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Play</a> </li>
            <li  className="">
            <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
             
            </li>
            <li > <div> {this.state.songsNumber}</div> </li>
					</ul>
          </div>

        <div className="col-xs-12  col-lg-7 col-xl-8">
        <table className="table table-borderless">
          <tbody>
                                             {/* Display likd songs */}
           {this.state.SongInfo.map((song,index)=>(
            <tr key={index}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.SongName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile/'>{song.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>{song.AlbumName} </a></li>
                </ul>
              </td>
              <td>
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a className="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show}>Remove from your liked songs</a>
                    <a className="dropdown-item drop-class" onClick={this.toggle_add_to_playlist} href="#">Add to playlist</a>
                  </div>
                </div>
              </td>
              <td className="duration">{song.Duration}</td>
            </tr>
            ))} 
             
      </tbody>
    </table>
    {/* <ReactSnackBar Icon={<span class="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
                      Removed From Your Liked Songs
    </ReactSnackBar> */}
      </div> 
      </div>
      </div>
    </div>
  )
}
}

export default LikedSongs;