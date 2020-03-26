import React ,{ Component} from 'react';
import './YourLibrary.css';
import HomepageSidebar from "../Components/HomePageSidebar";
import YourLibraryNavbar from "../Components/YourLibraryNavbar";

class YourLibrary extends Component {
render() {
return ( 
  <div className="your-library">
    <div  className="content">
      <div className="your-library-scroller" id="your-library-scroller">
        <YourLibraryNavbar/>
      </div>
    </div>  
  </div>
);
}
}
export default YourLibrary;