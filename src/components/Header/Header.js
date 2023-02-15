import React from 'react';
import resumeSvg from "../../assets/resumesvg.svg";

import styles from './Header.module.css';

function Header() {
  return ( 
  <div className={styles.container}>
    <div className={styles.left}>

    <p className={styles.heading}>
        A <span>Resume</span> that stands out!
    </p>
  
  </div>
  <div ClassName={styles.right}>
    <img src={resumeSvg} alt='Resume' />
  </div>
  </div>
  ); 
}

export default Header;