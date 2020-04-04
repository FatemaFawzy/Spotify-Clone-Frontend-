import React ,{ Component} from 'react';
import './YourLibraryAlbum.css';
import GeneralItem from "../../Containers/GeneralItem";
import YourLibraryNavbar from "../../Components/YourLibraryComponents/YourLibraryNavbar";


class YourLibraryAlbum extends Component {
  constructor(props){
    super(props);
    this.state = {
      AlbumImages: ["https://i.scdn.co/image/ab67616d0000b2735132ca4fc74bf9ef23ffe1a8","https://i.scdn.co/image/ab67616d0000b273fed52a40ad6c4b45f5cf7f11","https://i.scdn.co/image/ab67616d0000b273aa451cc44a4ac5ffb88ee848","https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd"],
      AlbumNames: ["Championship","Bank Account","Privacy","X"],
      AlbumArtist: ["Meek Mill","21 Savage","Cardi B","Ed Sheeran"],
    }
  }
render() {
return ( 
  <div className="your-library-album">
    <YourLibraryNavbar  moreButtonName="Albums" type="Albums" name="Mariam El Baz" image="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" />
        <div className="actual-content">
        <h1 className="album-header">Albums</h1>
        <GeneralItem
        image={this.state.AlbumImages[0]}
        name={this.state.AlbumNames[0]}
        subname={this.state.AlbumArtist[0]}
        type="ALBUM"
      />
       <GeneralItem
        image={this.state.AlbumImages[1]}
        name={this.state.AlbumNames[1]}
        subname={this.state.AlbumArtist[1]}
        type="ALBUM"
      />
       <GeneralItem
        image={this.state.AlbumImages[2]}
        name={this.state.AlbumNames[2]}
        subname={this.state.AlbumArtist[2]}
        type="ALBUM"
      />
       <GeneralItem
        image={this.state.AlbumImages[3]}
        name={this.state.AlbumNames[3]}
        subname={this.state.AlbumArtist[3]}
        type="ALBUM"
      />


        </div> 
  </div>
);
}
}
export default YourLibraryAlbum;