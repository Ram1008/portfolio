import React from 'react'
import Styles from './IconButton.module.css'
const IconButton = (props) => {
  return (
        <img className = {Styles.icon}src={props.link} alt='contact'/>
  )
}

export default IconButton