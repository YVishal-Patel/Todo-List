import React from 'react'
import TopBar from './Components/TopBar/TopBar'
import Navbar from './Components/Navbar/Navbar'
import SearchBar from './Components/SearchBar/SearchBar'
import HomePage from './Components/HomePage/HomePage'
import NewCollection from './Components/NewCollection/NewCollection'
import About from './Components/AboutUs/About'
import Product from './Components/Product/Product'
import Official from './Components/FloraOfficial/Official'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    <TopBar />
    <SearchBar />
    <Navbar />
    <HomePage />
    <NewCollection Title="NEW 2022 COLLECTION" />
    <About />
    <Product />
    <NewCollection Title="FLORA'S TOP PICK THIS WEEK"  />
    <Official />
    <Footer />
    </>
  )
}

export default App