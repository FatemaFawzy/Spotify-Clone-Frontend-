import React from "react";
import "./Searchbar.css"
import DropDownMenu from "../../Containers/GenericComponenets/DropDownMenu";

const Searchbar = (props) => {

        var styleX=props.isXvisible? "search-cancel-icon":"search-cancel-icon cancelx-invisible";

        return(

                <div className="search-bar-sticky-top"> 
                
                        <div className="search-box-container">
                        <span className="search-search-icon"><i className="fas fa-search"></i> </span>
                        <input onFocus={props.searchFocus}
                               onBlur={props.searchBlur}
                               onChange={props.searchChange} 
                               value={props.searchfieldvalue} 
                               className="search-search-box" 
                               placeholder="Search for Artists, Songs, or Albums"/> 
                        <button onClick={props.cancelSearch} className={styleX}><i class="fas fa-times"></i></button>
                        </div>

                        <div className="drop-down-in-search">

                        <DropDownMenu/>

                        </div>

                        
                
                </div>


        )


}

      

export default Searchbar;


