import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

function PopUpNotifications() {
  return (
    <div>
      <button
        onClick={() => {
          store.addNotification({
            // title: "following an artist",
            message: "following an artist",
            type: "info", // 'default', 'success', 'info', 'warning'
            container: "bottom-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000,
            },
          });
        }}
      >
        Artist Followed
      </button>
    </div>
  );
}
export default PopUpNotifications;
