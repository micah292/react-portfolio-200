import React from 'react'
import Header from "./components/header/Header.jsx"
import Nav from "./components/nav/Nav.jsx"
import About from "./components/about/About.jsx"
import Experiences from "./components/experience/Experience.jsx"
import Services from "./components/services/Services.jsx"
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonial from "./components/testimonial/Testominial.jsx"

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About/>
    <Experiences />
    <Services />
    <Portfolio />
    <Testimonial />
    
    </>
  )
}

export default App