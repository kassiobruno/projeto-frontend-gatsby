import * as React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./styles/GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <Header />    
        <main>{children}</main>    
      <Footer />   
    </>
  )
}

export default Layout
