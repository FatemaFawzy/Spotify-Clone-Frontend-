import React from "react";
import ItemSearched from "./ItemSearched";
import "./ArtistsSearch.css";


const SongsSearch = ({songs,searchfieldvalue}) => {


  //Songs
 const Songs =songs.map( song => (
   <ItemSearched
        image={song.url}
        name={song.title}
        subname={song.title}
        key={song.id}
        />)
 )


  return(

    <div className="artist-typed-search">
      <h2>Showing Songs for "{searchfieldvalue}"</h2>
      {Songs}
    </div>
  )



}





export default SongsSearch;