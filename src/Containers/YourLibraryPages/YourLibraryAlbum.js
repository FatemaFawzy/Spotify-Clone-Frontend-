import React ,{ Component} from 'react';
import './YourLibraryAlbum.css';
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
import YourLibraryNavbar from "../../Components/YourLibraryComponents/YourLibraryNavbar";


class YourLibraryAlbum extends Component {
  constructor(props){
    super(props);
    this.state = {
      albumArray:[{image:"https://i.scdn.co/image/ab67616d0000b2735132ca4fc74bf9ef23ffe1a8",
                  name:"Championship",
                  artist:"Meek Mill",
                  id:"1"},
                  {image:"https://i.scdn.co/image/ab67616d0000b273fed52a40ad6c4b45f5cf7f11",
                  name:"Bank Account",
                  artist:"21 Savage",
                  id:"2"},
                  {image:"https://i.scdn.co/image/ab67616d0000b273aa451cc44a4ac5ffb88ee848",
                  name:"Privacy",
                  artist:"Cardi B",
                  id:"3"},
                  {image:"https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd",
                  name:"X",
                  artist:"Ed Sheeran",
                  id:"4"}],
      total:""
    }
  }
  componentDidMount() {
    const albums = this.state.albumArray.map(item => {
      return (
        <GeneralItem
        image={item.image}
        name={item.name}
        subname={item.description}
        id={item.id}
        type="PLAYLIST"
      />
      )
    }
    )
    this.setState({total:albums});
  }
render() {
return ( 
  <div className="your-library-album">
    <YourLibraryNavbar  moreButtonName="Albums" type="Albums" name="Mariam El Baz" image="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" />
        <div className="actual-content">
        <h1 className="album-header">Albums</h1>
        {this.state.total}
        </div> 
  </div>
);
}
}
export default YourLibraryAlbum;