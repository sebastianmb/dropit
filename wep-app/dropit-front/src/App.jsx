import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
import { Login } from "./components/Login"
import { Home } from "./components/Home"
import SignUp from "./components/SignUp"

import { Routes, Route } from "react-router-dom"

import { RideBookingPanel } from "./components/RideBookingPanel"





export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/Panel" element={<RideBookingPanel/>}/>

        

      </Routes>
    </>
  )
}
