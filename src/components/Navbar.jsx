import React, { useState, useContext } from 'react'
import { AppBar, 
        Avatar,
        Box, 
        IconButton, 
        ListItemIcon,
        Menu,
        MenuItem,
        Toolbar, 
        TextField,
        Tooltip,
        Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';
import { signOut } from 'firebase/auth';
import Profile from '../pages/Profile';


function Navbar({hotels, setHotels, originalHotels, loggedIn}) {

  const navigate = useNavigate();
  const [searchval, setSearchVal] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const firebase = useFirebase();

  const handleClick = (event) => {
      setOpen(!open);
      setAnchorEl(open ? null : event.target);
  };
  
  const handleLogout = ()=>{
    signOut(firebase.firebaseAuth)
    navigate('/');
  }

  const handleSearch = ()=>{
    const filteredData = hotels.filter((e)=>(
        e.address.toLowerCase().includes(searchval.toLowerCase()) ||
        e.name.toLowerCase().includes(searchval.toLowerCase())
    ))
    setHotels(filteredData);
  }

  return (
    <>
        <AppBar position='static' color='inherit'>
            <Toolbar
                sx={{display:'flex',
                    justifyContent:'space-between',
                    alignItems: 'center'
                }}>
                    <Typography 
                        sx={{cursor:'pointer', ml:'150px'}}
                        onClick={()=>navigate('/home')}
                        variant='h5' 
                        fontWeight="bold"
                    >
                        BookStay
                    </Typography>

                    <Box sx={{display:'flex', alignItems:'center'}}> 
                        {hotels && (
                            <>
                                <TextField label='Search hotels' variant='outlined' size='small'
                                sx={{mr:'25px'}}
                                value={searchval}
                                onChange={(e)=>{
                                    setSearchVal(e.target.value);
                                    if(e.target.value === '')
                                        setHotels(originalHotels);
                                }}
                                InputProps={{
                                    endAdornment:
                                    <IconButton 
                                     disabled={!searchval}
                                     onClick={handleSearch}>
                                        <SearchOutlinedIcon/>
                                    </IconButton>
                                }}/>
                            </>
                        )}
                        {
                            loggedIn &&
                            <Typography 
                                sx={{cursor:'pointer', mr:'30px'}}
                                onClick={()=>navigate('/home')}
                                variant='h6' 
                                fontSize='16px'
                                fontWeight="bold"
                                >
                                    Home
                            </Typography>
                        }

                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                            </IconButton>
                        </Tooltip>

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClick}
                            onClick={handleClick}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            {
                                loggedIn &&
                                <MenuItem onClick={()=>navigate('/profile')}>
                                    <ListItemIcon>
                                        <PersonIcon fontSize='small'/>
                                    </ListItemIcon>
                                        Profile
                                </MenuItem>
                            }
                            {
                                loggedIn &&
                                <MenuItem onClick={handleLogout}>
                                    <ListItemIcon>
                                        <LogoutIcon fontSize='small'/>
                                    </ListItemIcon>
                                        Logout
                                </MenuItem>
                            }
                            {
                                !loggedIn &&
                                <MenuItem onClick={()=>navigate('/signup')}>
                                    <ListItemIcon>
                                        <LoyaltyIcon fontSize='small'/>
                                    </ListItemIcon>
                                        Signup
                                </MenuItem>
                            }
                            {
                                !loggedIn &&
                                <MenuItem onClick={()=>navigate('/')}>
                                    <ListItemIcon>
                                        <LoginIcon fontSize='small'/>
                                    </ListItemIcon>
                                        Login
                                </MenuItem>
                            }

                        </Menu>
                    </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
