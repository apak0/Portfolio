import React from 'react'
import Logo from "../../../assets/images/profilePhoto-2.png"
import "./style.css"

function HomePage() {
  return (
    <div>
       <img src={Logo} className='profilePhoto' />
    </div>
  )
}

export default HomePage