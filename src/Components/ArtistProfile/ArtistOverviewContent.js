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
                    {song.SongName}
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
          <ul className="media-object d-flex">
            <li> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b273dc53069e4f4d2ba5b6b707a8" 
              objectName="Wrong Crowd (Deluxe)" albumLink="/webplayer/album/"> </MediaObject>
            </li>
            <li>
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27310491389a1996bbeb5076f60" 
              objectName="Jubilee Road (Deluxe)" albumLink="/webplayer/album/"></MediaObject>
            </li>
            <li> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b273dc53069e4f4d2ba5b6b707a8" 
              objectName="Wrong Crowd (Deluxe)" albumLink="/webplayer/album/"> </MediaObject>
            </li>
            <li>
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27310491389a1996bbeb5076f60" 
              objectName="Jubilee Road (Deluxe)" albumLink="/webplayer/album/"></MediaObject>
            </li>
            <li> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b273dc53069e4f4d2ba5b6b707a8" 
              objectName="Wrong Crowd (Deluxe)" albumLink="/webplayer/album/"> </MediaObject>
            </li>
          </ul>
        </section>

        <section>
          <h1> Singles </h1>
          <ul className="media-object d-flex">
            <li> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9" 
              objectName="If you wanna love somebody (Acoustic)" albumLink="/webplayer/album/"> </MediaObject>
            </li>
            <li>
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059" 
              objectName="Another Love (Zwette Edit)" albumLink="/webplayer/album/"></MediaObject>
            </li>
            <li> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9" 
              objectName="If you wanna love somebody (Acoustic)" albumLink="/webplayer/album/"> </MediaObject>
            </li>
            <li>
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059" 
              objectName="Another Love (Zwette Edit)" albumLink="/webplayer/album/"></MediaObject>
            </li>
            <li> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9" 
              objectName="If you wanna love somebody (Acoustic)" albumLink="/webplayer/album/"> </MediaObject>
            </li>
          </ul>

          {/* <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-2"> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9" 
              objectName="If you wanna love somebody (Acoustic)" albumLink="/webplayer/album/"> </MediaObject>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059" 
              objectName="Another Love (Zwette Edit)" albumLink="/webplayer/album/"></MediaObject>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2"> 
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9" 
              objectName="If you wanna love somebody (Acoustic)" albumLink="/webplayer/album/"> </MediaObject>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059" 
              objectName="Another Love (Zwette Edit)" albumLink="/webplayer/album/"></MediaObject>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b27311d81682fdaaf388651f5ab9" 
              objectName="If you wanna love somebody (Acoustic)" albumLink="/webplayer/album/"> </MediaObject>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <MediaObject image="https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059" 
              objectName="Another Love (Zwette Edit)" albumLink="/webplayer/album/"></MediaObject>
            </div>
          </div> */}

        </section>        
          
          
      </div>
    );
  }
}
export default ArtistOverviewContent;