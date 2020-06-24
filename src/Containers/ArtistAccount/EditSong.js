import React,{Component} from 'react';
 import './EditSong.css';
import ArtistHomePageNavbar from "./ArtistNavbar";
import ComponentBlock from "@/Components/HomePageComponents/ComponentBlock"
import * as itemType from "@/Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "@/Constants/baseURL";
import {NavLink,Link} from "react-router-dom";

/** Class EditSong
 * @category EditSong
 * @extends Component
 */
export class EditSong extends Component {
  constructor(props){
    super(props);
    this.state = {
   /** Song to be edited's info
   * @memberof EditSong
   * @type {object}
   */ 
   info:{
    // name:"High Hopes",
    // image:"https://example.com/image/",
   },
   /** Song to be edited's name
   * @memberof EditSong
   * @type {String}
   */ 
   Name:"",
   /** Song to be edited's image
   * @memberof EditSong
   * @type {String}
   */ 
  Image:"",
  }
  }
      /**A function that handles changes in name input
   * @memberof EditSong
   * @func handleName
   */
   handleName = (event) => {
   let Name = this.state.Name;
    Name = event.target.value;
    this.state.Name = Name;
    // this.validateAlbumName();
  };
      /**A function that handles changes in image input
   * @memberof EditSong
   * @func handleImage
   */
  handleImage = (event) => {
    let Image = this.state.Image;
    Image = event.target.value;
    this.state.Image = Image;
    // this.validateImage();
  };
      /**A function that fires when a user clicks on the button to edit the song
   * @memberof AddSong
   * @func clickSubmit
   */
  clickSubmit= (event) => {

    if (event) {
      event.preventDefault();
    }
    
    console.log(this.state.info.name);
    console.log(this.state.info.image);
    
    if(this.state.Name.length == 0)
    {
      this.state.Name=this.state.info.name
      
    }
     if(this.state.Image.length == 0)
    {
      this.state.Image=this.state.info.image
    }
    console.log(this.state.Name);
    console.log(this.state.Image);
    if(this.state.Name != null && this.state.Image != null)
    {
      console.log(this.state.Name);
      console.log(this.state.Image);
      var clr= document.querySelector(".add-info");
     if (clr)
     {
     clr.reset();
     }
     const requestOptions2={
      method:"POST",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
    const url2 = BASEURL + "songs/edit"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data.message == "song edited successfully")
        {
          this.props.history.push("/ArtistAccount/ArtistWebPlayer/MySongs");
        }
      })
      .catch((error)=>{console.log(error);
      })

  }
  }
           /**A function that fires when the page loads
   * @memberof EditSong
   * @func componentDidMount
   */
  componentDidMount()
  {
    const requestOptions2={
      method:"GET",
      headers:{'Content-Type':'authorizaion/json','x-auth':"x-auth"}
    }
    const url2 =BASEURL + "song/information"; 
    fetch(url2,requestOptions2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
        info: data.info});
      })
      .catch((error)=>{console.log(error);
      })
  }
  render(){
    return (
      <div className ="edit-song">
         <ArtistHomePageNavbar accountType="regular" name="Ali Halafawy" color="transparent"
          image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
            
      <div className="info-content">
        <h1 className="title"><i class="fas fa-info-circle"></i>Edit Song </h1>
        <p id="error-message" className="d-none">Please fill all the required inputs</p>
        <table>
            <tr> 
              <td><li className="list-element">Song Name:</li></td>
              <td><input onChange={this.handleName} id="basic-url1" className="general-input" placeholder={this.state.info.name} type="text"/></td>
            </tr>
            <tr> 
              <td><li className="list-element">Song Image:</li></td>
              <td><input onChange={this.handleImage} id="basic-url2" className="general-input" placeholder={this.state.info.image} type="text"/></td>
            </tr>
            <tr> 
              <td> 
              </td>
              <Link to="/ArtistAccount/ArtistWebPlayer/MyInfo/"><td><button onClick={this.clickSubmit} className="button">Done</button></td></Link>
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
export default connect(mapStateToProps)(EditSong);

