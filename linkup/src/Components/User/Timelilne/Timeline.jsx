import React from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from '../Post/Post'

const Timeline = ()=> {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__post">
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions/>
      </div>
    </div>
  )
}

export default Timeline
