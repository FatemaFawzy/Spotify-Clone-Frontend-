import React from "react";
import ItemSearched from "./ItemSearched";
import "./SearchedContent.css";
import SearchContent from "./SearchContent";
import {Link} from "react-router-dom";

const SearchedContent = ({songs,artists,albums,playlists,searchfieldvalue}) => {

  //For Songs
  var RenderedSongs;
  if(!songs.length){
    RenderedSongs=null;
  }
  else{
    var neededSongs;
    if(songs.length>5){
      neededSongs=songs.splice(0,5);
    }
    else{
      neededSongs=songs;
    }
  const Songs =neededSongs.map( song => (
    <ItemSearched
         image={song.url}
         name={song.title}
         subname={song.title}
         id={song.id}
         />)
  )
  RenderedSongs=(<div className="searched-category-block">
    <a className="searched-category-title" href="#" >Songs</a>
    {Songs}
  </div>)
  }

 //For Artists
 var RenderedArtists;
 if(!artists.length){
    RenderedArtists=null;
 }
 else{
   var neededArtists;
   if(artists.length>5){
    neededArtists=artists.splice(0,5);
   }
   else{
    neededArtists=artists;
   }
 const Artists =neededArtists.map( artist => (
   <ItemSearched
        image={artist.url}
        name={artist.title}
        subname={artist.title}
        roundimage={true}
        id={artist.id}
        />)
 )
 RenderedArtists=(<div className="searched-category-block">
   <Link to="/webplayer/search/artists" className="searched-category-title" >Artists</Link>
   {Artists}
 </div>)
 }

 //For Albums
 var RenderedAlbums;
 if(!albums.length){
  RenderedAlbums=null;
 }
 else{
   var neededAlbums;
   if(songs.length>5){
    neededAlbums=albums.splice(0,5);
   }
   else{
    neededAlbums=albums;
   }
 const Albums =neededAlbums.map( album => (
   <ItemSearched
        image={album.url}
        name={album.title}
        subname={album.title}
        id={album.id}
        />)
 )
 RenderedAlbums=(<div className="searched-category-block">
   <a className="searched-category-title" href="#" >Albums</a>
   {Albums}
 </div>)
 }


 ///////////////////////////////////CONDITIONAL RENDERING//////////////////////////////////////////
if(searchfieldvalue === ""){
  return <SearchContent />
}
else{
  const noResultsfound='No results found for "' + searchfieldvalue +'"';
  if(!songs.length&&!artists.length&&!albums.length){
    return (
    <div className="no-results-found">
      <h1>{noResultsfound}</h1>
      <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
    </div>
    )
  }
  else{

      return(
        <div className="after-typed-search">
          {RenderedSongs}
          {RenderedArtists}
          {RenderedAlbums}
        </div>
    );
  }
}
 
}

export default SearchedContent;



