import React from 'react'
import Stack from '@mui/material/Stack';
import { FaRegEdit } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Edit from './Edit';
import Button from '@mui/material/Button';

function Preview({ userInput,isResumeAdded,resumeID , setUserInput}) {
  console.log(userInput);

  return (
    <>
      <Box component="section">
        <Stack direction={"row"} sx={{ display: "flex", justifyContent: "end", gap: "10px", padding: "50px" }}>
          {isResumeAdded &&
            <>
              {/* Edit */}
              <Edit resumeID={resumeID} setUserInput={setUserInput}/>
              {/* Download */}
              <button className='btn btn-primary '><FaFileDownload /></button>
            </>}
          {/* History */}
          <p> <Link href={"/history"}><button className='btn btn-primary'><FaHistory /></button></Link></p>
          <Link href={"/"}> <p className='btn text-primary'>BACK</p></Link>
        </Stack>

        <Box sx={{ textAlign: "center" }}>
          <Paper elevation={3} sx={{ p: 5 }}>
            <h2>{userInput.proffesionalData.name}</h2>
            <h6 className='text-primary'>{userInput.proffesionalData.jobTitle}</h6>
            <p><span>{userInput.proffesionalData.location}</span> | <span>{userInput.proffesionalData.email}</span> | <span>{userInput.proffesionalData.phone}</span></p>

            <div className='d-flex gap-3 justify-content-center'>
              <Link href={userInput.proffesionalData.github}>GITHUB</Link>
              <Link href={userInput.proffesionalData.linkedin}>LINKEDIN</Link>
              <Link href={userInput.proffesionalData.portfolio}>PORTFOLIO</Link>
            </div>
            <Divider sx={{ marginTop: "20px" }}>SUMMARY</Divider>
            <p style={{ textAlign: "justify" }}>{userInput.summary}</p>
            <Divider sx={{ marginTop: "20px" }}>Education</Divider>
            <h4>{userInput.educationData.course}</h4>
            <p>{userInput.educationData.college} | {userInput.educationData.university}| {userInput.educationData.year}</p>
            <Divider sx={{ marginTop: "20px" }}>Proffesional Experience</Divider>
            <h4>{userInput.experience.jobRole}</h4>
            <p>{userInput.experience.company} | {userInput.experience.jobLocation} | {userInput.experience.jobTitle}</p>
            <Divider sx={{ marginTop: "20px" }}>Skills</Divider>
            <div className='d-flex flex-wrap gap-3'>
              {userInput.skill.map((item) => (<Button key={item} variant='outlined'>{userInput.skill}</Button>))}
            </div>


          </Paper>
        </Box>
      </Box>

    </>
  )
}

export default Preview