import React, { Component } from 'react';
import "./ArtistOverviewContent.css";
import "./MediaObject";
import MediaObject from './MediaObject';
import {connect} from "react-redux";
import { BASEURL } from '../../Constants/baseURL';

/** Class ArtistOverviewContent
 * @extends Component
 */
export class ArtistOverviewContent extends Component {

  state= { 
  /**Array of popular songs info 
   * @memberof ArtistOverviewContent
   * @type {Array<songsInfo>}
   */
    // SongInfo:[],
    SongInfo: [
      {id : 1, trackName : "Another Love (Zwette Edit)",Duration : "3:52", trackImage : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 2, trackName : "Heal", Duration : "4:15", trackImage : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 3, trackName : "True Colors", Duration : "2:58", trackImage : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 4, trackName : "Grow Old With Me", Duration : "3:52", trackImage : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 5, trackName : "Summer Day", Duration : "4:15", trackImage: "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
    ],

  /**Array of artist albums info 
   * @memberof ArtistOverviewContent
   * @type {Array<albumInfo>}
   */    
    albumInfo: [
      {id : 6, albumName : "Wrong Crowd (Deluxe)", albumPhoto : "https://i.scdn.co/image/ab67616d0000b273dc53069e4f4d2ba5b6b707a8",
      albumLink: "/webplayer/album/"},
      {id : 7, albumName : "Jubilee Road (Deluxe)", albumPhoto : "https://i.scdn.co/image/ab67616d0000b27310491389a1996bbeb5076f60",
      albumLink: "/webplayer/album/"},
      {id : 8, albumName : "Wrong Crowd (Deluxe)", albumPhoto : "https://i.scdn.co/image/ab67616d0000b273dc53069e4f4d2ba5b6b707a8",
      albumLink: "/webplayer/album/"},
      {id : 9, albumName : "Jubilee Road (Deluxe)", albumPhoto : "https://i.scdn.co/image/ab67616d0000b27310491389a1996bbeb5076f60",
      albumLink: "/webplayer/album/"},
      {id : 10, albumName : "Wrong Crowd (Deluxe)", albumPhoto : "https://i.scdn.co/image/ab67616d0000b273dc53069e4f4d2ba5b6b707a8",
      albumLink: "/webplayer/album/"},
      {id : 11, albumName : "Jubilee Road (Deluxe)", albumPhoto : "https://i.scdn.co/image/ab67616d0000b27310491389a1996bbeb5076f60",
      albumLink: "/webplayer/album/"},
    ],

  /**Array of artist singles info 
   * @memberof ArtistOverviewContent
   * @type {Array<singlesInfo>}
   */
    singlesInfo: [
      {id : 12, singleName : "If you wanna love somebody (Acoustic)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9",
      albumLink: "/webplayer/album/"},
      {id : 13, singleName : "Another Love (Zwette Edit)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059",
      albumLink: "/webplayer/album/"},
      {id : 14, singleName : "If you wanna love somebody (Acoustic)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9",
      albumLink: "/webplayer/album/"},
      {id : 15, singleName : "Another Love (Zwette Edit)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059",
      albumLink: "/webplayer/album/"},
      {id : 16, singleName : "If you wanna love somebody (Acoustic)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9",
      albumLink: "/webplayer/album/"},
      {id : 17, singleName : "Another Love (Zwette Edit)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059",
      albumLink: "/webplayer/album/"},
    ],

  /**state object for showing more or less albums 
   * @memberof ArtistOverviewContent
   * @type {String}
   */
    showAlbums: "SHOW MORE",

  /**state object for showing more or less singles 
   * @memberof ArtistOverviewContent
   * @type {String}
   */
    showSingles: "SHOW MORE",
  }

   /**Function that is called when the component renders
   * @memberof ArtistOverviewContent
   * @func componentDidMount
   */
  componentDidMount(){
      // get artist's popular tracks
      // var url = "https://b9b31d99-4598-43e6-90a8-893c3988d489.mock.pstmn.io/tracks/top?artistId=123"; 

      // var requestOptions = {
      //   method: 'GET',
      //   headers: { 'x-auth': "eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s" },
      // };
      
      // fetch(url,requestOptions)
      //   .then((response) => { return response.json()})
      //   .then((data) => {
      //     this.setState({
      //     SongInfo: data.popularTracks});
      //     console.log(this.state.SongInfo);
      //   })
      //   .catch((error)=>{console.log(error);
  
      //   })

      // get artist's popular tracks
      var url = BASEURL+ "albums/byartist/123"; 

      var requestOptions = {
        method: 'GET'
      };
      
      fetch(url,requestOptions)
        .then((response) => { return response.json()})
        .then((data) => {
          this.setState({
          albumInfo: data.albumInfo});
          console.log(this.state.SongInfo);
        })
        .catch((error)=>{console.log(error);
  
        })
  }

   /**Function that is called to show more albums
   * @memberof ArtistOverviewContent
   * @func showMoreAlbums
   */  
  showMoreAlbums= e => {

    if(this.state.showAlbums === "SHOW MORE") {
      this.setState ({showAlbums: "SHOW LESS"});
    }

    else if(this.state.showAlbums === "SHOW LESS") {
      this.setState ({showAlbums: "SHOW MORE"});
    }

    var icon= document.getElementById("albums-arrow");
    if (icon !== null){
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");}
  }

  /**Function that is called to show more singles
   * @memberof ArtistOverviewContent
   * @func showMoreSingles
   */  
  showMoreSingles= e => {

    if(this.state.showSingles === "SHOW MORE") {
      this.setState ({showSingles: "SHOW LESS"});
    }

    else if(this.state.showSingles === "SHOW LESS") {
      this.setState ({showSingles: "SHOW MORE"});
    }

    var icon= document.getElementById("singles-arrow");
    if (icon !== null){
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");}
  }

  render(){

    return (
      <div id="overview-body" className="artist-overview-content">
        
        <section>
          <h1 id="popular-h1"> Popular </h1>

          <table className="table table-borderless d-flex">
            <tbody>
              {/* Display Songs */}
              {this.state.SongInfo.map((song,index)=>(
              <tr key={index}>
                <th className="music-sign d-flex  mr-3">	 </th>

                <td className="song-content pl-0 ml-0">
                  <span>
                    {/* <img className="song-photo mr-3" src={`http://52.14.190.202:8000/images/${song.trackImage}`}></img> */}
                    <img className="song-photo mr-3" src={song.trackImage}></img>
                    <span className="song-name"> {song.trackName} </span>
                  </span>
                </td>

                <td>
                  <div className="dropdown ">
                    <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                    <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                      <a className="dropdown-item drop-class" href="#">Add to your liked songs</a>
                      <a className="dropdown-item drop-class" href="#">Add to playlist</a>
                    </div>
                  </div>
                </td>

                <td className="duration"> {song.duration}</td>
              </tr>
              ))} 
              
            </tbody>
          </table>

        </section>

        <section className="container p-0 m-0 ">
          <h1> Albums </h1>
          <div className="row">

          {this.state.albumInfo.slice(0,3).map((album,index)=>(   
            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2"> 
              <MediaObject key={index} image={album.albumPhoto} 
              objectName={album.albumName} albumLink={album.albumLink}> </MediaObject>
            </div>  
          ))}

          {this.state.albumInfo.slice(3,this.state.albumInfo.length).map((album,index)=>(   
            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 hide-these"> 
              <MediaObject key={index} image={album.albumPhoto} 
              objectName={album.albumName} albumLink={album.albumLink}> </MediaObject>
            </div>  
          ))}           
          </div>

{/* Contents of show more drop down */}
          <div className="row justify-content-center">
            <div className="collapse" id="collapseAlbums">

              <div className="row">
              {this.state.albumInfo.slice(3,this.state.albumInfo.length).map((album,index)=>(   
                  <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2"> 
                    <MediaObject key={index} image={album.albumPhoto} 
                    objectName={album.albumName} albumLink={album.albumLink}> </MediaObject>
                  </div>  
              ))}
              </div>

            </div>

            <button id="show-more-album-btn"className="btn show-more mb-3" type="button" data-toggle="collapse" data-target="#collapseAlbums"
                aria-expanded="false" aria-controls="collapseExample" onClick={this.showMoreAlbums}> 
                {this.state.showAlbums} <i id="albums-arrow" className="fas fa-chevron-down"></i> 
            </button>

          </div>

        </section>

        <section className="container m-0 p-0">
          <h1> Singles </h1>
          <div className="row">
            {this.state.singlesInfo.slice(0,3).map((single,index)=>(   
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2"> 
                  <MediaObject key={index} image={single.singlePhoto} 
                  objectName={single.singleName} albumLink={single.albumLink}> </MediaObject>
                </div>  
            ))}

            {this.state.singlesInfo.slice(3,this.state.singlesInfo.length).map((single,index)=>(   
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 hide-these"> 
                  <MediaObject key={index} image={single.singlePhoto} 
                  objectName={single.singleName} albumLink={single.albumLink}> </MediaObject>
                </div>  
            ))}
          </div>
          
{/* Contents of show more drop down */}
          <div className="row justify-content-center">

            <div className="collapse" id="collapseSingles">
              <div className="row">
                {this.state.singlesInfo.slice(3,this.state.singlesInfo.length).map((single,index)=>(   
                    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2"> 
                      <MediaObject key={index} image={single.singlePhoto} 
                  objectName={single.singleName} albumLink={single.albumLink}> </MediaObject>
                    </div>  
                ))}
                </div>
            </div>

            <button className="btn show-more mb-3" type="button" data-toggle="collapse" data-target="#collapseSingles"
                aria-expanded="false" aria-controls="collapseExample" onClick={this.showMoreSingles}> 
                {this.state.showSingles} <i id="singles-arrow" className="fas fa-chevron-down"></i> 
            </button>
            
          </div>

        </section>        
          
          
      </div>
    );
  }
}
  /**A function connecting component to redux store
 * @memberof ArtistOverviewContent
 * @func mapStateToProps
 */
const mapStateToProps = state => {

  return {
    userID : state.userID
    //now you have access to the userID as this.props.userID inside the class component.
  };

};

export default connect(mapStateToProps)(ArtistOverviewContent);