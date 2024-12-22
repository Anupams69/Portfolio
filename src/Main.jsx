import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import CarouselCard from './Portfolio'




const Main = () => {
  return (

    <BrowserRouter>
         <Navbar/>
         <br />
         <br/>
         <hr style={{width:"80%"}} />         
       <Routes>

           <Route  path = "/" element ={<Home/>}/>
           <Route  path = "/about" element ={<About/>}/>
           <Route  path = "/portfolio" element ={<Portfolio/>}/>
           <Route  path = "/contact" element ={<Contact/>}/>
           <Route path="/card" element = {<CarouselCard/>}/>

          

        </Routes>
         
          
         
         
         
         
    </BrowserRouter>



    
  )
}

export default Main