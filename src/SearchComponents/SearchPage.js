import React, { Component } from "react";
import "./SearchPage.css";
import SearchContent from "./SearchContent";
import SearchedContent from "./SearchedContent";
import Searchbar from "./Searchbar";
import {Switch,Route,Redirect} from "react-router-dom";
import ArtistsSearch from "./ArtistsSearch";
import SongsSearch from "./SongsSearch";
import AlbumsSearch from "./AlbumsSearch";



class SearchPage extends Component {

  state = {

    searchfield: "",
    searchFocused:false,
    songs: [],
    artists: [],
    albums: [],
  }
  
  
  
  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

    //For Songs
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({songs:data,
                       artists:data,
                       albums:data})
      });
  }

  OnCancelSearch = () => {
    this.setState({ searchfield: "" })
    this.setState({ searchFocused:true })
  }


  OnSearchFocus = () => {
    this.setState({ searchFocused:true })
  }

  OnSearchBlur = () => {
    this.setState({ searchFocused:false })
  }

  componentDidMount() {

    

  }


  render() {
    var Xvisible = false;
    if (this.state.searchfield === "") {
      Xvisible = false;
    }
    else {
      Xvisible = true;
    }

    const actualSearchPage= !this.state.searchFocused?(<div className="search-content-below-bar">

    <Switch>

    <Route exact path="/webplayer/search/" render={ (props) => <SearchedContent {...props}  
            songs={this.state.songs}
            artists={this.state.artists}
            albums={this.state.albums}
            playlists={this.state.playlists}
            searchfieldvalue={this.state.searchfield} />}/>

    <Route  path="/webplayer/search/artists/" render={ (props) => <ArtistsSearch {...props}
            searchfieldvalue={this.state.searchfield}
            artists={this.state.artists} />}/>  

    <Route  path="/webplayer/search/songs/" render={ (props) => <SongsSearch {...props}
            searchfieldvalue={this.state.searchfield}
            songs={this.state.songs} />}/> 

    <Route  path="/webplayer/search/albums/" render={ (props) => <AlbumsSearch {...props}
            searchfieldvalue={this.state.searchfield}
            albums={this.state.albums} />}/>                      

    </Switch>

    
  </div>):(        <div className="search-content-below-bar">

<Switch>

<Route exact path="/webplayer/search/" render={ (props) => <SearchedContent {...props}  
        songs={this.state.songs}
        artists={this.state.artists}
        albums={this.state.albums}
        playlists={this.state.playlists}
        searchfieldvalue={this.state.searchfield} />}/>
<Redirect to="/webplayer/search/"/>        

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