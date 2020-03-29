import React from "react";
import "./HomePageNavbar.css";
import {BrowserRouter } from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

const HomePageNavbar=(props)=>(
<div className="home-nav">

  <nav className="navbar-fixed-top navbar-nav navbar-expand navbar-dark nav-bgblack navbar-default pb-4 no-gutters " id="main-nav"   >
    
   
      <div className="d-flex justify-content-start">
      <ul className="navbar-nav  mr-auto">
        <li className="nav-item">
          <a className="nav-link icons"><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icons"><i className="fas fa-chevron-circle-right icon-color fa-2x "></i></a>
        </li>
        
        </ul>
        </div>
     
        <ul className=" navbar-nav  ml-auto" id="button-selector">
        <li className="d-flex justify-content-end">
          <div className="btn-group">
            <button  id="user-button" type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="account-button">
              <img  className="image" src={props.image} alt="User"/>
              <p className="d-none d-xl-inline name">Ali Halafawy <i className="fas fa-sort-down"></i></p>
            </div>
            </button>
            <div  className="dropdown-menu dropdown-menu-right">
             <BrowserRouter forceRefresh={true}><Link to="/account"><button className="dropdown-item" type="button">Account</button></Link></BrowserRouter> 
              
              
              <button className="dropdown-item" type="button">Log Out</button>
            </div>
          </div>
        </li>  
      </ul>
    
     
  </nav>

 </div>

);
export default withRouter(HomePageNavbar);