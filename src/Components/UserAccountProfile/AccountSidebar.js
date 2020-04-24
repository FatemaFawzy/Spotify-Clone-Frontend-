import React from "react";
import "./AccountSidebar.css";
import { NavLink } from "react-router-dom";
import emptyprofilepic from "../../assets/emptyprofilepic.jpg";
import EditPictureModal from "./EditPictureModal";
import {BASEURL} from "../../Constants/baseURL";

 /**A function Component that represents the sidebar of the user account page
   * @func AccountSidebar
   */
const AccountSidebar = (props) => {

  //props.image
  //props.token

  const [modalShow, setModalShow] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

return (
  <div className="account-sidebar">
  

    
    <img
      className="user-img"
      src={props.image}
      onError={()=>{
        document.getElementsByClassName("user-img").src = {emptyprofilepic}
      }}
    />


      <button className="edit-photo-button" onClick={() => setModalShow(true)}>
        Edit Photo
      </button>

      <EditPictureModal
        show={modalShow}
        onHide={() => { 
          setModalShow(false);
          setSelectedPhoto(null);

        }}
        onSaveFile={()=>{
          const fd= new FormData();
          fd.append('image', selectedPhoto,selectedPhoto.name);
          console.log(fd)
          console.log(selectedPhoto)

          const requestOptions = {
            method:"POST",
            headers: { 'Content-Type': 'application/json','x-auth' : props.token},
            body: JSON.stringify({ 
              photo: fd })
        }
        const url = BASEURL + "users/profilepicture"; 
        fetch(url,requestOptions)
          .then((response) => {
            console.log(response); 
            return response.text()})
          .then((data) => {
            console.log(data);  
            // window.location.reload(true);
          })
          .catch((error)=>{
            console.log(error);
          })

        }}
        onChangeFile={(event)=>{
          console.log(event.target.files[0]);
          setSelectedPhoto(event.target.files[0]);
 
        }}
        photo={selectedPhoto}
      />

    <div className="side-items">

      {/* overview link*/}
      <NavLink to="/account/overview/" >
        <i className="fas fa-home"> &ensp; Account overview</i>
      </NavLink>

      {/* profile link*/}
      <NavLink to="/account/profile/" >
        <i className="fas fa-pencil-alt">  &ensp; Edit profile</i>
      </NavLink>

      {/* set device password link*/}
      <NavLink to="/account/set-device-password/" >
        <i className="fas fa-lock"> &ensp; Set device password </i>
      </NavLink>

      {/* Recover playlists*/}
      {/* <NavLink to="/account/recover-playlists" >
        <i className="fas fa-redo"> &ensp; Recover playlists </i>
      </NavLink> */}

    </div>

  </div>
);

}

export default AccountSidebar;