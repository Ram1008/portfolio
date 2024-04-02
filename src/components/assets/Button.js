import React from 'react';
import Styles from './Button.module.css';
const Button = (props) => {
  return (
    <div className={Styles.button} onClick={props.click}>
       {props.name} 
    </div>
  )
}

export default Button;