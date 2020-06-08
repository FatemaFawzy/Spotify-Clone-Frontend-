import React from "react";
import Notification from "./Notification"
const NotificationList = ({ notifications }) => {
  return(
    <div>
        {
          notifications.slice(0,3).map((user,i)=>{
            return(
              <Notification
              key={i}
              username={notifications[i].username}
              name={notifications[i].name}
              />
              

              );
          })
        }

    </div>
  );
 
}
export default NotificationList;
