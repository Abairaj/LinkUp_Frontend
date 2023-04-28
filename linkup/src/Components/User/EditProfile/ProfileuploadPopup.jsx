import React from 'react'
import { useState } from 'react';
import { Avatar, Button, Modal } from '@mui/material';

export default function ProfileuploadPopup() {
    const[image,setImage] = useState()
    const [open, setOpen] = useState(false);

    const handleImageUpload = (e)=>{

        setImage(e.target.files[0])

    }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Button onClick={handleOpen}>Change Profile</Button>
    <Modal open={open} onClose={handleClose}>
      <div className='profile_card'>
        <div className="profle_card__avatar">
            <Avatar>A</Avatar>
            <input
            className='bg-blue-500'
          accept="image/*"
          type="file"
          onChange={handleImageUpload}
          id="icon-button-file"
        />
        </div>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  </>
  )
}




