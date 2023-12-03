import * as React from 'react';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';



export default function BookingModal({open, setOpen, data}) {
    const [selecedCount, setSelectedCount] = useState(2);
    const [reserved, setReserved] = useState(false)
    const navigate = useNavigate();
    
    useEffect(()=>{
        return ()=>{
            setReserved(false);
        }
    },[])

    const handleClose = ()=>{
        setOpen(false)
        setReserved(false)
    }

    const getGuests = ()=>{
        const n = Number(data?.rooms[0].content.split(' ')[0]);
        if(n)
        return n;
    }
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    const firebase = useFirebase();

    const [dates, setDates] = useState([{
        startDate : today,
        endDate : tomorrow,
        key : 'selection'
    }])

    const getTotalNights = ()=>{
        const {startDate, endDate} = dates[0];
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffDays = end.getDate() - start.getDate();
        return diffDays;
    }

    const handleReserve = async ()=>{
        await firebase.createNewBooking(data?.address, selecedCount, dates[0].startDate, dates[0].endDate);
        setReserved(true);
    }

  return (
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box
            sx={{
                position:'absolute',
                top:'50%',
                left:'50%',
                bgcolor:'white',
                width:'480',
                margin: 'auto',
                transform: 'translate(-50%, -50%)',
                boxShadow:'0 0 10px 0 rgba(0,0,0,0.2)',
                borderRadius:'3px',
                p:3
            }}>
            
            {
                reserved ?
                <Box>
                    <Typography sx={{ml:'26px'}}
                    variant='h5'>Booking succesful ..!</Typography>

                    <Box sx={{display:'flex', 
                            justifyContent:'space-between',
                            mt:'90px'}}>
                        <Button sx={{mt:2}}
                            onClick={()=>{
                                handleClose();
                                navigate('/home')
                            }}
                            variant='contained'>Explore more</Button>
                        <Button sx={{mt:2}}
                            onClick={handleClose}
                            variant='contained' color='error'>Cancel
                        </Button>
                    </Box>
                </Box>  :
                <>
                    <Typography variant='h6' fontWeight='bold' sx={{margin:'3px 0'}}>
                        ${data?.pricePerNight} / night
                    </Typography>

                    <FormControl fullWidth
                        sx={{margin:'3px 0'}}>
                        <InputLabel>Number of guests</InputLabel>
                        <Select label='Number of guests' value={selecedCount} onChange={
                            (e)=>{setSelectedCount(e.target.value)}
                        }>
                            {[...Array(getGuests())].map((e, i)=>(
                                <MenuItem key={i} value={i+1}>{i+1}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography variant='h6' sx={{color:'gray'}}>
                        Select Dates
                    </Typography>
                    <DateRange ranges={dates}
                    onChange={(date)=>setDates([date.selection])}
                    minDate={new Date()}/>
                    <Box sx={{display:'flex', justifyContent:'space-between',           alignItems:'center'}}>
                        <Typography variant='h6'>
                            ${data?.pricePerNight} * {getTotalNights()} nights
                        </Typography>
                        <Typography variant='h6'>
                            ${data?.pricePerNight * getTotalNights()}
                        </Typography>
                    </Box>
                    <Typography variant='h6'>
                        Subtotal : ${data?.pricePerNight * getTotalNights()}
                    </Typography>
                    <Button onClick={handleReserve}
                        variant='outlined' sx={{width:'100%' , marginTop:'10px'}}>
                        Reserve
                    </Button>
                </>
            }
        </Box>
      </Modal>
  );
}