import React,{Component} from 'react';
 import './AddSong.css';
import ArtistNavbar from "./ArtistNavbar";
import ComponentBlock from "@/Components/HomePageComponents/ComponentBlock"
import * as itemType from "@/Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "@/Constants/baseURL";
import {BrowserRouter as Router, Redirect, withRouter} from "react-router-dom";
import {Link} from "react-router-dom";



const initialState = {
       /**Name input
   * @memberof AddSong
   * @type {String}
   */
  Name:"",
       /**NamImagee input
   * @memberof AddSong
   * @type {String}
   */
  Image:"",
       /**Name error 
   * @memberof AddSong
   * @type {String}
   */
  nameerror:"",
       /**Image error message
   * @memberof AddSong
   * @type {String}
   */
  imageerror:"",
};
/** Class AddSong
 * @category AddSong
 * @extends Component
 */
export class AddSong extends Component {
  constructor(props){
    super(props);
    this.state = initialState
  }
  /**A function that validates input song name
   * @memberof AddSong
   * @func validateSongName
   */
  validateSongName = () => {
          /**Name input
   * @memberof AddSong
   * @type {String}
   */
    let Name = this.state.Name;
  /**Name error message
   * @memberof AddSong
   * @type {String}
   */
    let nameerror=this.state.nameerror;
  /**Boolean to indicate whether validations have passed or not
   * @memberof AddSong
   * @type {String}
   */
    let proceedname = true;
    if (Name.length === 0) {
      if (document.querySelector("#basic-url1")) {
        document.querySelector("#basic-url1").classList.add("redbox");
      }
      this.setState({nameerror:"Please enter the song's name"});
      proceedname = false;
    } else {
     
      if (document.querySelector("#basic-url1")) {
        document.querySelector("#basic-url1").classList.remove("redbox");
      
      }
      this.setState({nameerror:""});
      proceedname = true;
    }
    return proceedname;
  };
    /**A function that validates input image url
   * @memberof AddSong
   * @func validateImage
   */
  validateImage = () => {
              /**Image input
   * @memberof AddSong
   * @type {String}
   */
    let Image = this.state.Image;
      /**Image error message
   * @memberof AddSong
   * @type {String}
   */
    let imageerror=this.state.imageerror;
      /**Boolean to indicate whether validations have passed or not
   * @memberof AddSong
   * @type {String}
   */
    let proceedimage = true;
    if (Image.length === 0) {
      if (document.querySelector("#basic-url2")) {
        document.querySelector("#basic-url2").classList.add("redbox");
        
      }
      this.setState({imageerror:"Please enter the image's url"});
      proceedimage = false;
    } else {
     
      if (document.querySelector("#basic-url2")) {
        document.querySelector("#basic-url2").classList.remove("redbox");
      }
      this.setState({imageerror:""});
      proceedimage = true;
    }
    return proceedimage;
  };
  /**A function that handles changes in name input
   * @memberof AddSong
   * @func handleName
   */
  handleName = (event) => {
    let Name = this.state.Name;
    Name = event.target.value;
    this.state.Name = Name;
    this.validateSongName();
  };
  /**A function that handles changes in image input
   * @memberof AddSong
   * @func handleImage
   */
  handleImage = (event) => {
    let Image = this.state.Image;
    Image = event.target.value;
    this.state.Image = Image;
    this.validateImage();
  };
  /**A function that fires when a user clicks on the button to add another song
   * @memberof AddSong
   * @func clickSubmit
   */
  clickSubmit= (event) => {
    let Name=this.state.Name;
    let Image=this.state.Image;
    if (event) {
      event.preventDefault();
    }
    this.validateSongName();
    this.validateImage();
    if(this.validateSongName() && this.validateImage())
    {
      var clr= document.querySelector(".add-info");
     if (clr)
     {
     clr.reset();
     }
     const requestOptions2={
      method:"POST",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }

    const url2 = BASEURL+"songs/add"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message == "song added successfully")
        {
          console.log("song added successfully");
          this.props.history.push("/ArtistAccount/ArtistWebPlayer/AddSong")
        }
      })
      .catch((error)=>{console.log(error);
      })
     
      
     
    }
  };
    /**A function that fires when a user clicks on the button to end the process
   * @memberof AddSong
   * @func clickDone
   */
  clickDone = (event) => {
    let Name=this.state.Name;
    let Image=this.state.Image;
    if (event) {
      event.preventDefault();
    }
    this.validateSongName();
    this.validateImage();
    if(this.validateSongName() && this.validateImage())
    {
    const requestOptions2={
      method:"POST",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }

    const url2 = "http://spotifyclonemock.mocklab.io/songs/add"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message == "song added successfully")
        {
          console.log("song added successfully");
          this.props.history.push("/ArtistAccount/ArtistWebPlayer/")
        }
      })
      .catch((error)=>{console.log(error);
      })
    }
  }
  

    render(){
      return (
        <div className ="add-song" >
          
              
              <ArtistNavbar accountType="regular" name="Ali Halafawy" color="transparent"
              image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
              
              <form className="add-info">
              
              <h1>Add Song Information</h1>
              
                <div class="input-group mb-3" id="hhh">
                  <input type="text" onChange={this.handleName} name="Name" class="form-control" id="basic-url1" placeholder="Song Name"  aria-describedby="basic-addon2"/>
                </div>
                <p id="error-message1" >{this.state.nameerror}</p>

                
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">https://example.com/image/</span>
                  </div>
                  <input onChange={this.handleImage} name="Image" type="text" class="form-control" id="basic-url2" placeholder="Image Url" aria-describedby="basic-addon3"/>
                  </div>
                  <p id="error-message2" >{this.state.imageerror}</p>
                
            </form>
              <div className="Add-songs d-flex justify-content-center">
                <button id="submit" onClick={this.clickSubmit}>Add another song</button>
                 <button id="submit2" onClick={this.clickDone}>Done</button>
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
export default connect(mapStateToProps)(AddSong);
      