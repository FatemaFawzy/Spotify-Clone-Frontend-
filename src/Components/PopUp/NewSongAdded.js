import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import './PopUpButtons.css'
import './NewSongAddedStyle.css'

function NewSong() {
  return (
    <div className='addedSongPopUp'>
      <div>
          <h1 className='addedTextStyle'>New Song Is Added
            <span>   </span>
            <i id='icon' class="fas fa-grin-stars"></i>
          </h1>
      </div>
    </div>
  )
}


function NewSongAdded() {
  return (
    <div className="buttonPopContainer"       style={{
      transform:'translate(-10%,470%)',
    }}
>

      <button className="btnPopUP"
      style={{
        width:'30%'
      }}


onClick={() => {
  store.addNotification({
    content: NewSong,
    message: "following an artist",
    type: "warning", // 'default', 'success', 'info', 'warning'
    container: "top-right", // where to position the notifications
    animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
    dismiss: {
      duration: 3000,
    },
    width:250
  });
}}
>
<span className='texT'> Add new song</span>
</button>


    </div>
  );
}
export default NewSongAdded;
