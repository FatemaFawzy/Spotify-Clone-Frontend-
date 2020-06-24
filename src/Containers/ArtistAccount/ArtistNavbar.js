import React, { Component } from "react";
import "./ArtistNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {useHistory} from "react-router-dom";
import * as History from "@/HelperFunctions/History";
import DropDownMenu from "@/Containers/GenericComponenets/DropDownMenu";
import COllapseDropDown from "@/Containers/GenericComponenets/CollapseDropDown";
import CollapseDropDown from "@/Containers/GenericComponenets/CollapseDropDown";

 
/** Class ArtistNavbar 
 * @category ArtistNavbar
 * @extends Component
 */
export class ArtistNavbar extends Component{
  constructor(props){
    super(props); 
    this.props={
  /**URL of image in dropdown menu
   * @memberof ArtistNavbar
   * @type {string}
   */
      image:"",
  /**Name in dropdown menu
   * @memberof ArtistNavbar
   * @type {string}
   */
      name:"",
   /**Account type to indicate whether the upgrade button should show or not.
   * @memberof ArtistNavbar
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

            <div className="artist-nav"  style={{backgroundColor: this.props.color}}> 
                              
              <div className="home-nav-nabar">
              
                  <div className="collapse-drop">
                    <CollapseDropDown />
                  </div>              
                  <div className="drop-down">

                    <Link to="/"><button id="upgradebtn">LOG OUT</button></Link>
                  
                  </div>
            
              </div>


            </div>
                   
);
  }
}

export default withRouter(ArtistNavbar);