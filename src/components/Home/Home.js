import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('this item already added')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const handleRemoveItem = (tshirt) => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining)
    }

    return (
        <div className='main-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Orders
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Orders>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                >
                </Cart>
            </div>
        </div>
    );
};

export default Home;