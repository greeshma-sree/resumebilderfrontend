import React from 'react'

import Preview from '../Components/Preview'
import Steps from '../Components/Steps'
import { useState } from 'react'


function Form() {
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
  const [resumeID,setIsResumeID]=useState("")
  // console.log(resumeID);
  

  const [isResumeAdded, setIsResumeAdded] = useState(false)
  return (
    <>
      <div className='container-fluid'>
        {isResumeAdded ?
          <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Preview userInput={ userInput } isResumeAdded={isResumeAdded} resumeID={resumeID} setUserInput={setUserInput} />
            </div>
            <div className='col-2'></div>
          </div>
          :

          <div className="row">
            <div className="col-6 mt-5 p-4">
              <Steps setUserInput={setUserInput} userInput={userInput} setIsResumeAdded={setIsResumeAdded} setIsResumeID={setIsResumeID} />
            </div>
            <div className="col-6">
              <Preview userInput={userInput} />
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default Form