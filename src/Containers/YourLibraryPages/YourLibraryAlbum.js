import React ,{ Component} from 'react';
import './YourLibraryAlbum.css';
import GeneralItem from "../GenericComponenets/GeneralItem";
import YourLibraryNavbar from "@/Components/YourLibraryComponents/YourLibraryNavbar";
import {BASEURL} from "@/Constants/baseURL";

/** Class YourLibraryAlbum
 * @extends Component
 */
export class YourLibraryAlbum extends Component {
  constructor(props){
    super(props);
    this.state = {
   /**Final array of albums
   * @memberof YourLibraryAlbum
   * @type {String}
   */
      total:""
    }
  }

  /**A function that fires once the homepage is called
   * @memberof YourLibraryAlbum
   * @func componentDidMount
   */
  componentDidMount() {
     //Make a request with this.props.userID
    //assume this is the returned data

      /**Object needed for the request.
* @memberof YourLibraryAlbum
* @type {object}
*/
    const requestOptions={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
           /**URL for request.
   * @memberof YourLibraryAlbum
   * @type {string}
   */
    const url = BASEURL+"albums/me"; 
    fetch(url,requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const albums = data.albums.map(item => {
          return (
            <GeneralItem
            image={item.imagePath}
            name={item.albumName}
            subname={item.artistName}
            id={item._id}
            type="ALBUM"
          />
          )
        }
        )
        this.setState({total:albums});
      })
      .catch((error)=>{
        console.log(error);
      })
  
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