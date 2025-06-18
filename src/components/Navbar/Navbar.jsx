import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'




function Navbar() {
  return (
    <nav className='flex h-20 justify-between mt-5 '>
        <div className='flex'>
            <img className='h-7' src={menu_icon} alt="menu_icon" />
            <img className='h-12' src={logo} alt="logo-icon" />

        </div>
        <div className='flex'>
            <div className="flex">
                <input className='border w-100 h-15 'type="text" placeholder='Search'/>
                <img className='h-10 mt-2  border px-5 py-4' src={search_icon} alt="" />
            </div>
        </div>
        <div className='flex'>
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification} alt="" />
            <img src={profile_icon} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar