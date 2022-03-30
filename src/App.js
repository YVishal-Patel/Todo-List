import React from 'react'
import TopBar from './Components/TopBar/TopBar'
import Navbar from './Components/Navbar/Navbar'
import SearchBar from './Components/SearchBar/SearchBar'
import HomePage from './Components/HomePage/HomePage'
import NewCollection from './Components/NewCollection/NewCollection'
import About from './Components/AboutUs/About'
function App() {
  return (
    <>
    <TopBar />
    <SearchBar />
    <Navbar />
    <HomePage />
    <NewCollection />
    <About />
    </>
  )
}

export default App