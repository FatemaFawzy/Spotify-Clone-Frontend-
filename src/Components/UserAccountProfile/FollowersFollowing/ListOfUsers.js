import React from "react";
import UserComponent from "./UserComponent";
import { BASEURL } from "../../../Constants/baseURL";

/** Function component ListOfUsers to display alist of followers/following 
 * @func ListOfUsers
 */
const ListOfUsers = ({users})=>{
  return (
      <div className="list-of-users-class"> 
      {
        users&&users.map(user=>(
          <UserComponent
          // image={BASEURL + "Images/" + user.imagePath}
          image={user.imagePath}
          name={user.name}
          id={user._id}
          key={user._id}/>
        ))
      }
       </div>
  )
}

export default ListOfUsers;