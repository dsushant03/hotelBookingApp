import React from 'react'
import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function HotelCard({hotel}) {
    const navigate = useNavigate();
  return (
    <Card sx={{maxWidth:345, cursor:'pointer'}} 
    onClick={()=>navigate(`/hotels/${hotel.slug}`)}>
        
        <CardMedia
            component="img"
            height="240"
            image={hotel.thumbnail}
            alt='Hotel'
        />
        <CardContent>
            <Typography fontWeight='bold'>{hotel.address}</Typography>
            <Typography fontWeight='bold'>${hotel.pricePerNight} per night</Typography>
        </CardContent>
    </Card>
  )
}

export default HotelCard
