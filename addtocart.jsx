import React, { useState } from 'react';

const AddToCart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
            <button onClick={() => alert(`Added ${quantity} items to cart!`)}>Add to Cart</button>
        </div>
    );
};

export default AddToCart;
