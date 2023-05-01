import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Post=() => {
  return (
  <div className="post">
    <div className="post__header">
        <div className="post__headerAuthor">
        <Avatar className='avatar'>A</Avatar>
        username . <span>12hr</span> 
        </div>
    <MoreHorizIcon/>
    </div>
    <div className="post__content">
        <img src="https://images.unsplash.com/photo-1682687982423-295485af248a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
    <div className="post_footer">
        <div className="post__footerIcons">
        <div className="post__iconMain">
        <FavoriteBorderIcon className='postIcon'/>
        <ChatBubbleOutlineIcon className='postIcon'/>
        <SendIcon className='postIcon'/>
        </div>
        <div className="post__iconSave">
        <BookmarkBorderIcon/>
        </div>
        </div>
    </div>
    Liked by 10 people
  </div>
  )
}

export default Post