import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <>
     <section className='bg-success' >
      <div className="row mt-5" >
        <div className="col-4"></div>
        <div className="col-4 text-align-center m-5">
          <h2 className='text-light'>Contact Us</h2>
          <p className='text-light'><MdOutlineMail />rBuilder@gmail.com</p>
          <p className='text-light'><FaPhoneAlt />865320145</p>
          <h4 className='text-light'>Contact With Us</h4>
         <p className='text-light m-2 p-4'><FaWhatsapp /><FaInstagram /><IoLogoLinkedin /></p>
        </div>
        <div className="col-4">


        </div>
      </div>
      </section>
    </>
  )
}

export default Footer