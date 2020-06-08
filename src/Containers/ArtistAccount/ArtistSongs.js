import React,{Component} from 'react';
 import './ArtistSongs.css';
 import ReactSnackBar from "react-js-snackbar";
import ArtistHomePageNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL,BASEURL2} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";



/** Class ArtistHomePage
 * @category ArtistHomePage
 * @extends Component
 */
export class ArtistSongs extends Component {
  constructor(props){
    super(props);
    this.state = {  
      SongInfo: [],
        // {id : 1, SongName : "High Hopes", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "3:52"},
        // {id : 2, SongName : "Pigs", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "4:15"},
        // {id : 3, SongName : "Hey You", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100", Duration : "2:58"},
        // {id : 4, SongName : "Time Machine", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "3:52"},
        // {id : 5, SongName : "Comfortably Numb", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "4:15"},
        // {id : 6, SongName : "Money", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100", Duration : "2:58"},
        // {id : 7, SongName : "Wish You Were Here", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "3:52"},
        // {id : 8, SongName : "The Final Cut", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "4:15"},
        // {id : 9, SongName : "Another Brick In The Wall Pt. 1", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100", Duration : "2:58"},
        // {id : 10, SongName : "The Great Gig In The Sky", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "3:52"},
        // {id : 11, SongName : "Us And Them", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100",Duration : "4:15"},
        // {id : 12, SongName : "Echoes", Singer: "Pink Floyd", AlbumName: "The Wall",Likes: "100", Duration : "2:58"},
        PopularSongs: [],
        Deleted: "",
        Added:""
    }
    
  }
  

  componentDidMount() {
  const requestOptions1={
    method:"GET",
    headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
  }

   const url1 =BASEURL2+"artist/mysongs/id"; 
  fetch(url1,requestOptions1)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("kjkjkjkjkjkjk"); 
      this.setState({PopularSongs:data.songsInfo.slice(0,3)})

      
    })
    .catch((error)=>{
      console.log(error);
    })

    const requestOptions2={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }

    const url2 = BASEURL2+"artist/mysongs/id"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
        SongInfo: data.songsInfo});
        console.log(this.state.SongInfo);
      })
      .catch((error)=>{console.log(error);
      })
 }
 ////////////////////////////////////////////////////////
 deleteSong = () => {
this.setState({Deleted:true});
  var requestOptions = {
    method: 'DELETE'
  };

  // get artist's popular tracks
  var urlPopular =BASEURL2+"songs/remove/id"; 

  fetch(urlPopular,requestOptions)
    .then((response) => { return response.json()})
    .then((data) => {
      if (data.message == "song deleted successfully")
      {
        console.log("song deleted");
      }
    })
    .catch((error)=>{console.log(error);
    })
 }
  render(){
    return (
      <div className ="artist-songs" >
            <ArtistHomePageNavbar accountType="regular" name="Ali Halafawy" color="transparent"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
          <div className="container  artist-top-section " style={{ backgroundImage: `url(https://i.scdn.co/image/378cc874bb148ccd0db2596b1e6b3a7f38ad301a)` }}>

            <h1 className="artist-name font-weight-bolder"> My Songs</h1>
            <div id="buttons">
         <button id="follow-button" className="btn btn-success rounded-pill " >
           Add Song   <i class="fas fa-plus"></i>
         </button>
        </div>   
          </div>
          <div className="col-xs-12 col-sm-12 ">
          <ComponentBlock ComponentName="Popular Songs" type="songs" description="" details={this.state.PopularSongs} excess={false}   />
        <table className="table table-borderless"> 
         <h1 id="all-songs">All Songs</h1>
          <tbody>
                                             {/* Display likd songs */}
           {this.state.SongInfo.map((song,id)=>(
            <tr key={id}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.songName}</li>
                  <li className="song-info"><a href='/ArtistAccount/ArtistWebPlayer/'>{song.artistName}</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>{song.AlbumName}</a></li>
                </ul>
              </td>
              <td >
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a className="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show}>Edit</a>
                    <a className="dropdown-item drop-class" onClick={this.deleteSong} href="#">Remove</a>
                  </div>
                </div>
              </td>
              <td className="duration">{song.Duration}</td>
              <td className="likes">{song.Likes}  <i class="fas fa-heart"></i></td>
            </tr>
            ))} 
             
      </tbody>
    </table>
    {
    this.state.Deleted == true ?
    <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
                      Song Deleted Successfully
    </ReactSnackBar> : <p></p>
    }
    {
      this.state.Added == true ?
      <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
      Song Added Successfully
      </ReactSnackBar> : <p></p>
    }
      </div> 
      </div>  
    
    );
  }  
}

const mapStateToProps = state => {

  return {
    userID:state.userID,
    selectedArtistID : state.selectedArtistID,
  };

};
export default connect(mapStateToProps)(ArtistSongs);

