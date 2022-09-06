import { Router } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import { toggleTheme } from '../lib/darkMode/toggleTheme'
import '../styles/globals.css'

const MainContext = createContext()

function MyApp({ Component, pageProps }) {
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
      <Head>
            <title>Mayur Deopa</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
        <Navbar/>
        {isLoading?<Spinner/>: <Component {...pageProps} />}
      </Layout>
      </MainContext.Provider>
  )
}

export default MyApp;
export {MainContext};
