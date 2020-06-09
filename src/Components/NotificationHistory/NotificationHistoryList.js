import React from "react";
import SingleNotificationHistory from "./SingleNotificationHistory"
const NotificationHistoryList = ({ notifications }) => {
  return(
    <div>
        {
          notifications.map((user,i)=>{
            return(
              <SingleNotificationHistory
              key={i}
              username={notifications[i].username}
              Message={notifications[i].Message}
              // body={notifications[i].body}
              />
              
              );
          })
        }

    </div>
  );
 
}
export default NotificationHistoryList;
