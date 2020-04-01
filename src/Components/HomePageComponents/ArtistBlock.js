
import "./ArtistBlock.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';
import GeneralItem from "../../Containers/GeneralItem";

class ArtistBlock extends Component {
  constructor(props){
    super(props);

    this.state = { 
    artistimages:  ["https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba","https://i.scdn.co/image/ab67706f0000000262822373d6fce52feea1501c"],
    artistNames: ["Mood Booster","Pop PunkFaves"],
    artistDescriptions:  ["Artist"],
     }
  }
render() {
return ( 
  <div className="artist-block">
    <h1 className="header">{this.props.ComponentName}</h1>
    <p className="header-description">{this.props.description}</p>

    <GeneralItem
        image={this.state.artistimages[0]}
        name={this.state.artistNames[0]}
        subname={this.state.artistDescriptions[0]}
        roundimage="true"
        type="ARTIST"
      />

    <GeneralItem
        image={this.state.artistimages[1]}
        name={this.state.artistNames[1]}
        subname={this.state.artistDescriptions[0]}
        roundimage="true"
        type="ARTIST"
      />
   
  </div>
);
}
}
export default ArtistBlock;