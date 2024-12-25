import React from 'react'

function SearchBar() {
  return (
    <div className="container mt-5">
        <div className="row">
            <input placeholder='search items' type="text" style={{height:'70px',borderRadius:'50px'}} />
        </div>
    </div>
  )
}

export default SearchBar