import React from 'react'

function CheckoutProduct(id, title, image, price, rating) {

    return (
        <div className="checkoutProduct">
            <img src={image} alt="image of product"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p className="product__star">⭐</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
