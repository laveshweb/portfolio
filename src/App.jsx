import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Project from './sections/Project'

const App = () => {
  return (
    <div className= ' h-screen bg-green-500'>
      <Navbar/>
      <Hero/>
      <Project/>
    </div>
  )
}

export default App