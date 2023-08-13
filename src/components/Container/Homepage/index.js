import React from 'react'
import PhotoOfMami from "../../../assets/images/profilePhoto-4.png"
import "./style.css"
import {  Image } from "@chakra-ui/react";

function HomePage() {
  return (
    <div id='homepage' className='text-center flex justify-center  bg- '>
       <Image src={PhotoOfMami} />
    </div>
  )
}

export default HomePage