import "./navbar.scss"
import {motion} from "framer-motion";

import React from 'react'
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >Ayush Singh</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/ayush-singh-590a80254/" target="blank"><img src="/linkedIn.png" alt="" /></a>
          <a href="https://www.instagram.com/ayush_____2002/" target="blank"><img src="/instagram.png" alt="" /></a>
          <a href="https://github.com/ayush-1308" target="blank"><img src="/github.png" alt="" /></a>
          <a href="https://dribbble.com/ayush_____2002" target="blank"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
      </div>
  )
}

export default Navbar