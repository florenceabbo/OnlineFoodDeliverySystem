import React, {useRef, useState} from 'react';
// import './LoginSignUp.css';
import { Login } from './login';
import { SignUpForm } from './Authprovider';



 export const LoginSignup = () => {
    //defining state to ensure that if login or signup is clicked, its visible.
    const [login, setLogin] = useState(true);
    
    //creating reference for loginSignup
    const loginSignupRef = useRef(null);

    const handleClick = () => {
        setLogin(!login);

        //useRef helps as to perform DOM manuplation.
        loginSignupRef.current.classList.toggle("active");
    };
  return (
    <div className='body'>
    <div className='container' ref={loginSignupRef}>
     <Login/>
     <div className='side-div'>
      <div className='up'>
        <h2>WELCOME</h2>
        <h4>Our dear customers!</h4>
      </div>
        <button type='button' onClick={handleClick}>
            {" "}
            {login ? "Signup" : "Login"}
        </button>
     </div>
     <SignUpForm/> 
    </div>
    </div>
  )
}

