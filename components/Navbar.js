import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react';

const Navbar=()=>{
    const [isVisible,setIsVisible] = useState(false)
    const navItems =[
        {title:"Home",link:"/"},
        {title:"About",link:"about"},
        {title:"Projects",link:"projects"},
        {title:"Contact",link:"contact"}    
    ]
    return(
        <div className={styles.navbar_wrapper}>
            <nav className={styles.navbar}>
            <h3><Link href='/'>Mayur Deopa</Link></h3>
            <ul className={isVisible?`${styles.nav_ul} ${styles.visible}`:styles.nav_ul}>
                {navItems.map((item,index)=>{
                    return (<li key={index} onClick={()=>setIsVisible(false)}><div className={styles.underline}></div><Link href={item.link}>{item.title}</Link></li>)
                })}
            </ul>
            <button className={isVisible?`${styles.burger} ${styles.rotate}`:styles.burger} onClick={()=>setIsVisible(!isVisible)}>
                <FaBars/>
            </button>
        </nav>
        </div>
    )
}

export default Navbar;
