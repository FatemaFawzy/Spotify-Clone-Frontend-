import React, { Component } from 'react';
import "./RelatedArtistsContent.css";
import "../../Containers/GenericComponenets/GeneralItem";
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import * as itemType from "../../Constants/itemType";

/** Class RelatedArtistsContent 
 * @category RelatedArtistsContent
 * @extends Component
 */
export class RelatedArtistsContent extends Component {

  state = {
    /**Array of artists' info
   * @memberof RelatedArtistsContent
   * @type {Array<artistInfo>}
   */
    artistInfo: [
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},

    ],
  }
   /**A function that requests artist info on rendering
   * @memberof RelatedArtistsContent
   * @func componentDidMount
   */
  componentDidMount() {
    
    const url = BASEURL + "users/artists/related";

    const requestOptions = {
        method: 'GET',
        headers: { 'x-auth': this.props.userToken , 'artistId' : this.props.id },
      }

    fetch(url,requestOptions)
      .then((response) => {
        console.log(response)
        return response.json();
        
      })
      .then((data) => {
        this.setState({artistInfo: data});
         console.log(data);
      })
      .catch((error)=>{
        console.log(error);

      })
  }

  render(){
    return (

      <div className="related-artists-content">

            {this.state.artistInfo.map((artist,index)=>(   
                <div > 
                  {/* <GeneralItem className="genral-item" image={ BASEURL + "Images/" +artist.imagePath}
                  name={artist.artistName} subname="Artist" type={itemType.ARTIST} roundimage="1" id={artist._id} key={artist._id}></GeneralItem> */}
                  <GeneralItem className="genral-item" image={ artist.imagePath}
                  name={artist.artistName} subname="Artist" type={itemType.ARTIST} roundimage="1" id={artist._id} key={artist._id}></GeneralItem>
                </div>  
            ))}

        {/* <GeneralItem className="genral-item" image="https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8" name="Vance Joy" subname="Artist"
         type="ARTIST" roundimage="1"></GeneralItem> */}

      </div>
    );
  }
}

  /**A function connecting component to redux store
 * @memberof RelatedArtistsContent
 * @func mapStateToProps
 */
const mapStateToProps = state => {

  return {
    userToken : state.userToken
    //now you have access to the userToken as this.props.userToken inside the class component.
  };

};

export default connect(mapStateToProps)(RelatedArtistsContent);

