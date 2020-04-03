import React,{Component} from 'react';
import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";
 import './HomePage.css';
import HomePageNavbar from "../Components/HomePageNavbar";
import GeneralItem from "./GeneralItem";
import ComponentBlock from "../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../Constants/itemType";


class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
     recentlyPlayed:[{type: "SONG" , title: "Meek Mill", subtitle: "SONG", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}] , 
    
     madeforyou: [{type: "PLAYLIST" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}],  
    
     yourplaylists: [{type: "PLAYLIST" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}],  
    
     popularalbums: [{type: "ALBUM" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}],  
    
     newreleases: [{type: "SONG" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}], 
    
     popularartists: [{type: "ARTIST" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "ARTIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "ARTIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "ARTIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}]
    
    
    }
    
  }
  

  render(){
    return (
      <div className ="home-navbar" >
        
             
            <HomePageNavbar accountType="regular" name="Ali Halafawy" color="black"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            <div id="homepage-body" >
              
              <ComponentBlock ComponentName="Recently played" description="" details={this.state.recentlyPlayed}  />
              <ComponentBlock ComponentName="Made for You" description="Playlists to match your mood" details={this.state.madeforyou} />
              <ComponentBlock ComponentName="Your playlists" description="" details={this.state.yourplaylists}/>
              <ComponentBlock ComponentName="Popular albums" description="" details={this.state.popularalbums}/>
              <ComponentBlock ComponentName="Popular new releases" description=""  details={this.state.newreleases}/>
              <ComponentBlock ComponentName="Popular artists" details={this.state.popularartists}/>
              
            </div>
          
      </div>
      
    );


  }
  
}

export default HomePage;

