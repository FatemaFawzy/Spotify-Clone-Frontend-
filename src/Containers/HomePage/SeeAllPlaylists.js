import React,{Component} from 'react';
 import './SeeAllPlaylists.css';
import HomePageNavbar from "@/Components/HomePage/HomePageNavbar";
import ComponentBlock from "@/Components/HomePageComponents/ComponentBlock"
import * as itemType from "@/Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "@/Constants/baseURL"
/** Class SeeAllPlaylists 
 * @category SeeAllPlaylists
 * @extends Component
 */
export class SeeAllPlaylists extends Component {
  constructor(props){
    super(props);
    this.state = {
  /**Array of artists to show up in the page.
   * @memberof SeeAllPlaylists
   * @type {Array<artists>}
   */
  popularplaylists:[],
   /**Constant boolean to indicate that there is no need for see all to appear.
   * @memberof SeeAllPlaylists
   * @type {boolean}
   */
     all:false
    }  
  }
 /**A function that's called when the page is brought up.
   * @memberof SeeAllPlaylists
   * @func componentDidMount
   */
  componentDidMount() {
           /**Object needed for the request.
   * @memberof SeeAllPlaylists
   * @type {object}
   */
    const requestOptions={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
       /**URL for request.
   * @memberof SeeAllPlaylists
   * @type {string}
   */
    const url = BASEURL + "homepage/popularplaylists"; 
  fetch(url,requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    
      this.setState({popularplaylists:data.popularPlaylists})  
      
    })
    .catch((error)=>{
      console.log(error);
    }) 
 }

  render(){
    return (
      <div className ="See-All-Playlists" >
        
            <HomePageNavbar accountType="regular" name="Ali Halafawy" color="#121212"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            <div id="homepage-body" >
              
               
              <ComponentBlock type="playlists" ComponentName="Popular playlists" details={this.state.popularplaylists} excess={this.state.all}/>
              
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
export default connect(mapStateToProps)(SeeAllPlaylists);
