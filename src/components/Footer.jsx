import React from 'react'

function Footer() {
  return (
    <div className="container-fluid p-3" style={{backgroundColor:'#f5f5f5'}}>
        <div className="row">
            <div className="col-1">
                <p>About Us</p>
            </div>
            <div className="col-1">
                <p>Safety Use</p>
            </div>
            <div className="col-1">
                <p>Terms of Service</p>
            </div>
            <div className="col-1">
                <p>Privacy Policy</p>
            </div>
            <div className="col-1">
                <p>Contacts</p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                &copy; SwapSpot ALl Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer