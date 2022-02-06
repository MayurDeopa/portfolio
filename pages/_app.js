import { Router } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import { toggleTheme } from '../lib/darkMode/toggleTheme'
import '../styles/globals.css'

const MainContext = createContext()

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const local = localStorage.getItem('theme')
    if(!local){
      localStorage.setItem('theme',false)
    }
    else{
      setDarkMode(local)
      toggleTheme(local)
    }
  },[])
  const [isLoading , setIsLoading] = useState(false)
  const [navState, setNavState] = useState(false)
  const [darkMode,setDarkMode] = useState(false)
  Router.events.on("routeChangeStart",()=>{
    setIsLoading(true)
  })

  Router.events.on("routeChangeComplete",()=>{
    setIsLoading(false)
  })
  return( 
    <MainContext.Provider value={{
      nav:[navState,setNavState],
      theme:[darkMode,setDarkMode]
    }}>
      <Layout>
        <Navbar/>
        {isLoading?<Spinner/>: <Component {...pageProps} />}
      </Layout>
      </MainContext.Provider>
  )
}

export default MyApp;
export {MainContext};
