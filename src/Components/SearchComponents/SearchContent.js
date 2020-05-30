import React, { Component } from "react";
import BrowseItem from "./BrowseItem";
import "./SearchContent.css";
import "./SongSearched";
import { BASEURL } from "../../Constants/baseURL";
import { connect } from "react-redux";

/** Class SearchContent. A page that displays all genres before the user types to search for something.
 * @category SearchContent
 * @extends Component
 */
export class SearchContent extends Component {

  state = {
    /**variable that holds all the returned genres from the request
     * @memberof SearchContent
     * @type {Array<string>}
     */
    genres: [
      "Alternative Rock",
      "Arabic",
      "Blues",
      "Electronic",
      "Hip-Hop",
      "Jazz",
      "Pop",
      "R&B",
      "Rap",
      "Rock",
      "Trap"
    ],
  }
  componentDidMount() {
    const url = BASEURL + "tracks/allgenres";

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
    return (

      <div className="before-typed-search">
        <h2>Your top genres</h2>

        {
          //since I don't get back a top genre for a specific user I am putting it as the first genre  
          this.state.genres.length && <BrowseItem
            header={this.state.genres[0]}
            color="rgb(139,120,155)"
            image="https://i.scdn.co/image/ab67616d00001e02c3ddbe05f192eaf4c9294505"
            special="true"
            id={this.state.genres[0]} />

        }


        <h2>Browse all</h2>

        {this.state.genres.map((genre, index) => {

          //  I should get back an array of genres along with the image and color of each one, but since i only get back
          //  the genre names from the request I am doing this switch case and if the returned genre is not one of these, I
          //  set a default image and color

          /**variable that holds all the gere color
            * @memberof SearchContent
            * @type {string}
            */
          var color;
          /**variable that holds the genre image
            * @memberof SearchContent
            * @type {string}
            */
          var image;
          switch (genre) {
            case "Alternative Rock":
              color = "rgb(139,120,155)";
              image = "https://i.scdn.co/image/ab67616d00001e02c3ddbe05f192eaf4c9294505";

              break;

            case "Arabic":
              color = "rgb(59,114,181)";
              image = "https://t.scdn.co/images/47d9e28592b64a95a60bdbe9ae7fb2c8.jpeg";

              break;

            case "Blues":
              color = "rgb(121,147,158)";
              image = "https://t.scdn.co/images/a91f8b3da9da4ebcb12ee6ad8ac6d3c0.jpeg";

              break;

            case "Electronic":
              color = "rgb(123,190,178)";
              image = "https://t.scdn.co/images/3c419cbc46e5430795e056298c34702d.jpeg";

              break;

            case "Hip-Hop":
              color = "rgb(195,123,28)";
              image = "https://t.scdn.co/images/9676cef74ec147a48607c737c4f93943.jpeg";

              break;

            case "Jazz":
              color = "rgb(122,149,160)";
              image = "https://t.scdn.co/images/0f2f4c71c9714cc5b757f7bb3559fcdb.jpeg";

              break;

            case "Pop":
              color = "rgb(122,149,160)";
              image = "https://t.scdn.co/images/d355f48a90b64c25b6e004179a596e51.jpeg";

              break;

            case "R&B":
              color = "rgb(181,41,124)";
              image = "https://t.scdn.co/images/92a6fd8aaffe403ba1967c70097f90f9.jpeg";

              break;

            case "Rap":
              color = "rgb(139,120,155)";
              image = "https://t.scdn.co/images/5174463a68e449bf8ee0ae85cd6d7b48.jpeg";

              break;

            case "Rock":
              color = "rgb(185,24,40)";
              image = "https://t.scdn.co/images/31c85ae6fec34a16927ef28a7a88e97b.jpeg";

              break;

            case "Trap":
              color = "rgb(139,120,155)";
              image = "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg";

              break;


            default:
              color = "rgb(78,78,78)";
              image = "https://t.scdn.co/images/d7d44d00eb0542aeab69ed5c8654d104.jpeg";
              break;
          }

          return (<BrowseItem
            image={image}
            header={genre}
            key={index}
            color={color}
            id={genre}
          />)
        })}

      </div>
    );

  }
}

const mapStateToProps = state => {

  return {
    userToken: state.userToken
    //now you have access to the userToken as this.props.userToken inside the class component.
  };

};


export default connect(mapStateToProps)(SearchContent);