import React ,{ Component} from 'react';
import './PlaylistPage.css';
import DeletePlaylist from './DeletePlaylist';
import CardMedia from '../Media/CardMedia';
import ReactSnackBar from "react-js-snackbar";
import './SnackBar.css';
import HomePageNavbar from '../HomePage/HomePageNavbar';

class PlaylistPage extends Component
{
  
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
  
      playlistImage: "https://www.udiscovermusic.com/wp-content/uploads/2019/05/Lana-Del-Rey-Born-To-Die-album-cover-web-optimised-820.jpg",
      playlistname: "Born to die",
      playlistCreator: "Lana Del Rey",
      songsNumber: "32 Songs",  
      ShowAdd: false,
      ShowingAdd: false,
      ShowRemove: false,
      ShowingRemove: false,
      playplaylist: "Play",
  }
    
  //   async componentDidMount() {
  //     const url="";
  //     const response = await fetch(url);
  //     const data = await response.blob();
  //     var image=URL.createObjectURL(data)
  //     console.log(image)
  //     this.setState({ playlistImage: image })
  // }

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
  toggle_add_to_playlist()
{
  var blur_add_to_playlist=document.getElementById('blur-add-to-playlist');
  blur_add_to_playlist.classList.toggle('activate')
  var popup_add_to_playlist=document.getElementById('popup-add-to-playlist');
  popup_add_to_playlist.classList.toggle('activate')
}

playButton = e => {
  const {id} = e.target;
  if ( this.state.playplaylist === "Play" ) {
    this.setState({playplaylist: "Pause"});
  }
  else if ( this.state.playplaylist === "Pause" ) {
    this.setState({playplaylist: "Play"});
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
              

					  <li> <h3> {this.state.playlistname} </h3> </li>
					  <li> <h5> {this.state.playlistCreator} </h5></li>
            <li >
               <a href="#" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playplaylist}</a>
            </li>
            <li  className="d-flex justify-content-around">
            <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
             
            
          <div className="dropdown ">
              <a className="card-menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
              <div class="dropdown-menu card-dropdown-content ">
              <a class="dropdown-item drop-class" href="#">Edit Playlist</a>
              <a class="dropdown-item drop-class" data-toggle="modal" data-target="#delete" href="#">Delete</a>
              
          </div>

          </div>
            </li>
            <li > <div style={{color:"#b3b3b3"}}> {this.state.songsNumber}</div> </li>
					</ul>
          </div>

        <div className="col-xs-12  col-lg-7 col-xl-8">
        <table class="table table-borderless">
          <tbody>
                                             {/* Display Songs */}
           {this.state.SongInfo.map((song,index)=>(
            <tr key={index}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.SongName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile'>{song.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>{song.AlbumName} </a></li>
                </ul>
              </td>
              <td>
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div class="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a class="dropdown-item drop-class" href="#" id="ADD" value="ShowAdd" onClick={this.show} >Add to your liked songs</a>
                    
                    <a class="dropdown-item drop-class" onClick={this.toggle_add_to_playlist} href="#">Add to playlist</a>
                    <a class="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show} href="#">Remove from this playlist</a>
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

    <ReactSnackBar Icon={<span class="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
                      Removed From This Playlist
    </ReactSnackBar>
      </div> 
      </div>
      </div>
      <DeletePlaylist />
    </div>
    </div>
    
  )
}
}

export default PlaylistPage;