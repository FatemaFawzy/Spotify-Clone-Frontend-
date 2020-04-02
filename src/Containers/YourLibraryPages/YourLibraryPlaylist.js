import React ,{ Component} from 'react';
import './YourLibraryPlaylist.css';
import YourLibraryNavbar from "../../Components/YourLibraryNavbar";
import GeneralItem from "../../Containers/GeneralItem";
import LikedSongsComponent from '../../Components/YourLibraryComponents/LikedSongsComponent';

class YourLibraryPlaylist extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlistImages: ["https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba","https://i.scdn.co/image/ab67706f0000000262822373d6fce52feea1501c","https://i.pinimg.com/474x/75/28/e7/7528e70aef7cf03be7a5fb13a163f476.jpg","https://pl.scdn.co/images/pl/default/2d5e3dba500f5a4f87581eaf7e294089806b6ba9","https://i.scdn.co/image/ab67706f00000002b6b079ea1e8f5af584d7a897"],
      playlistNames: ["Mood Booster","Pop PunkFaves","Today's Top Hits","Comfort Zone","Hip Hop Drive"],
      playlistDescriptions: ["Ride on dem swings","Your favorite punks.","Drake is on top of the Hot 100!","Chilled songs that you are familiar with - no surprises!","Hey there homie.."],
    }
  }
render() {
return ( 
  <div className="your-library-playlist">
     <YourLibraryNavbar name="Mariam El Baz" image="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" />
        <div className="actual-content">
        <h1 className="playlist-header">Playlists</h1>
        <LikedSongsComponent {...this.props}/>

        <GeneralItem
        image={this.state.playlistImages[0]}
        name={this.state.playlistNames[0]}
        subname={this.state.playlistDescriptions[0]}
        type="PLAYLIST"
      />

<GeneralItem
        image={this.state.playlistImages[1]}
        name={this.state.playlistNames[1]}
        subname={this.state.playlistDescriptions[1]}
        type="PLAYLIST"
      />

<GeneralItem
        image={this.state.playlistImages[2]}
        name={this.state.playlistNames[2]}
        subname={this.state.playlistDescriptions[2]}
        type="PLAYLIST"
      />

<GeneralItem
        image={this.state.playlistImages[3]}
        name={this.state.playlistNames[3]}
        subname={this.state.playlistDescriptions[3]}
        type="PLAYLIST"
      />

<GeneralItem
       image={this.state.playlistImages[4]}
       name={this.state.playlistNames[4]}
       subname={this.state.playlistDescriptions[4]}
        type="PLAYLIST"
      />
        </div>

      </div>

);
}
}
export default YourLibraryPlaylist;