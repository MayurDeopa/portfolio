import { Router } from 'next/router'
import { createContext, useState } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import '../styles/globals.css'

const MainContext = createContext()

function MyApp({ Component, pageProps }) {
  const [isLoading , setIsLoading] = useState(false)
  const [navState, setNavState] = useState(false)
  Router.events.on("routeChangeStart",()=>{
    setIsLoading(true)
  })

  Router.events.on("routeChangeComplete",()=>{
    setIsLoading(false)
  })
  return( 
    <MainContext.Provider value={{
      nav:[navState,setNavState]
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
