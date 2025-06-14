

import { Router } from 'next/router'
import { createContext, use, useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import { toggleTheme } from '../lib/darkMode/toggleTheme'
import '../styles/globals.css'
import Cursor from '../components/Cursor'

const MainContext = createContext()

function MyApp({ Component, pageProps }) {
  const [isLoading , setIsLoading] = useState(false)
  const [navState, setNavState] = useState(false)
  const [darkMode,setDarkMode] = useState(false)


  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    // Add the mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }
  , []);

  useEffect(() => {
    // setMounted(true)
    // Now we can safely access localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme ==="true") {
      setDarkMode(true)
      toggleTheme(true)
    }
  }, [])
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
      <Cursor x={cursorPosition.x} y={cursorPosition.y} />
      <Head>
            <title>Mayur Deopa</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://api.fontshare.com/v2/css?f[]=khand@400&f[]=array@400&display=swap" rel="stylesheet"></link>
          </Head>
        <Navbar/>
        {isLoading?<Spinner/>: <Component {...pageProps} />}
      </Layout>
      </MainContext.Provider>
  )
}

export default MyApp;
export {MainContext};
