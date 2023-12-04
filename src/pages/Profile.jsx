import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { lazy } from 'react'
import { Paper, Table, TableBody, TableCell, TableRow, TableHead, TableContainer, Typography, Box } from '@mui/material';

const Navbar = lazy(()=>import('../components/Navbar'))


function Profile() {
  const firebase = useFirebase();
  const [entries, setEntries] = useState([]);
  const [empty, setEmpty] = useState(false);


  useEffect(()=>{
    
    const getEntries = async()=>{
        const snapshot = await firebase.getBookings();
        let bookings = [];
        snapshot.forEach((data)=>bookings.push(data._document.data.value.mapValue.fields))
        setEntries(bookings);
        console.log(entries)
        if(entries.length==0)
        {
            setEmpty(true);
        }
        
    }

    getEntries();

  },[])

  return (
    <>
        <Navbar loggedIn={true}></Navbar>
        
            <>
                <Box sx={{ml:'170px', mt:'40px'}}>
                    <Typography 
                        variant='h4'>Previous Bookings
                    </Typography>
                </Box>

                <TableContainer sx={{ 
                    mt:'50px',
                    width:'60%',
                    ml:'20%'
                }}
                component={Paper}>
                    <Table  size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">Sr. No.</TableCell>
                            <TableCell align="center">Hotel</TableCell>
                            <TableCell align="center">Guests</TableCell>
                            <TableCell align="center">Checkin date</TableCell>
                            <TableCell align="center">Checkout date</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {entries.map((entry, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center">{index+1}</TableCell>
                            <TableCell align="center">{entry.hotel.stringValue}</TableCell>
                            <TableCell align="center">{entry.guests.integerValue}</TableCell>
                            <TableCell align="center">{entry.checkinDate.stringValue}</TableCell>
                            <TableCell align="center">{entry.checkoutDate.stringValue}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>       
    </>
  )
}

export default Profile
