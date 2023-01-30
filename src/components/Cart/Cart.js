import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Sorry you have no item !!! Please Buy at least One item</p>
    }
    else if (cart.length === 2) {
        message = <h3>congratulation for buy one more item</h3>
    }

    return (
        <div className='orders-summary'>
            <h1 className={cart.length >= 5 ? `purple` : 'black'}>Orders Summary</h1>
            <h2>Order Item : {cart.length}</h2>
            {/* display added items name */}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>remove</button>
                </p>)
            }

            {message}

            {/* {cart.length && <h4>you bought 3 items</h4>} */}

        </div >
    );
};

export default Cart;

/*
conditional rendaring
1. message sent by if else
2. tarnary operator
3.&& operator for true only
4. || false only
*/