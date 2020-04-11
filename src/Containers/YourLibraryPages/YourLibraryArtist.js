import React ,{ Component} from 'react';
import './YourLibraryArtist.css';
import YourLibraryNavbar from "../../Components/YourLibraryComponents/YourLibraryNavbar";
import GeneralItem from "../GenericComponenets/GeneralItem";
import {connect} from "react-redux";

export class YourLibraryArtist extends Component {
  constructor(props){
    super(props);
    this.state = {
      artistArray:[],
        total:""

    }
  }
  componentDidMount() {
     //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({artistArray:data.slice(0,10)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    const artistArray = [
      {image:"https://i.scdn.co/image/1fc2f537d678d701d7d143a8fd4f0c2f29fbde22",
      name:"Rihanna",
      id:"1"},
      {image:"https://i.scdn.co/image/cfd6e47fbe4446750ec209dfa37bc919cb55c86f",
      name:"21 Savage",
      id:"2"},
      {image:"https://i.scdn.co/image/ab67616d0000b27353789eb3f891f59bde5755aa",
      name:"Hassan Shakoush",
      id:"3"},
      {image:"https://i.scdn.co/image/012ecd119617ac24ab56620ace4b81735b172686",
      name:"Drake",
      id:"4"},
      ];
    const artists = artistArray.map(item => {
      return (
        <GeneralItem
        image={item.image}
        name={item.name}
        subname="Artist"
        roundimage= "true"
        id={item.id}
        type="ARTIST"
      />
      )
    }
    )
    this.setState({total:artists});
  }
render() {
return ( 
  <div className="your-library-artist">
        <YourLibraryNavbar moreButtonName="Artists" type="Artists" name="Mariam El Baz" image="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0" />
        <div className="actual-content">
        <h1 className="artist-header">Artists</h1>
        {this.state.total}
        </div>
  </div>
);
}
}
const mapStateToProps = state => {

  return {
    userID:state.userID
  };

};
export default connect(mapStateToProps)(YourLibraryArtist);