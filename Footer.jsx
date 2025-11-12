import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h3 className='fw-bold'>Contact Us</h3>
        <h5 className='fw-bolder'><MdEmail /> resumebuilder@gmail.com</h5>
        <h5 className='fw-bolder'><FaPhone /> 9087654321</h5>
        <h4>Connect With Us</h4>
        <div className='d-flex justify-content-center fs-4 my-3'>
            <FaWhatsapp className='me-3' />
            <FaInstagram className='me-3' />
            <FaFacebookF className='me-3' />
        </div>
        <h6>Designed & Built With using React </h6>
    </div>
  )
}

export default Footer