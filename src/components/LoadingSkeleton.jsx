import React from 'react'
import {Container, Grid, Skeleton} from '@mui/material'
function LoadingSkeleton() {
  return (
    <div>
      <Skeleton 
        animation='wave'
        variant='rectangular'
        width='100%'
        height={60}
      />

      <Container maxWidth='lg'>
            <Grid maxWidth='lg'>
                <Grid container spacing={2} marginTop={3}>
                    {
                        [1,2,3,4,5,6,7,8,9].map((e,i)=>(
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Skeleton 
                                    animation='wave'
                                    variant='rectangular'
                                    width='100%'
                                    height={200}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default LoadingSkeleton
