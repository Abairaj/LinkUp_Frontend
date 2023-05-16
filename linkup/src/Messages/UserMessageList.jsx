import { Avatar } from '@mui/material'
import React from 'react'

export default function UserMessageList() {
  return (
    <div className='user_message_list h-full'>

        <div className='message_user'>
            <button className="userbar ps-6 pt-3 pb-3 flex flex-row  hover:bg-slate-500 w-full">
                <div className="avatar_user">
                <Avatar sx={{height:'45px',width:'45px'}}>A</Avatar>
                </div>
                <div className="profilebar pt-1">
                <p className=' ps-2'>Abairaj.k poinachi dkjfjdsfnkjdsfjiodsf</p>
            <p className='text-sm flex justify-start ps-1  text-slate-300'>Active today</p>
                </div>
            </button>

            <button className="userbar ps-6 pt-3 pb-3 flex flex-row  hover:bg-slate-500 w-full">
                <div className="avatar_user">
                <Avatar sx={{height:'45px',width:'45px'}}>A</Avatar>
                </div>
                <div className="profilebar pt-1">
                <p className=' ps-2'>Abairaj.k</p>
            <p className='text-sm ps-2  text-slate-500'>Active today</p>
                </div>
            </button>
        </div>
      
    </div>
  )
}
