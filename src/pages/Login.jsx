import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useState } from 'react';
import { lazy } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography} from '@mui/material';

const Navbar = lazy(()=>import('../components/Navbar'))

function Login() {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const handleLogin = async ()=>{
    const resp = await firebase.loginUtil(email, pwd);
    if(resp)
    {
        navigate('/home')
    }
  }

  return (
    <>
        <Navbar loggedIn={false}></Navbar>

        <Typography variant='h4' fontWeight='bold'
            sx={{mt:'100px', textAlign:'center'}}>
            Login to your account
        </Typography>

        
        <Box sx={{
            display:'flex', 
            flexDirection:'column', 
            width:'30%',
            mt:'30px',
            ml:'35%'
            }}>
            <br />
            <TextField  label="Email" type='email'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                
            />
            <br />
            <TextField  label="Password" type='password'
                onChange={(e)=>setPwd(e.target.value)}
                value={pwd}
            />
            <br />
            <Button
            size='large'
            variant='contained'
            sx={{width:'50%', ml:'25%', borderRadius:'10px', mt:'90px'}} 
            onClick={handleLogin}>Login</Button>
        </Box>

    </>
  )
}

export default Login
