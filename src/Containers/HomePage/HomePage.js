import React,{Component} from 'react';
 import './HomePage.css';
import HomePageNavbar from "../../Components/HomePage/HomePageNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";


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
     yourplaylists: [],
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
    
    }
    
  }
  
  /**A function that fires once the homepage is called
   * @memberof HomePage
   * @func componentDidMount
   */
  componentDidMount() {

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({recentlyPlayed:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })

    const recentlyPlayedarray=[{type: "SONG" , title: "High Hopes", subtitle: "Pink Floyd", url: "https://i.scdn.co/image/ab67616d0000b27330ba0e3ed0e1db48cd3b94a8", id:"1", roundImgOrNot: ""},
    {type: "SONG" , title: "Is This Love", subtitle: "Bob Marley", url: "https://i.scdn.co/image/ab67616d0000b27399defae6e4954461aa362d92", id:"2", roundImgOrNot: ""},
    {type: "SONG" , title: "Kiki", subtitle: "Drake", url: "https://i.scdn.co/image/ab67616d0000b273a58da82cd7b27ffc575ccb3e", id:"3", roundImgOrNot: ""},
    {type: "SONG" , title: "Mood Booster", subtitle: "Chill", url: "https://pl.scdn.co/images/pl/default/36bdc599a28c5a55269620ad5ade6f5fc459dd6e", id:"4", roundImgOrNot: ""}]; 
    
    this.setState({recentlyPlayed:recentlyPlayedarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({madeforyou:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
    const madeforyouarray= [{type: "PLAYLIST" , title: "Daily Mix", subtitle: "Mulst Listen", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-ZIZSg7rI8fyqBOxIftVBDFFwb0Oqc3saYbGwBLz5V1jHdKGz&usqp=CAU", id:"1", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Mix 2", subtitle: "Feel Good", url: "https://i.redd.it/avxncpgy8do11.png", id:"2", roundImgOrNot: ""}];
     
    this.setState({madeforyou:madeforyouarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({popularplaylists:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
     const popularplaylistsarray= [{type: "PLAYLIST" , title: "Dance Pop", subtitle: "Dance All Day", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGAe4ncly34_omxS6TWVHiweCRGPuoP2I0XOTjAotRHj1EcZDu&usqp=CAU", id:"1", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Mic Drop", subtitle: "Get Hyped", url: "https://cdn.playlists.net/images/genre_moods/image/medium/Pop.jpg", id:"2", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Hip Hop", subtitle: "Dance", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNRqOkxQgHtfVUS6rVtcV1Y1RHsReptSs_Kjirqr16kLSq0WZ0&usqp=CAU", id:"3", roundImgOrNot: ""},
     {type: "PLAYLIST" , title: "Anti Pop", subtitle: "", url: "https://i.redd.it/9vt7zp9ru8211.jpg", id:"4", roundImgOrNot: ""}]; 
    
    this.setState({popularplaylists:popularplaylistsarray});

    //Make a request with this.props.userID
    //assume this is the returned data
    // const requestOptions={
    //   method:"GET",
    //   headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    // }

    // const url1 = "https://b9b31d99-4598-43e6-90a8-893c3988d489.mock.pstmn.io/albums/homepage/popular"; 
    // fetch(url1,requestOptions)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({popularalbums:data});
    //     console.log(this.state.popularalbums);
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
    // const popularalbumsarray= [{type: "ALBUM" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
    //  {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
    //  {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
    //  {type: "ALBUM" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}];  
    
    // this.setState({popularalbums:popularalbumsarray});

    //Make a request with this.props.userID
    //assume this is the returned data

    // const url = "https://jsonplaceholder.typicode.com/photos"; 
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({newreleases:data.slice(0,5)})
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    
    const newreleasesarray= [{type: "SONG" , title: "Meek Mill", subtitle: "ARTIST", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"1", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""},
     {type: "SONG" , title: "Meek Mill", subtitle: "hdyyyy", url: "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba", id:"2", roundImgOrNot: ""}];
    
    this.setState({newreleases:newreleasesarray});

    //Make a request with this.props.userID
    //assume this is the returned data
    
    const url = "http://52.14.190.202:8000/artists/homepage/popular"; 
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if ((data.artists.length)>5)
        {
        this.setState({excessArtists:true});
        this.setState({popularartists:data.artists.slice(0,5)})

        }
        else{
        this.setState({popularartists:data.artists})  
        }
        
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  render(){
    return (
      <div className ="home-navbar" >
        
             
            <HomePageNavbar accountType="regular" name="Ali Halafawy" color="#121212"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            <div id="homepage-body" >
              
               <ComponentBlock ComponentName="Recently played" type="songs" description="" details={this.state.recentlyPlayed}   /> 
               <ComponentBlock type="playlists" ComponentName="Made for You" description="Playlists to match your mood" details={this.state.madeforyou} />
               <ComponentBlock type="playlists" ComponentName="Popular playlists" description="" details={this.state.popularplaylists}/> 
                {/* <ComponentBlock type="albums" ComponentName="Popular albums" description="" details={this.state.popularalbums} />
               <ComponentBlock type="songs" ComponentName="Popular new releases" description=""  details={this.state.newreleases} />  */}
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

