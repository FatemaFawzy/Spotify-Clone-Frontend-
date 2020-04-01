import React ,{ Component} from 'react';
import './YourLibraryArtist.css';
import YourLibraryNavbar from "../../Components/YourLibraryNavbar";
import GeneralItem from "../../Containers/GeneralItem";

class YourLibraryArtist extends Component {
  constructor(props){
    super(props);
    this.state = {
      ArtistImages: ["https://i.scdn.co/image/1fc2f537d678d701d7d143a8fd4f0c2f29fbde22","https://i.scdn.co/image/cfd6e47fbe4446750ec209dfa37bc919cb55c86f","https://i.scdn.co/image/ab67616d0000b27353789eb3f891f59bde5755aa","https://i.scdn.co/image/012ecd119617ac24ab56620ace4b81735b172686"],
      ArtistNames: ["Rihanna","21 Savage","Hassan Shakoush","Drake"],
    }
  }
render() {
return ( 
  <div className="your-library-artist">

        <div className="actual-content">
        <h1 className="artist-header">Artists</h1>

        <GeneralItem
        image={this.state.ArtistImages[0]}
        name={this.state.ArtistNames[0]}
        subname="Artist"
        roundimage="true"
        type="ARTIST"
      />
       <GeneralItem
        image={this.state.ArtistImages[1]}
        name={this.state.ArtistNames[1]}
        subname="Artist"
        roundimage="true"
        type="ARTIST"
      />
       <GeneralItem
        image={this.state.ArtistImages[2]}
        name={this.state.ArtistNames[2]}
        subname="Artist"
        roundimage="true"
        type="ARTIST"
      />
       <GeneralItem
        image={this.state.ArtistImages[3]}
        name={this.state.ArtistNames[3]}
        subname="Artist"
        roundimage="true"
        type="ARTIST"
      />
        </div>
  </div>
);
}
}
export default YourLibraryArtist;