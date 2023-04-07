import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    // console.log(isSignup);
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = (e) =>{
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };
    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(input);
    };
    const resetState = () => {
        setIsSignup(!isSignup);
        setInput({name: '', email:'', password:''})
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display={'flex'} 
            flexDirection={'column'} 
            maxWidth={400} 
            alignItems={'center'} 
            justifyContent={'center'} 
            margin={'auto'} 
            marginTop={5} 
            padding={5} 
            borderRadius={5} 
            boxShadow={'5px 5px 10px #ccc'}
            sx={{":hover" : {
                boxShadow: '10px 10px 20px #ccc'
            }}}>
            <Typography variant='h3'
                         padding={5}
                         textAlign={'center'}>
                            {isSignup ? 'Signup' : 'Login'}
            </Typography>

            {isSignup && <TextField onChange={handleChange} name='name' value={input.name} variant='outlined' placeholder='Name' type='text' margin='normal' />}
            <TextField onChange={handleChange} name='email' value={input.email} variant='outlined' placeholder='Email' type='email' margin='normal' />
            <TextField onChange={handleChange} name='password' value={input.password} variant='outlined' placeholder='Password' type='Password' margin='normal' />
            <Button endIcon={isSignup ? <HowToRegIcon/> : <LoginIcon />}
                        type='submit' sx={{marginTop: 3,
                        borderRadius: 3
                        }}      
                    variant='contained'
                    color='warning'>{isSignup ? 'Signup' : 'Login'}
                    
            </Button>

            <Button endIcon={isSignup ? <LoginIcon /> : <HowToRegIcon/>}
                        onClick={resetState} sx={{marginTop: 3,
                        borderRadius: 3
                        }}      
                   >Change To {isSignup ? 'Login' : 'Signup'}
            </Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
