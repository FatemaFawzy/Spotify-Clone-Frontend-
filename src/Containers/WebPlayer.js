import React,{Component} from 'react';
import './WebPlayer.css';
// import SearchPage from "./SearchPage";
import {Switch, Route} from "react-router-dom";
import HomePageSidebar from "../Components/HomePageSidebar"
import SearchPage from '../SearchComponents/SearchPage';



class WebPlayer extends Component {

  render(){

    return (
      <div className ="web-player-class">
        
      <div className="row mx-0 no-gutters">

        <div className="side-bar-web-player">
          <HomePageSidebar/>
        </div>

        <div className="content-web-player">

          <Switch>
            <Route exact path="/webplayer/"/>
            <Route path="/webplayer/search" component={SearchPage}/>

          </Switch>

        </div>



      </div>
      </div>
      
    );


  }
  
}

export default WebPlayer;

