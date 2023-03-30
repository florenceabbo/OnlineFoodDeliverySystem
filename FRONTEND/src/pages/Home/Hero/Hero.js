import React,{useState} from 'react'
import { NavLink } from "react-router-dom";

import './Hero.css'

const Hero = () => {
  const [click, setClick] = useState(false);
  

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to <br></br> Royal Deliveries
            </h1>

            <p className='text-white'>The best restaurant available in Kamokya</p>

            <p className='text-white'>
            Order online or call <span className='special'>(+256)723-4567</span>
            </p>
          <br></br>
          <br></br>

            <li onClick={handleClick}>
            <NavLink className="nav-link" to="/menu">
            <button className='order'>Order now</button>
              </NavLink>
              
            </li>
        </div>
    </div>
  )
}

export default Hero