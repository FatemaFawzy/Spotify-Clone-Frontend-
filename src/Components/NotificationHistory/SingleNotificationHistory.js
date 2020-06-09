import React from 'react'
import './SingleNotificationHistory.css'
const SingleNotificationHistory=({username,Message,id})=>{
  return(
    <div className= 'tc br2 pa1 ma2 grow bw1 shadow-2 h2'
          id='mainNotificationBox'
    >
          <p className='fontForNotifications'
          ><i class="fas fa-user-alt"></i> {username} : <i class="far fa-comments"></i>  {Message}</p>

    </div>

  )

}
export default SingleNotificationHistory