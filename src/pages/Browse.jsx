import React from 'react'
import Header from '../components/Header'
import BrowseLeft from '../components/BrowseLeft'
import BrowseSearchBar from '../components/BrowseSearchBar'
import Card from '../components/Card'

function Browse() {
  return (
    <div className='container-fluid bg-light' style={{flexWrap:'wrap',backgroundColor:'#f5f5f5'}} >
        <div>
        <Header />
        </div>
        <div className="row ">
                <div className="col-3">
                    <BrowseLeft/>
                </div>
                <div className="col-7 justify-content-start  ">
                    <BrowseSearchBar/>
                    <div className="mt-5">
                    <Card />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Browse