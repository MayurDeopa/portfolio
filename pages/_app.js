import { Router } from 'next/router'
import { useState } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isLoading , setIsLoading] = useState(false)
  Router.events.on("routeChangeStart",()=>{
    setIsLoading(true)
  })

  Router.events.on("routeChangeComplete",()=>{
    setIsLoading(false)
  })
  return( 
    <Layout>
      <Navbar/>
      {isLoading?<Spinner/>: <Component {...pageProps} />}
    </Layout>
  )
}

export default MyApp
