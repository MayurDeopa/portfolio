import { useState } from "react";
import {BiSun,BiMoon} from "react-icons/bi"
import { toggleTheme } from "../lib/darkMode/toggleTheme";
import styles from '../styles/Navbar.module.css'


const DarkModeBtn =()=>{
    const [darkMode ,setDarkMode] = useState(false)
    const toggle =()=>{
        setDarkMode(!darkMode)
        toggleTheme(!darkMode)
    }
    return (
        <div onClick={toggle} className={styles.dark_mode_wrapper}>
            <div className={darkMode?`${styles.dark_mode_toggle_circle} ${styles.right}`:styles.dark_mode_toggle_circle}></div>
            <BiMoon/>
            <BiSun/>
        </div>
    )
}

export default DarkModeBtn;