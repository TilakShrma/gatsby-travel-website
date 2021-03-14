import React from "react"
import Footer from "./footer/Footer"
import Header from "./header/header"
import { GlobalStyle } from "./styled-components/GlobalStyles"


const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
