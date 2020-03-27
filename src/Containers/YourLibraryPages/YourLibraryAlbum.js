import React ,{ Component} from 'react';
import './YourLibraryAlbum.css';
import YourLibraryNavbar from "../../Components/YourLibraryNavbar";

class YourLibraryAlbum extends Component {
render() {
return ( 
  <div className="your-library-album">
    <div  className="content">
      <div className="your-library-scroller" id="your-library-scroller">
        <YourLibraryNavbar image="https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/55551870_2158938997531927_3034631111746519040_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGwe2-J_MT4EygifW-VfNvej1uF1cRNlvwiorJldSFzTIIpuVox357lEbAA-O4M3jEKKMKWI8PrCYFUvy0wVPf8XPOsIIRBGNPyiy7u7AH8Ug&_nc_ohc=V_GhBoRn94kAX_oH8FG&_nc_ht=scontent.faly3-1.fna&oh=2049561230477a31e5eb3fe1ea8f3a92&oe=5EA2F5F0"/>
        <div className="actual-content">
        <div>Album Content </div>
        </div>

      </div>
    </div>  
  </div>
);
}
}
export default YourLibraryAlbum;