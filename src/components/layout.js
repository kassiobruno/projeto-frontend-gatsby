import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./styles/GlobalStyles"
import Header from "./Header"


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <Header />    
        <main>{children}</main>       
    </>
  )
}

export default Layout
