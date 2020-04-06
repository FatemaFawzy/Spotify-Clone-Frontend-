import React,{Component} from 'react';
import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";
 import './HomePage.css';
import HomePageNavbar from "../../Components/HomePage/HomePageNavbar";
import GeneralItem from "../GenericComponenets/GeneralItem";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";



class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
     recentlyPlayed:[],    
     madeforyou:[],
     yourplaylists: [],
     popularalbums:[],
     newreleases:[],
     popularartists:[],
    
    }
    
  }
  
  componentDidMount() {

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({recentlyPlayed:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })

    const recentlyPlayedarray=[{type: "SONG" , title: "Meek Mill", subtitle: "SONG", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
    {type: "ALBUM" , title: "Mileyyy", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
    {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
    {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}]; 
    
    this.setState({recentlyPlayed:recentlyPlayedarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({madeforyou:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
    const madeforyouarray= [{type: "PLAYLIST" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}];  
    
    this.setState({madeforyou:madeforyouarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({yourplaylists:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
     const yourplaylistsarray= [{type: "PLAYLIST" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}]; 
    
    this.setState({yourplaylists:yourplaylistsarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({popularalbums:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
    const popularalbumsarray= [{type: "ALBUM" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}];  
    
    this.setState({popularalbums:popularalbumsarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({newreleases:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
    const newreleasesarray= [{type: "SONG" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}];
    
    this.setState({newreleases:newreleasesarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    const url = "http://52.14.190.202:8000/artists/homepage/popular"; 
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({popularartists:data})
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  render(){
    return (
      <div className ="home-navbar" >
        
             
            <HomePageNavbar accountType="regular" name="Ali Halafawy" color="#121212"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            <div id="homepage-body" >
              
              {/* <ComponentBlock ComponentName="Recently played" description="" details={this.state.recentlyPlayed}  /> */}
              {/* <ComponentBlock type="playlists" ComponentName="Made for You" description="Playlists to match your mood" details={this.state.madeforyou} />
              <ComponentBlock type="playlists" ComponentName="Your playlists" description="" details={this.state.yourplaylists}/>
              <ComponentBlock type="albums" ComponentName="Popular albums" description="" details={this.state.popularalbums}/>
              <ComponentBlock type="songs" ComponentName="Popular new releases" description=""  details={this.state.newreleases}/> */}
              <ComponentBlock type="artists" ComponentName="Popular artists" details={this.state.popularartists}/>
              
            </div>
          
      </div>
      
    );


  }
  
}

const mapStateToProps = state => {

  return {
    userID:state.userID
  };

};
export default connect(mapStateToProps)(HomePage);

