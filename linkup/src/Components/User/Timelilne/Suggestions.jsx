import React from 'react'
import './Suggestions.css'
import { Avatar } from '@mui/material'

const Suggestions=() => {
  return (
<div className="suggestions"> 
<div className="suggestions__title">suggestions for you</div>
<div className="suggestions_usernames">
  <div className="suggestions__username">


    <div className="username__left">
      <span className="avatar">
        <Avatar>A</Avatar>
      </span>
      <div className="username__info">
        <span className="username">Abairaj.k</span>
        <span className="relation">new to instagram</span>
      </div>
    </div>
    
    <button className="follow_button">Follow</button>
  </div>
</div>
</div>
  )
}

export default Suggestions
