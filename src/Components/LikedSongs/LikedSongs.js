import React ,{ Component} from 'react';
import './LikedSongs.css';
import ReactSnackBar from "react-js-snackbar";
import HomePageNavbar from '../HomePage/HomePageNavbar';
import CardMedia from '../Media/CardMedia';
import {BASEURL} from "../../Constants/baseURL";
import {connect} from 'react-redux';
  
class LikedSongs extends Component
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
      LikedSongsImage: "https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png",
      songsNumber: "32 Songs",   
      ShowRemove: false,
      ShowingRemove: false,
      playLikedSongs: "Play",
      TracksID: {},
      LikedTracks:{}
  }
  componentDidMount()
  {
     const url = BASEURL +"tracks/like/me";
     const requestOptions = {
          method: 'GET',  
          headers: {'x-auth': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk",
        'Content-Type': 'application/json' },  
        };
        fetch(url,requestOptions)
            .then((response) => {
              return response.json();    
            })
            .then((data) => {

              this.setState({ TracksID: data});
              console.log(this.state.TracksID)
              this.getLikedTrackes()
            })
            .catch((error)=>{
              console.log(error);
    
            })       
  }

getLikedTrackes () {
    var url =BASEURL+ "tracks"; 
      const requestOptions = {
        method:"POST",
        headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk', 
        'Content-Type': 'application/json'},
        body: JSON.stringify({id: this.state.TracksID})
    };
      fetch(url,requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) =>{ 
          console.log(data);
          this.setState({LikedSongs:data.tracks})
          console.log(this.state.LikedSongs)
        })
        .catch((err)=>console.log(err))
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

  playButton = e => {
    const {id} = e.target;
    if ( this.state.playLikedSongs === "Play" ) {
      this.setState({playLikedSongs: "Pause"});
    }
    else if ( this.state.playLikedSongs === "Pause" ) {
      this.setState({playLikedSongs: "Play"});
    }
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
    <HomePageNavbar accountType="regular" name="Ali Halafawy" color="black"
        image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
     
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
              <CardMedia image={this.state.LikedSongsImage}/>
					  <li> <h3> Liked Songs </h3> </li>
            <li> <a href="#" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playLikedSongs}</a> </li>
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

                                        {/* Display likd songs when data is correct */}
           {/* {this.state.LikedSongs.map((song,index)=>(
            <tr key={index}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.trackName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile/'>{song.artistId} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>{song.AlbumName} </a></li>
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
              <td className="duration">{song.duration}</td>
            </tr>
            ))}  */}
             
      </tbody>
    </table>
    <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
                      Removed From Your Liked Songs
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
  };
};

export default connect(mapStateToProps) (LikedSongs);