import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove from basket
        dispatch({
            type: 'remove_from_basket',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="image of product"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p className="product__star">⭐</p>
                        ))
                    }
                </div>
                <button className="btn-amz" onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
        //could add a "buy it again" section
    )
}

export default CheckoutProduct
