import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
const headerSocials = () => {
  return (
    <div 
    
    className= "headerSocials">
        <a href= "https://www.linkedin.com/in/micah-sharifi/" target= "blank"> <BsLinkedin/></a>
        <a href= "https://github.com/micah292" target= "blank"> <FaGithub/></a>


    </div>
  )
}

export default headerSocials