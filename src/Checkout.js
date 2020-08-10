import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';

function Checkout() {
    const [{basket}] = useStateValue();

    {/* ternary operator to check if basket is empty or full */}
    return (
        <div className="checkout">
            <img src="" alt="" className="checkout__ad"/>
            <h1>make an ad image</h1>
    {/* may need to add ? */}
            { basket.length === 0 ? (
                <div>
                    <h2>Shopping Basket is empty bruh</h2>
                </div>
            ) : (
            <div>
                <h2>Your Shopping Basket</h2>
                <h2 className="checkout__title">Your Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
                ))}

            </div>
            ) }
        </div>
    );
}
    
    export default Checkout
