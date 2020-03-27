import React ,{ Component} from 'react';
import './YourLibraryArtist.css';
import YourLibraryNavbar from "../Components/YourLibraryNavbar";

class YourLibraryArtist extends Component {
render() {
return ( 
  <div className="your-library-artist">
    <div  className="content">
      <div className="your-library-scroller" id="your-library-scroller">
        <YourLibraryNavbar/>
        <div className="actual-content">
        <div> Artist Content </div>
        </div>

      </div>
    </div>  
  </div>
);
}
}
export default YourLibraryArtist;