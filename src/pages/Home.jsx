import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import HomeBody from '../components/HomeBody'
import Card from '../components/Card'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="container-fluid">
          <Header/>
          <SearchBar/>
          <HomeBody/>
          <Card/>
      </div>
      <Footer/>
    </>
  )
}

export default Home