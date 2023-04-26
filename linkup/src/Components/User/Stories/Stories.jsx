import React from 'react'
import './Stories.css'
import { Avatar } from '@mui/material'

const Stories = ()=> {
  return (
<div className="stories">
  <div className="storie flex flex-col text-center">
  <Avatar className='avatar'>A</Avatar>
  <p className='text-sm ps-4 pt-1 font-medium font-mono'>New</p>

  </div>
    <Avatar className='avatar'>A</Avatar>
    <Avatar className='avatar'>+</Avatar>
    </div>
  )
}


export default Stories