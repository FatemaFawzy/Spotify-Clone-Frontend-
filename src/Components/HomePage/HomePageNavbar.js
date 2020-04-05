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

            <div className="home-nav"  style={{backgroundColor: this.props.color}}> 
                              
              <div className="home-nav-nabar">
              
                <ul id="ul-upgrade" className={this.props.accountType == "premium" ? 'd-none' : ''}>
                  <li><Link to="/premium"><button id="upgradebtn">UPGRADE</button></Link></li>
                </ul>
              </div>
              
              <div className="drop-down">

                <DropDownMenu/>

              </div>


            </div>
                   
);
  }
}

export default withRouter(HomePageNavbar);