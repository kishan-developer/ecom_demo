import React from 'react';
import '../checkout/Checkout.css';
import { useStateValue } from '../../context/StateProvider';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';

const CheckOut = () => {
    // getting the data here 
    // using useStateValue 
    const [{ cart }] = useStateValue();
    // console.log('cart', cart);

    return (
        <div className="checkout">
            <div className="checkout_left">
                {cart?.length == 0 ? (
                    // if cart length is 0 
                    <div>
                        <h1>Your Shopping cart is empty</h1>
                        <p>
                            You have no items left. To buy just click on 'Add to cart' next to the item.
                        </p>
                    </div>
                )
                    :
                    (
                        <div>
                            {cart?.map(({ id, title, image, price, rating }) => (
                                <CheckOutProduct
                                    key={id}
                                    id={id}
                                    title={title}
                                    image={image}
                                    price={price}
                                    rating={rating}
                                />
                            ))
                            }
                        </div>
                    )}
            </div>
            {/* <h2>checkout</h2> */}
        </div>
    );
}

export default CheckOut;
