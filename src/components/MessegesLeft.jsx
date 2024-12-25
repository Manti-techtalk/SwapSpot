import React from 'react'

function MessegesLeft() {
  return (
    <div className="container-fluid">
        <div className="row">
            <p className="col-12">Messeges</p>
            <div className="col-12">
                <input type="text" placeholder='search messeges' />
            </div>
        <div className="row">
            <div className="col-2">
                <div className="circle" style={{height:'50px',width:'50PX',borderRadius:'50%'}}></div>
            </div>
            <div className="col">
                <p className='h5'>Jogn Does</p>
                <p>About: Vintage Camera</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MessegesLeft