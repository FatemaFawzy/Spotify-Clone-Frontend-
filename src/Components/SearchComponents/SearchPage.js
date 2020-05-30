import React, { Component } from "react";
import "./SearchPage.css";
import SearchContent from "./SearchContent";
import SearchedContent from "./SearchedContent";
import Searchbar from "./Searchbar";
import { Switch, Route, Redirect } from "react-router-dom";
import AllSearchResults from "./AllSearchResults";
import SongsByGenre from "./SongsByGenre";
import * as itemType from "../../Constants/itemType";
import { BASEURL } from "../../Constants/baseURL";


/** Class SearchPage that manages the state of all the other search components
 * @category SearchPage
 * @extends Component
 */
class SearchPage extends Component {

  state = {

    /**variable that has the value of the search field
    * @memberof SearchPage 
    * @type {string}
    */
    searchfield: "",

    /**variable that indicates whether the search field is focused or not
   * @memberof SearchPage 
   * @type {boolean}
   */
    searchFocused: false,

    /**variable that has an array of songs returned from the request of the search
   * @memberof SearchPage 
   * @type {Array<object>}
   */
    songs: [],

    /**variable that has an array of artists returned from the request of the search
* @memberof SearchPage 
* @type {Array<object>}
*/
    artists: [],

    /**variable that has an array of albums returned from the request of the search
* @memberof SearchPage 
* @type {Array<object>}
*/
    albums: [],

    /**variable that has an array of playlists returned from the request of the search
* @memberof SearchPage 
* @type {Array<object>}
*/
    playlists: [],

    /**variable that has an array of profiles returned from the request of the search
* @memberof SearchPage 
* @type {Array<object>}
*/
    profiles: [],

    /**variable that indicates whether the page is loading or not
    * @memberof SearchPage 
    * @type {boolean}
    */
    loading: false,
  }


  /**A function that handles on change 
 * @memberof SearchPage 
 * @func OnSearchChange
 */
  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    this.setState({ loading: true });

    if (event.target.value !== "") {
      const url = BASEURL + "Search?word=" + event.target.value;
      // const url = "http://localhost:3001/" + "Search?word=" + event.target.value;
      const requestOptions = {
        method: 'GET',
        headers: { 'x-auth': 'eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s' },
      };

      try {
        fetch(url, requestOptions)
          .then((response) => {
            if (response.status === 400) {
              console.log("request failed");
              throw new Error('Network response was not ok.');
            }
            else if (response.status === 403) {
              console.log("request failed");
              throw new Error('Network response was not ok.');

            }
            else if (response.status === 401) {
              console.log("request failed");
              throw new Error('Network response was not ok.');
            }
            else if (response.status === 404) {
              console.log("request failed");
              throw new Error('Network response was not ok.');

            }
            else if (response.status === 500) {
              console.log("request failed");
              throw new Error('Network response was not ok.');

            }
            else {
              return response.json();

            }

          })
          .then((data) => {
            this.setState({
              songs: data.Tracks,
              artists: data.Artists,
              albums: data.Albums,
              playlist: data.Playlists,
              profiles: data.Users
            })
            this.setState({ loading: false });
          })
          .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ',
              error.message);
          })

      }
      catch (error) {
        console(error);
      }


    }



    // if(event.target.value !==""){
    //   const url = "https://jsonplaceholder.typicode.com/photos"; 
    //   fetch(url)
    //     .then((response) => {
    //       return response.json();

    //     })
    //     .then((data) => {
    //       this.setState({songs:data,
    //                      artists:data,
    //                      albums:data,
    //                      playlists:data,
    //                      profiles:data})
    //       this.setState({loading:false});
    //     })
    //     .catch((error)=>{
    //       console.log(error);

    //     })

    //     }
  }

  /**A function that search cancel  
* @memberof SearchPage 
* @func OnCancelSearch
*/

  OnCancelSearch = () => {
    this.setState({ searchfield: "" })
    this.setState({ searchFocused: true })
    if(this.props.history) this.props.history.push("/webplayer/search/");
    
  }

  /**A function that is called when the search field focused 
* @memberof SearchPage 
* @func  OnSearchFocus
*/

  OnSearchFocus = () => {
    this.setState({ searchFocused: true })
    if(this.props.history) this.props.history.push("/webplayer/search/");
  }

  /**A function that is called when the search field blured 
 * @memberof SearchPage 
 * @func  OnSearchBlur
 */

  OnSearchBlur = () => {
    this.setState({ searchFocused: false })
  }



  render() {

    /**variable that indicates whether the X icon is visible or not
* @memberof SearchPage 
* @type {boolean}
*/
    var Xvisible = false;
    if (this.state.searchfield === "") {
      Xvisible = false;
    }
    else {
      Xvisible = true;
    }

    /**variable that holds the JSX of the redered page
     * @memberof SearchPage 
     * @type {object}
     */

    const actualSearchPage = !this.state.searchFocused ? (<div className="search-content-below-bar">

      <Switch>

        <Route exact path="/webplayer/search/" render={(props) => <SearchedContent {...props}
          songs={this.state.songs}
          artists={this.state.artists}
          albums={this.state.albums}
          playlists={this.state.playlists}
          profiles={this.state.profiles}
          searchfieldvalue={this.state.searchfield}
          loading={this.state.loading} />} />

        <Route path="/webplayer/search/artists/" render={(props) => <AllSearchResults {...props}
          searchfieldvalue={this.state.searchfield}
          results={this.state.artists}
          type={itemType.ARTIST} />} />

        <Route path="/webplayer/search/songs/" render={(props) => <AllSearchResults {...props}
          searchfieldvalue={this.state.searchfield}
          results={this.state.songs}
          type={itemType.SONG} />} />

        <Route path="/webplayer/search/albums/" render={(props) => <AllSearchResults {...props}
          searchfieldvalue={this.state.searchfield}
          results={this.state.albums}
          type={itemType.ALBUM} />} />

        <Route path="/webplayer/search/playlists/" render={(props) => <AllSearchResults {...props}
          searchfieldvalue={this.state.searchfield}
          results={this.state.playlists}
          type={itemType.PLAYLIST} />} />

        <Route path="/webplayer/search/profiles/" render={(props) => <AllSearchResults {...props}
          searchfieldvalue={this.state.searchfield}
          results={this.state.profiles}
          type={itemType.PROFILE} />} />

        <Route path="/webplayer/search/songsbygenre/" component={SongsByGenre} />

      </Switch>


    </div>) : (<div className="search-content-below-bar">

      <Switch>

        <Route exact path="/webplayer/search/" render={(props) => <SearchedContent {...props}
          songs={this.state.songs}
          artists={this.state.artists}
          albums={this.state.albums}
          playlists={this.state.playlists}
          profiles={this.state.profiles}
          searchfieldvalue={this.state.searchfield}
          loading={this.state.loading} />} />
        <Route path="/webplayer/search/songsbygenre/" component={SongsByGenre} />
        <Redirect to="/webplayer/search/" />

      </Switch>


    </div>);


    return (


      <div className="search-page">
        <Searchbar searchChange={this.OnSearchChange}
          searchfieldvalue={this.state.searchfield}
          cancelSearch={this.OnCancelSearch}
          searchFocus={this.OnSearchFocus}
          searchBlur={this.OnSearchBlur}
          isXvisible={Xvisible} />

        {actualSearchPage}

      </div>
    )
  }
}



export default SearchPage;