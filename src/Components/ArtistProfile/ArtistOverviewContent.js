import React, { Component } from 'react';
import "./ArtistOverviewContent.css";

class ArtistOverviewContent extends Component {

  state= { 
    SongInfo: [
      {id : 1, SongName : "Born To Die",Duration : "3:52", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 2, SongName : "Love", Duration : "4:15", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 3, SongName : "Summertime Sadness", Duration : "2:58", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 4, SongName : "Born To Die", Duration : "3:52", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
      {id : 5, SongName : "Love", Duration : "4:15", SongPhoto : "https://i.scdn.co/image/ab67616d0000b2733aeff37d3f480564f6e88059"},
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

        <section>
          <h1> Albums </h1>
        </section>

        <section>
          <h1> Singles </h1>
        </section>        
          
          
      </div>
    );
  }
}
export default ArtistOverviewContent;