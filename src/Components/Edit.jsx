import React, { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { getAResumeAPI } from '../service/allAPI';
import { useState } from 'react'
import { UpdateAResumeAPI } from '../service/allAPI';
import Swal from 'sweetalert2';

const skillSuggestionArray = ["HTML", "CSS", "React", "Javascript", "Nodejs"]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    maxHeight: "90vh"
};
function Edit({ resumeID, setUserInput }) {
    const skillSuggestionArray = ["HTML", "CSS", "React", "Javascript", "Nodejs"]
    const [inputSkill, setInputSkill] = React.useState("")
    const [EditUserInput, setEditUserInput] = useState({
        id: "",
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        getAResume()
    }
    const handleClose = () => setOpen(false);

    console.log(resumeID)
    const getAResume = async () => {
        const result = await getAResumeAPI(resumeID)
        console.log(result);
        setEditUserInput(result.data);


    }
    console.log(EditUserInput);
    const addSkill = (inputSkill) => {
        console.log("User Input skill:" + inputSkill
        );
        if (inputSkill) {
            if (EditUserInput.skill.includes(inputSkill)) {
                alert("Given skill already Existing.....Add Another...")
            } else {
                setEditUserInput({ ...EditUserInput, skill: [...EditUserInput.skill, inputSkill] })
            }
        }


    }

    const removeSkill = (skill) => {
        console.log(skill)
        setEditUserInput({ ...EditUserInput, skill: EditUserInput.skill.filter(item => item != skill) })
    }


    const updateAResume = async () => {
        try {
            const result = await UpdateAResumeAPI(resumeID, EditUserInput)
            console.log(result);
            if (result.status === 200) {
                setUserInput(result.data)
                Swal.fire({
                    title: "Success",
                    text: "Resume Updated Successfully",
                    icon: "success",
                    confirmButtonText: "Back"
                });
                handleClose();
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Error updating resume",
                    icon: "Error",
                    confirmButtonText: "Back"
                })
            }

        }
        catch (err) {
            console.error(err);
            Swal.fire({
                title: "Error",
                text: " An Error occured while updating resume",
                icon: "Error",
                confirmButtonText: "Back"
            })

        }
    }


    return (
        <>
            <button onClick={handleOpen} className='btn btn-primary'><FaRegEdit /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Your Resume
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <h1>Personal Details</h1>
                            <div className="row p-3">
                                <TextField value={EditUserInput.proffesionalData.name} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, name: e.target.value } })} id="full-name" label="Full Name" variant="standard" />
                                <TextField value={EditUserInput.proffesionalData.jobTitle} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, jobTitle: e.target.value } })} id="job-title" label="Job Title" variant="standard" />
                                <TextField value={EditUserInput.proffesionalData.location} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, location: e.target.value } })} id="location" label="Location" variant="standard" />
                            </div>
                        </div>
                        <div>
                            <h1>Contact Details</h1>
                            <div className="row p-3">
                                <TextField value={EditUserInput.proffesionalData.email} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, email: e.target.value } })} id="email" label="Email" variant="standard" />
                                <TextField value={EditUserInput.proffesionalData.phone} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, phone: e.target.value } })} id="phone-number" label="Phone Number" variant="standard" />
                                <TextField value={EditUserInput.proffesionalData.github} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, github: e.target.value } })} id="github" label="Github profile Link" variant="standard" />
                                <TextField value={EditUserInput.proffesionalData.linkedin} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, linkedin: e.target.value } })} id="linkedin" label="Linkedin profile Link" variant="standard" />
                                <TextField value={EditUserInput.proffesionalData.portfolio} onChange={(e) => setEditUserInput({ ...EditUserInput, proffesionalData: { ...EditUserInput.proffesionalData, portfolio: e.target.value } })} id="portfolio" label="Portfolio Profile Link" variant="standard" />
                            </div>
                        </div>
                        <div>
                            <h1>Education Details</h1>
                            <div className="row p-3">
                                <TextField value={EditUserInput.educationData.course} onChange={(e) => setEditUserInput({ ...EditUserInput, educationData: { ...EditUserInput.educationData, course: e.target.value } })} id="course-name" label="Course Name" variant="standard" />
                                <TextField value={EditUserInput.educationData.college} onChange={(e) => setEditUserInput({ ...EditUserInput, educationData: { ...EditUserInput.educationData, college: e.target.value } })} id="college-name" label="College Name" variant="standard" />
                                <TextField value={EditUserInput.educationData.university} onChange={(e) => setEditUserInput({ ...EditUserInput, educationData: { ...EditUserInput.educationData, university: e.target.value } })} id="university" label="University" variant="standard" />
                                <TextField value={EditUserInput.educationData.year} onChange={(e) => setEditUserInput({ ...EditUserInput, educationData: { ...EditUserInput.educationData, year: e.target.value } })} id="passout" label="Year Of Passout" variant="standard" />
                            </div>
                        </div>
                        <div>
                            <h1>Professional Details</h1>
                            <div className="row p-3">
                                <TextField value={EditUserInput.experience.jobRole} onChange={(e) => setEditUserInput({ ...EditUserInput, experience: { ...EditUserInput.experience, jobRole: e.target.value } })} id="job-internship" label="Job or Internship" variant="standard" />
                                <TextField value={EditUserInput.experience.company} onChange={(e) => setEditUserInput({ ...EditUserInput, experience: { ...EditUserInput.experience, company: e.target.value } })} id="company-name" label="Compant Name" variant="standard" />
                                <TextField value={EditUserInput.experience.jobLocation} onChange={(e) => setEditUserInput({ ...EditUserInput, experience: { ...EditUserInput.experience, jobLocation: e.target.value } })} id="location" label="Location" variant="standard" />
                                <TextField value={EditUserInput.experience.jobTitle} onChange={(e) => setEditUserInput({ ...EditUserInput, experience: { ...EditUserInput.experience, jobTitle: e.target.value } })} id="duration" label="Duration" variant="standard" />


                            </div>
                        </div>
                        <div>
                            <h1>Skills</h1>
                            <div className="row p-3">
                                <div className='d-flex align-item-center justify-content-between'>
                                    <TextField value={inputSkill} onChange={(e) => setInputSkill(e.target.value)} sx={{ width: "550px" }} id="summary" label="Enter Skills" variant="standard" />
                                    <button onClick={() => addSkill(inputSkill)} variant="outlined">ADD</button>
                                </div>
                                <div className='mt-4'>
                                    <h4>Suggestions :</h4>
                                    <div className='d-flex gap-2 flex-wrap mt-3'>
                                        {skillSuggestionArray.map((userSkill) => (
                                            <Button onClick={() => addSkill(userSkill)} key={userSkill} variant='contained'>{userSkill}</Button>
                                        ))}
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <h4>Added Skills :</h4>
                                    {EditUserInput.skill.map((item) => (

                                        <span key={item} className='btn btn-primary me-3'>{item}<button onClick={() => removeSkill(item)} className='text-light btn'>X</button></span>


                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1>Professional Summary</h1>
                            <div className="row p-3">
                                <TextField value={EditUserInput.summary} onChange={(e) =>
                                    setEditUserInput({ ...EditUserInput, summary: e.target.value })
                                } multiline rows={5} id="summary" label="Write a short summary on yourself" variant="standard" />


                            </div>
                        </div>
                        <div>
                            <Button variant='outlined'>Cancel</Button>
                            <Button onClick={updateAResume} type='button' variant='outlined'>Update</Button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default Edit