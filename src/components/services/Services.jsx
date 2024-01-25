import React from 'react'
import "./services.scss"
import {motion} from "framer-motion"

const variants= {
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}

const Services = () => {

  
  return (
    <motion.div className='services' variants={variants} initial="initial" animate="animate">
      <motion.div className="textContainer" variants={variants}>
        <p>Passionate coder and designer,<br/> merging innovation with precision.</p>
        <hr />
      </motion.div> 
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div whileHover={{background:"lightgrey", color:"black"}} className="box">
          <h2>React Developer</h2>
          <p>As a React developer I specialize in building user interfaces using the React library, creating interactive and responsive web applications.</p>
          <button>Go</button>
        </motion.div>
        <motion.div whileHover={{background:"lightgrey", color:"black"}} className="box">
          <h2>UI/UX</h2>
          <p>Elevate your digital presence with our UI/UX services, where we blend intuitive design principles and user-centric experiences.</p>
          <button>Go</button>
        </motion.div>
        <motion.div whileHover={{background:"lightgrey", color:"black"}} className="box">
          <h2>Nodejs Developer</h2>
          <p>I specialize in crafting robust and scalable server-side solutions, ensuring the seamless functionality and performance</p>
          <button>Go</button>
        </motion.div>
        <motion.div whileHover={{background:"lightgrey", color:"black"}} className="box">
          <h2>Mern Stack</h2>
          <p>From dynamic React interfaces to robust MongoDB databases, our expert developers deliver end-to-end solutions for a modern and efficient web experience.</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services