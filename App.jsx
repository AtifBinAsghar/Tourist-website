import React from "react"
import { Routes,Route } from "react-router-dom"
import { Container } from "react-bootstrap"



import Home from "./pages/Home"
import Packages from "./pages/Packages"
import About from "./pages/About"
import Login from "./pages/Login"
import NavBar from "./components/NavBar"
// import TourData from "./data/TourData"
import ArticleData from "./data/ArticleData"
import DetailsTour from "./pages/DetailsTour"


function App() {

   return (
    
   <>
   
<NavBar/>


    <Container className="mb-4">
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/details/:id" element={<DetailsTour/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
 
     
 </Container>
 </>

  )
  
}

export default App
