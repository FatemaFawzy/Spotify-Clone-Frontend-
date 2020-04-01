import React from "react";
import "./YourLibraryNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

const YourLibraryNavbar=(props)=>(
<div className="your-library-nav">
  <nav className="navbar navbar-nav navbar-expand navbar-dark nav-bgblack navbar-default no-gutters d-flex" id="main-nav"   >   
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link icons ml-4"><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icons mr-4"><i className="fas fa-chevron-circle-right icon-color fa-2x "></i></a>
        </li>
        <li className="nav-item">
          <NavLink to="/webplayer/yourlibrary"><a className="nav-link words">Playlists</a></NavLink>
        </li>
        <li className="nav-item d-none d-lg-inline">
          <NavLink to="/webplayer/yourlibrary/artist"><a className="nav-link words">Artists</a></NavLink>
        </li>
        <li className="nav-item d-none d-lg-inline">     
          <NavLink to="/webplayer/yourlibrary/album"><a className="nav-link words">Albums</a></NavLink>
        </li>
        <li className="nav-item dropdown d-inline d-lg-none">
          <div className="btn-group">
            <button  id="more-button" type="button" className="btn dropdown-toggle words" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
            </button>
            <div className="dropdown-menu" id="width">
            <NavLink to="/webplayer/yourlibrary/artist" className="dropdown-item" ><button className="dropdown-item white-words pl-2" type="button">Artists</button></NavLink>
            <NavLink to="/webplayer/yourlibrary/album" className="dropdown-item" > <button className="dropdown-item white-words pl-2" type="button">Albums</button></NavLink>
            </div>
          </div>
        </li> 
        </ul>
    </div>
      <ul className="navbar-nav col d-flex justify-content-end" id="button-selector">
        <li>
          <div className="btn-group mr-4">
            <button type="button" className="btn dropdown-toggle account-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img  className="image" src={props.image} alt="User"/>
              <p className="name">Mariam El Baz</p>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
            <BrowserRouter forceRefresh={true}><Link to="/account" className="dropdown-item"><button className="dropdown-item white-words pl-4" type="button">Account</button></Link>   </BrowserRouter>
            <BrowserRouter forceRefresh={true}><Link to="/account" className="dropdown-item"><button className="dropdown-item white-words border-on-top" type="button">Log Out</button></Link>   </BrowserRouter>
            </div>
          </div>
        </li>  
      </ul> 
    
  </nav>
</div>
);
export default withRouter(YourLibraryNavbar);