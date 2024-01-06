import React from 'react';
import './Product.css';
import { useStateValue } from '../../context/StateProvider';

const Product = ({ id, title, price, rating, image }) => {

    // after reducer setup this setup 
    // get state and dispatch 
    const [_, dispatch] = useStateValue();

    function addToCart() {
        // dispatch add to cart action
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id,
                title,
                price,
                rating,
                image
            }
        });
    }

    return (
        <div className="product">
            <div className="product_info" >
                <p>{title}</p>
                <p className="product_price">
                    <strong>$</strong>
                    <span>{price}</span>
                </p>
                <div className="product_rating">
                    {Array(rating) // create a empty array 
                        .fill() // fill the undefined 
                        .map(_ => ( // traverse and print star
                            <p>☆</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="image" />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default Product;
