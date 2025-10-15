import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import { deleteResumeAPI, getAllResumeAPI } from '../service/allAPI'

function History() {
  const [userInput, setUserInput] = useState({
    proffesionalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: ""
    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: "",

    },
    experience: {
      jobRole: "",
      company: "",
      jobLocation: "",
      duration: ""
    },
    skill: [],
    summary: ""
  })


  const getAllResumes = async () => {
    const result = await getAllResumeAPI()
    console.log(result);
    setUserInput(result?.data)

  }
  console.log(userInput);

  const deleteResume = async(id)=>{
    const result=await deleteResumeAPI(id)
    console.log(result);
    getAllResumes()
    
  }

  useEffect(() => {
    getAllResumes()
  }, [])



  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Dowloaded Resume History</h1>
        <Link to={"/"} style={{ marginTop: "50px" }} className='float-end me-5'>BACK</Link>
        <Box component="section" className="container-fluid">
          <div className='row mt-5'>
            {userInput?.length > 0 ?
              userInput?.map((item, index) => (

                <div className="col-md-4" key={index}>
                  <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: "center" }}>
                    <div className='d-flex align-item-center justify-content-center'>
                      {/* <h6>Review At : <br /> 24/06/2025 , 7:22:27PM</h6> */}
                      <h6>Resume Number : {index + 1}</h6>
                      <button onClick={()=>deleteResume(item?.id)} type='button' className='btn btn-danger'>x</button>
                    </div>
                    <div className='shadow p-3 mt-3'>
                      <h2>{item?.proffesionalData.name}</h2>
                      <h6 className='text-primary'>{item?.proffesionalData.jobTitle}</h6>
                      <p><span>{item?.proffesionalData.location}</span> | <span>{item?.proffesionalData.email}</span> | <span>{item?.proffesionalData.phone}</span></p>


                    </div>

                  </Paper>
                </div>)) :
              <h1>No Resume Added</h1>
            }
          </div>
        </Box>
      </div>
    </>
  )
}

export default History