import React, { Component } from "react";
import { connect } from "react-redux";
import { BASEURL } from "../../Constants/baseURL";
import SongSearched from "./SongSearched";
import "./SongsByGenre.css"

/** Class SongsByGenre to display all the songs of a certain genre
 * @category SongsByGenre
 * @extends Component
 */
export class SongsByGenre extends Component {

  state = {
    /**variable that holds the info of all the returned songs related to a certain genre
     * @memberof SearchPage 
     * @type {string}
     */
    songs: [
      {
        imagePath: "",
        trackName: "Goodbye",
        artistName: "I hate the world",
        _id: "1",
        artistId: "1",
      },
      {
        imagePath: "",
        trackName: "Life is bad",
        artistName: "Death",
        _id: "2",
        artistId: "2",
      },
      {
        imagePath: "",
        trackName: "We are all bad people",
        artistName: "Yes, we are",
        _id: "3",
        artistId: "3",
      },
      {
        imagePath: "",
        trackName: "End me",
        artistName: "For good",
        _id: "4",
        artistId: "4",
      }


    ],
  }

  componentDidMount() {
    const url = BASEURL + "tracks/?genre=" + this.props.selectedGenreID;

    const requestOptions = {
      method: 'GET',
      headers: { 'x-auth': this.props.userToken },
    };

    try {
      fetch(url, requestOptions)
        .then((response) => {

          return response.json();

        })
        .then((data) => {

          this.setState({ songs: data })

        })
        .catch(function (error) {
          console.log('There has been a problem with your fetch operation: ',
            error.message);
        })

    }
    catch (error) {
      console(error);
    }



  }
  render() {
    return (<div >
      <div style={{ "backgroundColor": this.props.selectedGenreColor, "boxShadow": `0px 100px 100px ${this.props.selectedGenreColor}` }} className="genre-title">
        <h1>{this.props.selectedGenreID}</h1>
      </div>
      <div className="song-by-genre-class"  >

        {this.state.songs.map(song => (
          <SongSearched
            image={BASEURL + "Images/" + song.imagePath}
            name={song.trackName}
            subname={song.artistName}
            key={song._id}
            id={song._id}
            artistid={song.artistId}
          />))}

      </div>
    </div>

    )
  }

}



const mapStateToProps = state => {
  return {
    selectedGenreID: state.selectedGenreID,
    //now you have access to the selectedGenreID as this.props.selectedGenreID inside the class component.
    selectedGenreColor: state.selectedGenreColor,
    //now you have access to the selectedGenreColor as this.props.selectedGenreColor inside the class component.
    userToken: state.userToken
    //now you have access to the userToken as this.props.userToken inside the class component.
  };
};

export default connect(mapStateToProps)(SongsByGenre)