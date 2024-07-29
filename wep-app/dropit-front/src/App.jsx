import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
import { Login } from "./components/Login"
import { Home } from "./components/Home"


import { Routes, Route } from "react-router-dom"

import { RideBookingPanel } from "./components/RideBookingPanel"

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



export function App() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/Panel" element={<RideBookingPanel/>}/>

        

      </Routes>
      </LocalizationProvider>
    </>
  )
}
