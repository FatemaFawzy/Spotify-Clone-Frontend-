import React from "react"
import  "./BrowseItem.css"

/** Function BrowseItem a block that represents each genre
 * @func BrowseItem
 */

const BrowseItem =(props) =>{

    /**object that has inline styling for the main div
   * @type {object}
   */
    const style={
        backgroundColor: props.color
    };

    /**variable that holds the given class for the main div
   * @type {string}
   */
    const givenclass= props.special==="true"? "BrowseItem special-browse":"BrowseItem"; 
    return(
        <div className={givenclass} style={style} >

            <h3 className="head-style">{props.header}</h3>

            <img src={props.image} className="img-style" alt="" />

        </div>
    )




}
export default BrowseItem