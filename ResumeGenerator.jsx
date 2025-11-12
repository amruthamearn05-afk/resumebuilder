import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h2 className='text-center my-5'>Create a Job-Winning Resume in Minutes</h2>
       <div style={{height:'60vh'}} className="row justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-4  rounded shadow p-5 text-center">
          <FaRegFileAlt className='text-primary fs-2 mb-3' />
          <h4>Add your Information</h4>
          <p>Add pre-written examples to each section </p>
          <h5>Step 1</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4  rounded shadow p-5 text-center">
          <IoIosDownload className='text-danger fs-1 mb-3' />
          <h4>Download your Resume</h4>
          <p>Download and start applying </p>
          <h5>Step 2</h5>

        </div>
        <div className="col-md-1"></div>
        
       </div>
       <div className='text-center mb-5'>
        <Link to={'/form'} className='btn text-white' style={{backgroundColor:'purple'}}>LET'S START</Link>
       </div>
    </div>
  )
}

export default ResumeGenerator