import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js'
import{Elements} from '@stripe/react-stripe-js'


const stripePromise = loadStripe('pk_test_51LWgkwSFrDFumAraoNxnLaBtUuebe2fsIzMGbHJ2R6ae9XIB0t67lgD7WFa3kAPfs8vakuUpxFqCUN2D47tnbzyX00AOmsycBN');
function App() {
   const[{}, dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('this is user',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
          dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
    }) 
  }, [])
  
  
  return (
    <Router>
      
      <div className="app">
         <Routes>

  <Route path="/checkout" element={<><Header/><Checkout/></>}/>
   <Route path="/login" element={<Login/>}/>
   
   <Route path="/payment" element=
   {
   <>
     <Header/>
  
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
  
    </>}/>
  <Route path="/" element={<><Header/><Home/></>}/>

  </Routes>
   
    </div>
    </Router>
  );
}

export default App;
