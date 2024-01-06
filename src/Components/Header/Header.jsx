import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

const Header = () => {

    // access state to add the product in cart page after context setup
    // getting data in state / state is a object
    const [state] = useStateValue();
    console.log("state" , state);

    return (
        <div className="header">
            <div className="header_container">
                <Link to='/' >
                    <p className='logo'>
                      Home

                    </p>
                </Link>
                <div className="search_box">
                    <input type="text" placeholder='Search a product' />
                </div>
            </div>

            <div className="header_right">
                <Link to='/checkout'>
                    <div className="headerOption_basket">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span style={{color:"white"}} >{state?.cart?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Header;
