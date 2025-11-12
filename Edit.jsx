import React, { useState,useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
import { updateResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px ',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDetails,setResumeDetails}) {
    const [open, setOpen] = useState(false)
    const skillRef = useRef()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addSkill = (skill)=>{
        if (resumeDetails.userSkills.includes(skill)) {
      alert("The given skill already added, Please add another!!!")
    } else {
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      // to clear add skill text box
      skillRef.current.value = ""
    }
  }
  const removeSkill = (skill)=>{
    setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
  }

  const handleResumeUpdate = async () => {
    const {id,username,jobTitle,location} = resumeDetails
    if (!username && !jobTitle && !location) {
      alert("Please fill the form completely...")
    } else {
      // api
      console.log("Api Call");
      try {
       const result = await updateResumeAPI(id,resumeDetails) 
       console.log(result);
       if (result.status == 200) {
        alert("Resume Updated Successfully!!!")
        handleClose()
       }
       
      } catch (err) {
        console.log(err);
        
      }
      
    }
  }

  return (
    <div>
        <button onClick={handleOpen} className='btn fs-4 text-warning'><MdEditDocument /></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal data */}
            <div>
                <h3>Personal Deails</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})}id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})}id="standard-basic-loc" label="Location" variant="standard" />
                </div>
            </div>
            {/* contact data */}
            <div>
                <h3>Contact Deails</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})}id="standard-basic-email" label="Email" variant="standard" />
                    <TextField value={resumeDetails.phone} onChange={e=>setResumeDetails({...resumeDetails,phone:e.target.value})}id="standard-basic-phone" label="Phone Number" variant="standard" />
                    <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})}id="standard-basic-git" label="Github Profile Link" variant="standard" />
                    <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})}id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                    <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})}id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            </div>
            {/* education data */}
            <div>
                <h3>Education Deails</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})}id="standard-basic-course" label="Course Name" variant="standard" />
                    <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})}id="standard-basic-college" label="College Name" variant="standard" />
                    <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})}id="standard-basic-university" label="University" variant="standard" />
                    <TextField value={resumeDetails.passout} onChange={e=>setResumeDetails({...resumeDetails,passout:e.target.value})}id="standard-basic-year" label="Year of Passout" variant="standard" />
                </div>
            </div>
            {/* work experience */}
            <div>
                <h3>Professional Deails</h3>
                <div className='row p-3'>
                    <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})}id="standard-basic-jobintern" label="Job or Internship" variant="standard" />
                    <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})}id="standard-basic-comname" label="Company Name" variant="standard" />
                    <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})}id="standard-basic-comloc" label="Company Location" variant="standard" />
                    <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})}id="standard-basic-duration" label="Duration" variant="standard" />
                </div>
            </div>
            {/* skills */}
            <div>
                <h3>Skills</h3>
                <div className='d-flex align-items-center justify-content-between p-3 w-100'>
                  <input ref={skillRef} placeholder='Add Skills' type="text" className='w-100' />
                  <Button onClick= {()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                
                <h1>Added Skills</h1>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    resumeDetails.userSkills?.length>0?
                    resumeDetails.userSkills?.map((skill,index)=>(
                      <Button key={index} variant="contained" className='m-1'>{skill}<FaXmark onClick={()=>removeSkill(skill)}   className='ms-2 cursor-pointer'/></Button>
                    ))
                    :
                    <p className='fw-bolder'>No Skills are added yet!!!</p>
                  }
                </div>
            </div>
            {/* summary */}
            <div>
                <h3>Summary</h3>
                <div className="p-3 row">
                    <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})}id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={4} defaultValue={'Enthusiastic and driven MERN stack developer with hands-on experience in building full-stack applications through academic projects and internships. Proficient in front-end technologies like React.js and back-end development with Node.js, Express.js, and MongoDB. Eager to apply strong problem-solving skills and a passion for learning to contribute to impactful projects and grow as a professional.'}/>
                </div>
            </div>
            <div className="my-3">
                <button onClick={handleResumeUpdate} className='btn btn-warning text-light'>Update</button>
            </div>
          </Box>
        </Box>
        </Modal>
    </div>
  )
}

export default Edit