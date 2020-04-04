import React, { Component } from 'react';
import "./RelatedArtistsContent.css";
import "../../Containers/GenericComponenets/GeneralItem";
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";

class RelatedArtistsContent extends Component {

  state = {
    artistInfo: [
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},

    ],
  }

  render(){
    return (
      <div className="related-artists-content">

            {this.state.artistInfo.map((artist,index)=>(   
                <div > 
                  <GeneralItem className="genral-item" image={artist.artistPhoto}
                  name={artist.artistName} subname="Artist" type="ARTIST" roundimage="1"></GeneralItem>
                </div>  
            ))}

        {/* <GeneralItem className="genral-item" image="https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8" name="Vance Joy" subname="Artist"
         type="ARTIST" roundimage="1"></GeneralItem> */}

      </div>
    );
  }
}
export default RelatedArtistsContent;

