import React from "react";
import "./AllSearchResults.css";
import * as itemType from "../../Constants/itemType";
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
import {BASEURL} from "../../Constants/baseURL";

/** Function Component AllSearchResults the page that appears after the user clicks to see all the results
 * @func AllSearchResults
 */
const AllSearchResults = ({ results, type, searchfieldvalue }) => {

  /**variable that will hold the rendered name
   * @type {string} 
   */
  let renderedName = "";

  /**variable that will hold the rendered subname
   * @type {string} 
   */
  let renderedSubname = "";

  /**variable indicates whether the image is round or not
   * @type {boolean} 
   */
  let roundImgOrNot = false;

  /**variable that will hold the array of rendered results
   * @type {Array<object>} 
   */
  let Results;

  /**variable that will hold the result title
   * @type {string} 
   */
  let resultTitle="";

  if(results){

    Results = results.map(result => {

      switch (type) {
        case itemType.SONG:
          renderedName = result.trackName;
          renderedSubname = result.artistName;
          roundImgOrNot=false;
          resultTitle="Songs";
          break;
  
        case itemType.ARTIST:
          renderedName = result.artistName;
          renderedSubname = "Artist";
          roundImgOrNot=true;
          resultTitle="Artists";
          break;
  
        case itemType.ALBUM:
          renderedName = result.albumName;
          renderedSubname = result.artistName;
          roundImgOrNot=false;
          resultTitle="Albums";
          break;
  
        case itemType.PLAYLIST:
          renderedName = result.playlistName;
          renderedSubname = result.userName;
          roundImgOrNot=false;
          resultTitle="Playlists";
          break;
  
        case itemType.PROFILE:
          renderedName = result.userName;
          renderedSubname = "";
          roundImgOrNot=false;
          resultTitle="Profiles";
          break;
  
        default:
          renderedName = "";
          renderedSubname = "";
          roundImgOrNot=false;
          resultTitle="";
          break;
      }
  
      return (
        // <GeneralItem
        //   image={result.url}
        //   name={result.title}
        //   subname={result.title}
        //   roundimage={roundImgOrNot}
        //   key={result.id}
        //   id={result.id}
        //   type={type}
        // />
  
        <GeneralItem
        image={BASEURL+"Images/"+ result.imagePath}
        name={renderedName}
        subname={renderedSubname}
        roundimage={roundImgOrNot}
        key={result._id}
        id={result._id}
        type={type}
        />
      )
    }
    )


  }
  else{
    Results=null;
  }

  

  return (

    <div className="result-typed-search">
      <h2>Showing {resultTitle} for "{searchfieldvalue}"</h2>
      {Results}
    </div>
  )

}





export default AllSearchResults;