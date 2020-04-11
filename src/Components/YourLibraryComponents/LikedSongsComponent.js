
import "./LikedSongsComponent.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import React ,{ Component} from 'react';


export class LikedSongsComponent extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      totalLiked: "60",
      recentlyLiked:[{artist:"Drake", song:"God's Plan"},
                     {artist:"Rihanna", song:"Work"},
                     {artist:"21 Savage", song:"X Bitch"},
                     {artist:"Saint JHN", song:"Roses"},
                     {artist:"The Weeknd", song:"Blinding Lights"},
                     {artist:"21 Savage", song:"asmr"},
                     {artist:"Saint JHN", song:"I Heard You Got Too Lit Last Night"}
                   ],
      string:'',
      arrayOfIDs:[]
    }
  }
 
    componentDidMount(){

      const requestOptions = {
        method:"GET",
        headers:{'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk'}
      }
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