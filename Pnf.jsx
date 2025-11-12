import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center p-5 my-3 flex-column'>
      <img width={'40%'} src="/404Pagenotfound.png" alt="404" />
      <h1 style={{color:'purple'}}>Page Not Found</h1>
      <Link className='btn text-white' to={'/'} style={{backgroundColor:'purple'}}>Go to Home</Link>
    </div>
  )
}

export default Pnf