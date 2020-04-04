import React, { Component } from "react";
import "./HomePageNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {useHistory} from "react-router-dom";
import * as History from "../../HelperFunctions/History";
import DropDownMenu from "../../Containers/GenericComponenets/DropDownMenu";


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
     <div>
      {/* <ul className="navbar-nav mr-auto justify-content-start">
        <li className="nav-item" onClick={() => { History.goBackward(); this.props.history.push(History.currentURL)}}>
          <a className="nav-link icons ml-4"  ><i className="fas fa-chevron-circle-left icon-color fa-2x"></i></a>
        </li>
        <li className="nav-item" onClick={() => {History.goForward(); this.props.history.push(History.currentURL)}}>
          <a className="nav-link icons mr-4" ><i className="fas fa-chevron-circle-right icon-color fa-2x "></i></a>
        </li>
        
        </ul> */}
         <ul id="ul-upgrade" className={this.props.accountType == "premium" ? 'd-none' : ''}>
         <li><Link to="/premium"><button id="upgradebtn">UPGRADE</button></Link></li>
         </ul>
    </div> 
   
      <ul className="navbar-nav ml-auto d-flex d-none col-md-2 col-lg-3 col-xl-2" id="button-selector">
       
        
        <li>
        <DropDownMenu  />
        </li>  
      </ul> 
    
  </nav>
</div>
);
  }
}

export default withRouter(HomePageNavbar);