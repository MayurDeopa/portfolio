import { useState } from "react";
import {BiSun,BiMoon} from "react-icons/bi"
import { toggleTheme } from "../lib/darkMode/toggleTheme";


const DarkModeBtn =()=>{
    const [darkMode ,setDarkMode] = useState(false)
    const toggle =(param)=>{
        setDarkMode(param)
        toggleTheme(param)
    }
    return (
        <div onClick={()=>toggle(!darkMode)}>
            <BiMoon/>
        </div>
    )
}

export default DarkModeBtn;