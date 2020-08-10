import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'Add_to_basket',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p className="product__star">⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="image"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
