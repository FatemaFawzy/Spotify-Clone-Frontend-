import React from "react";
import './SearchBoxNotificationHist.css'
const SearchBoxNotificationHist =({searchfield,searchChange})=> {
  return (
    <div className='flexBOXXX'>
      <div className='notificationSearchBox'>
        <div>
          <input type="search" placeholder="       Search . . ." required 
          onChange={searchChange}
          >
          </input>
        </div>
      </div>
    </div>
  )
}
export default SearchBoxNotificationHist;
