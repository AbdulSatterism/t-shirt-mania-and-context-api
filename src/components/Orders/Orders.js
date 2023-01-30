import React from 'react';
import './Orders.css'

const Orders = ({ tshirt, handleAddToCart }) => {
    const { name, price, picture } = tshirt;
    return (
        <div className='cart'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Orders;