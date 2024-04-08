import React from 'react';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/myLogo.svg';
import Button from './Button';
import Styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
                <Link to='/'><img className={Styles.logo} src = {MyLogo} alt = 'logo'/></Link>
                <Link to='/connect' className={Styles.buttonWrapper}>
                  <Button name = {"Let's connect"}/>
                  </Link>
            </nav>
  )
}

export default Navbar;