import React from "react";
import "./Searchbar.css"
import DropDownMenu from "../../Containers/GenericComponenets/DropDownMenu";
import CollapseDropDown from "../../Containers/GenericComponenets/CollapseDropDown"

/** Function component Searchbar that acts as an upper navbar for the search page
 * @func Searchbar
 */
const Searchbar = (props) => {
  /**variable that indicates whether the X symbol should be visible or not
   * @type {string}
   */
  var styleX = props.isXvisible ? "search-cancel-icon" : "search-cancel-icon cancelx-invisible";
  return (

    <div className="search-bar-sticky-top">
      <div className="collapse-drop">
        <CollapseDropDown />

      </div>
      <div className="search-box-container">
        <span className="search-search-icon"><i className="fas fa-search"></i> </span>
        <input onFocus={props.searchFocus}
          onBlur={props.searchBlur}
          onChange={props.searchChange}
          value={props.searchfieldvalue}
          className="search-search-box"
          placeholder="Search for Artists, Songs, or Albums" />
        <button onClick={props.cancelSearch} className={styleX}><i className="fas fa-times"></i></button>
      </div>

      <div className="drop-down-in-search">

        <DropDownMenu />

      </div>
    </div>


  )


}



export default Searchbar;


