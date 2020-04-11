
import "./LikedSongsComponent.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';


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
      totalLiked: "60",
   /**Array of recently liked songs
   * @memberof LikedSongsComponent
   * @type {Array<song>}
   */
      recentlyLiked:[{artist:"Drake", song:"God's Plan"},
                     {artist:"Rihanna", song:"Work"},
                     {artist:"21 Savage", song:"X Bitch"},
                     {artist:"Saint JHN", song:"Roses"},
                     {artist:"The Weeknd", song:"Blinding Lights"},
                     {artist:"21 Savage", song:"asmr"},
                     {artist:"Saint JHN", song:"I Heard You Got Too Lit Last Night"}
                   ],
   /**String that concatenates the details as needed to preview
   * @memberof LikedSongsComponent
   * @type {string}
   */
      string:'',
  /**Array of IDs of songs(used for backend fetch request)
   * @memberof LikedSongsComponent
   * @type {Array}
   */
      arrayOfIDs:[]
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
        headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk'}
      }
    /**URL for fetch request
     * @memberof LikedSongsComponent
     * @type {string}
     */
      const url = "http://52.14.190.202:8000/tracks/like/me"; 
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
        const url1 = "http://52.14.190.202:8000/tracks"; 
        fetch(url1,requestOptions1)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("songs");
            console.log(data.tracks);
           this.setState({recentlyLiked:data.tracks})
           console.log(this.state.recentlyLiked);
          //  console.log(this.state.arrayOfIDs);
          })
          .catch((error)=>{
            console.log(error);
          })


      //     const requestOptions2 = {
      //       method:"POST",
      //       headers:{'Content-Type':'application/json'},
      //     }
      //     const url2 = "http://52.14.190.202:8000/artists/"+ recentlyLiked.artistId;
      //   fetch(url2,requestOptions2)
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((data) => {
      //       console.log("songs");
      //       console.log(data.tracks);
      //      this.setState({recentlyLiked:data.tracks})
      //      console.log(this.state.recentlyLiked);
      //     //  console.log(this.state.arrayOfIDs);
      //     })
      //     .catch((error)=>{
      //       console.log(error);
      //     })
        
     /**Variable that concatenates the details of the songs
     * @memberof LikedSongsComponent
     * @type {string}
     */
      var x = "";
      for (var i=0; i< this.state.recentlyLiked.length; i++)
      {
        x += this.state.recentlyLiked[i].artist + " ● " + this.state.recentlyLiked[i].song + " ";
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
              {item.artist + " "}
            </span>
            <span className="song-name">
            ● 
            </span>
            <span className="song-name">
              {" " +item.song  + " "}
            </span>
          </span>
        )
      }) 
      this.setState({string:stringofsongs});
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
export default LikedSongsComponent;