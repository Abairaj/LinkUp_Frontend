import React, { useState } from 'react'
import './Search.css'

export default function Search() {
    const [isOpen,setIsOpen]=useState(false);
  return (
    <div className='search-bar-container'>
        <button onClick={()=>setIsOpen(!isOpen)}>Search</button>
        <div className={`search-bar ${isOpen ? 'open' : ''}`}>
        <input type="text" placeholder="Search..." />
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );
}

