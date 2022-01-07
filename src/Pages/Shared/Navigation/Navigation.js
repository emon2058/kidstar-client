import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/home">
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        </Link>
        <Link to="/programs">
        <Typography variant="h6" component="span" >
          Programs
        </Typography>
        </Link>
        <Typography variant="h6" component="span" >
          Dashboard
        </Typography>
        <Link to="/login">
        <Button color="inherit">Login</Button>
        </Link>
        <Link to="/logins">
        <Button color="inherit">Loginss</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
};

export default Navigation;