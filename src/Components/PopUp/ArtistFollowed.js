import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import ReactNotifications from 'react-notifications-component'
// import "./NotificationHistory.css"
import { Link, Router } from "react-router-dom";

function MyNotification() {
    return (
      <div style={{
        display: 'fixed',
        backgroundColor: '#cfff04',
        borderRadius: '20%',
        left:'50%',
        fontSize:'xx-small',
        transform: 'translate(-70%, 10%)'

      }}>
        <div>

            <h1>Artist Followed</h1>
        </div>
      </div>
    )
  }
//   <i class="fas fa-grin-stars"></i>

function ArtistFollowed() {
  return (
    <div className='notificationHistory'>
      <button
        onClick={() => {
          store.addNotification({
            content: MyNotification,
            message: "following an artist",
            type: "warning", // 'default', 'success', 'info', 'warning'
            container: "top-right", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000,
            },
            width:600
          });
        }}
      >      

        Artist Followed
      </button>
    </div>
  );
}
export default ArtistFollowed;
