import React, { Component } from "react"
import  "./BrowseItem.css"
import { connect } from "react-redux";
import * as actionTypes from "@/Store/actions";
import {withRouter} from "react-router-dom";
 /** Class BrowseItem displays the genre
 * @category BrowseItem
 * @extends Component
 */


export class BrowseItem extends Component{

  render(){

    /**variable that indicates the background color
   * @memberof BrowseItem
   * @type {object}
   */
  const style={
    backgroundColor: this.props.color
};

/**variable that holds the given class for the main div
* @memberof BrowseItem
* @type {string}
*/
const givenclass= this.props.special==="true"? "BrowseItem special-browse":"BrowseItem"; 
return(
    <div 
    onClick={()=>{
      console.log("Clicked");
      this.props.history.push("/webplayer/search/songsbygenre/" + this.props.id);
        this.props.onGenreClicked(this.props.id,this.props.color);
        // window.location.reload(true);
    }
    }
    className={givenclass} style={style} >

        <h3 className="head-style">{this.props.header}</h3>

        <img src={this.props.image} className="img-style" alt="" />

    </div>
)

  }

}

const mapDispatchToProps = dispatch => {

  return {

    onGenreClicked: (itemID,itemColor) => dispatch({ type: actionTypes.SELECT_GENRE, value: {id:itemID,color:itemColor} }),

  };
};

export default connect(null, mapDispatchToProps)(withRouter(BrowseItem));