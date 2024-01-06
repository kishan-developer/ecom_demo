import React from 'react';
import './CheckOutProduct.css';
import { useStateValue } from '../../context/StateProvider';

const CheckOutProduct = ({ id, title, image, price, rating }) => {

    const [_, dispatch] = useStateValue();
    function removeCart() {
        // despatch and action 
        // action is 'Remove_product'

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                id
            }
        })

    }

    return (
            <table>
                <tr>
                    <th>Product Image</th>
                    <th>Descreption</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Remove</th>
                </tr>
                <tr key={id}>
                    <td><img className="CheckOutProduct_image" width={200} src={image} /></td>
                    <td>{title}</td>
                    <td><small>${price}</small></td>
                    <td> <div className="checkOutProduct_rating">
                        {Array(rating).fill().map((_) => (
                            <p>☆</p>
                        ))}
                    </div></td>
                    <td><button onClick={removeCart}>Remove from cart</button></td>
                </tr>
            </table>
        

    );
}

export default CheckOutProduct;
