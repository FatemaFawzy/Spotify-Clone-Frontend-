import "./ComponentBlock.css";
import React ,{ Component} from 'react';
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
// import * as itemType from "../../Constants/itemType";
import {BASEURL} from "../../Constants/baseURL";



class ComponentBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      Results:[]
    }  
  }
render()
{ 
  let final;
  switch (this.props.type)
  {  
    case "artists":
      if (this.props.details)
      {
        final =this.props.details.map(result => {
        return (
          <GeneralItem
            image={ BASEURL + "Images/" + result.imagePath}
            name={result.artistName}
            subname="ARTIST"
            roundimage
            key={result._id}
            id={result._id}
            type="ARTIST"
          />     
          )    
          })
        }
    break;

      case "playlists":
        if (this.props.details.playlists){
          final =this.props.details.playlists.map(result => {
             return (
               <GeneralItem
                 image={ BASEURL + "Images/" + result.imagePath}
                 name={result.artistName}
                 subname={result.playlistDescription}
                 key={result._id}
                 id={result._id}
                 type="PLAYLIST"
               />     
               )    
               })
             }
      break;

      case "songs":
        if (this.props.details.songs){
          final =this.props.details.songs.map(result => {
             return (
               <GeneralItem 
                 image={ BASEURL + "Images/" + result.imagePath}
                 name={result.songName}
                 subname={result.artistName}
                 key={result._id}
                 id={result._id}
                 type="SONG"
               />     
               )    
               })
             }
      break;

      case "albums":
        if (this.props.details.albums){
          final =this.props.details.albums.map(result => {
             return (
               <GeneralItem
                 image={ BASEURL + "Images/" + result.imagePath}
                 name={result.albumName}
                 subname="ARTIST NAME"
                 key={result._id}
                 id={result._id}
                 type="ALBUM"
               />     
               )    
               })
             }
      break;
      default:
        break;
  }
return( 
  <div className="component-block">
    <h1 className="header">{this.props.ComponentName}</h1>
    <p className="header-description">{this.props.description}</p>
    {final}  
  </div>
    )
  }
}

export default ComponentBlock;