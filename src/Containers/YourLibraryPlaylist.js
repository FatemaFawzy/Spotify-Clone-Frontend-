import React ,{ Component} from 'react';
import './YourLibraryPlaylist.css';
import YourLibraryNavbar from "../Components/YourLibraryNavbar";

class YourLibraryPlaylist extends Component {
render() {
return ( 
  <div className="your-library-playlist">
    <div  className="content">
      <div className="your-library-scroller" id="your-library-scroller">
        <YourLibraryNavbar/>
        <div className="actual-content">
        <div>Playlist Content </div>
        </div>

      </div>
    </div>  
  </div>
);
}
}
export default YourLibraryPlaylist;