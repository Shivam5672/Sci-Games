import React from 'react'
import styles from './Navbar.module.css';
import { FaHome } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navLogo}>
        Sci-Games
      </h1>
      <div className={styles.navLinksDesktop}>
        <a href="#"><span className={styles.navIcons}><FaHome/></span><span className={styles.navLinkText}>Home</span></a>
        <a href="#"><span className={styles.navIcons}><div className={styles.aboutIcon}>i</div></span><span className={styles.navLinkText}>About</span></a>
        <a href="#"><span className={styles.navIcons}><FaDownload/></span><span className={styles.navLinkText}>Downloads</span></a>
        <a href="#"><span className={styles.navIcons}><FaBlog/></span><span className={styles.navLinkText}>Blogs</span></a>
      </div>
      <div className={styles.auth}>
        SignUp
      </div>
    </div>
  )
}

export default Navbar
