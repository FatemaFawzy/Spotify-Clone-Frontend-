import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import './PopUpButtons.css'
import './GeneratedPlaylistStyle.css'
function MyNotification() {
    return (
      <div className='generatedPopUp'>
            <h1 className='PopUpMessageGP'>L<span className='iconGPlaylist'><i class="fab fa-gratipay"></i></span>ve the generated playlist
              </h1>
        </div>
    )
  }
function GeneratedPlaylist() {
  return (
    <div className="buttonPopContainer"
    style={{
      transform:'translate(20%,370%)',


    }}
    >

      <button className="btnPopUP"
      style={{
        width:'30%'
      }}


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
<span className='teXT'>Love Generated Playlist</span>
</button>


    </div>
  );
}
export default GeneratedPlaylist;
