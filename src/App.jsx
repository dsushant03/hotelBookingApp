import{Route, Routes} from 'react-router-dom'
import React, {lazy, Suspense} from 'react'
import LoadingSkeleton from './components/LoadingSkeleton'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProtectedRoutes from './components/ProtectedRoutes'

const Login = lazy(()=>import('./pages/Login'))
const NotFound = lazy(()=>import('./pages/NotFound'))
const Home = lazy(()=>import('./pages/Home'))
const HotelInfo = lazy(()=>import('./pages/HotelInfo'))
const Signup = lazy(()=>import('./pages/Signup'))
const Profile = lazy(()=>import('./pages/Profile'))

const qClient = new QueryClient();

export default function App() {
  

  return (
    <>
      <Suspense fallback={<LoadingSkeleton/>}>
        <QueryClientProvider client={qClient}> 
          <Routes>

            <Route path='/home' element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            }/>
            
            <Route path='/hotels/:slug' element={
              <ProtectedRoutes>
                <HotelInfo/>
              </ProtectedRoutes>
            }/>

              <Route path='/profile' element={
              <ProtectedRoutes>
                <Profile/>
              </ProtectedRoutes>
            }/>

            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes> 
          </QueryClientProvider> 
      </Suspense>
    </>
  )
  


}




