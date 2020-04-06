import React, { Component } from 'react';
import "./RelatedArtistsContent.css";
import "../../Containers/GenericComponenets/GeneralItem";
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
import {connect} from "react-redux";

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

  componentDidMount() {
    
    console.log("heyyyyyyyyyyyyy")
    const url = "https://b9b31d99-4598-43e6-90a8-893c3988d489.mock.pstmn.io/" + "users/artists/related?artistId=" + "123"; 

    const requestOptions = {
      method: 'GET',
      headers: { 'Authorization': 'x-auth' },
    }
    fetch(url,requestOptions)
      .then((response) => {
        return response.json();
        
      })
      .then((data) => {
        // this.setState({artistInfo: data});
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

const mapStateToProps = state => {

  return {
    userID : state.userID
    //now you have access to the userID as this.props.userID inside the class component.
  };

};

export default connect(mapStateToProps)(RelatedArtistsContent);

