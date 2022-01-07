import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const loginBg = {
    width:'100%',
    backgroundImage:`url("https://image.shutterstock.com/image-illustration/internet-security-closed-pad-lock-260nw-515395867.jpg")`,
    backgroundSize:'100% 100%',
    height:'100vh',
    backgroundRepeat:'no-repeat',
}
const Logins = () => {
    const [loginData,setLoginData] = useState({})
    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[name] = value; //update data
        setLoginData(newLoginData)
    }
    const handleLogin = e =>{
        e.preventDefault();
    }
    return (
        <Box>
            <Box sx={loginBg}>
                <Box sx={{textAlign:'center',width: '75%',
    transform: `translate(15%, 36%)`,backgroundColor: `rgb(126 200  215 / 36%)`}}>
                    <Typography sx={{py:5,color:'orange'}} variant="h4">
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField 
                        sx={{width:'75%' }}
                        id="standard-basic"
                        name="email" 
                        type="email"
                        label="Your Name" 
                        variant="standard"
                        onChange={handleChange} />
                        <TextField 
                        sx={{width:'75%', my:3}}
                        id="standard-basic"
                        type="password"
                        name="password" 
                        label="Your Password" 
                        variant="standard"
                        onChange={handleChange} /><br/>
                        <Button sx={{my:2,backgroundColor:'orange'}} type = "submit" variant="contained">LOGIN</Button>
                        <br/>
                        </form>
                    </Box>
            </Box>
        </Box>
    );
};

export default Logins;