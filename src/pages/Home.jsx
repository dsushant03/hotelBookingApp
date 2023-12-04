import React, { useState } from 'react'
import { getHotels } from '../api/request'
import {useQuery} from 'react-query'
import { Container, Grid, Pagination } from '@mui/material'
import { lazy } from 'react'

const Navbar = lazy(()=>import('../components/Navbar'))
const LoadingSkeleton = lazy(()=>import('../components/LoadingSkeleton'))
const HotelCard = lazy(()=>import('../components/HotelCard'))

function Home() {

  const[hotels, setHotels] = useState([]);
  const[filteredHotels, setFilteredHotels] = useState([]);
  const[page, setPage] = useState(1);
  const hotelsLimitPerPage = 9;

  const fetchHotels = async ()=>{
    const {data} = await getHotels();

    // this is to cache data in the 'hotels' key so that useQuery can use it.
    setHotels(data);
    setFilteredHotels(data);
    return data;
  }
  
  const{data, isLoading} = useQuery('hotels', fetchHotels);
  const startIndex = (page-1)*hotelsLimitPerPage;
  const endIndex = page*hotelsLimitPerPage - 1;
  const paginatedHotels = filteredHotels.slice(startIndex, endIndex+1);
  const totalHotels = filteredHotels.length;
  const totalPages = Math.ceil(totalHotels/hotelsLimitPerPage)

  return (
    isLoading ? 
    <LoadingSkeleton/> :
    <>
        <Navbar hotels={filteredHotels} setHotels={setFilteredHotels} originalHotels={hotels} loggedIn={true}/>
        
        <Container maxWidth='lg'>
            <Grid container spacing={2} sx={{padding:2}}>
                {
                    paginatedHotels.length > 0 ?
                    paginatedHotels.map((e,i)=>(
                        <Grid key={e.id} item xs={12} sm={6} md={4} l={3} >
                            <HotelCard hotel={e} key={e.id}/>
                        </Grid>
                    )) :
                    <LoadingSkeleton/>
                }
            </Grid>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value)=>setPage(value)}
                sx={{display:'flex', justifyContent:'flex-end'}}
                />
        </Container>
    </>
    
  )
}

export default Home
