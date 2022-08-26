import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';




function Login() {
  let navigate = useNavigate();
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
   
    const signIn = e =>{
        e.preventDefault();
        
        signInWithEmailAndPassword(auth,email, password)
        .then((auth) => {
        // Signed in
             console.log(auth)
        navigate('/')
        // ...
        })
        .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

 createUserWithEmailAndPassword(auth,email, password)
  .then((auth )=> {
   
        navigate('/')
    
    console.log(auth)
})
  .catch(error => console.log(error));
  
    }

  return (
    <div className='login'>
      <Link to='/'>  <img className='login__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG24.png' alt="" /></Link>
       <div className="login__container">
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button onClick={signIn} className='login__signInButton' type='submit'>Sign In</button>
        </form>
        <p>By signing in you agree to Amazon's Clone Conditons of Use & Sale. Please see
            our Privacy Notice, ou Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
    </div>
    </div>
 
  )
}

export default Login