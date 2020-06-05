import React,{Component} from 'react';
 import './SeeAllRecentlyPlayed.css';
import HomePageNavbar from "../../Components/HomePage/HomePageNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL"

/** Class SeeAllRecentlyPlayed 
 * @category SeeAllRecentlyPlayed
 * @extends Component
 */
export class SeeAllRecentlyPlayed extends Component {
  constructor(props){
    super(props);
    this.state = {
  /**Array of recently played to show up in the page.
   * @memberof SeeAllRecentlyPlayed
   * @type {Array<recentlyplayed>}
   */
  recentlyPlayed:[],
   /**Constant boolean to indicate that there is no need for see all to appear.
   * @memberof SeeAllRecentlyPlayed
   * @type {boolean}
   */
     all:false
    }  
  }
 /**A function that's called when the page is brought up.
   * @memberof ForgotPassword
   * @func componentDidMount
   */
  componentDidMount() {
     const url = BASEURL + "homepage/recentlyplayed"; 
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        this.setState({recentlyPlayed:data.recentlyPlayed})  
       
        
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  render(){
    return (
      <div className ="See-All-Recently" >
        
            <HomePageNavbar accountType="regular" name="Ali Halafawy" color="#121212"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            <div id="homepage-body" >
              
               
              <ComponentBlock type="songs" ComponentName="Recently played" details={this.state.recentlyPlayed} excess={this.state.all}/>
              
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
export default connect(mapStateToProps)(SeeAllRecentlyPlayed);
