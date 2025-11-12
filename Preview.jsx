import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div style={{margin:'85px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>{resumeDetails?.username}</h3>
      <h4>{resumeDetails?.jobTitle}</h4>
      <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.phone}</span></h6>
      <p className='my-2'>
        <a href={resumeDetails?.github} target='_blank' >GITHUB</a> | 
        <a href={resumeDetails?.linkedin} target='_blank'>LINKEDIN</a> | 
        <a href={resumeDetails?.portfolio} target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
      <Divider sx={{fontSize:'25px'}}>Education</Divider>
      <h5>{resumeDetails?.course}</h5>
      <p><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'>{resumeDetails?.passout}</span></p>
      <Divider sx={{fontSize:'25px'}}>Professional Summary</Divider>
      <h5>{resumeDetails?.jobType}</h5>
      <p><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.cLocation}</span>|<span className='mx-2'>{resumeDetails?.duration}</span></p>
      <Divider sx={{fontSize:'25px'}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        {
          resumeDetails?.userSkills?.map((item,index)=>(
          <Button key={index} variant="contained" className='m-1'>{item} </Button>))
          
        }
        
      </div>
    </div>
  )
}

export default Preview