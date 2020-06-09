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
        imagePath: "https://i.ytimg.com/vi/0R6YO0IAN48/maxresdefault.jpg",
        trackName: "Perfect",
        artistName: "Ed Sheeran",
        _id: "0",
        artistId: "1",
      },
      {
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/71x%2BT7Cjx8L._AC_SL1400_.jpg",
        trackName: "Radioactive",
        artistName: "Imagine Dragons",
        _id: "17",
        artistId: "2",
      },
      {
        imagePath: "https://i.pinimg.com/originals/8b/8c/c5/8b8cc57a160d164cdf008e63acecfc4e.jpg",
        trackName: "Call Out My Name",
        artistName: "The Weekend",
        _id: "20",
        artistId: "3",
      },
      {
        imagePath: "https://m.media-amazon.com/images/I/81Jbh4gWTDL._SS500_.jpg",
        trackName: "I'm a Mess",
        artistName: "Bebe Rexha",
        _id: "6",
        artistId: "4",
      }


    ],
  }

  componentDidMount() {
    // const url = BASEURL + "tracks/?genre=" + this.props.selectedGenreID;

    // const requestOptions = {
    //   method: 'GET',
    //   headers: { 'x-auth': this.props.userToken },
    // };

    // try {
    //   fetch(url, requestOptions)
    //     .then((response) => {

    //       return response.json();

    //     })
    //     .then((data) => {

    //       this.setState({ songs: data })

    //     })
    //     .catch(function (error) {
    //       console.log('There has been a problem with your fetch operation: ',
    //         error.message);
    //     })

    // }
    // catch (error) {
    //   console(error);
    // }



  }
  render() {
    return (<div >
      <div style={{ "backgroundColor": this.props.selectedGenreColor, "boxShadow": `0px 100px 100px ${this.props.selectedGenreColor}` }} className="genre-title">
        <h1>{this.props.selectedGenreID}</h1>
      </div>
      <div className="song-by-genre-class"  >

        {this.state.songs.map(song => (
          <SongSearched
            // image={BASEURL + "Images/" + song.imagePath}
            image={song.imagePath}
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