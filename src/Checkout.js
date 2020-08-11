import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();

    
    {/* ternary operator to check if basket is empty or full */}
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/1225157-gw_desk_tall-multi_ben-en-songs-1x_1594231150._CB410279486_.png" alt="dont forget to add an ad" className="checkout__ad"/>
        {/* Ternary operator to display basket items (comps) */}
                { basket?.length === 0 ? (
                    <div>
                        <h2>Shopping Basket is empty bruh</h2>
                    </div>
                ) : (
                <div>
                    <h2 className="checkout__title">Your Basket</h2>
                    <div>
                        {basket?.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    
                    </div>
                </div>
                ) }
            </div>
            <div className="checkout__right">
                <Subtotal />
                
            </div>
        </div>
    );
}
    
    export default Checkout
