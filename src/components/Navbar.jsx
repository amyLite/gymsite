import React from 'react'
import { useState } from 'react'
import menu from '../assets/menu.png'
import circle from '../assets/circle.png'

const Navbar = () => {
    const [toogle, setToogle] = useState(false)
  return (
    <div className='flex flex-1 flex-row fixed top-0 z-50 w-screen'>
    

    <div className='league-spartan text-white mx-5 pt-2 flex flex-1 flex-row z-20'>burnt&nbsp;<p style={{color:"#a4ff2e"}}>.</p></div>

    
      <div className='hidden text-white md:pt-5 md:space-x-6 md:flex md:flex-1 md:flex-row 
      lg:pt-5 lg:space-x-6 lg:flex lg:flex-1 lg:flex-row text-sm font-bold' style={{marginRight:"30px", justifyContent:"flex-end"}}>
        <a href="#">Home</a>
        <a href="#">Who we are</a>
        <a href="#">Meet the team</a>
        <a href="#">Classes</a>
        <a href="#">Membership</a>
        <a href="#">Contact Us</a>
      </div>
      <div className='md:hidden lg:hidden flex flex-1 flex-row pt-3 z-20' style={{justifyContent:"flex-end", marginRight:"30px"}}>
        <button onClick={()=>setToogle(!toogle)}>
        <img style={{height:"25px"}} src={toogle?circle:menu}/>
        </button>
        
      </div>
      <div className={`${!toogle? "hidden" : "flex"} p-6 black-gradient absolute
           z-10 rounded-xl w-full h-screen`} style={{backgroundColor:'rgba(0,0,0,0.9'}}>
        <ul className='list-none flex justify-center antonio items-center mx-auto flex-col top-[100px] gap-10 text-white text-lg font-thin'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Who we are</a></li>
        <li><a href="#">Meet the team</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Membership</a></li>
        <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
