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
        <img src="https://cdn2.psychologytoday.com/assets/styles/article_inline_half_caption/public/field_blog_entry_images/2023-04/istockphoto-1314317558-170667a.jpg?itok=O4nIuNRB" alt="" />
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