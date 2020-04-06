import React, { Component } from 'react';
import "./RelatedArtistsContent.css";
import "../../Containers/GenericComponenets/GeneralItem";
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";

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
    console.log(this.props.id)
    const url = BASEURL + "users/artists/related";
    console.log(url)

    const requestOptions = {
      method: 'GET',
      headers: { 'x-auth': JSON.parse(`"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk"`) , 'artistId' : JSON.parse(`"5e8a701954fe752c1498f723"`) },
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
    userToken : state.userToken
    //now you have access to the userToken as this.props.userToken inside the class component.
  };

};

export default connect(mapStateToProps)(RelatedArtistsContent);

