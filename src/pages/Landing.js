import React from 'react'
import "./landing.css"
import {Navbar, Hero, LayoutOne, LayoutTwo, LayoutThree, LayoutFour} from "../components/exporter";

const Landing = () => {
  return (
    <div className='container-landing'>
      <Navbar />
      <Hero />
      <LayoutOne />
      <LayoutTwo />
      <LayoutThree />
      <LayoutFour />
    </div>
  )
}

export default Landing;