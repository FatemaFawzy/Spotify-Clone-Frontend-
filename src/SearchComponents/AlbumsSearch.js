import React from "react";
import ItemSearched from "./ItemSearched";
import "./ArtistsSearch.css";

const AlbumsSearch = ({albums,searchfieldvalue}) => {


  //Albums
 const Albums =albums.map( album => (
   <ItemSearched
        image={album.url}
        name={album.title}
        subname={album.title}
        key={album.id}
        />)
 )


  return(

    <div className="artist-typed-search">
      <h2>Showing Albums for "{searchfieldvalue}"</h2>
      {Albums}
    </div>
  )



}


export default AlbumsSearch;