import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MovieApp
          </Typography>
          {/* <Button color="inherit">View Movies</Button>
          <Button color="inherit">Add movies</Button> */}
          <Link to={'/'}><Button style={{color :'white'}}>VIEW MOVIE</Button></Link>
          <Link to={'/add'}><Button style={{color :'white'}}>ADD MOVIE</Button></Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
  
}
