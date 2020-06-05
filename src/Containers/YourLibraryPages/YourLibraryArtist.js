import React ,{ Component} from 'react';
import './YourLibraryArtist.css';
import YourLibraryNavbar from "../../Components/YourLibraryComponents/YourLibraryNavbar";
import GeneralItem from "../GenericComponenets/GeneralItem";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL"

/** Class YourLibraryArtist
 * @extends Component
 */
export class YourLibraryArtist extends Component {
  constructor(props){
    super(props);
    this.state = {
    /**Includes results of fetch requests
   * @memberof YourLibraryArtist
   * @type {Array<artists>}
   */
      artistArray:[],

    /**Final array of albums
   * @memberof YourLibraryArtist
   * @type {String}
   */
        total:""

    }
  }

  /**A function that fires once the homepage is called
   * @memberof YourLibraryArtist
   * @func componentDidMount
   */
  componentDidMount() {
     //Make a request with this.props.userID
    //assume this is the returned data
    const requestOptions={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
    const url = "http://spotifyclone.mocklab.io/artists/me"; 
    fetch(url,requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const artists = data.artists.map(item => {
          return (
            <GeneralItem
            image={item.imagePath}
            name={item.artistName}
            subname="Artist"
            roundimage= "true"
            id={item.id}
            type="ARTIST"
          />
          )
        }
        )
        this.setState({total:artists});
      })
      .catch((error)=>{
        console.log(error);
      })
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