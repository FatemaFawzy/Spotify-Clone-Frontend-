import React ,{ Component} from 'react';
import './YourLibraryAlbum.css';
import YourLibraryNavbar from "../Components/YourLibraryNavbar";

class YourLibraryAlbum extends Component {
render() {
return ( 
  <div className="your-library-album">
    <div  className="content">
      <div className="your-library-scroller" id="your-library-scroller">
        <YourLibraryNavbar/>
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