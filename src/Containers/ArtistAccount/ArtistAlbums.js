import React,{Component} from 'react';
 import './ArtistAlbums.css';
import ArtistAlbumsNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL,BASEURL2} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";



/** Class ArtistAlbums
 * @category ArtistAlbums
 * @extends Component
 */
export class ArtistAlbums extends Component {
  constructor(props){
    super(props);
    this.state = {  
      AlbumInfo: [],
        // {id : 1, AlbumName : "The Wall", Singer: "Pink Floyd", Name: "",Duration : ""},
        // {id : 2, AlbumName : "Animals", Singer: "Pink Floyd", Name: "",Duration : ""},
        // {id : 3, AlbumName : "Hey You", Singer: "Pink Floyd", AlbumName: "The Wall", Duration : ""},
        // {id : 4, AlbumName : "Time Machine", Singer: "Pink Floyd", AlbumName: "The Wall",Duration : ""},
        // {id : 5, AlbumName : "Comfortably Numb", Singer: "Pink Floyd", AlbumName: "The Wall",Duration : ""},
        // {id : 6, AlbumName : "Money", Singer: "Pink Floyd", AlbumName: "The Wall", Duration : "2:58"},
        // {id : 7, AlbumName : "Wish You Were Here", Singer: "Pink Floyd", AlbumName: "The Wall",Duration : "3:52"},
        // {id : 8, AlbumName : "The Final Cut", Singer: "Pink Floyd", AlbumName: "The Wall",Duration : "4:15"},
        // {id : 9, AlbumName : "Another Brick In The Wall Pt. 1", Singer: "Pink Floyd", AlbumName: "The Wall", Duration : "2:58"},
        // {id : 10, AlbumName : "The Great Gig In The Sky", Singer: "Pink Floyd", AlbumName: "The Wall",Duration : "3:52"},
        // {id : 11, AlbumName : "Us And Them", Singer: "Pink Floyd", AlbumName: "The Wall",Duration : "4:15"},
        // {id : 12, AlbumName : "Echoes", Singer: "Pink Floyd", AlbumName: "The Wall", Duration : "2:58"},
       PopularAlbums: [],
       Deleted:"",
       Added:""
      
      
    }
    
  }
  componentDidMount() {
    const requestOptions1={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
  
    const url1 =BASEURL2+"artist/myalbums/id"; 
     fetch(url1,requestOptions1)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("kjkjkjkjkjkjk"); 
        this.setState({AlbumInfo:data.albumInfo})
      })
      .catch((error)=>{
        console.log(error);
      })
      
      const requestOptions2={
        method:"GET",
        headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
      }
  
      const url2 =BASEURL2+"artist/myalbums/id"; 
      fetch(url2,requestOptions2)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
         this.setState({PopularAlbums:data.albumInfo.slice(0,3)})
        })
        .catch((error)=>{
          console.log(error);
        })
      
    }

deleteAlbum = () => {
  this.setState({Deleted:true});
  const requestOptions2={
    method:'DELETE'
  }

  const url2 =BASEURL2+"album/remove/id"; 

  fetch(url2,requestOptions2)
    .then((response) => { return response.json()})
    .then((data) => {
      if (data.message == "album deleted successfully")
      {
        console.log("album deleted");
      }
    })
    .catch((error)=>{console.log(error);
    })
}

  render(){
    return (
      <div className ="artist-albums" >
            <ArtistAlbumsNavbar accountType="regular" name="Ali Halafawy" color="transparent"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
          <div className="container  artist-top-section " style={{ backgroundImage: `url(https://i.scdn.co/image/378cc874bb148ccd0db2596b1e6b3a7f38ad301a)` }}>

            <h1 className="artist-name font-weight-bolder"> My Albums</h1>
            <div id="buttons">
         <button id="follow-button" className="btn btn-success rounded-pill " >
           Add Album   <i class="fas fa-plus"></i>
         </button>
        </div>   
          </div>
          <ComponentBlock ComponentName="Popular Albums" type="albums" description="" details={this.state.PopularAlbums} excess={false}   /> 
           <div className="all-albums" >
             <h2 id="all-albums" >All Albums</h2>
           </div>    
          <div className="col-xs-12 col-sm-12 ">
        <table className="table table-borderless">
          <tbody>
                                            
           {this.state.AlbumInfo.map((album,index)=>(
            <tr key={index}>
              <th scope="row" className=" d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li >{album.albumName}</li>
                  <li className="song-info"><a href='/ArtistAccount/ArtistWebPlayer/'>{album.Singer}</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'> </a></li>
                </ul>
              </td>
              <td >
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a className="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show}>Edit</a>
                    <a className="dropdown-item drop-class" onClick={this.deleteAlbum} href="#">Remove</a>
                  </div>
                </div>
              </td>
            </tr>
            ))} 
             
      </tbody>
    </table>

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
export default connect(mapStateToProps)(ArtistAlbums);

