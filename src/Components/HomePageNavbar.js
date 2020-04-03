import React, { Component } from "react";
import "./HomePageNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {useHistory} from "react-router-dom";
import * as History from "../HelperFunctions/History";


export class HomePageNavbar extends Component{
  constructor(props){
    super(props); 
    this.props={
      image:"",
      name:"",
      accountType:""
     
    }
  }

  // handleBackButton = () => {
  //   // let history = useHistory()
  //   // history.goBack();
  // };
  
  render(){
  return (
<div className="home-nav">
  <nav className="navbar navbar-nav navbar-expand navbar-dark nav-bgblack navbar-default no-gutters d-flex" id="main-nav"  style={{backgroundColor: this.props.color}} >   
    {/* <div>
      <ul className="navbar-nav mr-auto justify-content-start">
        <li className="nav-item" onClick={() => { History.goBackward(); this.props.history.push(History.currentURL)}}>
          <a className="nav-link icons ml-4"  ><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        </li>
        <li className="nav-item" onClick={() => {History.goForward(); this.props.history.push(History.currentURL)}}>
          <a className="nav-link icons mr-4" ><i className="fas fa-chevron-circle-right icon-color fa-2x "></i></a>
        </li>
        
        </ul>
    </div> */}
    <ul id="ul-upgrade" className={this.props.accountType == "premium" ? 'd-none' : ''}>
    <li><Link to="/premium"><button id="upgradebtn">UPGRADE</button></Link></li>
    </ul>
      <ul className="navbar-nav ml-auto d-flex d-none col-md-2 col-lg-3 col-xl-2" id="button-selector">
       
        
        <li>
         <div className="over btn-group mr-4 "  >
            <button type="button" className="btn dropdown-toggle account-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img  className="image" src={this.props.image} alt="User"/>
              <p className="name">{this.props.name}</p>
            </button>
            <div className="over dropdown-menu dropdown-menu-right">
            <BrowserRouter forceRefresh={true}><Link to="/account" className="over dropdown-item"><button className="dropdown-item white-words pl-4" type="button">Account</button></Link>   </BrowserRouter>
            <BrowserRouter forceRefresh={true}><Link to="/" className="over dropdown-item"><button className="dropdown-item white-words border-on-top" type="button">Log Out</button></Link>   </BrowserRouter>
            </div>
          </div>
        </li>  
      </ul> 
    
  </nav>
</div>
);
  }
}

export default withRouter(HomePageNavbar);