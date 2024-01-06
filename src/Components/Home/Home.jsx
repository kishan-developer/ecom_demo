import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../product/Product';

const url = 'https://fakestoreapi.com/products';

// to make a network requst to the url => fetch

// where you should use fetch => useEffect

// if you want to use one time what is use => empti dependency



function Home() {

    // step 3 create a useState()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect will run after the component mount 
    //note 2 :- data it can change when ever the components load useEffect make a fetch request it display on the ui

    // step 2 :- useEffect will reder the show the data
    useEffect(() => {
        fetchProducts();
    }, [])

    // step 1
    async function fetchProducts() {
        const response = await fetch(url);
        // convet to json
        const products = await response.json();
        // if display the data inside the network (console part)
        // note 1 :- if you want to display the data in ui where you should store the data => state

        console.log(products);
        // step 5
        // store the data inside setProducts 
        setProducts(products);
        // once get the data setloading is false 
        setLoading(false);
        // aftet this line refese the page show Loding.. text and get the

    }

    // step 4 
    if (loading) {
        return <h1>Loading....</h1>
    }




    return (
        <div className="home">
            <div className="home_rows">
                {/* Products is a state */}

                {/* step 6  */}
                {products.map(product  => (
                    //  gettting data usign key is product id
                    // padding data as a props
                    <div className='home_row' >

                        {/* step 7 ng props  */}
                        {/* // data passing inside ins components usi */}
                        <Product
                            //     {/* 1 way pass the data  */}
                            // {/* {...product} => usig this pass the all the product using sprade */}

                            // {/* 2nd way pass the data  */}
                            // passing the data as a prop after this go to product page and destructe the props and use it
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            rating={Math.round(product.rating.rate)}
                            image={product.image}


                        />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home


// after set teh data go to add to cart using useReducer + context api
// follow this steps
// context api + useReducer
// useReducer takes reducer funtion and initial state

// useReducer() what does take   (reduce function , initial state)

// src/reducer /reduver.js


