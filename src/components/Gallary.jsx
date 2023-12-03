import React from 'react'
import { Grid } from '@mui/material'

function Gallary({images}) {
  return (
    <>
        <Grid container spacing={1}>
            {images.map((img)=>(
                <Grid item xs={12} sm={6} md={4} key={img.id}>
                    <img src={img?.img} alt='hotels' style={{width:'100%', height:'100%', objectFit:'conver'}}/>
                </Grid>
            ))} 
        </Grid>
    </>
  )
}

export default Gallary
