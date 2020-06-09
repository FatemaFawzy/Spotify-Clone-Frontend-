import React,{Component} from 'react';
 import './EditArtistInformation.css';
import ArtistHomePageNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL,BASEURL2} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";

export class EditArtistInformation extends Component {
  constructor(props){
    super(props);
    this.state = {
   info:{
    email:"davidgilmour123@gmail.com",
    username:"pink_floyd",
    dateOfBirth:"31/05/1950",
    bio:"",
    imageURL:" ",
    artistName:"Pink Floyd"
   }  
    }   
  }
  componentDidMount()
  {
    const requestOptions2={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
    const url2 =BASEURL2+"artist/information"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
        info: data.info});
        console.log(this.state.info);
      })
      .catch((error)=>{console.log(error);
      })
  }
  render(){
    return (
      <div className ="edit-artist-information">
         <ArtistHomePageNavbar accountType="regular" name="Ali Halafawy" color="transparent"
          image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            
      <div className="info-content">
        <h1 className="title"><i class="fas fa-info-circle"></i> My Information</h1>
        <table>
            <tr> 
              <td><li className="list-element">Email:</li></td>
              <td><input className="general-input" placeholder={this.state.info.email} type="text"/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Username:</li></td>
              <td><input className="general-input" placeholder={this.state.info.username} type="text"/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Name:</li></td>
              <td><input className="general-input" placeholder={this.state.info.artistName} type="text"/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Date Of Birth:</li></td>
              <td><input className="general-input" placeholder={this.state.info.dateOfBirth} type="text"/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Biography:</li></td>
              <td><input className="general-input" placeholder={this.state.info.bio} type="text"/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Cover Image URL:</li></td>
              <td><input className="general-input" placeholder={this.state.info.imageURL} type="text"/></td>
            </tr>
            <tr> 
              <td> </td>
              <Link to="/ArtistAccount/ArtistWebPlayer/MyInfo/"><td><button className="button">Done</button></td></Link>
            </tr>
      
        </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    userID:state.userID,
    selectedArtistID : state.selectedArtistID,
  };

};
export default connect(mapStateToProps)(EditArtistInformation);

