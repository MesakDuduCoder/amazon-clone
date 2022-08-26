import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
   const[{basket, user}, dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">
          <img className='checkout__Ad' src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png" alt="ad" />
            <div>
              <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>
                {basket.map(item=>(<CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />))}
            </div>
      </div>

        <div className="checkout__right">
           <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout