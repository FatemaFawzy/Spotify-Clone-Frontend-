import React, { Component } from 'react';
import "./ArtistOverviewContent.css";
import "./MediaObject";
import MediaObject from './MediaObject';

class ArtistOverviewContent extends Component {

  state= { 
    SongInfo: [
      {id : 1, SongName : "Another Love (Zwette Edit)",Duration : "3:52", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 2, SongName : "Heal", Duration : "4:15", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 3, SongName : "True Colors", Duration : "2:58", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 4, SongName : "Grow Old With Me", Duration : "3:52", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 5, SongName : "Summer Day", Duration : "4:15", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
    ],

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

    singlesInfo: [
      {id : 6, singleName : "If you wanna love somebody (Acoustic)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9",
      albumLink: "/webplayer/album/"},
      {id : 7, singleName : "Another Love (Zwette Edit)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059",
      albumLink: "/webplayer/album/"},
      {id : 8, singleName : "If you wanna love somebody (Acoustic)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9",
      albumLink: "/webplayer/album/"},
      {id : 9, singleName : "Another Love (Zwette Edit)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059",
      albumLink: "/webplayer/album/"},
      {id : 10, singleName : "If you wanna love somebody (Acoustic)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9",
      albumLink: "/webplayer/album/"},
      {id : 11, singleName : "Another Love (Zwette Edit)", singlePhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059",
      albumLink: "/webplayer/album/"},
    ],

    showAlbums: "SHOW MORE",
    showSingles: "SHOW MORE",
  }


  showMoreAlbums= e => {

    if(this.state.showAlbums === "SHOW MORE") {
      this.setState ({showAlbums: "SHOW LESS"});
    }

    else if(this.state.showAlbums === "SHOW LESS") {
      this.setState ({showAlbums: "SHOW MORE"});
    }

    var icon= document.getElementById("albums-arrow");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  }

  showMoreSingles= e => {

    if(this.state.showSingles === "SHOW MORE") {
      this.setState ({showSingles: "SHOW LESS"});
    }

    else if(this.state.showSingles === "SHOW LESS") {
      this.setState ({showSingles: "SHOW MORE"});
    }

    var icon= document.getElementById("singles-arrow");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  }

  render(){
    return (
      <div className="artist-overview-content">
        
        <section>
          <h1> Popular </h1>

          <table class="table table-borderless d-flex">
            <tbody>
              {/* Display Songs */}
              {this.state.SongInfo.map((song,index)=>(
              <tr key={index}>
                <th className="music-sign d-flex  mr-3">	 </th>

                <td className="song-content pl-0 ml-0">
                  <span>
                    <img className="song-photo mr-3" src={song.SongPhoto}></img>
                    <span className="song-name"> {song.SongName} </span>
                  </span>
                </td>

                <td>
                  <div className="dropdown ">
                    <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                    <div class="dropdown-menu song-dropdown-content dropdown-menu-right ">
                      <a class="dropdown-item drop-class" href="#">Add to your liked songs</a>
                      <a class="dropdown-item drop-class" href="#">Add to playlist</a>
                    </div>
                  </div>
                </td>

                <td className="duration"> {song.Duration}</td>
              </tr>
              ))} 
              
            </tbody>
          </table>

        </section>

        <section className="container p-0 m-0 ">
          <h1> Albums </h1>
          <div className="row">
            {this.state.albumInfo.map((album,index)=>(   
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2"> 
                  <MediaObject className="media-object" image={album.albumPhoto} 
                  objectName={album.albumName} albumLink={album.albumLink}> </MediaObject>
                </div>  
            ))}
          </div>

          <div className="row justify-content-center">
            <button className="btn show-more" type="button" data-toggle="collapse" data-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample" onClick={this.showMoreAlbums}> 
                {this.state.showAlbums} <i id="albums-arrow" className="fas fa-chevron-down"></i> </button>
            <div className="collapse" id="collapseExample">
              <div >
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>

        </section>

        <section className="container m-0 p-0">
          <h1> Singles </h1>
          <div className="row">
            {this.state.singlesInfo.map((single,index)=>(   
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2"> 
                  <MediaObject image={single.singlePhoto} 
                  objectName={single.singleName} albumLink={single.albumLink}> </MediaObject>
                </div>  
            ))}
          </div>

          <div className="row justify-content-center">
            <button className="btn show-more" type="button" data-toggle="collapse" data-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample" onClick={this.showMoreSingles}> 
                {this.state.showSingles} <i id="singles-arrow" className="fas fa-chevron-down"></i> </button>
            <div className="collapse" id="collapseExample">
              <div >
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>

        </section>        
          
          
      </div>
    );
  }
}
export default ArtistOverviewContent;