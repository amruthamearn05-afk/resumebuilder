import React, { useState } from 'react'
import Userinput from '../components/Userinput'
import Preview from '../components/Preview'

function UserForm() {
  // create state for storing resume details
    const [resumeDetails,setResumeDetails] = React.useState({
      username:"",
      jobTitle:"",
      location:"",
      email:"",
      phone:"",
      github:"",
      linkedin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passout:"",
      jobType:"",
      company:"",
      cLocation:"",
      duration:"",
      userSkills:[],
      summary:""
    })
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
          <Userinput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-lg-6">
          { 
           resumeDetails.username &&
           <Preview resumeDetails={resumeDetails}/>
          }
        </div>
      </div>
    </div>
  )
}

export default UserForm