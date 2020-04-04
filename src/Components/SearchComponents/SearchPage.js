import React, { Component } from "react";
import "./SearchPage.css";
import SearchContent from "./SearchContent";
import SearchedContent from "./SearchedContent";
import Searchbar from "./Searchbar";
import {Switch,Route,Redirect} from "react-router-dom";
import AllSearchResults from "./AllSearchResults";
import * as itemType from "../../Constants/itemType";



class SearchPage extends Component {

  state = {

    searchfield: "",
    searchFocused:false,
    songs: [],
    artists: [],
    albums: [],
    playlists:[],
    profiles:[],
    loading:false,
  }
  
  
  
  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    this.setState({loading:true});

    // if(event.target.value !==""){
    // const url = "http://localhost:3000/Search?word=" + this.state.searchfield; // site that doesn’t send Access-Control-*
    // fetch(url)
    //   .then((response) => {

    //     if(response.status === 400){
    //       console.log("request failed");
    //       throw new Error('Network response was not ok.');
    //   }else{
    //     return response.json();

    //   }
        
    //   })
    //   .then((data) => {
    //     this.setState({songs:data.Tracks,
    //                    artists:data.Artists,
    //                    albums:data.Albums,
    //                    playlist:data.Playlists,
    //                    profiles:data.Users })
    //   })
    //   .catch(function(error) {
    //     console.log('There has been a problem with your fetch operation: ', 
    //     error.message);
    //    })

    //   }

    if(event.target.value !==""){
      const url = "https://jsonplaceholder.typicode.com/photos"; 
      fetch(url)
        .then((response) => {
          return response.json();
          
        })
        .then((data) => {
          this.setState({songs:data,
                         artists:data,
                         albums:data,
                         playlists:data,
                         profiles:data})
          this.setState({loading:false});
        })
        .catch((error)=>{
          console.log(error);

        })
  
        }
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

    <Route  exact path="/webplayer/search/" render={ (props) => <SearchedContent {...props}  
            songs={this.state.songs}
            artists={this.state.artists}
            albums={this.state.albums}
            playlists={this.state.playlists}
            profiles={this.state.profiles}
            searchfieldvalue={this.state.searchfield}
            loading={this.state.loading} />}/>

    <Route  path="/webplayer/search/artists/" render={ (props) => <AllSearchResults {...props}
            searchfieldvalue={this.state.searchfield}
            results={this.state.artists}
            type={itemType.ARTIST} />}/>  

    <Route  path="/webplayer/search/songs/" render={ (props) => <AllSearchResults {...props}
            searchfieldvalue={this.state.searchfield}
            results={this.state.songs}
            type={itemType.SONG} />}/> 

    <Route  path="/webplayer/search/albums/" render={ (props) => <AllSearchResults {...props}
            searchfieldvalue={this.state.searchfield}
            results={this.state.albums}
            type={itemType.ALBUM} />}/> 
            
     <Route  path="/webplayer/search/playlists/" render={ (props) => <AllSearchResults {...props}
            searchfieldvalue={this.state.searchfield}
            results={this.state.playlists}
            type={itemType.PLAYLIST} />}/> 

      <Route  path="/webplayer/search/profiles/" render={ (props) => <AllSearchResults {...props}
            searchfieldvalue={this.state.searchfield}
            results={this.state.profiles}
            type={itemType.PROFILE} />}/>                     

    </Switch>

    
  </div>):(        <div className="search-content-below-bar">

<Switch>

<Route exact path="/webplayer/search/" render={ (props) => <SearchedContent {...props}  
        songs={this.state.songs}
        artists={this.state.artists}
        albums={this.state.albums}
        playlists={this.state.playlists}
        profiles={this.state.profiles}
        searchfieldvalue={this.state.searchfield}
        loading={this.state.loading} />}/>
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