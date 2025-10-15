import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addResumeAPI } from '../service/allAPI';
import Swal from 'sweetalert2'


const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function Steps({ setUserInput, userInput,setIsResumeAdded,setIsResumeID }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const skillSuggestionArray = ["HTML", "CSS", "React", "Javascript", "Nodejs"]
    const [inputSkill, setInputSkill] = React.useState("")



    console.log(userInput);


    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const addSkill = (inputSkill) => {
        console.log("User Input skill:" + inputSkill
        );
        if (inputSkill) {
            if (userInput.skill.includes(inputSkill)) {
                alert("Given skill already Existing.....Add Another...")
            } else {
                setUserInput({ ...userInput, skill: [...userInput.skill, inputSkill] })
            }
        }


    }

    const removeSkill = (skill) => {
        console.log(skill)
        setUserInput({ ...userInput, skill: userInput.skill.filter(item => item != skill) })
    }

    const renderStepArrayContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h1>Personal Details</h1>
                    <div className="row p-3">
                        <TextField value={userInput.proffesionalData.name} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, name: e.target.value } })} id="full-name" label="Full Name" variant="standard" />
                        <TextField value={userInput.proffesionalData.jobTitle} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, jobTitle: e.target.value } })} id="job-title" label="Job Title" variant="standard" />
                        <TextField value={userInput.proffesionalData.location} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, location: e.target.value } })} id="location" label="Location" variant="standard" />
                    </div>
                </div>
            )
            case 1: return (
                <div>
                    <h1>Contact Details</h1>
                    <div className="row p-3">
                        <TextField value={userInput.proffesionalData.email} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, email: e.target.value } })} id="email" label="Email" variant="standard" />
                        <TextField value={userInput.proffesionalData.phone} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, phone: e.target.value } })} id="phone-number" label="Phone Number" variant="standard" />
                        <TextField value={userInput.proffesionalData.github} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, github: e.target.value } })} id="github" label="Github profile Link" variant="standard" />
                        <TextField value={userInput.proffesionalData.linkedin} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, linkedin: e.target.value } })} id="linkedin" label="Linkedin profile Link" variant="standard" />
                        <TextField value={userInput.proffesionalData.portfolio} onChange={(e) => setUserInput({ ...userInput, proffesionalData: { ...userInput.proffesionalData, portfolio: e.target.value } })} id="portfolio" label="Portfolio Profile Link" variant="standard" />
                    </div>
                </div>
            )
            case 2: return (
                <div>
                    <h1>Education Details</h1>
                    <div className="row p-3">
                        <TextField value={userInput.educationData.course} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, course: e.target.value } })} id="course-name" label="Course Name" variant="standard" />
                        <TextField value={userInput.educationData.college} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, college: e.target.value } })} id="college-name" label="College Name" variant="standard" />
                        <TextField value={userInput.educationData.university} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, university: e.target.value } })} id="university" label="University" variant="standard" />
                        <TextField value={userInput.educationData.year} onChange={(e) => setUserInput({ ...userInput, educationData: { ...userInput.educationData, year: e.target.value } })} id="passout" label="Year Of Passout" variant="standard" />
                    </div>
                </div>
            )
            case 3: return (
                <div>
                    <h1>Professional Details</h1>
                    <div className="row p-3">
                        <TextField value={userInput.experience.jobRole} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} id="job-internship" label="Job or Internship" variant="standard" />
                        <TextField value={userInput.experience.company} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} id="company-name" label="Compant Name" variant="standard" />
                        <TextField value={userInput.experience.jobLocation} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} id="location" label="Location" variant="standard" />
                        <TextField value={userInput.experience.jobTitle} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobTitle: e.target.value } })} id="duration" label="Duration" variant="standard" />

                    </div>
                </div>
            )
            case 4: return (
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
                            {userInput.skill.map((item) => (

                                <span key={item} className='btn btn-primary me-3'>{item}<button onClick={() => removeSkill(item)} className='text-light btn'>X</button></span>


                            ))}
                        </div>
                    </div>
                </div>
            )
            case 5: return (
                <div>
                    <h1>Professional Summary</h1>
                    <div className="row p-3">
                        <TextField value={userInput.summary} onChange={(e) =>
                            setUserInput({ ...userInput, summary: e.target.value })
                        } multiline rows={5} id="summary" label="Write a short summary on yourself" variant="standard" />


                    </div>
                </div>
            )
        }
    }
    const handleAddResume = async () => {
        const { name, jobTitle, location, email, phone, github, linkedin, portfolio } = userInput.proffesionalData
        if (name && jobTitle && location && email, phone) {
            const result = await addResumeAPI(userInput)
            console.log(result);
            setIsResumeID(result.data.id)
            setIsResumeAdded(true)
            Swal.fire({
                title: "Good job!",
                text: "Resume Added successfully!",
                icon: "success"
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    }
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                            <Button variant='contained' className='ms-5' onClick={handleAddResume}>Add Resume</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {renderStepArrayContent(activeStep)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </>
    )
}

export default Steps