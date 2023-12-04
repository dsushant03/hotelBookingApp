import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useState } from 'react';
import { lazy } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Modal, TextField, Typography} from '@mui/material';

const Navbar = lazy(()=>import('../components/Navbar'))

function Signup() {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = ()=> {
    setOpen(false);
  }

  const navigate = useNavigate();

  const handleSignup = async ()=>{
    const resp = await firebase.signupUtil(email, pwd);
    resp.user.displayName = name;
    console.log(resp)
    if(resp)
    {
        setOpen(true);
    }
  }

  return (
    <>
        <Navbar loggedIn={false}></Navbar>
            
        <Typography variant='h4' fontWeight='bold'
                sx={{mt:'100px', textAlign:'center'}}>
                Create new account
        </Typography>

        
        <Box sx={{
            display:'flex', 
            flexDirection:'column', 
            width:'30%',
            mt:'30px',
            ml:'35%'
            }}>
            <br />
            <TextField  label="Name" 
                onChange={(e)=>setName(e.target.value)}
                value={name}
            />
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
            onClick={handleSignup}>Signup</Button>
        </Box>

        <Modal
            open={open}
            onClose={handleClose}
            
        >
            <Box
                sx={{
                    position:'absolute',
                    top:'35%',
                    left:'50%',
                    bgcolor:'white',
                    width:'300px',
                    margin: 'auto',
                    transform: 'translate(-50%, -50%)',
                    boxShadow:'0 0 10px 0 rgba(0,0,0,0.2)',
                    borderRadius:'3px',
                    p:5,
                    height:'23%'
                }}>

                <Typography sx={{ml:'30px'}}
                    variant='h5'>Signed up succesfully.</Typography>

                <Box sx={{display:'flex', 
                          justifyContent:'space-between',
                          mt:'100px'}}>
                    <Button sx={{mt:2}}
                        onClick={()=>navigate('/')}
                        variant='contained'>Login</Button>
                    <Button sx={{mt:2}}
                        onClick={()=>{
                            setOpen(false);
                            setEmail('');
                            setPwd('');
                        }}
                        variant='contained' color='error'>Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>

    </>
  )
}

export default Signup
