import React, {useState,useEffect}from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import './Payment.css';
import { Link, useNavigate } from 'react-router-dom';
import{CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from './axios';
import { doc, setDoc} from "firebase/firestore";
import {db} from './firebase'



function Payment() {
    let navigate = useNavigate();
    const[{basket, user}, dispatch]=useStateValue();

    const stripe=useStripe();
    const elements = useElements();

    const[error, setError]= useState(null);
    const[disabled, setDisabled] = useState(true);
    
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const[clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{
        const getClientSecret = async()=>{
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    },[basket])

    console.log('the secret is',clientSecret)

   

    const handleChange=async (event)=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

     const handleSubmit=async ev =>{
         ev.preventDefault();
         setProcessing(true);
 const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
console.log(paymentIntent)

      try {
  
  const docRef = setDoc(doc(db,"users", user?.uid, "orders", paymentIntent.id), {
    basket: basket,
    amount: paymentIntent.amount,
    created: paymentIntent.created
  });
  console.log("Document written");
  } catch (e) {
  console.error("Error adding document: ", e);
  }

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type:'EMPTY_BASKET'
        })

        navigate('/')

    })
        
            

    }

  return (
    <div className='payment'>
       <div className="payment__container">
        <h1>Checkout(<Link to='/checkout'>{basket?.length}items</Link>)</h1>
            <div className="payment__section">
                <div className="payment__title">
                  <h3>Delivery address</h3>      
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                  <h3>Review items and delivery</h3>      
                </div>
                <div className="payment__items">
                        {basket.map(item=>(<CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />))}
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment method</h3> 
                </div>
                <div className="payment__details">
                   <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
   
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                    <p>
                                    
                                        <strong>Order Total:{value}</strong>
                                    </p>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                            
                            
                        </div>
                     </form>   
                </div>
            </div>
       </div>
    </div>
  )
}

export default Payment