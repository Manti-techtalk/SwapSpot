import React from 'react'
import MessegesLeft from '../components/MessegesLeft'

function MessagesPage() {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-4">
                <MessegesLeft/>
            </div>
            <div className="col-8"></div>
        </div>
    </div>
  )
}

export default MessagesPage