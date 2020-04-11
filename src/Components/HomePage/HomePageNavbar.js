import React, { Component } from "react";
import "./HomePageNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {useHistory} from "react-router-dom";
import * as History from "../../HelperFunctions/History";
import DropDownMenu from "../../Containers/GenericComponenets/DropDownMenu";
import COllapseDropDown from "../../Containers/GenericComponenets/CollapseDropDown";
import CollapseDropDown from "../../Containers/GenericComponenets/CollapseDropDown";

 
/** Class HomepageSidebar 
 * @category HomePage
 * @extends Component
 */
export class HomePageNavbar extends Component{
  constructor(props){
    super(props); 
    this.props={
  /**URL of image in dropdown menu
   * @memberof HomePageNavbar
   * @type {string}
   */
      image:"",
  /**Name in dropdown menu
   * @memberof HomePageNavbar
   * @type {string}
   */
      name:"",
   /**Account type to indicate whether the upgrade button should show or not.
   * @memberof HomePageNavbar
   * @type {string}
   */
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
              
                <div className="collapse-drop">
                  <CollapseDropDown />
                </div>
                  
                
                  <div id="ul-upgrade" className={this.props.accountType == "premium" ? 'd-none' : ''}>
                  <Link to="/premium"><button id="upgradebtn">UPGRADE</button></Link>
                  </div>
                
              </div>
              
              <div className="drop-down">

                <DropDownMenu/>

              </div>


            </div>
                   
);
  }
}

export default withRouter(HomePageNavbar);