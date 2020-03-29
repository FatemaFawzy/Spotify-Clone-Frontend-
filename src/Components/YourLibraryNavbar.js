import React from "react";
import "./YourLibraryNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

const YourLibraryNavbar=(props)=>(
<div className="your-library-nav">

  <nav className="navbar navbar-nav navbar-expand navbar-dark nav-bgblack navbar-default pb-4 no-gutters" id="main-nav"   >
    
   
      <div className="d-flex justify-content-start">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link icons"><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icons"><i className="fas fa-chevron-circle-right icon-color fa-2x "></i></a>
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
            <button  id="more-button" type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
            </button>
            <div className="dropdown-menu dropdown-menu-right">
            <NavLink to="/webplayer/yourlibrary/artist"><button className="dropdown-item" type="button">Artists</button></NavLink>
            <NavLink to="/webplayer/yourlibrary/album"> <button className="dropdown-item" type="button">Albums</button></NavLink>
            </div>
          </div>
        </li> 
        </ul>
        </div>
     
        <ul className="navbar-nav  ml-auto justify-content-end" id="button-selector">
        <li className="d-flex justify-content-end">
          <div className="btn-group">
            <button  id="user-button" type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="account-button">
              <img  className="image" src={props.image} alt="User"/>
              <p className="d-none d-xl-inline name">Mariam El Baz <i className="fas fa-sort-down"></i></p>
            </div>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
<<<<<<< HEAD
            <BrowserRouter forceRefresh={true}><Link to="/account"><button className="dropdown-item" type="button">Account</button></Link>   </BrowserRouter>
=======
            <button className="dropdown-item" type="button">Account</button>
            
>>>>>>> 9337d923b82107e37d4ff5d8f8fcc7928ea2cf01
              <button className="dropdown-item" type="button">Log Out</button>
            </div>
          </div>
        </li>  
      </ul>
    
     
  </nav>
  </div>

);
export default withRouter(YourLibraryNavbar);