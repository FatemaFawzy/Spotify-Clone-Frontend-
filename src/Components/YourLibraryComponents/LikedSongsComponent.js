import "./LikedSongsComponent.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';
import {BASEURL} from "../../Constants/baseURL";


/** Class LikedSongsComponent that creates the bluish component in the your library-playlist page.
 * @category LikedSongsComponent
 * @extends Component
 */
export class LikedSongsComponent extends Component {
  
  constructor(props){
    super(props);

    this.state = {
   /**Total number of liked songs that appears on the interface of the component
   * @memberof LikedSongsComponent
   * @type {string}
   */
      totalLiked: "",
   /**Array of recently liked songs
   * @memberof LikedSongsComponent
   * @type {Array<song>}
   */
      recentlyLiked:[],
   /**String that concatenates the details as needed to preview
   * @memberof LikedSongsComponent
   * @type {string}
   */
      string:'',
  /**Array of IDs of songs(used for backend fetch request)
   * @memberof LikedSongsComponent
   * @type {Array}
   */
      arrayOfIDs:[],
    }
  }
  /**A function that gets called once this component is rendered
   * @memberof LikedSongsComponent
   * @func componentDidMount
   */
    componentDidMount(){

     /**Prerequisites for fetch request
     * @memberof LikedSongsComponent
     * @type {object}
     */
      const requestOptions = {
        method:"GET",
        headers:{'x-auth':this.props.userToken}
      }
    /**URL for fetch request
     * @memberof LikedSongsComponent
     * @type {string}
     */
      const url = BASEURL + "/tracks/like/me"; 
      fetch(url,requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
         console.log(data);
         this.setState({arrayOfIDs:data})
         console.log(this.state.arrayOfIDs);
        })
        .catch((error)=>{
          console.log(error);
        })

console.log(this.state.arrayOfIDs);

        const requestOptions1 = {
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({id: this.state.arrayOfIDs})
        }
        const url1 = BASEURL + "/tracks"; 
        fetch(url1,requestOptions1)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("songs");
            console.log(data.tracks);
           this.setState({recentlyLiked:data.tracks})
           console.log(this.state.recentlyLiked);
          })
          .catch((error)=>{
            console.log(error);
          })
     /**Variable that concatenates the details of the songs
     * @memberof LikedSongsComponent
     * @type {string}
     */
      var x = "";
      for (var i=0; i< this.state.recentlyLiked.length; i++)
      {
        x += this.state.recentlyLiked[i].artistName + " ● " + this.state.recentlyLiked[i].trackName + " ";
      }
       console.log(x);
      if (x.length > 150)
      {
        x = x.slice(0,149) + "...";
      }
      console.log(x);
    /**string of songs used for concatenation7
     * @memberof LikedSongsComponent
     * @type {Array<songs>}
     */
      const stringofsongs = this.state.recentlyLiked.map(item =>{
        return(
          <span>
            <span>
              {item.artistName + " "}
            </span>
            <span className="song-name">
            ● 
            </span>
            <span className="song-name">
              {" " +item.trackName  + " "}
            </span>
          </span>
        )
      }) 
      this.setState({string:stringofsongs});
      // this.setState({totalLiked:(this.recentlyLiked.length+1)})
    };
  /**A function that redirects the user to the liked songs page on click of the component.
   * @memberof LikedSongsComponent
   * @func handleClick
   */
  handleClick = () => {
    this.props.history.push("/webplayer/likedsongs/");
  } 
render() {
return ( 
  <div className="liked-songs-component" onClick={this.handleClick}>
    <p className="most-recent">
    {this.state.string}
    </p>
    <div className="row">
    <div className="col-8">
    <h1 className="liked-songs-title">Liked Songs</h1>
    <p className="number-of-liked-songs col no-gutters">{this.state.totalLiked} liked songs</p>
    </div>
    <div className="col-4">
    <button className="bottom-right-button col"><i className="fas fa-play"></i></button>
    </div>
    </div>
  </div>
);
}
}
const mapStateToProps = state => {

  return {
    userToken:state.userToken
  };

};

export default LikedSongsComponent;