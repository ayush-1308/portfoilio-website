import React, { useRef } from 'react'
import "./portfolio.scss"
import {motion , useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id:1,
    title: "Instagram Clone",
    img:"/instaclone.jpeg",
    desc:"An instagram clone which has the the basic features coded in it , using node.js , express.js , .ejs , html , css , javascript , mongodb(for database) , tailwind-css etc . It has the login/logout , adding post , changing and editing profile and other features in it.",
  },
  {
    id:2,
    title: "Myntra Clone",
    img:"/1.jpg",
    desc:"Myntra Clone mae with using React.js and with a dummy server i.e. dummy Json for proving the data set from a dummy server, used redux for a better store management, react-router-dom for creating routes, framer motion for animating the webpage",
  },
  {
    id:3,
    title: "PAWS UX",
    img:"/bgg.jpg",
    desc:"Paws & Pals Pet Shelter Website allows users to easily browse the adoptable pets, create filters, book an appointment at the adoption center ( Meet & Greet ) and find all the necessary information about the adoption process",
  },
  {
    id:4,
    title: "JavaFX App",
    img:"/javafx.jpeg",
    desc:"A Connect 4 game implemented in JavaFX is a graphical user interface (GUI) application that allows users to play the classic Connect 4 game. The game typically consists of a grid with 7 columns and 6 rows, and two players take turns dropping their colored discs into the columns. The goal is to connect four discs of the same color vertically, horizontally, or diagonally before the opponent does.",
  },
];

const Single = ({item}) => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
   // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [-300, 300] )
  
  return(
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"  ref={ref}>
        <img src={item.img} alt="" />
          </div>
        <motion.div className="textContainer" style={{y}} >
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <a href='https://github.com/ayush-1308' target='blank'>  Get code on Github</a>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio