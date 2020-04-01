import React ,{ Component} from 'react';
import './YourLibraryAlbum.css';
import GeneralItem from "../../Containers/GeneralItem";
import YourLibraryNavbar from "../../Components/YourLibraryNavbar";


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