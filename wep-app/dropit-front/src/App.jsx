import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
import { Login } from "./components/Login"
import { Home } from "./components/Home"

import { Routes, Route } from "react-router-dom"




export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>

        

      </Routes>
    </>
  )
}
