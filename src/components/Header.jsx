import React from 'react'

function Header() {
  return (
    <header className='container-fluid p-4 bg-dark text-white'>
        <div className="row">
            <div className="col-4">
                <h3>SwapSpot</h3>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
                <ul className='list-unstyled'>
                    <li className='list-inline-item h5'>Home</li>
                    <li className='list-inline-item h5'>Browse</li>
                    <li className='list-inline-item h5'>Messeges</li>
                    <li className='list-inline-item h5'>Listings</li>
                </ul>
            </div>
            <div className="col-4 d-flex justify-content-end ">
                <button className='btn btn-dark text-white border border-white m-3'>Signin</button>
                <button className='btn btn-success text-white border border-white m-3'>Signin</button>
            </div>
            <div className="col-4"></div>
        </div>
    </header>
  )
}

export default Header