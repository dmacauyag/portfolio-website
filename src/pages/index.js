import * as React from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

// markup
const Main = () => {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  )
}

export default Main
