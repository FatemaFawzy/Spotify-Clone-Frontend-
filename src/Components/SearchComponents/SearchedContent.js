import React from "react";
import "./SearchedContent.css";
import SearchContent from "./SearchContent";
import { Link } from "react-router-dom";
import SongSearched from "./SongSearched";
import TopResultItem from "./TopResultItem";
import GeneralItem from "@/Containers/GenericComponenets/GeneralItem";
import * as itemType from "@/Constants/itemType";
import { BASEURL } from "@/Constants/baseURL";

/** Function component SearchContent that shows the content of the search page after typing in the search box.
 * @func SearchedContent
 */
const SearchedContent = ({ songs, artists, albums, playlists, profiles, searchfieldvalue, loading }) => {

  //For Songs
  if (songs) {

    /**Holds the rendered songs after being mapped to JSX
     * @type {Array<object>}
     */
    var RenderedSongs;
    if (!songs.length) {
      RenderedSongs = null;
    }
    else {

      /**Holds an array of the needed songs to be rendered on the screen (max 3)
      * @type {Array<object>}
      */
      var neededSongs;
      if (songs.length > 3) {
        neededSongs = songs.splice(0, 3);
      }
      else {
        neededSongs = songs;
      }
      const Songs = neededSongs.map(song => (
        <SongSearched
          image={BASEURL + "Images/" + song.imagePath}
          name={song.trackName}
          subname={song.artistName}
          key={song._id}
          id={song._id}
          artistid={song.artistId}
        />)

        // <SongSearched
        //   image={song.url}
        //   name={song.title}
        //   subname={song.title}
        //   key={song.id}
        // />)
      )
      RenderedSongs = (<div id="searched-category-block-song" className="searched-category-block">
        <Link to="/webplayer/search/songs/" id="searched-category-title-song" className="searched-category-title" >Songs</Link>
        {Songs}
      </div>)
    }
  }

  //for other elements
  // const otheritems=[artists, albums];
  // var RenderedItems=[];

  // for(var i=0;i<otheritems.length;i++)
  // {

  // if (!otheritems[i].length) {
  //   RenderedItems.push(null);
  // }
  // else {
  //   var neededItems;
  //   if (otheritems[i].length > 5) {
  //     neededItems = otheritems[i].splice(0, 5);
  //   }
  //   else {
  //     neededItems = otheritems[i];
  //   }
  //   const Items = neededItems.map(item => (
  //     // <GeneralItem
  //     //   image={artist.image.url}
  //     //   name={artist.artistName}
  //     //   subname="Artist"
  //     //   roundimage={true}
  //     //   key={artist._id}
  //     // />)

  //     <GeneralItem
  //     image={item.url}
  //     name={item.title}
  //     subname="Artist"
  //     roundimage={false}
  //     key={item.id}
  //   />)

  //   )
  //   RenderedItems.push(<div className="searched-category-block">
  //     <Link to={("/webplayer/search/artists")} className="searched-category-title" >Artists</Link>
  //     {/* +props.type.toLowerCase() */}
  //     {Items}
  //   </div>)
  // }

  // }

  //For Artists
  if (artists) {
    /**Holds the rendered artists after being mapped to JSX
 * @type {Array<object>}
 */
    var RenderedArtists;
    if (!artists.length) {
      RenderedArtists = null;
    }
    else {
      /**Holds an array of the needed artists to be rendered on the screen (max 5)
  * @type {Array<object>}
  */
      var neededArtists;
      if (artists.length > 5) {
        neededArtists = artists.splice(0, 5);
      }
      else {
        neededArtists = artists;
      }
      const Artists = neededArtists.map(artist => (
        <GeneralItem
          image={BASEURL + "Images/" + artist.imagePath}
          name={artist.artistName}
          subname="Artist"
          roundimage={true}
          key={artist._id}
          id={artist._id}
          type={itemType.ARTIST}
        />)

        // <GeneralItem
        //   image={artist.url}
        //   name={artist.title}
        //   subname="Artist"
        //   roundimage={true}
        //   key={artist.id}
        //   id={artist.id}
        //   type={itemType.ARTIST}
        // />)


      )
      RenderedArtists = (<div className="searched-category-block">
        <Link to="/webplayer/search/artists/" className="searched-category-title" >Artists</Link>
        {Artists}
      </div>)
    }
  }

  //For Albums
  if (albums) {
    /**Holds the rendered albums after being mapped to JSX
 * @type {Array<object>}
 */
    var RenderedAlbums;
    if (!albums.length) {
      RenderedAlbums = null;
    }
    else {

      /**Holds an array of the needed albums to be rendered on the screen (max 5)
 * @type {Array<object>}
 */
      var neededAlbums;
      if (songs.length > 5) {
        neededAlbums = albums.splice(0, 5);
      }
      else {
        neededAlbums = albums;
      }
      const Albums = neededAlbums.map(album => (
        <GeneralItem
          image={BASEURL + "Images/" + album.imagePath}
          name={album.albumName}
          subname={album.artistName}
          key={album._id}
          id={album._id}
          type={itemType.ALBUM}
        />)

        // <GeneralItem
        //   image={album.url}
        //   name={album.title}
        //   subname="Album"
        //   key={album.id}
        //   id={album.id}
        //   type={itemType.ALBUM}
        // />)
      )
      RenderedAlbums = (<div className="searched-category-block">
        <Link to="/webplayer/search/albums/" className="searched-category-title" >Albums</Link>
        {Albums}
      </div>)
    }
  }

  //For Playlists
  if (playlists) {
    /**Holds the rendered playlists after being mapped to JSX
 * @type {Array<object>}
 */
    var RenderedPlaylists;
    if (!playlists.length) {
      RenderedPlaylists = null;
    }
    else {

      /**Holds an array of the needed playlists to be rendered on the screen (max 5)
 * @type {Array<object>}
 */
      var neededPlaylists;
      if (playlists.length > 5) {
        neededPlaylists = playlists.splice(0, 5);
      }
      else {
        neededPlaylists = playlists;
      }
      const Playlists = neededPlaylists.map(playlist => (
        <GeneralItem
          image={BASEURL + "Images/" + playlist.imagePath}
          name={playlist.playlistName}
          subname={playlist.userName}
          key={playlist._id}
          id={playlist._id}
          type={itemType.PLAYLIST}
        />)

        // <GeneralItem
        //   image={playlist.url}
        //   name={playlist.title}
        //   subname="Playlist"
        //   key={playlist.id}
        //   id={playlist.id}
        //   type={itemType.PLAYLIST}
        // />)
      )
      RenderedPlaylists = (<div className="searched-category-block">
        <Link to="/webplayer/search/playlists/" className="searched-category-title" >Playlists</Link>
        {Playlists}
      </div>)
    }
  }


  //For Profiles
  if (profiles) {

    /**Holds the rendered profiles after being mapped to JSX
 * @type {Array<object>}
 */
    var RenderedProfiles;
    if (!profiles.length) {
      RenderedProfiles = null;
    }
    else {

      /**Holds an array of the needed profiles to be rendered on the screen (max 5)
 * @type {Array<object>}
 */
      var neededProfiles;
      if (playlists.length > 5) {
        neededProfiles = profiles.splice(0, 5);
      }
      else {
        neededProfiles = profiles;
      }
      const Profiles = neededProfiles.map(profile => (
        <GeneralItem
          image={BASEURL + "Images/" + profile.imagePath}
          name={profile.userName}
          subname="Profile"
          key={profile._id}
          id={profile._id}
          type={itemType.PROFILE}
        />)

        // <GeneralItem
        //   image={profile.url}
        //   name={profile.title}
        //   subname="Profile"
        //   key={profile.id}
        //   id={profile.id}
        //   type={itemType.PROFILE}
        // />)
      )
      RenderedProfiles = (<div className="searched-category-block">
        <Link to="/webplayer/search/profiles/" className="searched-category-title" >Profiles</Link>
        {Profiles}
      </div>)
    }
  }

  //For the top results

  /**Holds the top result name
   * @type {string}
   */
  let topResultName = "";
  /**Holds the top result type
 * @type {string}
 */
  let topResultType = "";
  /**Holds the top result image path
 * @type {string}
 */
  let topResultImage = ""

  /**Holds the top result id
 * @type {string}
 */
  let topID = "";

  if (songs) {

    if (songs.length) {
      topResultName = songs[0].trackName;
      topResultType = itemType.SONG;
      topResultImage = BASEURL + "Images/" + songs[0].imagePath;
      topID = songs[0]._id;
    }
    var RenderedTopResult = (
      <div className="searched-top-container">
        <h2 className="searched-top-title"> <span>Top result</span></h2>
        <TopResultItem
          image={topResultImage}
          name={topResultName}
          subname={topResultType}
          type={topResultType}
          id={topID} />

      </div>
    )
  }


  ///////////////////////////////////CONDITIONAL RENDERING//////////////////////////////////////////
  if (searchfieldvalue === "") {
    return <SearchContent />
  }
  else {

    if (loading) {
      return (
        <div className="search-spinner-loading">
          <i className="fa fa-refresh fa-spin"></i>
        </div>
      );

    }
    else {

      /**the message that appears if no results are found 
     * @type {string}
     */
      const noResultsfound = 'No results found for "' + searchfieldvalue + '"';
      if ((songs && !songs.length) &&
        (artists && !artists.length) &&
        (albums && !albums.length) &&
        (playlists && !playlists.length) &&
        (profiles && !profiles.length)) {
        return (
          <div className="no-results-found-container">
            <div className="no-results-found">
              <h1>{noResultsfound}</h1>
              <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
            </div>
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

            <div className="rest-of-search-rendered">

              {RenderedArtists}
              {RenderedAlbums}
              {RenderedPlaylists}
              {RenderedProfiles}

            </div>

            {/* {RenderedItems[0]}
          {RenderedItems[1]} */}

          </div>
        );
      }
    }
  }

}

export default SearchedContent;



