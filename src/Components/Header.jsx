import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';


function Header() {
    const content = "A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
    return (
        <>  <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img style={{ width: "50px" }} src="https://lh4.googleusercontent.com/proxy/VRp_ObHVOkP4n5No1FYfIR-nH6md8J-QMuQZ2psKjTJN9CADvno1ovBS1ZZH4jbj3EWISPsluc4Pr3HzGey6BkeYXymPHeImiEoRtWFt8qs" alt="" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={"/"}> RBuilders</Link>
                    </Typography>
                    <Tooltip title={content}> <Button color="inherit">About</Button></Tooltip>
                </Toolbar>
            </AppBar>
        </Box></>
    )
}

export default Header