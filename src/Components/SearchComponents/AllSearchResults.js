import React from "react";
import "./AllSearchResults.css";
import * as itemType from "../../Constants/itemType";
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";

const AllSearchResults = ({ results, type, searchfieldvalue }) => {

  let renderedName = "";
  let renderedSubname = "";
  let roundImgOrNot = false;

  const Results = results.map(result => {

    switch (type) {
      case itemType.SONG:
        renderedName = result.trackName;
        renderedSubname = result.artistName;
        roundImgOrNot=false;
        break;

      case itemType.ARTIST:
        renderedName = result.artistName;
        renderedSubname = "Artist";
        roundImgOrNot=true;
        break;

      case itemType.ALBUM:
        renderedName = result.albumName;
        renderedSubname = result.artistName;
        roundImgOrNot=false;
        break;

      case itemType.PLAYLIST:
        renderedName = result.playlistName;
        renderedSubname = result.userName;
        roundImgOrNot=false;
        break;

      case itemType.PROFILE:
        renderedName = result.userName;
        renderedSubname = "";
        roundImgOrNot=false;
        break;

      default:
        renderedName = "";
        renderedSubname = "";
        roundImgOrNot=false;
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
      image={result.imagePath}
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

  return (

    <div className="result-typed-search">
      <h2>Showing {type[0] + type.slice(1).toLowerCase() + "s"} for "{searchfieldvalue}"</h2>
      {Results}
    </div>
  )

}





export default AllSearchResults;