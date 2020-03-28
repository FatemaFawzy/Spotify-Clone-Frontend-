import React from "react";
import ItemSearched from "./ItemSearched";
import "./SearchedContent.css";
import SearchContent from "./SearchContent";
import { Link } from "react-router-dom";
import SongSearched from "./SongSearched";
import TopResultItem from "./TopResultItem";

const SearchedContent = ({ songs, artists, albums, playlists, searchfieldvalue }) => {

  //For Songs
  var RenderedSongs;
  if (!songs.length) {
    RenderedSongs = null;
  }
  else {
    var neededSongs;
    if (songs.length > 3) {
      neededSongs = songs.splice(0, 3);
    }
    else {
      neededSongs = songs;
    }
    const Songs = neededSongs.map(song => (
      <SongSearched
        image={song.url}
        name={song.title}
        subname={song.title}
        key={song.id}
      />)
    )
    RenderedSongs = (<div id="searched-category-block-song" className="searched-category-block">
      <Link to="/webplayer/search/songs/" id="searched-category-title-song" className="searched-category-title" >Songs</Link>
      {Songs}
    </div>)
  }

  //For Artists
  var RenderedArtists;
  if (!artists.length) {
    RenderedArtists = null;
  }
  else {
    var neededArtists;
    if (artists.length > 5) {
      neededArtists = artists.splice(0, 5);
    }
    else {
      neededArtists = artists;
    }
    const Artists = neededArtists.map(artist => (
      <ItemSearched
        image={artist.url}
        name={artist.title}
        subname={artist.title}
        roundimage={true}
        key={artist.id}
      />)
    )
    RenderedArtists = (<div className="searched-category-block">
      <Link to="/webplayer/search/artists/" className="searched-category-title" >Artists</Link>
      {Artists}
    </div>)
  }

  //For Albums
  var RenderedAlbums;
  if (!albums.length) {
    RenderedAlbums = null;
  }
  else {
    var neededAlbums;
    if (songs.length > 5) {
      neededAlbums = albums.splice(0, 5);
    }
    else {
      neededAlbums = albums;
    }
    const Albums = neededAlbums.map(album => (
      <ItemSearched
        image={album.url}
        name={album.title}
        subname={album.title}
        key={album.id}
      />)
    )
    RenderedAlbums = (<div className="searched-category-block">
      <Link to="/webplayer/search/albums/" className="searched-category-title" >Albums</Link>
      {Albums}
    </div>)
  }

  //For the top results

  var RenderedTopResult = (
    <div className="searched-top-container">
     <h2 className="searched-top-title"> <span>Top result</span></h2>
      <TopResultItem
        image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTqNIgQTD9ivrxROP-q28iXeLqCG-5XaZ2yX1safWcAf2GSLOe"
        name="Sia"
        subname=""
        type="artist" />
    </div>



  )


  ///////////////////////////////////CONDITIONAL RENDERING//////////////////////////////////////////
  if (searchfieldvalue === "") {
    return <SearchContent />
  }
  else {
    const noResultsfound = 'No results found for "' + searchfieldvalue + '"';
    if (!songs.length && !artists.length && !albums.length) {
      return (
        <div className="no-results-found">
          <h1>{noResultsfound}</h1>
          <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
        </div>
      )
    }
    else {

      return (
        <div className="after-typed-search">

          <div className="row">

            <div className="col col-md-12 col-lg-5 col-sm-12" >
              {RenderedTopResult}
            </div>

            <div className="col col-md-12 col-lg-7 col-sm-12">
              {RenderedSongs}
            </div>

          </div>

          {RenderedArtists}
          {RenderedAlbums}

        </div>
      );
    }
  }

}

export default SearchedContent;



