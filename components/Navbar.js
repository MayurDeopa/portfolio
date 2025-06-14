import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import {FaBars} from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../pages/_app';
import DarkModeBtn from './DarkModeBtn';


const Navbar=()=>{
    const {nav} = useContext(MainContext)
    const [navState, setNavState] = nav
    const navItems =[
        {title:"About",link:"/"},
        {title:"Projects",link:"projects"},
        {title:"Contact",link:"contact"}    
    ]

    // return null
    return(
        <div className={styles.navbar_wrapper}>
            <nav className={styles.navbar}>
                <h3 style={{fontWeight:'normal'}}><Link href='/'>Mayur Deopa</Link></h3>
                <ul className={navState?`${styles.nav_ul} ${styles.visible}`:styles.nav_ul}>
                    {navItems.map((item,index)=>{
                        return (<li key={index} onClick={()=>setNavState(false)}><div className={styles.underline}></div><Link href={item.link}>{item.title}</Link></li>)
                    })}
                </ul>
                <DarkModeBtn/>
                <button className={styles.burger} onClick={()=>setNavState(!navState)}>
                    <FaBars/>
                </button>
            </nav>
            <div
                onClick={()=>setNavState(false)} 
                className={navState?styles.overlay:`${styles.overlay} ${styles.overlay_hidden}`}></div>
        </div>
    )
}

export default Navbar;
