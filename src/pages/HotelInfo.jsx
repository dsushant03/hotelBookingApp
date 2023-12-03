import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import Navbar from '../components/Navbar';
import { getHotelBySlug } from '../api/request';
import { Box, Button, Container, ListItem, Typography } from '@mui/material';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Gallary from '../components/Gallary';
import BookingModal from '../components/BookingModal';

function HotelInfo() {
    const {slug} = useParams();
    const[open, setOpen] = useState(false);
    const fetchHotelInfo = async () => {
        const {data} = await getHotelBySlug(slug);
        console.log(data)
        return data;
    }

    const{isLoading, data} = useQuery('hotelData', fetchHotelInfo);

     const handleOpen = ()=>{setOpen(true)};
     
  return (
    <>
        <Navbar loggedIn={true}/>
        <Container>
            {
                isLoading ? <LoadingSkeleton/> :
                    <>
                        <Typography 
                            variant='h6' 
                            sx={{
                            margin:'3px 0',
                            fontWeight:'bold'
                        }}>
                        {data && data.name}
                        </Typography>  
                        <Gallary images={data?.images}></Gallary>
                    </>
            }
            <Box sx={{display:'flex', margin:'3px 0'}}>
                {
                    data?.rooms.map((room)=>(
                        <Typography
                            variant='h6'
                            key={room.id}
                            fontWeight='bold'
                            sx={{margin:'3px 20px 5px 0', color:'gray'}}
                            >
                            {room.content}
                        </Typography>
                    ))
                }
            </Box>
            <Typography 
                variant='p' 
                sx={{
                margin:'3px 0',
                lineHeight: '1.5'
            }}>
                {data?.aboutThePlace}
            </Typography>

            <Typography 
                variant='h4' 
                sx={{
                margin:'3rem 0 1.5rem',
                fontWeight:'bold'
            }}>
                What this place offers!!!
            </Typography>

            <Box
                sx={{
                    margin:'3px 0',
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                
                <Box>
                    {data?.features.map((feature)=>(
                        <ListItem key={feature.id}>{feature.text}</ListItem>
                    ))}
                </Box>
                <Box sx={{maxWidth:'70%'}}>
                    <Button  onClick={handleOpen}
                    variant='outlined'>Reserve</Button>
                </Box>
            </Box>
            <BookingModal open={open} setOpen={setOpen} data={data} />
        </Container>
    </>
  )
}

export default HotelInfo
