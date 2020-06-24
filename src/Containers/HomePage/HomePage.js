import React,{Component} from 'react';
 import './HomePage.css';
import HomePageNavbar from "@/Components/HomePage/HomePageNavbar";
import ComponentBlock from "@/Components/HomePageComponents/ComponentBlock"
import * as itemType from "@/Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "@/Constants/baseURL";


/** Class HomePage
 * @category HomePage
 * @extends Component
 */
export class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
  /**Array of recently played playlists, or songs
   * @memberof HomePage
   * @type {Array}
   */
     recentlyPlayed:[],   
  /**Array of playlists generated for the user
   * @memberof HomePage
   * @type {Array<playlists>}
   */ 
     madeforyou:[],
  /**Array of playlists followed or created by the user
   * @memberof HomePage
   * @type {Array<playlists>}
   */
     popularplaylists: [],
  /**Array of popular albums for homepage
   * @memberof HomePage
   * @type {Array<albums>}
   */
     popularalbums:[],
  /**Array of newly released songs
   * @memberof HomePage
   * @type {Array<songs>}
   */
     newreleases:[],
   /**Array of popular artists for homepage
   * @memberof HomePage
   * @type {Array<artists>}
   */
     popularartists:[],
  /**Boolean to indicate whether we have more than 5 artists or not (slicing)
   * @memberof HomePage
   * @type {boolean}
   */
     excessArtists: false,

     excessPlaylists: false,

     excessMadeForYou: false,

     excessRecentlyPlayed: false,
    
    }
    
  }
  
    

  /**A function that fires once the homepage is called
   * @memberof HomePage
   * @func componentDidMount
   */
  componentDidMount() {

    const popularArtistsArray=[{
      id: "1",
      artistName:"Cardi B",
      imagePath:"https://i.pinimg.com/originals/61/33/9f/61339f68f4dbe4ca3ffd8352eb9b6839.jpg"
    },
    {
      id: "2",
      artistName:"Drake",
      imagePath:" https://allaboutedm.com/wp-content/uploads/2018/06/Drake039s-Scorpion-Stream-on-Spotify-and-Apple-Music.jpg"
    },
      {
      id: "3",
      artistName:"Pink Floyd",
      imagePath:"https://i.scdn.co/image/ab67616d0000b27331c57b302f0e3aca46ab7561"
    },
        {
      id: "4",
      artistName:"Amr Diab",
      imagePath:"https://i.scdn.co/image/ee11ffb4c0f334e4c958ed051bbaf5f720751c9d"
    },
          {
      id: "5",
      artistName:"Nicki Minaj",
      imagePath:"https://i.scdn.co/image/ab67706f00000002838a84cec88c50241b0dd5e6"
    }
  ];
  this.setState({popularartists:popularArtistsArray});



     console.log("hello");
    //Make a request with this.props.userID
    //assume this is the returned data

    const requestOptions1={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }

     const url1 = BASEURL + "homepage/recentlyplayed"; 
    fetch(url1,requestOptions1)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if ((data.recentlyPlayed.length)>5)
        {
        this.setState({excessRecentlyPlayed:true});
        this.setState({recentlyPlayed:data.recentlyPlayed.slice(0,5)})
  
        }
        else{
        this.setState({recentlyPlayed:data.recentlyPlayed})  
        }
        
      })
      .catch((error)=>{
        console.log(error);
      })

   


    //Make a request with this.props.userID
    //assume this is the returned data
    const requestOptions2={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }

    const url2 = BASEURL + "homepage/madeforyou"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("heyy");
        console.log(data.madeforyou);
        if ((data.madeforyou.length)>5)
        {
          
        this.setState({excessMadeForYou:true});
        this.setState({madeforyou:data.madeforyou.slice(0,5)})
  
        }
        else{
        this.setState({madeforyou:data.madeforyou})  
        }
        console.log(this.state.madeforyou);
      })
      .catch((error)=>{
        console.log(error);
      })
    
    

    //Make a request with this.props.userID
    //assume this is the returned data
    
     /**url for fetch request
   * @memberof HomePage
   * @type {String}
   */

  const requestOptions3={
    method:"GET",
    headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
  }
  const url3 = BASEURL + "homepage/popularplaylists"; 
  fetch(url3,requestOptions3)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.popularPlaylists);
      if ((data.popularPlaylists.length)>5)
      {
      this.setState({excessPlaylists:true});
      this.setState({popularplaylists:data.popularPlaylists.slice(0,5)})

      }
      else{
      this.setState({popularplaylists:data.popularPlaylists})  
      }
      console.log(this.state.popularplaylists);
      
    })
    .catch((error)=>{
      console.log(error);
    })
    
 
      

    //Make a request with this.props.userID
    //assume this is the returned data
    
     }

  render(){
    return (
      <div className ="home-navbar" >
        
             
            <HomePageNavbar accountType="regular" name="Ali Halafawy" color="#121212"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            <div id="homepage-body" >
              
               <ComponentBlock ComponentName="Recently played" type="songs" description="" details={this.state.recentlyPlayed} excess={this.state.excessRecentlyPlayed}   /> 
               <ComponentBlock type="playlists" ComponentName="Made for You" description="Playlists to match your mood" details={this.state.madeforyou} excess={this.state.excessMadeForYou} />
               <ComponentBlock type="playlists" ComponentName="Popular playlists" description="" details={this.state.popularplaylists} excess={this.state.excessPlaylists}/> 
               <ComponentBlock type="artists" ComponentName="Popular artists" details={this.state.popularartists} excess={this.state.excessArtists}/>
              
            </div>
          
      </div>
      
    );


  }
  
}

const mapStateToProps = state => {

  return {
    userID:state.userID
  };

};
export default connect(mapStateToProps)(HomePage);

