import React from "react";
import ItemSearched from "./ItemSearched";
import "./ArtistsSearch.css";


const ArtistsSearch = ({artists,searchfieldvalue}) => {


  //Artists
 const Artists =artists.map( artist => (
   <ItemSearched
        image={artist.url}
        name={artist.title}
        subname={artist.title}
        roundimage={true}
        id={artist.id}
        />)
 )


  return(

    <div className="artist-typed-search">
      <h2>Showing Artists for "{searchfieldvalue}"</h2>
      {Artists}
    </div>
  )



}





export default ArtistsSearch;