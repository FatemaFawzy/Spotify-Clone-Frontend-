import React ,{ Component} from 'react';
import './HomePageSidebar.css';
import { NavLink, Link } from "react-router-dom";
import CreatePlaylist from '../PlaylistsComponent/CreatePlaylist';
import { addNewURL } from '../../HelperFunctions/History';
 

class HomePageSidebar extends Component{
  toggle()
  {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active')
    var popup=document.getElementById('popup');
    popup.classList.toggle('active')
  }
  componentDidMount() {
    //   //   const playlistArray=
    //   //   [
    //   //     {image:"https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba",
    //   //     name:"Mood Booster",
    //   //     description:"Ride on dem swings",
    //   //     id:"1"},
    //   //     {image:"https://i.scdn.co/image/ab67706f0000000262822373d6fce52feea1501c",
    //   //     name:"Pop PunkFaves",
    //   //     description:"Your favorite punks.",
    //   //     id:"2"},
    //   //     {image:"https://i.pinimg.com/474x/75/28/e7/7528e70aef7cf03be7a5fb13a163f476.jpg",
    //   //     name:"Today's Top Hits",
    //   //     description:"Drake is on top of the Hot 100!",
    //   //     id:"3"},
    //   //     {image:"https://pl.scdn.co/images/pl/default/2d5e3dba500f5a4f87581eaf7e294089806b6ba9",
    //   //     name:"Comfort Zone",
    //   //     description:"Chilled songs that you are familiar with - no surprises!",
    //   //     id:"4"},
    //   //     {image:"https://i.scdn.co/image/ab67706f00000002b6b079ea1e8f5af584d7a897",
    //   //     name:"Hip Hop Drive",
    //   //     description:"Hey there homie..",
    //   //     id:"5"}
    //   // ];
    
    const requestOptions = {
      method:"GET",
      headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk'}
    }
    
    const url = "http://52.14.190.202:8000/playlists/me"; 
    fetch(url,requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.playlist);
        if(data.playlist)
        {
        const playlists = data.playlist.map(item => {
          return (
            <GeneralItem
            image= {BASEURL + "Images/" + item.imagePath}
            name={item.playlistName}
            subname="HEY"
            id={item._id}
            type="PLAYLIST"
          />
          )
        }
        )
        this.setState({total:playlists});
      }
    
      })
      .catch((error)=>{
        console.log(error);
      })
      console.log(this.state.playlistArray.playlists);
    }

render() {
 return (

    <div className="wrapper">
      
      <div className="sidebar">
        
        <Link to="/webplayer/HomePage"><img className="logo"  src="https://i.ya-webdesign.com/images/itunes-logo-white-png-1.png" alt="logo"/></Link>
        
          <ul>
              <li><NavLink  onClick={addNewURL("/webplayer/HomePage")} className="List" to="/webplayer/HomePage/"><i className="fas fa-home"></i>Home</NavLink></li>
              <li><NavLink   className="List" to="/webplayer/search/"><i className="fas fa-search" aria-hidden="true"></i>Search</NavLink></li>
              <li><NavLink onClick={addNewURL("webplayer/yourlibrary/")} className="List" to="/webplayer/yourlibrary/"><i className="fas fa-bookmark" aria-hidden="true"></i>Your library</NavLink></li>
              <p id="Playlist">Playlists</p>
              <li><a className="List2" href="#" onClick={this.toggle}><i className="fas fa-plus-square fa-2x" aria-hidden="true"></i>Create Playlist</a></li>
              <li><NavLink  onClick={addNewURL("/webplayer/likedsongs")} className="List2" to="/webplayer/likedsongs/"><i className="fas fa-heart fa-2x" aria-hidden="true"></i>Liked Songs</NavLink></li>
              <hr/>
              <div id="my-playlist" className="my-playlists">
                <li><a className="List2" href="/webplayer/playlist">Born To die</a></li>
                <li><a className="List2" href="/webplayer/album">Perfect</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
                <li><a className="List2" href="#">Ali</a></li>
              </div>
          </ul> 
      </div>
    
    </div>

);
}
} 

export default HomePageSidebar;