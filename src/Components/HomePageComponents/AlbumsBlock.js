
import "./AlbumsBlock.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';
import GeneralItem from "../../Containers/GeneralItem";

class AlbumsBlock extends Component {
  constructor(props){
    super(props);

    this.state = { 
    AlbumImages:  ["https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba","https://i.scdn.co/image/ab67706f0000000262822373d6fce52feea1501c"],
    AlbumNames: ["Mood Booster","Pop PunkFaves"],
    AlbumDescriptions:  ["Ride on dem swings","Your favorite punks."],
     }
  }
render() {
return ( 
  <div className="albums-block">
    <h1 className="header">{this.props.ComponentName}</h1>
    <p className="header-description">{this.props.description}</p>

    <GeneralItem
        image={this.state.AlbumImages[0]}
        name={this.state.AlbumNames[0]}
        subname={this.state.AlbumDescriptions[0]}
        type="ALBUM"
      />

    <GeneralItem
        image={this.state.AlbumImages[1]}
        name={this.state.AlbumNames[1]}
        subname={this.state.AlbumDescriptions[1]}
        type="ALBUM"
      />
   
  </div>
);
}
}
export default AlbumsBlock;