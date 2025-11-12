import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';


function Header() {
    const projectInfo = "Still spending hours trying to design the perfect resume? Tired of formatting issues and confusing templates? Introducing rBulider, your smart, easy-to-use resume builder designed to help you create professional resumes in minutes!"
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://icon-library.com/images/resume-icon/resume-icon-16.jpg" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none fw-bold'>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">About Us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header