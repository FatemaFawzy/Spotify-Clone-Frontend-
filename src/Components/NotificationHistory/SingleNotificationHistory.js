import React from 'react'
const SingleNotificationHistory=({username,Message,id})=>{
  return(
    <div className= 'bg-green tc br2 pa1 ma2 grow bw1 shadow-2 h2'
    style={{
      width:'100%',
    }}
    >
          <p 
          style={{
            fontSize:'15px'
          }}
          ><i class="fas fa-user-alt"></i> {username} : <i class="far fa-comments"></i>  {Message}</p>

    </div>
  )

}
export default SingleNotificationHistory