import React from 'react'
import Heart from "../../assets/heart.png"
import "./style.css"
import { motion } from "framer-motion"; 
const HeartRate = () => {
  const transition = { type: "spring", duration: 3 };
  
  return (
    <motion.div className='heart-rate' 
    initial={{right:"-1rem"}}
    whileInView={{right:"4rem"}}
    transition={transition}
     
    >
      <img src={Heart} alt="heart rate"/>
      <span>Heart Rate</span>
      <span>116 bpm</span>
    </motion.div>
  )
}

export default HeartRate
