import React, { Component } from "react";
import "./YourLibraryNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {useHistory} from "react-router-dom";
import { goBackward, goForward } from "@/HelperFunctions/History";
import * as History from "@/HelperFunctions/History";
import DropDownMenu from '@/Containers/GenericComponenets/DropDownMenu';
import CollapseDropDown from "@/Containers/GenericComponenets/CollapseDropDown";


/** Class YourLibraryNavbar specially designed for your library pages in the web player
 * @category YourLibraryNavbar
 * @extends Component
 */
export class YourLibraryNavbar extends Component{
  constructor(props){
    super(props); 
    this.props={
   /**image of user in dropdown menu
   * @memberof YourLibraryNavbar
   * @type {string}
   */
      image:"",
  /**name of user in dropdown menu
   * @memberof YourLibraryNavbar
   * @type {string}
   */
      name:"",
   /**name of user in dropdown menu
   * @memberof YourLibraryNavbar
   * @type {string}
   */
      type:"",
   /**Heading of dropdown menu differs from one page calling the navbar to another
   * @memberof YourLibraryNavbar
   * @type {string}
   */
      moreButtonName:"",
  /**Color of navbar
   * @memberof YourLibraryNavbar
   * @type {string}
   */
      navBackground:""
    }
  }
  // toggleArrow = () => {
  //   document.querySelector("#arrow").classList.toggle("fa-caret-up")
  //   document.querySelector("#arrow").classList.toggle("fa-caret-down");
  //   console.log(document.querySelector("#arrow").classList);
  // } 
  // componentDidMount() {
  //   document.addEventListener('scroll',() => {
  //     const backgroundcolor = window.scrollY > 20 ? "rgba(0,0,0,0.5)": "rgb(18,18,18)";
  //     this.setState({navBackground:backgroundcolor});
  //   })
  // }
render(){
  return (
    <div className="your-library-nav"> 
                              
     
     <div className="yourlibrary">
        
        <div className="collapse-drop">
          <CollapseDropDown />
        </div>
        <div className="left-side"> 
        <span className="playlists-left-button">
          <NavLink to="/webplayer/yourlibrary"><a id="playlists-button" className={this.props.type== "Playlists" ? 'grey-box words' : 'no-box words'}>Playlists</a></NavLink>
        </span>
        <span className="d-none d-lg-inline">
          <NavLink to="/webplayer/yourlibrary/artist"><a id="artists-button" className={this.props.type== "Artists" ? 'grey-box words' : 'no-box words'}>Artists</a></NavLink>
        </span>
        <span className="d-none d-lg-inline">     
          <NavLink to="/webplayer/yourlibrary/album"><a id="albums-button" className={this.props.type== "Albums" ? 'grey-box words' : 'no-box words'}>Albums</a></NavLink>
        </span>
        <span className="dropdown d-inline d-lg-none">
          <div className="btn-group">
            <button
            id="more-button" type="button" className={this.props.type == "Playlists" ? "btn dropdown-toggle words" : "btn dropdown-toggle words grey-box"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.moreButtonName}
            </button>
            <div className="dropdown-menu">
            <NavLink to="/webplayer/yourlibrary" className="dropdown-item playlists-in-menu">
              <button id="playlists-in-menu" className={this.props.type == "Playlists" ? "dropdown-item white-words pl-2 item-click blue-words" : "dropdown-item white-words pl-2 item-click"} type="button">
                Playlists
              </button>
            </NavLink>
            <NavLink to="/webplayer/yourlibrary/artist" className="dropdown-item">
              <button className={this.props.type == "Artists" ? "dropdown-item white-words pl-2 item-click blue-words" : "dropdown-item white-words pl-2 item-click"} type="button">
                Artists
              </button>
            </NavLink>
            <NavLink to="/webplayer/yourlibrary/album" className="dropdown-item">
              <button className={this.props.type == "Albums" ? "dropdown-item white-words pl-2 item-click blue-words" : "dropdown-item white-words pl-2 item-click"} type="button">
                Albums
              </button>
            </NavLink>
            </div>
          </div>
        </span> 
        
    </div>
    </div> 
    <div className="drop-down">

      <DropDownMenu/>

    </div>
  </div>
);
  }
}

export default withRouter(YourLibraryNavbar);