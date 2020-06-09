import React,{Component} from 'react';
 import './AddAlbum.css';
import ArtistNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import {Link} from "react-router-dom";



const initialState = {
  Name:"",
  Image:"",
};
/** Class AddAlbum
 * @category AddAlbum
 * @extends Component
 */
export class AddAlbum extends Component {
  constructor(props){
    super(props);
    this.state = initialState
  }

  validateAlbumName = () => {
    let Name = this.state.Name;
    let proceedname = true;
    if (Name.length === 0) {
      if (document.querySelector("#basic-url1")) {
        document.querySelector("#basic-url1").classList.add("redbox");
        document.querySelector("#error-message").classList.remove("d-none");
      }
      proceedname = false;
    } else {
     
      if (document.querySelector("#basic-url1")) {
        document.querySelector("#basic-url1").classList.remove("redbox");
        document.querySelector("#error-message").classList.add("d-none");
      }
      proceedname = true;
    }
    return proceedname;
  };
  validateImage = () => {
    let Image = this.state.Image;
    let proceedimage = true;
    if (Image.length === 0) {
      if (document.querySelector("#basic-url2")) {
        document.querySelector("#basic-url2").classList.add("redbox");
        document.querySelector("#error-message").classList.remove("d-none");
      }
      proceedimage = false;
    } else {
     
      if (document.querySelector("#basic-url2")) {
        document.querySelector("#basic-url2").classList.remove("redbox");
        document.querySelector("#error-message").classList.add("d-none");
      }
      proceedimage = true;
    }
    return proceedimage;
  };

  handleName = (event) => {
    let Name = this.state.Name;
    Name = event.target.value;
    this.state.Name = Name;
    this.validateAlbumName();
  };

  handleImage = (event) => {
    let Image = this.state.Image;
    Image = event.target.value;
    this.state.Image = Image;
    this.validateImage();
  };

  clickSubmit= (event) => {
    let Name=this.state.Name;
    let Image=this.state.Image;
    if (event) {
      event.preventDefault();
    }
    this.validateAlbumName();
    this.validateImage();
    if(this.validateAlbumName() && this.validateImage())
    {
      const requestOptions2={
        method:"POST",
        headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
      }
  
      const url2 = BASEURL2+"albums/add"; 
      fetch(url2,requestOptions2)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.message == "album added successfully")
          {
            console.log("album added successfully");
            this.props.history.push("/ArtistAccount/ArtistWebPlayer/AddSong")
          }
        })
        .catch((error)=>{console.log(error);
        })
    }
  };
  

    render(){
      return (
        <div className ="add-album" >
          
              
              <ArtistNavbar accountType="regular" name="Ali Halafawy" color="#121212"
              image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
              
              <div className="add-info">
              
              <h1>Add Album Information</h1>
                <div class="input-group mb-3">
                  <input type="text" onChange={this.handleName} name="Name" class="form-control" id="basic-url1" placeholder="Album Name"  aria-describedby="basic-addon2"/>
                  
                </div>

                
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">https://example.com/image/</span>
                  </div>
                  <input onChange={this.handleImage} name="Image" type="text" class="form-control" id="basic-url2" placeholder="Image Url" aria-describedby="basic-addon3"/>
                  </div>
                  <p id="error-message" className="d-none">Please fill all the required inputs</p>
                </div>
        
                <div className="Add-songs d-flex justify-content-center">
                  <button onClick={this.clickSubmit}>Add album's songs</button>
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
export default connect(mapStateToProps)(AddAlbum);
      